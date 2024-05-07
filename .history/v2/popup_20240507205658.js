
document.addEventListener('DOMContentLoaded', function() {
  const activateCheckbox = document.getElementById('activateCheckbox');
  chrome.runtime.sendMessage({ action: 'getExtensionStatus' }, function(response) {
    activateCheckbox.checked = response.status;
  });

  activateCheckbox.addEventListener('change', function() {
    chrome.runtime.sendMessage({ action: 'setExtensionStatus', status: activateCheckbox.checked });
  });
});