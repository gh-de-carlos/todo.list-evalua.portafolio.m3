import friendlyDateFormatter from "../util/friendlyDateFormatter.js";
import { tiltCard, selectBg, showMenu, debounceMenu } from "../util/microTools.js";

// locales
const dashboard = document.querySelector('#dashboard');
const template = document.querySelector('#task-template');
const menu = document.querySelector('#custom-menu');
const TIMERS = {
  timoutMenuDebouncer: null,
  mouseLeaveDelay: 800,
}

/**
 * Función encargada de orquestar la creación de las tarjetas
 * y agregar sus listeners.
 * 
 * @param { Array } tasks - el arreglo con la data de toda las tareas
*/
function render(tasks) {
  // TODO crear lógica de resiliencia
  
  tasks.forEach(task => {
    // crear cards a usando Template.clone API
    const clone = template.content.cloneNode(true);
    clone.querySelector('.task-card').id = task.id;
    clone.querySelector('.card-body').textContent = task.task;
    clone.querySelector('.card-footer').textContent = '...' + friendlyDateFormatter(task.creationDate);
    clone.querySelector('.task-card').classList.add(selectBg(task.color));
    tiltCard(clone.querySelector('.task-card'));
    
    dashboard.appendChild(clone);
  });
  
  // eventListeners
  const dottedBtn = document.querySelectorAll('.fa-ellipsis');
  dottedBtn.forEach(d => d.addEventListener('click', showMenu));
  
}

// eventListeners
dashboard.addEventListener('contextmenu', showMenu);
menu.addEventListener('mouseleave', (event) => {
  debounceMenu(TIMERS.timoutMenuDebouncer, event.currentTarget, TIMERS.mouseLeaveDelay)
})
document.addEventListener('click', event => {
  if (!event.target.closest('.task-card')) menu.style.display = 'none';
});
// TODO agregar eventListeners del menú contextual

export default { render }