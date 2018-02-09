$(document).ready(() => {
  $inputFileImagesCollage = $('#file');
  $containerImgCollage = $('#container-img-collage');
  $imgUser = $('#image-profile');

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      let codeUser = user.uid;
      let nameUser = user.displayName;
      let photoUser = user.photoURL;

      $imgUser.attr('src', photoUser);
      
      showProfileImageDay();

      function showProfileImageDay() {
        firebase.database().ref('bd').child(codeUser).child('imgCollage')
          .on('value', (s)  => {
            let data = s.val();
            $containerImgCollage.html('');
            for (var key in data) {
              $containerImgCollage.append(`
              <div class="container-imagen col-xs-2 col-sm-1 col-md-4 col-lg-4 container-padding">
              <img id="${data[key].name}" class="imagen" draggable="true" src="${data[key].url}">
              </div>`);
            }
          });
      }

      /* Con esta funcion subiremos imagenes a storage de firebase */
      $inputFileImagesCollage.on('change', () => {
        var imageUpload = $(event.target).prop('files')[0];

        var uploadImg = firebase.storage().ref().child('imgCollage/' + imageUpload.name).put(imageUpload);
        uploadImg.on('state_changed', 
          (s) => {
          // mostrar barra de progreso
          },
          (error) => {
            alert('Hubo un error al subir la imagen');
          },
          () => {
            // Se mostrará cuando se ha subido exitosamente la imagen
            var downloadURL = uploadImg.snapshot.downloadURL;
            createImagePostFirebaseNode(imageUpload.name, downloadURL);
          });
      });
      
      function createImagePostFirebaseNode(nameImgCollage, url) {
        firebase.database().ref('bd').child(codeUser).child('imgCollage').push({
          name: nameImgCollage,
          url: url
        });
      }
    } else {
      // No user is signed in.
    }
  });
});