$(document).ready(function() {
  cl = console.log;

  let $auth = firebase.auth();

  // Login with email and password
  let $btnLogin = $('#btn-login');

  let $inputEmail = $('#inputUser');
  let $inputPassword = $('#inputPassword');


  $inputEmail.on('input',(event)=>{
    let $email = $inputEmail.val();
    cl($email);
    functionValidateEmail($email,$inputEmail);
  });

  $inputPassword.on('input',(event)=>{
    let $password = $inputPassword.val();
    cl($password);
    functionValidatePassword($password,$inputPassword);
  });

  
  // activeButton($btnLogin);

  $btnLogin.on('click', (event) =>{
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