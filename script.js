document.addEventListener('DOMContentLoaded', function () {
  const enlaces = document.querySelectorAll('.enlace-menu');
  const secciones = document.querySelectorAll('.seccion');

  enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
      enlaces.forEach(function (item) {
        item.classList.remove('activo');
      });
      this.classList.add('activo');
    });
  });

  window.addEventListener('scroll', function () {
    let seccionActual = secciones[0].getAttribute('id');

    secciones.forEach(function (seccion) {
      const rect = seccion.getBoundingClientRect();
      if (rect.top <= 180) {
        seccionActual = seccion.getAttribute('id');
      }
    });

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
      seccionActual = secciones[secciones.length - 1].getAttribute('id');
    }

    enlaces.forEach(function (enlace) {
      enlace.classList.remove('activo');
      if (enlace.getAttribute('href') === '#' + seccionActual) {
        enlace.classList.add('activo');
      }
    });
  });
});
