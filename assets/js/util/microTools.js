// tiltear las tarjetitas
// const cards = document.querySelectorAll('.task-card');
// cards.forEach(card => {
function tiltCard(card) {
  let absTiltDeg = 0;
  // cambiando estos valores, probabilidad tilteo y
  // rango del angulo de tilteo puedo ofrecer configuraciones
  // de "modo": ¿serio, tranquilo, relajado, loco? 
  const isTilt = Math.random() > 0.2 ? true : false;
  if (isTilt) absTiltDeg = Math.floor(Math.random() * 10-5+1)+3;
  let tiltDeg = Math.round(Math.random()) === 0 ? absTiltDeg * -1 : absTiltDeg;
  card.style.transform = `rotate(${tiltDeg}deg)`;
}

/**
 * Esta función mapea el campo `task.color` en cualquier elemento
 * de tasks[] a una clase CSS específica que asigna ese color.
 * Otras maneras pueden ser más directas pero esto permite manejar
 * un archivo con paletas simplemente cambiando los prefijos en 
 * las clases y creando la oportunidad de agregar la feature de 
 * elegir temas completos para la app en un futuro.
 * 
 * @param { string } hexColor - String con un color en formato hex
 * @returns una string correspondiente a una clase CSS
 */
function selectBg(hexColor) {
  if (hexColor === '#FAF3DD') return 'task-card--honey';
  if (hexColor === '#DCE3C5') return 'task-card--sage';
  if (hexColor === '#C3E8BD') return 'task-card--honeydew';
  if (hexColor === '#B7D6E8') return 'task-card--sky';
  if (hexColor === '#EAD7C3') return 'task-card--peach';
  if (hexColor === '#F8C8DC') return 'task-card--rose';

  return 'task-card--yellow'
}


/**
 * Esta función es el handler de los eventos que lanzan el menú
 * contextual, ya sea `click` en el ícono de menú (...) o hacer
 * `dblclick` en cualquier lugar de una tarjeta.
 * 
 * @param { object } e - el objeto event
 * @param { object } menu - el objeto del elemento menu (DOM)
 */
function showMenu(e, menu) {
  const card = e.target.closest('.task-card');
  const isNew = card.classList.contains('new-card');
  if (card && !isNew) {
    e.preventDefault();
    menu.style.left = `${e.clientX}px`;
    menu.style.top = `${e.clientY}px`;
    menu.style.display = 'block';
    menu.dataset.cardId = card.id;
    menu.querySelector('#menu_remove').dataset.cardId = card.id;
  }
}

/**
 * Esta pequeña utilidad aplica debounce al evento mouseleave
 * sobre el menú contextual de las tareas para evitar que
 * las salidas no intencionales del puntero desde el menú 
 * provoquen su cierre inmediato, mejorando la experiencia de
 * usuario. 
 * 
 * @param { number } timer - referencia a un setTimout.
 * @param { currentTarget } menu - objeto event.currentTarget
 * @param { number } delay - valor en milisegundos del delay para debounce
 */
function debounceMenu(timer, menu, delay) {
  clearTimeout(timer);
  timer = setTimeout(() => {
    menu.style.display = 'none';
  }, delay);
  
  menu.addEventListener('mouseenter', () => {
    if (timer) clearTimeout(timer);
  })
}


export { tiltCard, selectBg, showMenu, debounceMenu };