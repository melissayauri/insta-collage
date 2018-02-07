$(document).ready(function() {
  $imgUser = $('#image-profile');

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var codeUser = user.uid;
      var nameUser = user.displayName;
      var photoUser = user.photoURL;

      $imgUser.attr('src', photoUser);
    } else {
      // No user is signed in.
    }
  });
});