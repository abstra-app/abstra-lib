import threading
import time
from collections import deque
from typing import Optional, Union
from uuid import uuid4

import flask_sock
import simplejson

from abstra_internals.controllers.execution.connection_protocol import (
    ConnectionProtocol,
)
from abstra_internals.logger import AbstraLogger
from abstra_internals.utils.ai import AiWs
from abstra_internals.utils.threads import ExceptionAwareThread


class MockWS:
    def __init__(self):
        self.browser_messages = deque([])
        self.python_messages = deque([])
        self.closed = False

    def send(self, python_message):
        self.python_messages.append(simplejson.loads(python_message))

    def receive(self, timeout: Optional[float] = None):
        if self.closed:
            raise flask_sock.ConnectionClosed()
        if len(self.browser_messages) == 0:
            raise ValueError("No messages to receive")
        return simplejson.dumps(self.browser_messages.popleft())

    def add_browser_message(self, message):
        if not self.closed:
            self.browser_messages.append(message)

    def close(self):
        self.closed = True
        self.browser_messages.clear()
        self.python_messages.clear()


WsLike = Union[flask_sock.Server, MockWS, AiWs]


def bind_ws_with_connection(ws: WsLike, conn: ConnectionProtocol, block: bool):
    """
    Binds a WebSocket to a Connection (RabbitMQ or local pipe) for bidirectional communication.

    Creates two threads:
    - server_loop: WebSocket -> Connection (browser messages to worker)
    - client_loop: Connection -> WebSocket (worker responses to browser)

    Uses a shared shutdown_event to coordinate graceful shutdown of both threads.
    """
    # Unique ID for this binding (for logging)
    binding_id = str(uuid4())[:8]

    # Shared event to coordinate shutdown between threads
    shutdown_event = threading.Event()

    # Track if cleanup was already done
    cleanup_done = threading.Event()
    cleanup_lock = threading.Lock()

    def do_cleanup(reason: str):
        """Ensures cleanup is done exactly once"""
        with cleanup_lock:
            if cleanup_done.is_set():
                return
            cleanup_done.set()

        AbstraLogger.info(f"[WS:{binding_id}] Cleanup started (reason={reason})")

        # Signal both threads to stop
        shutdown_event.set()

        # Close WebSocket
        try:
            ws.close()
            AbstraLogger.debug(f"[WS:{binding_id}] WebSocket closed")
        except Exception as e:
            AbstraLogger.debug(f"[WS:{binding_id}] WebSocket close error: {e}")

        # Close Connection (RabbitMQ)
        try:
            conn.close()
            AbstraLogger.debug(f"[WS:{binding_id}] Connection closed")
        except Exception as e:
            AbstraLogger.debug(f"[WS:{binding_id}] Connection close error: {e}")

        AbstraLogger.info(f"[WS:{binding_id}] Cleanup completed")

    def server_loop():
        """Receives messages from WebSocket and sends to Connection"""
        AbstraLogger.info(f"[WS:{binding_id}] server_loop started")

        while not shutdown_event.is_set():
            try:
                # Receive from WebSocket (browser)
                # Note: flask_sock.Server.receive() is blocking but will raise
                # ConnectionClosed when the WebSocket is closed
                message = ws.receive()

                if shutdown_event.is_set():
                    break

                # Send to Connection (RabbitMQ -> worker)
                conn.send(message)
                AbstraLogger.debug(f"[WS:{binding_id}] WS->Conn message sent")

            except flask_sock.ConnectionClosed:
                AbstraLogger.info(f"[WS:{binding_id}] WebSocket closed by client")
                # Send kill message to worker before closing
                try:
                    if not shutdown_event.is_set():
                        conn.send('{"type": "kill"}')
                        AbstraLogger.debug(
                            f"[WS:{binding_id}] Kill message sent to worker"
                        )
                except Exception as e:
                    AbstraLogger.debug(
                        f"[WS:{binding_id}] Failed to send kill message: {e}"
                    )
                do_cleanup("websocket_closed_by_client")
                break

            except ValueError:
                # MockWS raises ValueError when no messages available
                if shutdown_event.is_set():
                    break
                time.sleep(0.01)
                continue

            except (EOFError, BrokenPipeError, ConnectionResetError, OSError) as e:
                AbstraLogger.warning(
                    f"[WS:{binding_id}] Connection error in server_loop: {e}"
                )
                do_cleanup(f"connection_error:{type(e).__name__}")
                break

            except Exception as e:
                AbstraLogger.error(
                    f"[WS:{binding_id}] Unexpected error in server_loop: {e}"
                )
                do_cleanup(f"unexpected_error:{type(e).__name__}")
                break

        AbstraLogger.info(f"[WS:{binding_id}] server_loop ended")

    def client_loop():
        """Receives messages from Connection and sends to WebSocket"""
        AbstraLogger.info(f"[WS:{binding_id}] client_loop started")

        # Polling interval for checking shutdown_event
        poll_timeout = 1.0

        while not shutdown_event.is_set():
            try:
                # Check if connection has data available (non-blocking check)
                has_data = conn.poll(timeout=poll_timeout)

                if shutdown_event.is_set():
                    break

                if not has_data:
                    # No data, check if connection is still alive
                    if hasattr(conn, "closed") and conn.closed:
                        AbstraLogger.info(
                            f"[WS:{binding_id}] Connection closed detected in poll"
                        )
                        do_cleanup("connection_closed_detected")
                        break
                    continue

                # Receive from Connection (worker response via RabbitMQ)
                message = conn.recv()

                if shutdown_event.is_set():
                    break

                # Send to WebSocket (browser)
                ws.send(message)
                AbstraLogger.debug(f"[WS:{binding_id}] Conn->WS message sent")

            except TimeoutError:
                # poll() timeout - this is normal, just continue
                # Note: TimeoutError is a subclass of OSError, so must be caught first
                if shutdown_event.is_set():
                    break
                continue

            except (EOFError, BrokenPipeError, ConnectionResetError, OSError) as e:
                AbstraLogger.info(
                    f"[WS:{binding_id}] Connection closed in client_loop: {e}"
                )
                do_cleanup(f"connection_closed:{type(e).__name__}")
                break

            except flask_sock.ConnectionClosed:
                AbstraLogger.info(f"[WS:{binding_id}] WebSocket closed while sending")
                do_cleanup("websocket_closed_while_sending")
                break

            except Exception as e:
                AbstraLogger.error(
                    f"[WS:{binding_id}] Unexpected error in client_loop: {e}"
                )
                do_cleanup(f"unexpected_error:{type(e).__name__}")
                break

        AbstraLogger.info(f"[WS:{binding_id}] client_loop ended")

    AbstraLogger.info(f"[WS:{binding_id}] bind_ws_with_connection starting")

    server_thread = ExceptionAwareThread(
        target=server_loop, daemon=True, name=f"WS-Server-{binding_id}"
    )
    server_thread.start()

    client_thread = ExceptionAwareThread(
        target=client_loop, daemon=True, name=f"WS-Client-{binding_id}"
    )
    client_thread.start()

    if block:
        # Wait for threads to finish using join() - deterministic approach
        # When one thread finishes (due to connection close), it triggers cleanup
        # which closes both ws and conn, causing the other thread to also finish

        max_wait = 7200  # 2 hours max (same as execution timeout)

        # Wait for server_thread first (handles WebSocket receive)
        # This is typically the one that detects client disconnect
        server_thread.join(timeout=max_wait)

        if server_thread.is_alive():
            # Timeout reached - force cleanup
            AbstraLogger.warning(
                f"[WS:{binding_id}] server_thread timeout after {max_wait}s, forcing cleanup"
            )
            do_cleanup("server_thread_timeout")

        # Now wait for client_thread
        # After cleanup, conn.poll() will detect closed connection and exit
        # Use shorter timeout since cleanup already happened
        client_thread.join(timeout=5.0)

        if client_thread.is_alive():
            AbstraLogger.warning(
                f"[WS:{binding_id}] client_thread did not finish after cleanup"
            )
            # Force cleanup again in case it wasn't done
            do_cleanup("client_thread_stuck")
            # Final attempt to join
            client_thread.join(timeout=2.0)

        if server_thread.is_alive() or client_thread.is_alive():
            AbstraLogger.error(
                f"[WS:{binding_id}] Threads still alive after cleanup - "
                f"server={server_thread.is_alive()}, client={client_thread.is_alive()}"
            )
        else:
            AbstraLogger.info(f"[WS:{binding_id}] Both threads finished")

        AbstraLogger.info(f"[WS:{binding_id}] bind_ws_with_connection completed")
