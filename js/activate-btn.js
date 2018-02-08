$(document).ready(() => {
  cl = console.log;
  activeButton = (btn) => {
    if (validateEmail === true && validatePassword === true) {
      btn.removeAttr('disabled');
    } else {
      btn.attr('disabled', 'disabled');
    }
  };
});