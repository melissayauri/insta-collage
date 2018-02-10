window.addEventListener('load', function(event) {
  /* variables de los atributos al container y las imagenes*/
  let draggable = document.querySelectorAll('[draggable]');
  let containers = document.querySelectorAll('[data-container]');
  let title = document.getElementById('title');
  let containerImg1 = document.getElementById('container-img-1');

  /* Ejecutando los eventos*/
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
      return;
    }
    let elementId = event.dataTransfer.getData('text');

    let icon = document.createElement('i');
    let img = document.createElement('img');
    let div = document.createElement('div');

    icon.classList.add('times-circle');
    img.classList.add('imagen');
    div.classList.add('container-collage-img');
    img.setAttribute('src', elementId);
    icon.setAttribute('data-img', elementId);

    div.appendChild(icon);
    div.appendChild(img);
    event.target.appendChild(div);

    icon.addEventListener('click', remove);
    function remove(event) {
      if (icon.dataset.img === img.getAttribute('src')) {
        let elementFather = this.parentNode;
        let elementContainerFather = elementFather.parentNode;

        elementContainerFather.removeChild(elementFather);
      }
    }

    containerImg1.removeChild(title);
  }
});


