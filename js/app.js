$(document).ready(function() {
  // Login with email and password
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
  let $loginGoogle = $('#log-in-google');

  $loginGoogle.on('click', googleLogin);

  const googleLogin = () => {
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