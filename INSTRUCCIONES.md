Laboratorio 5 - Mi Lista de tareas

📝 Objetivo
Vamos a desarrollar una pequeña aplicación llamada "Mini ToDo con Rutas" que permita
practicar el uso de rutas con React Router, persistencia de datos con localStorage y
efectos con useEffect.
Requerimientos:

1. Estructura de Rutas:
○ / → Página de inicio con un mensaje de bienvenida y un enlace a la lista de
tareas y Crear nueva Tarea.
○ /tasks → Página que muestre la lista de tareas almacenadas en
localStorage.
○ /tasks/new → Página con un formulario para agregar una nueva tarea.

2. Tareas:
○ Cada tarea debe tener:
■ id (string único, por ejemplo con Date.now().toString() o
UUID)
■ title (string, obligatorio)
■ done (booleano, inicia en false)

3. Persistencia con localStorage:
○ Las tareas deben guardarse en localStorage bajo la clave "tasks".
○ Si el usuario recarga la página, las tareas deben mantenerse.

4. useEffect:
○ Usa useEffect para:
■ Cargar las tareas desde localStorage cuando la aplicación inicia.
■ Actualizar localStorage automáticamente cada vez que cambie la
lista de tareas.

5. Funcionalidades básicas:
○ Mostrar todas las tareas en la página /tasks utilizando una tabla
○ Desde la lista de tareas, debe ser posible marcar una tarea como
completada.
○ El formulario en /tasks/new debe permitir agregar una tarea nueva.No
olvides validar el formulario con los datos básicos.
○ Botón para eliminar una tarea desde la lista de tareas

-> Al finalizar, sube tu proyecto en una carpeta .zip a ucursos. No olvides borrar la carpeta
node_modules.