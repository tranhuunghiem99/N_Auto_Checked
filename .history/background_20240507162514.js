
function autoClickRadiobuttons() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: `
        Array.prototype.forEach.call(document.querySelectorAll('input[type="radio"]'), function(radio, index) {
          if (index % 2 !== 0) {
            radio.click();
          }
        });
      `,
    });
  });
}

chrome.runtime.onStartup.addListener(autoClickRadiobuttons);
// chrome.runtime.onStartup.addListener(function() {
//   chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//     chrome.tabs.sendMessage(tabs[0].id, { action: "autoClickRadiobuttons" });
//   });
// });

chrome.runtime.onStartup.addListener(function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "autoClickRadiobuttonsAndSelectOptions" });
  });
});