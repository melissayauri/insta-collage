$(document).ready(() =>{
  let $auth = firebase.auth();

  isValidEmailAddress = (emailAddress) => {
    let regEmail = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
    return regEmail.test(emailAddress);
  };

  // validate email
  validateEmail = (email)=>{
    

  };

  let $btnSignup = $('#btn-signup');

  $btnSignup.on('click', (event) => {
    let $inputEmail = $('#inputUser');
    let $inputPassword = $('#nputPassword');
    let $email = $inputEmail.val();
    let $pass = $inputPassword.val();
      
    let $promise = $auth.createUserWithEmailAndPassword($email, $pass);
    $promise.catch(event => alert(event.message));
      
    window.location.href = '../index.html';
  });
});
