$(document).ready(() => {
  $imgUser = $('#image-profile');

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      let codeUser = user.uid;
      let nameUser = user.displayName;
      let photoUser = user.photoURL;

      $imgUser.attr('src', photoUser);
    } else {
      // No user is signed in.
    }
  });
});