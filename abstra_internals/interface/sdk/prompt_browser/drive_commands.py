from typing import Any, Dict, List, Optional, Type, Union

from pydantic import BaseModel, Field

commands: List[Type[BaseModel]] = []


def add_to_commands(cls: Type[BaseModel]) -> Type[BaseModel]:
    """Decorator to add a command class to the commands list."""
    if cls not in commands:  # Prevent duplicates
        commands.append(cls)
    return cls


# @add_to_commands
class newSession(BaseModel):
    """Creates a new WebDriver session with the desired capabilities."""

    capabilities: Optional[Dict[str, Any]] = Field(
        None, description="The desired capabilities for the session"
    )


# @add_to_commands
class deleteSession(BaseModel):
    """Deletes the current WebDriver session."""

    pass


@add_to_commands
class newWindow(BaseModel):
    """Opens a new window."""

    type: Optional[str] = Field(
        "tab", description="The type of window to open (tab or window)"
    )


@add_to_commands
class close(BaseModel):
    """Closes the current window."""

    pass


@add_to_commands
class quit(BaseModel):
    """Quits the driver and closes every associated window."""

    pass


@add_to_commands
class get(BaseModel):
    """Navigate to a URL (use this to go to https://abstra.io)"""

    url: str = Field(..., description="The URL to navigate to")


@add_to_commands
class goBack(BaseModel):
    """Goes one step backward in the browser history."""

    pass


@add_to_commands
class goForward(BaseModel):
    """Goes one step forward in the browser history."""

    pass


@add_to_commands
class refresh(BaseModel):
    """Refreshes the current page."""

    pass


@add_to_commands
class addCookie(BaseModel):
    """Adds a cookie to your current session."""

    cookie: Dict[str, Any] = Field(
        ...,
        description="A dictionary with required keys 'name' and 'value'; optional keys 'path', 'domain', 'secure', 'httpOnly', 'expiry', 'sameSite'",
    )


@add_to_commands
class getCookie(BaseModel):
    """Get a single cookie by name."""

    name: str = Field(..., description="The name of the cookie to retrieve")


@add_to_commands
class getCookies(BaseModel):
    """Returns a set of dictionaries, corresponding to cookies visible in the current session."""

    pass


@add_to_commands
class deleteCookie(BaseModel):
    """Deletes a single cookie with the given name."""

    name: str = Field(..., description="The name of the cookie to delete")


@add_to_commands
class deleteAllCookies(BaseModel):
    """Delete all cookies in the scope of the session."""

    pass


@add_to_commands
class findElement(BaseModel):
    """Find a single element on the page using various locator strategies"""

    using: str = Field(
        ..., description="The locator strategy (id, xpath, css selector, etc.)"
    )
    value: str = Field(..., description="The locator value")


@add_to_commands
class findElements(BaseModel):
    """Find multiple elements matching criteria"""

    using: str = Field(
        ..., description="The locator strategy (id, xpath, css selector, etc.)"
    )
    value: str = Field(..., description="The locator value")


@add_to_commands
class findChildElement(BaseModel):
    """Find a child element from a parent element."""

    element_id: str = Field(..., description="The ID of the parent element")
    using: str = Field(..., description="The locator strategy")
    value: str = Field(..., description="The locator value")


@add_to_commands
class findChildElements(BaseModel):
    """Find child elements from a parent element."""

    element_id: str = Field(..., description="The ID of the parent element")
    using: str = Field(..., description="The locator strategy")
    value: str = Field(..., description="The locator value")


@add_to_commands
class clearElement(BaseModel):
    """Clears the text from an input element."""

    element_id: str = Field(..., description="The ID of the element to clear")


@add_to_commands
class clickElement(BaseModel):
    """Click on an element"""

    element_id: str = Field(..., description="The ID of the element to click")


@add_to_commands
class sendKeysToElement(BaseModel):
    """Type text into an element"""

    element_id: str = Field(..., description="The ID of the element to send keys to")
    text: str = Field(..., description="The text to type")


