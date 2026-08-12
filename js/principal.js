// Mostrar/ocultar biografía completa
const botonBio = document.getElementById('boton-bio');
const bioCompleta = document.getElementById('bio-completa');

if (botonBio) {
  botonBio.addEventListener('click', () => {
    bioCompleta.classList.toggle('oculto');

    if (bioCompleta.classList.contains('oculto')) {
      botonBio.textContent = 'Leer biografía completa';
    } else {
      botonBio.textContent = 'Mostrar menos';
    }
  });
}// Filtro de etiquetas en Reflexiones
const filtros = document.querySelectorAll('.etiqueta-filtro');
const articulos = document.querySelectorAll('.articulo-item');

filtros.forEach(filtro => {
  filtro.addEventListener('click', (e) => {
    e.preventDefault();

    filtros.forEach(f => f.classList.remove('activa'));
    filtro.classList.add('activa');

    const etiquetaSeleccionada = filtro.dataset.etiqueta;

    articulos.forEach(articulo => {
      if (etiquetaSeleccionada === 'todas' || articulo.dataset.etiqueta === etiquetaSeleccionada) {
        articulo.classList.remove('oculto');
      } else {
        articulo.classList.add('oculto');
      }
    });
  });
});
// Marcar en gris los conciertos ya celebrados
const eventosAgenda = document.querySelectorAll('.evento-agenda');
const hoy = new Date();
hoy.setHours(0, 0, 0, 0);

eventosAgenda.forEach(evento => {
  const fechaEvento = new Date(evento.dataset.fecha);
  if (fechaEvento < hoy) {
    evento.classList.add('evento-pasado');
  }
});