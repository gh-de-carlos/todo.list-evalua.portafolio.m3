import friendlyDateFormatter from "../util/friendlyDateFormatter.js";
import { tiltCard, selectBg, showMenu, debounceMenu } from "../util/microTools.js";
import { handleOptions } from "./ctxMenu.js";
import tasksService from "./tasksService.js";

// locales
const dashboard = document.querySelector('#dashboard');
const template = document.querySelector('#task-template');
const menu = document.querySelector('#custom-menu');
let newCard = null;
const TIMERS = {
  timoutMenuDebouncer: null,
  mouseLeaveDelay: 800,
}

/**
 * Función encargada de orquestar la creación de las tarjetas
 * y agregar sus listeners. Se utiliza la api Template
 * 
 * @param { Array } tasks - el arreglo con la data de toda las tareas
*/
function render(tasks) {
  dashboard.innerHTML = "";
  // TODO crear lógica de resiliencia
  
  const clone = template.content.cloneNode(true).querySelector('.task-card');
  clone.classList.add('new-card');
  clone.innerHTML = '<img src="./assets/img/new-card.svg" class="new-card__img"/ title="📝 nueva tarea 😍">';
  clone.addEventListener('click', tasksService.createTask);
  dashboard.appendChild(clone);

  tasks.forEach(task => {
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
  dottedBtn.forEach(d => d.addEventListener('click', (e) => { showMenu(e, menu) }));
  
}

// eventListeners
document.addEventListener('click', event => {
  if (!event.target.closest('.task-card')) menu.style.display = 'none';
});
dashboard.addEventListener('contextmenu', (e) => { showMenu(e, menu) });
menu.addEventListener('mouseleave', (event) => {
  debounceMenu(TIMERS.timoutMenuDebouncer, event.currentTarget, TIMERS.mouseLeaveDelay)
})
menu.addEventListener('click', (e) => { handleOptions(e, menu)});



export default { render }