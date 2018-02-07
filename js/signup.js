$(document).ready(function() {

    let $btnSignup = $('#btn-signup');

    let $auth = firebase.auth();

    $btnSignup.on('click', function(event) {
        let $inputEmail = $('#inputUser');
        let $inputPassword = $('#nputPassword');
        let $email = $inputEmail.val();
        let $pass = $inputPassword.val();
        let $promise = $auth.createUserWithEmailAndPassword($email, $pass);
        $promise.catch(event => alert(event.message));
    
        window.location.href = '../index.html';
      });
});