@add_to_commands
class w3cGetCurrentWindowHandle(BaseModel):
    """Returns the handle of the current window."""

    pass


@add_to_commands
class w3cGetWindowHandles(BaseModel):
    """Returns the handles of all windows within the current session."""

    pass


@add_to_commands
class setWindowRect(BaseModel):
    """Sets the x, y coordinates of the window as well as height and width of the current window."""

    x: Optional[int] = Field(None, description="The x coordinate")
    y: Optional[int] = Field(None, description="The y coordinate")
    width: Optional[int] = Field(None, description="The window width")
    height: Optional[int] = Field(None, description="The window height")


@add_to_commands
class getWindowRect(BaseModel):
    """Gets the x, y coordinates of the window as well as height and width of the current window."""

    pass


@add_to_commands
class switchToWindow(BaseModel):
    """Switches to the given window handle."""

    handle: str = Field(..., description="The window handle to switch to")


@add_to_commands
class switchToFrame(BaseModel):
    """Switches to the given frame."""

    id: Union[str, int, None] = Field(
        ..., description="The frame identifier (name, id, index, or None for default)"
    )


@add_to_commands
class switchToParentFrame(BaseModel):
    """Switches to the parent frame."""

    pass


@add_to_commands
class w3cGetActiveElement(BaseModel):
    """Returns the element with focus, or BODY if nothing has focus."""

    pass


@add_to_commands
class getCurrentUrl(BaseModel):
    """Gets the URL of the current page."""

    pass


@add_to_commands
class getPageSource(BaseModel):
    """Get the HTML source of the current page (useful for searching text content)"""

    pass


@add_to_commands
class getTitle(BaseModel):
    """Returns the title of the current page."""

    pass


@add_to_commands
class w3cExecuteScript(BaseModel):
    """Execute JavaScript to extract information from the page"""

    script: str = Field(..., description="The JavaScript to execute")
    args: Optional[List[Any]] = Field([], description="Arguments for the JavaScript")


@add_to_commands
class w3cExecuteScriptAsync(BaseModel):
    """Asynchronously executes JavaScript in the current window/frame."""

    script: str = Field(..., description="The JavaScript to execute")
    args: Optional[List[Any]] = Field([], description="Arguments for the JavaScript")


@add_to_commands
class getElementText(BaseModel):
    """Gets the text of the element."""

    element_id: str = Field(..., description="The ID of the element")


@add_to_commands
class getElementTagName(BaseModel):
    """Gets the tag name of the element."""

    element_id: str = Field(..., description="The ID of the element")


@add_to_commands
class isElementSelected(BaseModel):
    """Returns whether the element is selected."""

    element_id: str = Field(..., description="The ID of the element")


@add_to_commands
class isElementEnabled(BaseModel):
    """Returns whether the element is enabled."""

    element_id: str = Field(..., description="The ID of the element")


@add_to_commands
class getElementRect(BaseModel):
    """Gets the size and location of the element."""

    element_id: str = Field(..., description="The ID of the element")


@add_to_commands
class getElementAttribute(BaseModel):
    """Gets the value of an element's attribute."""

    element_id: str = Field(..., description="The ID of the element")
    name: str = Field(..., description="The name of the attribute")


@add_to_commands
class getElementProperty(BaseModel):
    """Gets the value of an element's property."""

    element_id: str = Field(..., description="The ID of the element")
    name: str = Field(..., description="The name of the property")


@add_to_commands
class getElementValueOfCssProperty(BaseModel):
    """Gets the value of a CSS property of an element."""

    element_id: str = Field(..., description="The ID of the element")
    property_name: str = Field(..., description="The name of the CSS property")


@add_to_commands
class getElementAriaRole(BaseModel):
    """Gets the computed WAI-ARIA role of an element."""

    element_id: str = Field(..., description="The ID of the element")


