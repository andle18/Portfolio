# Revisión global del portafolio

Fecha: 24 de octubre de 2026.

## Estado tras las modificaciones de esta sesión

Actualización del contacto: Firebase se retiró del código y de las dependencias. El formulario usa `@emailjs/browser` con las variables `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID` y `VITE_EMAILJS_PUBLIC_KEY`. Las visitas en producción pasan a Vercel Web Analytics; se retiraron los eventos personalizados de Firebase. Se añadieron etiquetas asociadas a los campos, validación, límites de longitud, avisos accesibles, honeypot y limitación local de reintentos. Los mensajes se conservan ante errores y un envío pendiente no se convierte en error por un temporizador de diez segundos. Se comprobaron esos flujos con respuestas simuladas; la recepción real en el correo y la configuración del despliegue siguen requiriendo una prueba real. Los hallazgos sobre Firebase y las cifras del análisis de dependencias que aparecen más abajo corresponden al diagnóstico previo a esta migración.

El cuerpo de este documento conserva el diagnóstico inicial. Desde entonces se corrigió la navegación desde `/projects` a Home, About, Skills y Contact, se añadió margen para la cabecera fija y se sustituyeron los enlaces internos principales por enlaces de React Router. La navegación se comprobó en Chrome en escritorio y móvil.

También se retiró la foto personal, se añadió un favicon de iniciales y se incorporaron imágenes a los destacados y una tarjeta de TicketNova compartida entre ambas vistas. Actualmente hay cuatro destacados y ocho proyectos en el catálogo. El diálogo móvil ya tiene un nombre accesible.

El README se reescribió con enlaces reales, instrucciones de instalación, tecnologías verificadas y límites de la implementación. `.env.example` contiene una plantilla vacía y ya no está ignorado. En la última revisión, `npm run build` y `npm run lint` pasan; el JavaScript sigue rondando los 699 kB antes de gzip.

Siguen pendientes, entre otros, los repositorios y casos de estudio de los proyectos, el flujo de contacto con conexiones lentas, las reglas desplegadas de Firebase, la accesibilidad del formulario, los metadatos, la página de error, el peso de recursos y las actualizaciones de dependencias. No se repitió la consulta de avisos de npm ni se enviaron mensajes reales en esta revisión. Los hallazgos históricos de abajo deben leerse con estas correcciones en cuenta.

---

El proyecto compila y carga, pero todavía presenta fallos de navegación, limitaciones en el formulario y detalles de presentación que conviene resolver antes de mostrarlo como trabajo terminado. Esta revisión no modifica el código de la aplicación ni actualiza dependencias.

## Comprobaciones realizadas

- `npm run build`: correcto; TypeScript no detecta errores. Vite advierte de un archivo JavaScript grande: 699,43 kB, 227,74 kB con gzip.
- `npm run lint`: correcto.
- Chrome: comprobaciones puntuales de la portada y `/projects`, escritorio de 1440 × 900 y móvil de 375 × 812. No se registraron excepciones JavaScript durante esas comprobaciones.
- Navegación desde `/projects`: reproducido el fallo al pulsar Contact. About y Skills comparten la misma lógica defectuosa.
- Ruta `/unknown-page`: reproducida la ausencia de contenido principal o página de error.
- Menú móvil: abre y muestra los cuatro enlaces; falta un nombre accesible para el diálogo.
- Las siete demos y el sitio de fotografía responden HTTP 200. GitHub también responde 200. LinkedIn devuelve 999, por lo que no se puede concluir si el perfil funciona mediante esta comprobación automatizada. Una respuesta 200 no verifica las funciones internas de las demos.
- Variables locales de Firebase: las siete variables esperadas tienen valores. No se han incluido sus valores en este informe. `.env` no figura entre los archivos versionados actuales.
- `npm audit`: 23 paquetes afectados según el registro consultado: 2 críticos, 15 altos, 5 moderados y 1 bajo. No se ha ejecutado `npm audit fix`.

## Prioridad alta

### 1. Enlaces del menú que fallan fuera de la portada

Referencia: `src/components/Navbar.tsx:38`.

El manejador cancela la navegación y busca el identificador en el documento actual. En `/projects` no existen `about`, `skills` ni `contact`, así que los enlaces no hacen nada. Deben poder navegar a `/#about`, `/#skills` y `/#contact`, y después desplazar hasta la sección correspondiente.

### 2. El formulario puede mostrar un error aunque el mensaje termine guardándose

