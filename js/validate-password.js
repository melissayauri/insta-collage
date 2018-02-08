$(document).ready(() =>{
  cl = console.log;
  var validatePassword = false;

  isValidPassword = (password) => {
    let regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,15}[^'\s]/;
    return regPassword.test(password);
  };
  
  // validate email
  functionValidatePassword = (password, inputPassword)=>{
    if (inputPassword != 0 && isValidPassword(password)) {
      inputPassword.addClass('success');
      inputPassword.removeClass('error');
      validatePassword = true;
      cl(validatePassword);
    } else {
      inputPassword.addClass('error');
      inputPassword.removeClass('success');
      validatePassword = false;
      cl(validatePassword);
    }
  };
});