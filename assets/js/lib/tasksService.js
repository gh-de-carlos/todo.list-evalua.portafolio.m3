import { importedTasks } from "./db.js";
import app from "./app.js";

const KEY = 'todo8fold';

/**
 * Función que inicializa el estado de la aplicación buscando
 * la clave todo8fold en el localStorage. Si no la encuentra
 * hace uso del arreglo `importedTasks` para inicializar el
 * tablero con tarjetas de ejemplo. 
 * 
 * @returns { object } la colección de servicios encargados
 * de la gestión y persistencia de las tareas.
 */
function init() {
  const storedTasks = readFromStorage(KEY);
  
  if (!storedTasks) {
    saveToStorage(KEY, importedTasks);
    const storedTasks = readFromStorage(KEY);
    return storedTasks;
  }

  return storedTasks;
}

/**
 * Función que se encarga de leer el objeto todo8fold del
 * localStorage retornando null si no existe.
 * 
 * @param { string } key - la clave para buscar en localStorage
 * 
 * @returns { object } el objeto en el localStorage asociado
 * a la clave todo8fold, null si no existe en el localStorage
 */
function readFromStorage(key) {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : null;
}

/**
 * Función que se encarga de almacenar el arreglo con tareas
 * en el localStorage. 
 * 
 * @param { string } key - la clave del localStorage
 * @param { array } data - el arreglo con las `task`'s
 */
function saveToStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function deleteTask(id) {
  const stored = readFromStorage(KEY);
  if (!stored) throw new Error("💥 Esto nunca debería haber sucedido. Revisar esta parte del código ⚠️");
  
  const transientStored = stored.filter(task => task.id !== id);
  saveToStorage(KEY, transientStored);
  const refreshed = readFromStorage(KEY);
  app.render(refreshed);
}

function createTask(event) {
  console.log('Acá va la creación de una nueva tarea');
  // TODO esta f(x) debe ser refactorizada para evitar dependencias circulares
  
  const template = document.querySelector('.modal-create');
  const modalContent = template.content.cloneNode(true);
  console.log(modalContent);

  // Wrap it in a modal container
  const modalWrapper = document.createElement('div');
  modalWrapper.classList.add('modal-overlay'); // Should match your CSS class
  modalWrapper.setAttribute('role', 'dialog');
  modalWrapper.setAttribute('aria-modal', 'true');

  // Insert cloned content
  modalWrapper.appendChild(modalContent);

  // Add a close button (optional)
  const closeBtn = document.createElement('button');
  closeBtn.textContent = '×';
  closeBtn.classList.add('modal-close');
  closeBtn.addEventListener('click', () => modalWrapper.remove());
  modalWrapper.appendChild(closeBtn);

  // Append to body
  document.body.appendChild(modalWrapper);

  // Optional: close on ESC key or click outside
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modalWrapper.remove();
  });

  modalWrapper.addEventListener('click', (e) => {
    if (e.target === modalWrapper) modalWrapper.remove();
  });
}


export default { init, deleteTask, createTask };