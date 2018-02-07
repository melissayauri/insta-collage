$(document).ready(function() {
    //login with email and password
  let $btnLogin = $('#btn-login');

  $btnLogin.on('click', function(event) {
    let $inputEmail = $('#inputUser');
    let $inputPassword = $('#nputPassword');

    let $email = $inputEmail.val();
    let $pass = $inputPassword.val();

    let $promise = $auth.signInWithEmailAndPassword($email, $pass);
    $promise.catch(event => alert(event.message));

    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        alert('Usted se ha logueado Correctamente');
        window.location.href = 'start.html';
      } else {
        alert('usted no esta registrado');
      }
    });
  });


  // Login google
  var $loginGoogle = $('#log-in-google');

  $loginGoogle.on('click', googleLogin);

  function googleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
  
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // The signed-in user info.
      var user = result.user;
      // Mostramos su contenido
      console.log(user);
      // Llamamos a la funcion
      saveData(result.user);
    });
  }

  function saveData(user) {
    var users = {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photo: user.photoURL
    };
    firebase.database().ref('bd/' + user.uid).set(users);
  }
});