window.addEventListener('load', function(event) {
  /* variables de los atributos al container y las imagenes*/
  let draggable = document.querySelectorAll('[draggable]');
  let containers = document.querySelectorAll('[data-container]');
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
