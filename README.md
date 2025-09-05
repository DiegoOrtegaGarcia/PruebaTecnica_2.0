# Prueba Finalizada

Aquí está el proyecto de la prueba. Espero haber cumplido con todos los requisitos que se me pedían.

# Aspectos Que  Mejoraría

-Los estilos principalmente. Lo haría instalando Vuetify para tener un mejor diseño de UI, haciendo todo responsive y mejorando los estilos.

-Añadiría en el backend unos Resources para el modelo Task para modificar y hacer que la respuesta que va del backend al frontend se adapte más a las buenas prácticas. Más específicamente, me aseguraría de que en vez de llegar la propiedad is_completed en snake_case, se enviaría en camelCase.

-Añadiría también Request personalizadas para los métodos de create y update para hacer mejores validaciones y, además, realizarlas fuera del controlador.

-Crearía también un componente reutilizable para las tasks, que como propiedades acepte un objeto del tipo Task.

-Mejoraría el manejo de errores en los services. Podría mejorarlos en cada servicio o hacer un manejo centralizado usando los interceptores de Axios.

-Intenté seguir en el frontend una arquitectura modular, pero mejoraría creando en el módulo de Task su propio archivo de tipos para no crear las interfaces en los mismos hooks o servicios.

-Además, crearía en el localStorage una variable para guardar allí el array de tareas, para no estar llamando a la API cada vez que quiera refrescar la lista de tareas.
