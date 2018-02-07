<<<<<<< HEAD

=======
$(document).ready(function() {
  cl = console.log;

  let $auth = firebase.auth();

  // Login with email and password
  let $btnLogin = $('#btn-login');

  $btnLogin.on('click', function(event) {
    let $inputEmail = $('#inputUser');
    let $inputPassword = $('#inputPassword');

    let $email = $inputEmail.val();
    cl($email);
    let $password = $inputPassword.val();
    cl($password);
    let $promise = $auth.signInWithEmailAndPassword($email, $password);
    $promise.catch(event => alert(event.message));

    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        alert('Usted se ha logueado Correctamente');
        window.location.href = 'views/collage.html';
      } else {
        alert('usted no esta registrado');
      }
    });
  });


  // Login google
  let $loginGoogle = $('#log-in-google');

  $loginGoogle.on('click', googleLogin);

  function googleLogin() {
    let provider = new firebase.auth.GoogleAuthProvider();
  
    firebase.auth().signInWithPopup(provider).then((result) => {
      // The signed-in user info.
      let user = result.user;
      // Mostramos su contenido
      console.log(user);
      // Llamamos a la funcion
      saveData(result.user);
      window.location.assign('views/collage.html');
    });
  }

  const saveData = (user) => {
    let users = {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photo: user.photoURL
    };
    firebase.database().ref('bd/' + user.uid).set(users);
  }
});
>>>>>>> 65ec5d3eb8dceda69b1d744db47ade8658f3d7db
