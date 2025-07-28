# <img src="favicon.png" style="width:25px; border-radius: 50%"/> Módulo 3 - Evaluación portafolio "ToDo List" <img src="favicon.png" style="width:25px; border-radius: 50%"/>

**CAPTURAS DE ENTREGA (EN MODO KIOSKO/APP)**
![mockup o entrega del ejercicio][0]
![mockup o entrega del ejercicio][2]

**PUEDES LEER DIRECTAMENTE LAS NOTAS GENERALES DE IMPLEMENTACIÓN [ACÁ][3]**


## 🚀 OBJETIVO

Desarrollar una aplicación de lista de tareas (To-Do List) usando JavaScript. El objetivo de este proyecto es integrar los conocimientos adquiridos sobre JavaScript y aplicarlos de manera práctica en la creación de una solución interactiva. Durante el desarrollo, se utilizarán diversas características fundamentales de JavaScript para estructurar, controlar y manejar el flujo de datos en la aplicación.

## 📃 INSTRUCCIONES

En función de tu proyecto personal previamente establecido, deberás implementar las siguientes funcionalidades y características utilizando JavaScript. A lo largo de esta actividad, debes demostrar el uso de estructuras de datos, control de flujo y modularización del código, además de la implementación de buenas prácticas de desarrollo web.

Recuerda que este proyecto formará parte del registro de evidencias de tu portafolio. Por lo tanto, debe reflejar tu dominio en el lenguaje JavaScript y tus habilidades en el desarrollo de aplicaciones interactivas.

## 👉 REQUISITOS MÍNIMOS

1. **Explicar las características fundamentales de JavaScript para el desarrollo web**  
En un archivo de tu repositorio (puede ser el README.md o un archivo aparte), deberás incluir una breve explicación sobre:
    * 👍 Qué es JavaScript y su rol en el desarrollo de aplicaciones web.
    * 👍 Las ventajas de usar JavaScript para crear aplicaciones interactivas en el navegador.
    * 👍 Ejemplos de funcionalidades que sólo pueden ser posibles gracias al uso de JavaScript (como la interactividad en formularios, listas dinámicas, validación en tiempo real, etc.).
    * 👉 Puedes leer la explicación [**ACÁ**][1].
2. **Utilizar variables simples y sentencias condicionales para resolver un problema básico**  
Implementa una funcionalidad en la que el usuario pueda agregar tareas a una lista y, al intentar agregar una tarea vacía, se muestre un mensaje de advertencia.
    * Deberás usar variables para almacenar las tareas y las acciones que se realizarán en la lista.
    * Utiliza sentencias condicionales (`if-else`) para verificar si el Usuario intenta agregar una tarea vacía.
3. **Utilizar arreglos y sentencias iterativas para mostrar y gestionar las tareas**  
En tu aplicación, deberás almacenar las tareas en un arreglo y luego mostrarlas dinámicamente en la página.  
    * 👍 Usa sentencias iterativas como `for` o `forEach` para recorrer el arreglo de tareas y mostrar cada una en la interfaz.
    * 👍 Implementa la capacidad de eliminar tareas de la lista al hacer clic en ellas. Esto requerirá recorrer el arreglo y actualizarlo correctamente.
4. **Codificar una solución utilizando funciones para modularizar el código**  
Organiza tu código en varias **funciones** que se encarguen de tareas específicas. Algunas de las funciones podrían ser:
    * `agregarTarea()` - Función que añade una nueva tarea.
    * 👍 `eliminarTarea()` - Función que elimina una tarea de la lista.
    * 👍 `mostrarTareas()` - Función que muestra todas las tareas en la interfaz.

5. **Utilizar objetos preconstruidos del lenguaje JavaScript para resolver un problema**  
En tu aplicación, deberás hacer uso de al menos un **objeto preconstruido** de JavaScript, como:
    * 👍`Date` - para mostrar la fecha actual cuando se agrega una tarea.
    * 👍`Math` - para generar un número aleatorio como identificador único de cada tarea.

