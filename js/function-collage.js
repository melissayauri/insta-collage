window.addEventListener('load', function(event) {
  /* variables de los atributos al container y las imagenes*/
  let draggable = document.querySelectorAll('[draggable]');
  let containers = document.querySelectorAll('[data-container]');
  let title = document.getElementById('title');
  let containerTitle = document.getElementById('container-title');

  /* ejecutando los eventos*/
  draggable.forEach(function(value, i) {
    draggable[i].addEventListener('dragstart', dragstart);
  });
  containers.forEach(function(value, i) {
    containers[i].addEventListener('dragover', selection);
    containers[i].addEventListener('drop', selection);
  });

  function dragstart(event) {
    event.dataTransfer.setData('text', event.target.id);
  };

  function selection(event) {
    event.preventDefault();
    if (event.type !== 'drop') {
      /* console.log(event);*/
      return;
    }
    let elementId = event.dataTransfer.getData('text');
    
    var img = document.createElement('img');
    img.classList.add('container-collage-img');
    img.setAttribute('src', elementId);

    event.target.appendChild(img);
    containerTitle.removeChild(title);
  }
});


