<<<<<<< HEAD
// La funcionalidad de tu proyecto
window.addEventListener('load', function(event) {
  /* variables de los atributos al container y las imagenes*/
  let draggable = document.querySelectorAll('[draggable]');
  let containers = document.querySelectorAll('[data-container ]');
  /* ejecutando los eventos*/
  draggable.forEach(function(value, i) {
    draggable[i].addEventListener('dragstart', dragstart);
  });
  containers.forEach(function(value, i) {
    containers[i].addEventListener('dragover', selection);
    containers[i].addEventListener('drop', selection);
  });
  function dragstart(event) {
    event.dataTransfer.setData('text', this.id);
  };
  function selection(event) {
    event.preventDefault();
    let elementId = event.dataTransfer.getData('text');
    let element = document.getElementById(elementId);
    if (element.parentNode === this) {
      this.className = '';
      return;
    }
    element.parentNode.removeChild(element);
    this.appendChild(element);
    this.className = '';
  }
});
=======
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
>>>>>>> 65ec5d3eb8dceda69b1d744db47ade8658f3d7db