Referencia: `src/components/Contact.tsx:52`.

`Promise.race` deja de esperar a los diez segundos, pero no cancela `addDoc`. Con una conexión lenta, el usuario puede recibir un error, reintentar y generar mensajes duplicados. Conviene diseñar explícitamente el estado de envío pendiente y la prevención de duplicados.

El formulario guarda documentos en Firestore; no hay implementación de notificaciones por correo. Guardar el mensaje no implica que llegue a la bandeja de entrada.

### 3. Dependencias con avisos de seguridad

Referencia: `package-lock.json`.

Los dos paquetes marcados como críticos son `protobufjs` y `websocket-driver`, ambos transitivos. También aparecen avisos en dependencias directas como `vite`, `react-router-dom` y `postcss`. npm indica correcciones disponibles para los 23 paquetes afectados.

Estas cifras incluyen herramientas de desarrollo y dependencias transitivas. No demuestran que los fallos sean explotables en este sitio estático: hay que revisar cada aviso, el código utilizado y el entorno antes de determinar su alcance. Actualizar de forma controlada y volver a comprobar la aplicación.

### 4. Configuración y protección de Firestore sin verificar

Referencias: `src/lib/firebase.ts:12`, `src/components/Contact.tsx:53`.

Firebase se inicializa sin validar primero las variables de entorno. Las variables presentes en este equipo no garantizan su configuración en Vercel.

El cliente escribe directamente en `contacts`. No hay reglas de Firestore ni configuración de App Check versionadas que permitan verificar permisos, validación de datos o medidas contra envíos abusivos. Esto no demuestra que las reglas desplegadas sean inseguras; su estado queda pendiente de revisión en Firebase.

## Prioridad media

### 5. Accesibilidad del formulario y las redes

Referencia: `src/components/Contact.tsx:169`.

Los campos tienen etiquetas visuales, pero no asociación mediante `htmlFor` e `id`. Faltan nombres accesibles en los enlaces que solo muestran iconos. Los errores no están asociados a sus campos y los avisos de éxito o error carecen de una región de anuncio. Faltan límites de longitud y atributos de autocompletado.

El campo de correo sí utiliza `type="email"`, por lo que existe validación básica del navegador. El manejador únicamente comprueba que los valores no estén vacíos; no sustituye una validación en el servidor o mediante reglas de Firestore. El mensaje de error actual expone detalles de Firestore al visitante en vez de ofrecerle una acción útil.

### 6. Rutas sin página de error y navegación incompleta

Referencias: `src/App.tsx:46`, `src/components/Hero.tsx:51`, `src/components/ProjectsPreview.tsx:144`.

No hay ruta comodín. Una URL desconocida deja solo la cabecera y el pie. Varios enlaces internos usan `<a>` y recargan toda la aplicación. Tampoco existe una gestión central del desplazamiento y del foco al cambiar de página. La cabecera fija no tiene compensación mediante `scroll-margin` en los destinos de las anclas.

La configuración `vercel.json` sí contiene la reescritura necesaria para una SPA; falta comprobar el despliegue real.

### 7. Experiencia inicial y preferencias de movimiento

Referencias: `src/components/WelcomeScreen.tsx`, `src/App.tsx:29`, `src/index.css`.

La bienvenida ocupa la pantalla aproximadamente 4,7 segundos contando la salida, sin opción de omitirla. No gestiona el foco ni impide alcanzar por teclado controles que quedan detrás. Sus dos encabezados `h1` se suman al de la página mientras está montada.

No hay tratamiento explícito de movimiento reducido para las animaciones. El acceso a `sessionStorage` tampoco contempla que el navegador lo rechace.

### 8. Presentación móvil y legibilidad

Referencias: `src/components/Footer.tsx:4`, `src/index.css`, componentes de contenido.

En Chrome a 375 px el pie comprime el nombre y el copyright en varias líneas porque mantiene todos sus elementos en una sola fila. Debe reorganizarse según el ancho disponible.

Hay numerosos textos pequeños con opacidades de blanco entre 20 % y 40 % sobre fondo oscuro. Requieren revisar contraste y tamaño, especialmente metadatos, etiquetas y pie. `overflow-x: hidden` puede ocultar desbordamientos; por sí solo no demuestra que el diseño se ajuste correctamente.

No existe un elemento `main` ni un enlace para saltar la navegación. El diálogo móvil carece de título accesible.

### 9. Metadatos y vista al compartir

Referencia: `index.html:7`.

