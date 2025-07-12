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

- La aplicación debe implementar un crud básico para:  
  1. crear una tarea.  
  1. mostrar las tareas.   
  1. modificar una tarea.  
  1. eliminar una tarea. 

- La aplicación debería presentar siempre una tarjeta de ejemplo que ilustre las capacidades y características de las notas.
- La creación debería estar a cargo de un formulario muy estilizado, que simule una tarjeta. También el proceso de modificar una tarjeta debería utilizar este componente pero bloqueando aquellos campos que no deberían ser modificables. En este momento, y según yo, debido a que no tienen un caso de uso realista que justifique su modificación estarían bloqueados en el **UPDATE**:
    1. La fecha de creación,
    2. El id (que siempre estará oculto al usuario)

    Todo lo demás, debería poder modificarse.
- seguir...

### Arquitectura
- Haré un producto que hará uso de módulos `type="module"` porque de esta manera puedo organizar mejor el código y porque ya no hay justificación ni preocupación de que un browser no los soporte.
- Quiero intentar implementar algunas ideas como usar `localStorage` para almacenar las tareas. 