6. **Gestionar el código fuente con Git y GitHub**  
Organiza el código en un repositorio de GitHub siguiendo las buenas prácticas:  
    * 👍 Asegúrate de tener un historial de commits claros y bien definidos.
    * 👍 Utiliza una estructura ordenada para el proyecto (separación de archivos HTML, CSS, JS).
    * 👍 Incluye un archivo `README.md` con una descripción clara del proyecto, cómo ejecutar el código, y las tecnologías`utilizadas.

## PRODUCTO ESPERADO
Tu proyecto debe contener los siguientes elementos:  

1. **👍 Estructura HTML5**: Página web básica con una lista de tareas donde el usuario pueda agregar y eliminar elementos.
2. **👍 CSS**: Estilos básicos para una presentación visual limpia y funcional.
3. **👍⚠️ Interactividad con JavaScript**: Funcionalidad dinámica para agregar y eliminar tareas, con validaciones básicas (como verificar que la tarea no esté vacía).
4. **👍 Funciones reutilizables**: Implementación de al menos tres funciones que realicen tareas especificas.
5. **👍 Explicación en el repositorio**: Explicación clara sobre cómo JavaScript facilita la interacción y manipulación del DOM, así como el control de flujo y estructura de datos.
6. **👍 Gestión en GitHub**: Un repositorio bien organizado con commits frecuentes y descriptivos.

### Recomendaciones Adicionales

* **Pruebas**: Asegúrate de probar la funcionalidad de agregar y eliminar tareas, así como la validación de entrada.
* **Estilo**: La interfaz debe ser sencilla pero clara. No es necesario usar un framework como Bootstrap, pero puedes optar por hacerlo si te sientes cómodo.
* **Accesibilidad**: Considera agregar etiquetas y descripciones accesibles, como el uso de etiquetas aria para accesibilidad.
* **Comentarios**: Es importante que tu código esté bien comentado, especialmente las partes que implementan lógica importante o compleja.


## 👀 NOTAS

Este proyecto es un intento de crear una aplicación que podría perfectamente ser utilizable en producción en el mundo real. Por ello su desarrollo quizá esté incompleto en el momento de ser revisado. Entiendo claramente las consecuencia de ello en la nota, pero también mi prioridad respecto a la inversión de tiempo que implica hacer software de cierta calidad.

Es mi primer intento de hacer arquitectura de la aplicación que sea agnóstica al flujo de entrada/salida. Para ello se ha modularizado lo más posible el desarrollo aunque en esta etapa de desarrollo requiere un refactor pesado para estar realmente limpia en la relación entre módulos y funciones. Eso implica que quizá "crearTarea()" no esté implementado en el momento de revisión.

`main.js` es solo el punto de entrada que inicializa la aplicación a través de `app.js`, que será considerado el "orquestador" de eventos y `tasksService.js` que es donde se deberian concentrar los métodos para gestionar la I/O de datos.

**ADVERTENCIA 1**: Se ha implementado `localStorage` para crear la clave `todo8fold`. Es necesario eliminarla manualmente por ahora.

**ADVERTENCIA 2**: Puedes ir conociendo en detalle mi proceso de creación de la app [**ACÁ**][4], pero es un archivo exhaustivo y de uso personal, por lo que no hay TLDR. **Avisado!** 😅

En base a las funcionalidades que espero ofrecer cuando esté terminado en su versión de producción v0.9, he creado el siguiente esquema del objeto `task`:
```Js
{
  color,            // String   : Para darles colores distintos/categorías
  creationDate,     // Date     : Fecha de creación de la tarea
  deadline,         // Date     : Para crear una fecha límite
  detail,           // Date     : Para detalles sobre la tarea (expanded features)
  done,             // Date     : Para marcar si está completada
  id,               // UUID()   : Id para la tarea. Math.random 1000000-9999999
  important,        // Boolean  : Podría ser para mostrar un indicador visual
  state,            // String   : ENUM-like, SAVED, SAVING, FOCUSED, DELETED, ARCHIVED, etc
  tags              // String[] : Un arreglo de etiquetas (expanded features)
  task,             // String   : Cuerpo de la tarea. Texto plano por ahora
}
```

De todas las anteriores, la más importante es `task.task` porque contiene el cuerpo mismo de la tarea y debe validarse que esté vacío al crearse.


## 📁 ESTRUCTURA DEL PROYECTO
**OBS.1:** La carpeta raíz en la entrega sigue la convención de entrega del bootcamp, pero acá se referencia por su nombre de proyecto.  

**OBS.2:** Esta estructura intenta sólo mostrar los archivos relevantes para la entrega. No promete -necesariamente- un detalle completo de la estructura de directorios.

```
📁 8fold.todo.list/  
├── index.html  
├── favicon.png  
├── README.md  
├── .gitignore  
└── 📁assets/  
    ├── 📁css/  
    │   └── style.css  
    ├── 📁img/
    |   └── new-card.svg  
    ├── 📁js/
    │    ├── main.js     
    │    ├── 📁lib/  
    │    │   ├── ctxMenu.js
    │    │   ├── db.js
    │    │   └── tasksService.js
    │    └── 📁util/  
    │        ├── friendlyDateFormatter.js
    │        └── microTools.js
    └── 📁utils/  
        ├── DOCS.md
        ├── entrega-01.png
        └── entrega-02.png
