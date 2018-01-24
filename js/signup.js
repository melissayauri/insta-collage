$(document).ready(() =>{
  alert('Tu Password debe contener letras mayusculas y minuscula, 2 cacteres especial y numeros')
  cl = console.log;

  let $auth = firebase.auth();

  let $btnSignup = $('#btn-signup');

  let $inputEmail = $('#inputUser');
  let $inputPassword = $('#inputPassword');
  let $email;
  let $password;

  $inputEmail.on('input', (event) => {
    $email = $inputEmail.val();
    cl($email);
    functionValidateEmail($email, $inputEmail);
  });

  $inputPassword.on('input', (event) => {
    $password = $inputPassword.val();
    cl($password);
    functionValidatePassword($password, $inputPassword);
    activeButton($btnSignup);
  });

  $btnSignup.on('click', (event) => {  
    let $promise = $auth.createUserWithEmailAndPassword($email, $password);
    $promise.catch(event => alert(event.message));    
    window.location.href = '../views/collage.html';
  });
});