@add_to_commands
class getElementAriaLabel(BaseModel):
    """Gets the computed WAI-ARIA label of an element."""

    element_id: str = Field(..., description="The ID of the element")


@add_to_commands
class screenshot(BaseModel):
    """Take a screenshot of the page"""

    pass


@add_to_commands
class elementScreenshot(BaseModel):
    """Takes a screenshot of the given element."""

    element_id: str = Field(..., description="The ID of the element")


@add_to_commands
class executeAsyncScript(BaseModel):
    """Asynchronously executes JavaScript in the current window/frame."""

    script: str = Field(..., description="The JavaScript to execute")
    args: Optional[List[Any]] = Field([], description="Arguments for the JavaScript")


@add_to_commands
class setTimeouts(BaseModel):
    """Sets timeout values for the session."""

    implicit: Optional[int] = Field(
        None, description="Implicit wait timeout in milliseconds"
    )
    pageLoad: Optional[int] = Field(
        None, description="Page load timeout in milliseconds"
    )
    script: Optional[int] = Field(None, description="Script timeout in milliseconds")


@add_to_commands
class getTimeouts(BaseModel):
    """Gets all the timeouts that have been set on the current session."""

    pass


@add_to_commands
class w3cMaximizeWindow(BaseModel):
    """Maximizes the current window."""

    pass


@add_to_commands
class getLog(BaseModel):
    """Gets the log for a given log type."""

    type: str = Field(..., description="The type of log to retrieve")


@add_to_commands
class getAvailableLogTypes(BaseModel):
    """Gets a list of the available log types."""

    pass


@add_to_commands
class fullscreenWindow(BaseModel):
    """Invokes the window manager-specific 'full screen' operation."""

    pass


@add_to_commands
class minimizeWindow(BaseModel):
    """Invokes the window manager-specific 'minimize' operation."""

    pass


@add_to_commands
class printPage(BaseModel):
    """Takes PDF of the current page."""

    orientation: Optional[str] = Field(None, description="Page orientation")
    scale: Optional[float] = Field(None, description="Scale of the page")
    background: Optional[bool] = Field(None, description="Include background graphics")
    width: Optional[float] = Field(None, description="Paper width")
    height: Optional[float] = Field(None, description="Paper height")
    top: Optional[float] = Field(None, description="Top margin")
    bottom: Optional[float] = Field(None, description="Bottom margin")
    left: Optional[float] = Field(None, description="Left margin")
    right: Optional[float] = Field(None, description="Right margin")
    shrinkToFit: Optional[bool] = Field(None, description="Shrink to fit")
    pageRanges: Optional[List[str]] = Field(None, description="Page ranges")


@add_to_commands
class w3cDismissAlert(BaseModel):
    """Dismisses the active alert."""

    pass


@add_to_commands
class w3cAcceptAlert(BaseModel):
    """Accepts the active alert."""

    pass


@add_to_commands
class w3cSetAlertValue(BaseModel):
    """Sets the text value of the active alert."""

    text: str = Field(..., description="The text to enter in the alert")


@add_to_commands
class w3cGetAlertText(BaseModel):
    """Gets the text of the active alert."""

    pass


@add_to_commands
class actions(BaseModel):
    """Performs a sequence of actions."""

    actions: List[Dict[str, Any]] = Field(..., description="The actions to perform")


@add_to_commands
class clearActionState(BaseModel):
    """Clears the state of input sources."""

    pass


@add_to_commands
class setScreenOrientation(BaseModel):
    """Sets the current orientation of the device."""

    orientation: str = Field(
        ..., description="The orientation to set (LANDSCAPE or PORTRAIT)"
    )


@add_to_commands
class getScreenOrientation(BaseModel):
    """Gets the current orientation of the device."""

    pass


@add_to_commands
class getNetworkConnection(BaseModel):
    """Gets the current network connection."""

    pass


@add_to_commands
class setNetworkConnection(BaseModel):
    """Sets the network connection."""

    parameters: Dict[str, Any] = Field(..., description="Network connection parameters")


