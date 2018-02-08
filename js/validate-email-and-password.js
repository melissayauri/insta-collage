$(document).ready(() =>{
  cl = console.log;
  var validateEmail = false;

  isValidEmailAddress = (emailAddress) => {
    let regEmail = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
    return regEmail.test(emailAddress);
  };

  // validate email
  functionValidateEmail = (email,inputEmail)=>{ 
    if(email != 0 && isValidEmailAddress(email)){
      inputEmail.addClass('success');
      inputEmail.removeClass('error');
      validateEmail = true;
      cl(validateEmail);
    } else{
      inputEmail.addClass('error');
      inputEmail.removeClass('success');
      validateEmail = false;
      cl(validateEmail);
    }
  };

  var validatePassword = false;

    isValidPassword = (password) => {
      let regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,15}[^'\s]/;
      return regPassword.test(password);
    };
  
    // validate password
    functionValidatePassword = (password,inputPassword) => {
      if(inputPassword != 0 && isValidPassword(password)){
        inputPassword.addClass('success');
        inputPassword.removeClass('error');
        validatePassword = true;
        cl(validatePassword);
      } else{
        inputPassword.addClass('error');
        inputPassword.removeClass('success');
        validatePassword = false;
        cl(validatePassword);
      }
    };

    // activate Button
    activeButton = (btn) =>{ 
      cl('entre');
      if(validateEmail === true &&  validatePassword === true){
        btn.removeAttr('disabled');
      }else {
        btn.attr('disabled', 'disabled');
      }
    };
});
