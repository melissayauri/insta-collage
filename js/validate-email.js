$(document).ready(() =>{
  cl = console.log;
  var validateEmail = false;

  isValidEmailAddress = (emailAddress) => {
    let regEmail = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
    return regEmail.test(emailAddress);
  };

  // validate email
  functionValidateEmail = (email, inputEmail)=>{
    if (email != 0 && isValidEmailAddress(email)) {
      inputEmail.addClass('success');
      inputEmail.removeClass('error');
      validateEmail = true;
      cl(validateEmail);
    } else {
      inputEmail.addClass('error');
      inputEmail.removeClass('success');
      validateEmail = false;
      cl(validateEmail);
    }
  };
});
