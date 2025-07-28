

# PROCESO DE CREACIÓN DE "8FoldTodo"

Como no quiero seguir haciendo proyectos de juguete que no tienen un futuro realista desplegados, este es mi intento de hacer de esta entrega algo modular y progresivo. El objetivo no es entregar una aplicación de nivel industrial, pero si adquirir el hábito de hacer cada vez mejores entregas con código pensado específicamente en ser vendido o usado en producción. 

Orden y claridad con los focos prioritatrios en esta etapa de mi desarrollo como desarrollador. Además debo aprender a suplir aquellos aspectos en que estoy más débil por lo que documentar y hacer buenos frontend, con evidente cariño y dedicación son relevantes, más que la nota o la entrega final, que se puede seguir mejorando constantemente hasta lograr un MVP o producto final.

👉 **ADVERTENCIA**: no TLDR provided!


Este archivo documenta todo el proceso de diseño y creación de esta app y es exhaustivo, porque es un documento de uso personal. 

## CONTENIDO

* [**¿QUÉ ES?**](#qué-es)
* [**PRIMEROS PASOS**](#primeros-pasos)
    * [Funcionalidad básica](#funcionalidad-básica)
    * [Requisitos iniciales](#requisitos-funcionales-iniciales)
* [**ARQUITECTURA Y DISEÑO**](#arquitectura-y-diseño)
    * [UI y diseño: primeras ideas](#ui-y-diseño)
    * [Ciclo de vida de la aplicación](#ciclo-de-vida-general-de-la-aplicación)
    * [Gestión y ciclo de vida de una tarea](#gestión-y-ciclo-de-vida-de-tareas)
    * [Naming: módulos y funciones](#naming)
    * [Estructura general del proyecto](#-estructura-general-del-proyecto)
* [**DESARROLLO**](#desarrollo)
    * [Fase 1 - Creación y gestión de tareas sin UI](#fase-1-creación-y-gestión-de-tareas---no-ui)


## ¿QUÉ ES?

Es una aplicación ToDo. Mi idea es hacer algo simple pero realmente funcional y que podría considerarse atractivo dentro de los estándares generales. Creo que mi inspiración principal será Google Keep por su simpleza pero rica funcionalidad.

## PRIMEROS PASOS

### Funcionalidad básica

La funcionalidad básica será poder crear tareas que tienen por cuerpo principal el texto de la tarea `task`, e incorporan la fecha de creación `creationDate` y un identificador único `id`. Pero además quiero que el usuario pueda marcar tareas como importantes o no `important`, definir una fecha límite para posiblemente implementar a futuro un sistema de alertas `deadline`, definir el color de fondo de la tarjeta entre un set para usarla como categorizadores `color` y por supuesto, el marcador de completado `done` que debería modificar visualmente la tarjeta. (¿tachado?, ¿background opacity?, no lo sé aún). También, como feature cuando ya esta base esté madura, me gustaría que tuvieran la posibilidad de incorporar una nota así como un detalle de la tarea `detail`. Este detalle no se mostraría completo en la tarjeta, destacando solo el "titulo" `task` de la tarea pero se mostrará cuando el usuario lo desee. Por último, un sistema de etiquetado podría hacer que las búsquedas y filtrado de las notas sean mucho más simple y amigables para el usuario. Es un arreglo de etiquetas `tags`. El esquema quedaría de la siguiente manera:

```Js
{
  color,            // string   : Para darles colores distintos/categorías
  creationDate,     // Date     : Fecha de creación de la tarea
  deadline,         // Date     : Para crear una fecha límite
  detail,           // Date     : Para detalles sobre la tarea (expanded features)
  done,             // Date     : Para marcar si está completada
  id,               // UUID()   : Id para la tarea. Math.random 1000000-9999999
  important,        // boolean  : Podría ser para mostrar un indicador visual
  state,            // string   : ENUM-like, SAVED, SAVING, FOCUSED, DELETED, ARCHIVED, etc
  tags              // string[] : Un arreglo de etiquetas (expanded features)
  task,             // string   : Cuerpo de la tarea. Texto plano por ahora
}
```

### Requisitos funcionales iniciales

- al cargarse debe mostrar una tarea de ejemplo si es no hay tareas que mostrar. Esta tarea debería ilustrar por su diseño, las _features_ disponibles para cualqueir tarea.
- debe implementar las funcionalidades básicas para crear, mostrar, modificar y eliminar notas.
- La app **debe implementar un CRUD básico** para:  
  1. crear una tarea.
  1. mostrar las tareas. 
  1. modificar una tarea.  
  1. eliminar una tarea. 
- La creación debería estar a cargo de un **formulario muy estilizado, que simule una tarjeta**.
- El proceso de modificar una tarjeta: acá tengo mis dudas.
  - Me gustaría hacer del contenido de las tarjetas `editable` cuando se active un **ícono de editar** para implementar una funcionalidad de modificación _in-place_, pero no sé qué tan complejo sea de implementar.
  - Si no, podría utilizar el mismo formulario utilizado para la creación de la tarea pero, debería bloquear la modificación de la fecha de creación `creationDate`.
- El usuario no será conciente de que las tarjetas tiene `id` pues será de uso interno.
- Haré `type="module"` en el `assets/js/main.js` porque de esta manera puedo organizar mejor el código, implementar buenas prácticas (`"use strict"`, aislamiento de `scopes`) y porque ya no hay justificación ni preocupación de que un browser no los soporte.
- Quiero intentar implementar el uso de `localStorage` para almacenar las tareas.
- Cada tarea debería mostrar en el MVP: 
  - la tarea, 
  - un color de background, 
  - un marcador de importante,
  - un selector de "terminado",
  - la fecha de su creación,
  - una fecha opcional límite,
  - ¿un botón de editar?

La app está diseñada para implementar posteriormente el campo "detalle" y las etiquetas + buscador.


## ARQUITECTURA y DISEÑO

### UI y diseño

(This part of the work is currently in "brainstorming" stage.)

- La vista debe ser un "tablero" con un navbar para features posteriores.
- Habrá un footer muy discreto para presentar la marca personal.
- La vista se irá llenado de tarjetas.
- La tarjeta debería presentar:
  - un cuerpo principal donde escribir/mostrar la tarea.
  - un selector de colores seleccionado. (no libre)
  - un ícono de "importante"
  - un sector mostrando la fecha de creación en formato "usuario amigable". (Ver más)
  - un selector de "terminado"
  - un sector mostrndo la fecha límite
  - un ícono de "editar"
  - Eventualmente:
    - debería haber un pequeño footer donde se pueda expandir el detalle.
    - debería tener un espacio con las etiquetas. 
- El formato de fecha "amable con el usuario" debería renderizar el timestamp de la siguiente manera:
  - Cuando la tarjeta se ha creado hace menos de una hora mostrar "recién".
  - Cuando se ha creado hoy (día calendario) mostrar "hoy".
  - Cuando se ha creado el día anterior mostrar "ayer".
  - Cuando se ha creado entre 2 y 30 días atrás mostrar "hace X días"
  - Cuando se ha creado hace más de 30 días mostrar la fecha "el DD-MM-YYYY"

### Ciclo de vida general de la aplicación

1. El usuario carga la página.
2. La aplicación invoca el método de `tasksService.js` que carga la respuesta:
  1. ¿Existe la key en `localStorage`? Carga el listado.
  2. ¿No existe? carga la tarjeta de ejemplo inicial.
3. Loop: gestiona tareas en detalle [**ACÁ**][0]

### Gestión y ciclo de vida de tareas

1. **Crear una tarea**
  1. El usuario utiliza _algún elemento de control_ para lanzar este evento. ¿➕?
  2. Un `formulario/input` en su forma más simple o un elemento editable `contenteditable` es desplegado para el usuario mostrando las características disponibles en la versión.
  3. El usuario crea su tarea, _utilizando íconos y controles_ para _habilitar todas las features booleanas_ o con selección fija.
  4. Un evento _input guarda en un buffer local el texto_ a medida que el usuario escribe, _esperando un tiempo determinado o el uso de un control para confirmar la creación_.
  5. Se invoca el método de `tasksService.js` que realiza la validación y creación de la tarea, agregándola al localStorage y realizando _hydrate_ de tasks. **CONSIDERAR FLUJO**: `local <--> localStorage`
  6. Finaliza la creación con la _actualización de la vista de modo silencioso, sin recargarla_, invocando el método de `renderer.js` si es necesario.
2. **Eliminar una tarea**
  1. El usuario realiza clic en algún control destinado a eliminar la tarjeta ¿🗑️?.
  2. La interfaz solicita confirmación con un modal[-like].
    2. **CONFIRMA**: Se invoca al método de `tasksService.js` que busca el id de la tarea y la elimina del entorno local, _sobreescribiendo luego el localStorage_.
    3. **NO CONFIRMA**: cancela la operación sin solicitar más eventos.
3. **Modificar una tarea**:
  1. El usuario activa un control destinado para este fin ¿📝?.
  2. Se repite el **mismo proceso 1.2-1.6**, _sobreescriendo la posición en el arreglo local_ de la tarea en base a su id.
  3. Se invoca al método que actualiza la vista ¿`renderer.js`?


### Naming

**EN ESTADO PREMATURO AÚN**: aún debo conciliar tareas considerando las features realistas que quiero implemntar y el ciclo de vida de desarrollo hasta completarlas.

```Js
// assets/js/main.js
// main orchestrator and UI event handling

// assets/js/lib/dateFormatter.js
formatDate(date);

// assets/js/lib/tasksService.js
initTasks();
resetTasks();
createTask(task);
updateTask(task);         // still choosing concerns
saveTask(task);           // still choosing concerns
deleteTask(id);       
archiveTask(id);       

// assets/js/lib/alertManager.js
showNotification();
queueNotification();

// assets/js/lib/taskValidator.js
validateNewTaskt(task);   // still choosing concerns
validateTask(task)        // still choosing concerns

// assets/js/lib/renderer.js
renderNewTask();          // still choosing concerns
updateTaskView();         // still choosing concerns
refreshTask();            // still choosing concerns
removeTask();             // still choosing concerns
hideTask();               // still choosing concerns
renderTaskCard();
updateTaskCard();
removeTaskCard();

// assets/js/lib/deadlineWatcher.js
scheduleDeadline()
pollDeadlines()
triggerAlert()

// assets/js/lib/taskEditor.js
enableEditing(task);

// assets/js/lib/taskStateManagement.js 
transitionState()

// completely optional module.
uiDecorator.applyStateStyles()
```

### 📁 Estructura general del proyecto

```
📁 todoApp/  
├── index.html                        // script:assets/js/main.js 
├── favicon.png  
├── README.md  
└── 📁assets/  
    ├── 📁css/  
    ├── 📁img/  
    └── 📁js/
        ├── main.js
        └── 📁lib/
            ├── dateFormatter.js      // formateo amigable de creationDate
            ├── tasksService.js       // controla toda la capa de almacenamiento        
            ├── renderer.js           // templates y DOM rendering
            ├── ....  
            └── ....  
```

## DESARROLLO

### Fase 1: creación y gestión de tareas - NO UI

```Js
// Crear un uuid.v4 sin librerías
self.crypto.uuid();
```


## TODO

```Js
// In-place editing mode.
const tasks = document.querySelectorAll('.card-body');
tasks.forEach(task => task.addEventListener('dblclick', editMode));

function editMode(e) {
  e.currentTarget.contentEditable = 'true'; 
}
```
**OPCIONES DEL MENÚ CONTEXTUAL**
```html
<div id="custom-menu">
    <p class="custom-menu__item" id="menu_edit">Editar</p>
    <p class="custom-menu__item" id="menu_done">¡Está lista!</p>
    <p class="custom-menu__item" id="menu_important">Es importante</p>
    <p class="custom-menu__item" id="menu_timer">Agregar timer</p>
    <p class="custom-menu__item" id="menu_color">Elegir color</p>
    <p class="custom-menu__item" id="menu_remove">Eliminar</p>
</div>
```

**TABLA DE CLASES PARA BACKGROUNDS**
| Hex Code Data  | class                   |
|----------------|-------------------------|
| `#FAF3DD`      | .task-card--honey       |
| `#DCE3C5`      | .task-card--sage        |
| `#C3E8BD`      | .task-card--honeydew    |
| `#B7D6E8`      | .task-card--sky         |
| `#EAD7C3`      | .task-card--peach       |
| `#F8C8DC`      | .task-card--rose        |

**TEMPORAL DE DESARROLLO**
```
sass/
│
├── abstracts/       // 💡 Variables, functions, mixins, and helpers
├── base/            // 🎨 Reset, typography, and base element styles
├── components/      // 🧩 Buttons, cards, widgets — UI micro pieces
├── layout/          // 🧱 Header, footer, sidebar, grid system
├── pages/           // 📄 Page-specific styles (e.g., home.scss, about.scss)
├── themes/          // 🌗 Theme-specific overrides
├── vendors/         // 🛠️ Third-party styles (Bootstrap, jQuery UI, etc.)
│
└── main.scss        // 🚀 Manifest file that ties everything together
```

### Commit pendiente



-------------------------------------------------------------------
                                LINKS
-------------------------------------------------------------------
[0]:#gestión-y-ciclo-de-vida-de-tareas


-------------------------------------------------------------------
                            ESTILOS CUSTOM
-------------------------------------------------------------------
<style>
  body {
    font-family: 'Segoe UI', sans-serif;
    line-height: 1.6;
    max-width: 800px;
    margin: auto;
    padding: 2em;
    color: #333;
    background: linear-gradient(to bottom, #fff, #f3f3f3);
  }
  h1, h2, h3 {
    border-bottom: 1px solid #ccc;
    padding-bottom: 0.3em;
  }
  code {
    background: #aaa;
    padding: 0.1em 0.2em;
    border-radius: 4px;
    color: red;
    font-family: Consolas, monospace; 
  }

  @media print {
  body {
    background: none;
    color: black;
    font-size: 12pt;
    padding: 1in;
  }
  a::after {
    content: " (" attr(href) ")";
  }
}
</style>