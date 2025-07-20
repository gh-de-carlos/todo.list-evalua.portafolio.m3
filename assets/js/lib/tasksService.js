import { importedTasks } from "./db.js";

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
  const key = 'todo8fold';
  const storedTasks = readFromStorage(key);

  if (!storedTasks) {
    saveToStorage(key, importedTasks);
    return importedTasks;
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


export default { init };