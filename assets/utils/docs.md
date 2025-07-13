# PROCESO DE CREACIÓN DE "8FoldTodo"

Como no quiero seguir haciendo proyectos de juguete que no tienen un futuro realista desplegados, este es mi intento de hacer de esta entrega algo modular y progresivo. El objetivo no es entregar una aplicación de nivel industrial, pero si adquirir el hábito de hacer cada vez mejores entregas con código pensado específicamente en ser vendido o usado en producción. 

Orden y claridad con los focos prioritatrios en esta etapa de mi desarrollo como desarrollador. Además debo aprender a suplir aquellos aspectos en que estoy más débil por lo que documentar y hacer buenos frontend, con evidente cariño y dedicación son relevantes, más que la nota o la entrega final, que se puede seguir mejorando constantemente hasta lograr un MVP o producto final.

👉 **ADVERTENCIA**: no TLDR provided!

Este archivo documenta todo el proceso de diseño y creación de esta app y es exhaustivo, porque es un documento de uso personal. 

## ¿QUÉ ES?

Es una aplicación ToDo. Mi idea es hacer algo simple pero realmente funcional y que podría considerarse atractivo dentro de los estándares generales. Creo que mi inspiración principal será Google Keep por su simpleza pero rica funcionalidad.

## PRIMEROS PASOS

### Funcionalidad básica

La funcionalidad básica será poder crear tareas que tienen por cuerpo principal el texto de la tarea `task`, e incorporan la fecha de creación `creationDate` y un identificador único `id`. Pero además quiero que el usuario pueda marcar tareas como importantes o no `important`, definir una fecha límite para posiblemente implementar a futuro un sistema de alertas `deadline`, definir el color de fondo de la tarjeta entre un set para usarla como categorizadores `color` y por supuesto, el marcador de completado `done` que debería modificar visualmente la tarjeta. (¿tachado?, ¿background opacity?, no lo sé aún). También, como feature cuando ya esta base esté madura, me gustaría que tuvieran la posibilidad de incorporar una nota así como un detalle de la tarea `detail`. Este detalle no se mostraría completo en la tarjeta, destacando solo el "titulo" `task` de la tarea pero se mostrará cuando el usuario lo desee. Por último, un sistema de etiquetado podría hacer que las búsquedas y filtrado de las notas sean mucho más simple y amigables para el usuario. Es un arreglo de etiquetas `tags`. El esquema quedaría de la siguiente manera:

```Js
{
  creationDate,     // Fecha de creación de la tarea
  task,             // Cuerpo de la tarea. Texto plano por ahora
  important,        // Podría ser para mostrar un indicador visual
  color,            // Para darles colores distintos/categorías
  done,             // Para marcar si está completada
  deadline,         // Para crear una fecha límite
  id,               // Id para la tarea. Math.random 1000000-9999999
  detail,           // Para detalles sobre la tarea (expanded features)
  tags              // Un arreglo de etiquetas (expanded features)
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


### 📁 Estructura general del proyecto

```
📁 todoApp/  
├── index.html  
├── favicon.png  
├── README.md  
└── 📁assets/  
    ├── 📁css/  
    ├── 📁img/  
    └── 📁js/
        ├── main.js
        └── 📁lib/
            ├── dateFormatter.js
            ├── tasksLoader.js  
            ├── renderer.js  
            ├── ....  
            └── ....  
```

- `main.js` es el archivo inicial cargado por `index.html` que importa y orquesta la funcionalidad.
- `dateFormatter.js` es un archivo que formatea `creationDate` a "usuario amigable".
- `tasksLoader.js` es un módulo que carga las tareas, decidiendo si cargarlas desde el `localStorage` o devolver un objeto inicial de ejemplo.
- `renderer.js` deberia tener la lógica de creación de la card. No se si con _template literals_ de js o con HTML `<template>`.


### Naming

```Js
// assets/js/main.js
```

```Js
// assets/js/lib/dateFormatter.js
```

```Js
// assets/js/lib/tasksLoader.js
```

```Js
// assets/js/lib/renderer.js
```