@add_to_commands
class getCurrentContextHandle(BaseModel):
    """Gets the current context handle."""

    pass


@add_to_commands
class getContextHandles(BaseModel):
    """Gets all available context handles."""

    pass


@add_to_commands
class switchToContext(BaseModel):
    """Switches to the given context."""

    name: str = Field(..., description="The context name to switch to")


@add_to_commands
class getShadowRoot(BaseModel):
    """Gets the shadow root of an element."""

    element_id: str = Field(..., description="The ID of the element")


@add_to_commands
class findElementFromShadowRoot(BaseModel):
    """Find an element from a shadow root."""

    shadow_id: str = Field(..., description="The ID of the shadow root")
    using: str = Field(..., description="The locator strategy")
    value: str = Field(..., description="The locator value")


@add_to_commands
class findElementsFromShadowRoot(BaseModel):
    """Find elements from a shadow root."""

    shadow_id: str = Field(..., description="The ID of the shadow root")
    using: str = Field(..., description="The locator strategy")
    value: str = Field(..., description="The locator value")


@add_to_commands
class addVirtualAuthenticator(BaseModel):
    """Adds a virtual authenticator with the given options."""

    protocol: str = Field(..., description="The protocol (ctap1/u2f or ctap2)")
    transport: str = Field(..., description="The transport method")
    hasResidentKey: Optional[bool] = Field(
        None, description="Whether the authenticator supports resident keys"
    )
    hasUserVerification: Optional[bool] = Field(
        None, description="Whether the authenticator supports user verification"
    )
    isUserConsenting: Optional[bool] = Field(
        None, description="Whether the user is consenting"
    )
    isUserVerified: Optional[bool] = Field(
        None, description="Whether the user is verified"
    )


@add_to_commands
class removeVirtualAuthenticator(BaseModel):
    """Removes a previously added virtual authenticator."""

    authenticatorId: str = Field(
        ..., description="The ID of the authenticator to remove"
    )


@add_to_commands
class addCredential(BaseModel):
    """Injects a credential into the authenticator."""

    authenticatorId: str = Field(..., description="The ID of the authenticator")
    credentialId: str = Field(..., description="The credential ID")
    isResidentCredential: bool = Field(
        ..., description="Whether the credential is resident"
    )
    rpId: str = Field(..., description="The relying party ID")
    privateKey: str = Field(..., description="The private key")
    userHandle: Optional[str] = Field(None, description="The user handle")
    signCount: Optional[int] = Field(None, description="The signature count")


@add_to_commands
class getCredentials(BaseModel):
    """Returns the list of credentials owned by the authenticator."""

    authenticatorId: str = Field(..., description="The ID of the authenticator")


@add_to_commands
class removeCredential(BaseModel):
    """Removes a credential from the authenticator."""

    authenticatorId: str = Field(..., description="The ID of the authenticator")
    credentialId: str = Field(..., description="The credential ID to remove")


@add_to_commands
class removeAllCredentials(BaseModel):
    """Removes all credentials from the authenticator."""

    authenticatorId: str = Field(..., description="The ID of the authenticator")


@add_to_commands
class setUserVerified(BaseModel):
    """Sets whether the authenticator will simulate success or fail on user verification."""

    authenticatorId: str = Field(..., description="The ID of the authenticator")
    isUserVerified: bool = Field(..., description="Whether the user is verified")


@add_to_commands
class uploadFile(BaseModel):
    """Uploads a file to the remote server."""

    file: str = Field(..., description="The base64-encoded file content")


@add_to_commands
class getDownloadableFiles(BaseModel):
    """Retrieves the downloadable files as a map of file names and their corresponding URLs."""

    pass


@add_to_commands
class downloadFile(BaseModel):
    """Downloads a file with the specified file name to the target directory."""

    name: str = Field(..., description="The name of the file to download")


@add_to_commands
class deleteDownloadableFiles(BaseModel):
    """Deletes all downloadable files."""

    pass
    pass
