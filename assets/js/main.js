/******************************
 *         TODO LIST          *
 ******************************/

// gets and renders tasks
const tasks = getTasks();
renderTasks();         
// TODO render and get decoupled


/******************************
 *            CRUD            *
 ******************************/

/**
 * Takes an object, validates its task field and pushes it
 * into the tasks array. No further validations are required
 * since all fields are populated via UI form controls. 
 * The schema, also documented in the README is as follows:
 * 
 * color: color category              : String
 * creationDate: timestamp new Date() : Date
 * deadline: optional date input      : Date
 * done: checkbox false/true          : Boolean
 * id: an internal identifier         : Math.random
 * important: checkbox false/true     : Boolean
 * notes: for future exteded features : String
 * tags: for future extended features : String[]
 * task: REQUIRED, the task body      : String
 * 
 * @param {object} task - a task matching the format above
 * @returns {boolean} - false for empty task, true otherwise
*/
function addTodo(task) {
  if (!!task.task) return false; // ⚠️ task field required
  
  tasks.push(task);
  renderTasks();
}

function getTodos() {
  // useless unless `tasks` takes its own module.
}

function updateTodo(task) {
  
  renderTasks()
  
}

function deleteTodo() {
  renderTasks()
  
}

/******************************
 *         AUXILIARY          *
 ******************************/
function getId() {
  return Math.floor(Math.random() * 9_000_000) + 1_000_000;
}

function renderTasks() {
  tasks.forEach(task => console.log("TODO: build here..."));
}

function getTasks() {
  return [
    {
      color: "pink",              // declares a Set
      creationDate: new Date(),
      deadline: nuil,             // null or Date
      done: false,
      id: getId(),                // Math.random()
      important: false,
      notes: "",                  // later expanded features 
      tags: [],                   // later expanded features
      task: "crea tu primera nota 😊",
    }
  ];
}