
function autoClickRadiobuttons() {
  document.querySelectorAll('input[type="radio"]').forEach((radio, index) => {
    if (index % 2 !== 0) {
      radio.click();
    }
  });
}

function selectOkOptions() {
  document.querySelectorAll('option[name="ok"]').forEach((option) => {
    option.selected = true;
  });
}
function selectOkOptions() {
  document.querySelectorAll('option[name="ok"]').forEach((option) => {
    option.selected = true;
  });
}

chrome.runtime.sendMessage({ action: 'getExtensionStatus' }, function(response) {
  if (response.status) {
    autoClickRadiobuttons();
    selectOkOptions();
  }
});