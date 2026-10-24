# Revisión funcional de las demos

Fecha: 24 de octubre de 2026. Pruebas en Chrome, escritorio y comprobaciones puntuales a 375 px de ancho. Se revisaron las ocho demos enlazadas desde el portafolio.

Las conclusiones describen lo observado en esta sesión. Una carga correcta o una respuesta HTTP 200 no garantizan que todos los flujos funcionen. No se crearon cuentas, se enviaron recuperaciones de contraseña ni se confirmaron pedidos. Las operaciones de Calorías y Gastos se hicieron con datos ficticios en almacenamiento local. Se realizó una prueba de IA en Cócteles y un análisis de un ticket ficticio en TicketNova.

## Resultado general

| Proyecto | Estado observado | Acción principal |
| --- | --- | --- |
| [TicketNova](https://ticketnova-lyart.vercel.app/) | El flujo de perfil, subida y análisis funciona. | Revisar el indicador F/UP cuando no hay ultraprocesados. |
| [Menú de pedidos](https://kioskly-orcin.vercel.app/order/coffee) | Catálogo y carrito funcionan en la ruta correcta. | Corregido el enlace del portafolio y del CV. |
| [Crypto Tracker](https://cryptotraker-react-zod-typescript.netlify.app/) | No carga la lista de criptomonedas. | Resolver el acceso a la API y mostrar estados de error. |
| [AI Cocktail Recommender](https://drinks-ai-react.vercel.app/) | Generación de IA fallida y ruta directa con 404. | Proteger la clave, actualizar el modelo y corregir las rutas. |
| [Calorie Tracker](https://calorie-traker.netlify.app/) | Flujos principales y persistencia correctos. | Pulir accesibilidad y recursos de marca. |
| [Expense Tracker](https://expense-tracker-gomes.netlify.app/) | Presupuesto, gastos, edición, filtros y persistencia correctos. | Pulir textos y accesibilidad de las acciones. |
| [Weather Forecast](https://euphonious-licorice-2c760b.netlify.app/) | La búsqueda devuelve condiciones y maneja ciudad inexistente. | Limpiar un error de validación que queda visible tras corregir datos. |
| [Task Manager](https://uptask-frontend-lyart.vercel.app/auth/login) | Pantallas públicas y validaciones cargan; gestión de tareas sin verificar. | Corregir móvil y facilitar una cuenta de demostración. |

## Hallazgos por proyecto

### TicketNova

- El formulario de perfil valida campos vacíos y permite continuar con datos ficticios.
- La vista de subida se ajusta a 375 px sin desbordamiento observado.
- Se subió una imagen de prueba con cuatro productos y un total de 6,00 EUR. El análisis devolvió los cuatro productos y el total correcto, y mostró la vista de resultados sin errores HTTP ni excepciones JavaScript.
- Detalle a corregir: con 2,00 EUR en productos frescos y 0,00 EUR en ultraprocesados, el indicador F/UP muestra `0,00` y se clasifica como bajo. Debe contemplarse expresamente el caso de denominador cero y mostrarse un estado comprensible en vez de tratarlo como una proporción baja.
- No se evaluó la exactitud de las recomendaciones nutricionales. La comprobación de móvil cubrió perfil y subida, no todos los resultados posibles.

Código local disponible en `../ticket-analyzer`; repositorio: [andle18/ticketnova](https://github.com/andle18/ticketnova).

### Menú de pedidos

- El enlace anterior del portafolio apuntaba a `/order/cafe`, que muestra categorías pero ningún producto.
- El enlace Coffee de la propia aplicación apunta a `/order/coffee`. Esa ruta muestra el catálogo correctamente; Burgers también muestra productos.
- Añadir un producto de 5,49 USD al carrito muestra cantidad 1, subtotal 5,49 USD y total 5,49 USD.
- La vista Burgers cabe a 375 px en la comprobación realizada.
- No se confirmó ningún pedido ni se comprobó su recepción en administración.
- El título de la página todavía es `Kiosk Next.js with App Router and Prisma`; conviene sustituirlo por el nombre del producto.

Se corrigió el enlace a `/order/coffee` en `ProjectsPreview.tsx`, `ProjectsPages.tsx`, README y el PDF descargable. También se actualizaron los enlaces del CV editable generado en esta sesión. El arreglo del portafolio sigue siendo local hasta el próximo despliegue.

Repositorio: [andle18/kiosk-next-app](https://github.com/andle18/kiosk-next-app).

### Crypto Tracker — prioridad alta

- En dos cargas, el selector de criptomonedas quedó vacío.
- La solicitud a `min-api.cryptocompare.com/data/top/mktcapfull` falla en el navegador con un error CORS `MissingAllowOriginHeader`.
- Se registra una excepción sin tratar y la interfaz no explica que no se pudo cargar la lista. No fue posible verificar una cotización real.
- La validación de envío vacío sí funciona; no se observó desbordamiento a 375 px.

Revisar el proveedor y el endpoint utilizados, resolver el acceso desde el despliegue y añadir estados de carga y error recuperables.

Repositorio: [andle18/crypto-price-tracker-react](https://github.com/andle18/crypto-price-tracker-react).

### AI Cocktail Recommender — prioridad alta

- Una petición de prueba de generación devuelve HTTP 404 de OpenRouter: el modelo gratuito configurado ya no está disponible como gratuito.
- La interfaz queda sin receta ni aviso útil; el error aparece en consola.
- La llamada a OpenRouter sale directamente del navegador. Se confirmó un literal con formato de clave del proveedor en el JavaScript público y la lógica de autenticación Bearer. No se incluye el valor en este informe. Conviene revocar o rotar esa clave y mover la llamada a una función de servidor.
- Abrir o recargar directamente `/generate` devuelve el 404 de Vercel, aunque navegar a ella desde el menú funciona. Revisar la reescritura de la SPA.
- El selector de categorías no recibió datos en la sesión; una consulta independiente a TheCocktailDB también agotó el tiempo de espera. Esto no demuestra una caída global, pero impidió comprobar búsqueda, detalle y favoritos con resultados reales.
- Favorites muestra su estado vacío. La validación de búsqueda vacía funciona. No se observó desbordamiento a 375 px.
- `/favicon.ico` devuelve 404.

Repositorio: [andle18/drinks-ai-react](https://github.com/andle18/drinks-ai-react).

### Calorie Tracker

- Crear comida de 500 calorías y ejercicio de 200 muestra diferencia de 300.
- Editar la comida a 450 actualiza la diferencia a 250; eliminar las actividades vuelve los totales a cero.
- Los datos persisten al recargar. La vista cabe a 375 px y no hubo excepciones JavaScript durante los flujos probados.
- Una entrada de -10 se normalizó a 10 al guardar; no se confirmó un fallo aritmético por números negativos.
- Pulir los nombres accesibles de los botones de editar y eliminar. `/vite.svg` devuelve 404.

Repositorio: [andle18/calorie-tracker-react](https://github.com/andle18/calorie-tracker-react).

### Expense Tracker

- Presupuesto de 1.000 y gasto de 50: saldo 950 y 5 % gastado.
- Editar el gasto a 75 actualiza el saldo a 925 y el porcentaje a 7,5 %.
- Se verificaron persistencia al recargar, filtros por categoría y validación de campos vacíos e importes.
- No se confirmó el borrado mediante un gesto móvil simulado; no se considera un fallo demostrado.
- Pulir una etiqueta `Amount:` duplicada, un placeholder en español con errata dentro de la interfaz en inglés y el acceso por teclado a las acciones de edición y borrado.
- `/vite.svg` devuelve 404.

Repositorio: [andle18/Expense-Tracker](https://github.com/andle18/Expense-Tracker).

### Weather Forecast

- Buscar Madrid y España devuelve condiciones, temperatura y máximas/mínimas, sin fallos HTTP de la API ni excepciones en ese flujo.
- Buscar una ciudad inexistente muestra `CITY NOT FOUND`.
- Fallo reproducido: tras enviar el formulario vacío, `ALL FIELDS ARE REQUIRED.` sigue visible al buscar correctamente una ciudad, junto con el resultado válido. Hay que limpiar el estado del error cuando se corrigen y envían datos válidos.
- No se observó desbordamiento a 375 px. `/vite.svg` devuelve 404.

Repositorio: [andle18/Weather_page](https://github.com/andle18/Weather_page).

### Task Manager

- Login, registro y recuperación cargan sin excepciones JavaScript y validan correctamente campos vacíos.
- A 375 px, el documento ocupa 451 px por un contenedor de ancho fijo de 450 px; el contenido se recorta en móvil.
- Faltan asociaciones entre algunas etiquetas y campos. `/vite.svg` devuelve 404.
- No se intentaron credenciales, crearon cuentas ni enviaron recuperaciones. El acceso real, la disponibilidad del backend y la gestión de tareas no se han confirmado.
- Para presentarlo a reclutadores, conviene ofrecer una cuenta de demostración o un recorrido que permita revisar las funciones principales.

Repositorio: [andle18/uptask_frontend](https://github.com/andle18/uptask_frontend).

## Orden recomendado

1. Cócteles: retirar la clave del cliente, rotarla, seleccionar un modelo disponible, mostrar errores y corregir la ruta directa.
2. Crypto: recuperar la carga de monedas y la cotización con estados de error.
3. Task Manager: ajustar móvil y comprobar el flujo autenticado con acceso de demostración.
4. Weather: limpiar el error que permanece tras corregir el formulario.
5. TicketNova: tratar correctamente el indicador con cero ultraprocesados.
6. Pulir favicons, nombres accesibles, textos y títulos del resto.

Las aplicaciones con flujos correctos siguen necesitando pruebas más amplias antes de afirmar que están libres de errores. Esta revisión identifica prioridades concretas y no sustituye pruebas automatizadas o una revisión de seguridad completa.
