**background.js**
```javascript
let extensionStatus = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'getExtensionStatus') {
    sendResponse({ status: extensionStatus });
  } else if (request.action === 'setExtensionStatus') {
    extensionStatus = request.status;
  }
});

chrome.browserAction.onClicked.addListener(function(tab) {
  extensionStatus = !extensionStatus;
  chrome.tabs.executeScript(tab.id, { file: 'contentScript.js' });
});