```

## EL USO DE JAVASCRIPT EN EL DESARROLLO WEB

### ¿Qué es? ¿Cuál es su rol?

Javascript es un lenguaje de programación que nació en 1995 como un pequeño lenguaje de _scripting_ para hacer manipulaciones del contenido de un sitio web que hicieran la interacción del usuario más dinámica. Orientado a _"diseñadores y personas sin conocimientos formales de programación"_, nació como parte de una estrategia de Netscape para diferenciarse de la compentencia pero luego creció y se extendió hasta convertirse en el lenguaje de propósito general más usado en el mundo, en parte gracias a su uso nativo en todos los navegadores web. 

Su rol en el navegador es ser una capa intermedia entre un programador y el usuario final de un sitio o aplicación web. Provee al programador de herramientas con las que este puede manipular prácticamente cada aspecto de aquello que está contenido dentro de una pestaña del navegador, facultándole para responder a cualquier interacción del usuario, como llenar formularios, mover el mouse sobre un elemento, hacer click, cambiar el tamaño de la página, pero también otros como crear interfaces complejas en 3D liberando todas las capacidades de los navegadores y hardware modernos (conocer tu ubicación para mantener actualizado a tu conductor en Uber, saber qué frecuencia tiene tu monitor para ajustar animaciones a su refresco y así optimizar recursos, entre muchas otras).


### ¿Qué beneficios tiene?

Basado en lo comentado anteriormente, se puede decir que su mayor beneficio es el de dotar de capacidades de respuesta interactiva al lenguaje HTML, que es un lenguaje de marcado, hecho para estructurar contenido estático y no para crear aplicaciones dinámicas. 

¿Qué funcionalidad de alguna aplicación web te parece entretenida o llama tu atención de forma particular? Casi sin duda alguna, cualquier respuesta que puedas dar será una característica que requiere de Javascript para existir. Piensa en Javascript como el "espíritu" que anima el contenido estático de tus sitios web, desde la página del banco, el correo electrónico, pasado por las tiendas de delivery, los websites de grandes tiendas e incluso los juegos y aplicaciones para uso específico como editores de imágenes online, y creadores de páginas web "sin programar", todo, requiere de Javascript. Ah, también el editor en que escribo este README, VSCode, es una "aplicación web". 

### Funcionalidades del browser que dependen de Javascript.
1. Cambiar el contenido de una aplicación en base a las deciciones del usuario.
2. Poder hacer llamados a servicios fuera de nuestro computador o del servidor donde se aloja nuestra aplicación para acceder a datos y servicios.
3. Controlar lo que sucede cuando se envía un formulario de forma dinámica, de tal manera que mejore la experiencia de uso del consumidor final. Un formulario puede ser validado y enviado directamente por html pero su llenado y feedback dinámico no es posible sin Javascript.
4. Hacer uso de características que hoy nos parecen naturales, como arrastrar y soltar elementos, o copiar contenido en el portapapeles.

## 📖 DOCUMENTACIÓN CONSULTADA
_Nada relevante por acá aún..._
<!-- * [][2]
* [][3]
* [][4]
* [][5] -->

## 🧰 UTILIDADES
_Nada relevante por acá aún..._

## PENDIENTES
- TODO Implementar método para agregar tarea **(4.1 - 2.1)** validando cuando intente crear una vacía **(2.2)**.



-------------------------------------------------------------------
                                LINKS
-------------------------------------------------------------------
[0]:./assets/utils/entrega-01.png
[1]:#el-uso-de-javascript-en-el-desarrollo-web
[2]:./assets/utils/entrega-02.png
[3]:#-notas
[4]:./assets/utils/DOCS.md
[5]:
