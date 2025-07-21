import tasksService from "./tasksService.js";

function handleOptions(event, menu) {
  if (!event.target.classList.contains('custom-menu__item')) return;

  if (event.target.id === 'menu_remove') {
    console.log('Eliminando: ' + event.target.id);
    tasksService.deleteTask(event.target.dataset.cardId);
  }
}

export { handleOptions }; 