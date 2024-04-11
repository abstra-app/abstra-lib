from .apps.cloud import get_cloud_app  # USED ON CLOUD SERVER - Deprecated in 2.9.0
from .apps.local import get_local_app

__all__ = ["get_local_app", "get_cloud_app"]