El título sigue siendo `online-resume`. Faltan descripción, etiquetas Open Graph y Twitter, URL canónica y metadatos propios para `/projects`. No existen `robots.txt` ni sitemap en el repositorio. La ausencia de estos dos últimos archivos no impide por sí sola la indexación.

El idioma `en` coincide con el contenido actual en inglés; no es un error. Si se cambia a español, hay que actualizarlo junto con los textos.

### 10. Peso de imágenes y carga inicial

Referencias: `public/`, `src/pages/ProjectsPages.tsx`, `src/lib/firebase.ts`.

Hay imágenes de aproximadamente 1 MB a 1,7 MB y una fotografía de perfil de unos 504 kB que también se usa como favicon. Las imágenes de proyectos no tienen carga diferida ni variantes adaptadas al tamaño de visualización.

El JavaScript se entrega en un único archivo grande. Revisar división por rutas y carga diferida de funciones de Firebase. No se ha ejecutado Lighthouse ni se han medido Core Web Vitals: los tamaños son evidencia de peso, no una puntuación de rendimiento.

### 11. Analytics y datos de contacto

Referencia: `src/lib/firebase.ts:30`.

Analytics se inicializa al registrar visitas y eventos, sin un control previo de consentimiento en el código. Tampoco hay una explicación visible sobre el uso de los datos del formulario. Debe definirse el comportamiento deseado y documentarlo antes de publicar; esta revisión no determina obligaciones legales.

## Contenido y mantenimiento

### 12. Presentación profesional pendiente de pulir

Referencias: `src/components/Hero.tsx:44`, `src/components/About.tsx`, `src/pages/ProjectsPages.tsx`.

La introducción termina en “My approach goes beyond aesthetics”, que queda poco desarrollada. Expresiones como “12+ Tools mastered” y “100% Commitment” aportan menos evidencia que resultados concretos de los proyectos.

La página de proyectos promete demos y código fuente, pero las tarjetas solo enlazan a las demos. Conviene añadir repositorios y explicar brevemente el problema, la contribución propia y las decisiones técnicas. No se ha contrastado que las tecnologías descritas coincidan con cada repositorio.

### 13. Datos duplicados y detalles de código

Los proyectos están definidos por separado en `ProjectsPreview.tsx` y `ProjectsPages.tsx`; el mismo proyecto de pedidos aparece con nombres distintos. Conviene mantener un catálogo único con selección de destacados.

`tailwind.config.js` declara Playfair Display y DM Mono, pero el proyecto no carga esas fuentes. En equipos donde no estén instaladas se utilizan las alternativas configuradas. `src/index.css` repite `.animate-float`.

`@vercel/analytics` y `react-hot-toast` figuran como dependencias, sin importaciones en el código de la aplicación. Revisar si siguen siendo necesarias. Su presencia en package.json no implica que se incluyan en el archivo JavaScript generado.

### 14. Documentación y verificaciones repetibles

Referencias: `README.md`, `.gitignore`, `package.json`.

El README repite secciones y conserva ejemplos como `yourusername`, `your-live-demo-url.com` y `andres@email.com`. Además, anuncia metadatos y accesibilidad que todavía están incompletos.

`.env.example` existe localmente, pero está ignorado y no está versionado, aunque el README indica copiarlo. Hay que preparar una plantilla con valores de ejemplo y permitir su seguimiento.

No hay pruebas automatizadas ni configuración de integración continua en el repositorio. Al corregir los fallos conviene cubrir los flujos con mayor riesgo: navegación entre páginas y envío de contacto.

## Orden propuesto para las correcciones

1. Revisar y actualizar las dependencias afectadas, con comprobaciones de compatibilidad.
2. Corregir navegación, rutas desconocidas y desplazamiento.
3. Resolver el flujo del formulario y verificar la configuración y las reglas de Firebase.
4. Ajustar accesibilidad, móvil y pantalla de bienvenida.
5. Optimizar recursos, metadatos y contenido de los proyectos.
6. Limpiar documentación y comprobar el despliegue final.

## Límites de esta revisión

No se han enviado mensajes de prueba a Firestore, leído mensajes privados, cambiado reglas, actualizado paquetes ni publicado cambios. El envío real del formulario, las reglas desplegadas, el entorno de Vercel y las funciones internas de las demos quedan pendientes de validación. La comprobación de navegador fue puntual en Chrome; no equivale a una revisión exhaustiva en todos los navegadores y dispositivos.
