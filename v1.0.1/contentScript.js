function autoClickRadiobuttons() {
    document.querySelectorAll('input[type="radio"]').forEach((radio, index) => {
      if (index % 2 !== 0) {
        radio.click();
      }
    });
  }
  // name option "OK"
  // function selectOkOptions() {
  //   document.querySelectorAll('option[name="ok"]').forEach((option) => {
  //     option.selected = true;
  //   });
  // }

  // name option "value"
  function selectOkOptions() {
    document.querySelectorAll('option[value="4"]').forEach((option) => {
      option.selected = true;
    });
  }
  
  autoClickRadiobuttons();
  selectOkOptions();

