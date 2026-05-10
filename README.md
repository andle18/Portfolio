# Andres Gomes - Online Resume

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This project showcases frontend development skills through a clean, accessible user interface with smooth animations and integrated analytics.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Contact Form**: Firebase Firestore integration for message storage
- **Analytics Integration**: Google Analytics 4 for tracking user behavior
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Accessibility**: ARIA labels and keyboard navigation support

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Backend**: Firebase (Firestore, Analytics)
- **Build Tool**: Vite
- **Deployment**: Vercel

## Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/andresG-online-resume.git
   cd andresG-online-resume
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   - Copy `.env.example` to `.env`
   - Fill in your Firebase configuration values:
     ```env
     VITE_API_KEY=your_api_key
     VITE_AUTH_DOMAIN=your_project.firebaseapp.com
     VITE_PROJECT_ID=your_project_id
     VITE_STORAGE_BUCKET=your_project.appspot.com
     VITE_MESSAGING_SENDER_ID=your_sender_id
     VITE_APP_ID=your_app_id
     VITE_MEASUREMENT_ID=G-XXXXXXXXXX
     ```

4. **Firebase Setup**
   - Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
   - Enable Firestore Database
   - Add a web app and copy the config values
   - Update Firestore security rules to allow contact form submissions

5. **Run development server**
   ```bash
   npm run dev
   ```

## Environment Variables

| Variable                   | Description                     | Required |
| -------------------------- | ------------------------------- | -------- |
| `VITE_API_KEY`             | Firebase API Key                | Yes      |
| `VITE_AUTH_DOMAIN`         | Firebase Auth Domain            | Yes      |
| `VITE_PROJECT_ID`          | Firebase Project ID             | Yes      |
| `VITE_STORAGE_BUCKET`      | Firebase Storage Bucket         | Yes      |
| `VITE_MESSAGING_SENDER_ID` | Firebase Messaging Sender ID    | Yes      |
| `VITE_APP_ID`              | Firebase App ID                 | Yes      |
| `VITE_MEASUREMENT_ID`      | Google Analytics Measurement ID | Yes      |

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills showcase
│   ├── ProjectsPreview.tsx  # Featured projects
│   ├── Contact.tsx     # Contact form
│   ├── Navbar.tsx      # Navigation
│   └── Footer.tsx      # Footer
├── pages/              # Page components
│   ├── Home.tsx        # Main page
│   └── ProjectsPages.tsx  # Projects page
├── lib/                # Utilities and configurations
│   └── firebase.ts     # Firebase setup and analytics
└── App.tsx             # Main app component
```

## Future Improvements

- Add unit and integration tests with Vitest
- Implement dark mode toggle
- Add internationalization (i18n) support
- Create admin dashboard for managing contact messages
- Add more detailed project case studies
- Implement email notifications for new contacts
- Add performance monitoring and error tracking

---

# Andres Gomes - Portafolio Online

Un sitio web de portafolio moderno y responsivo construido con React, TypeScript y Tailwind CSS. Este proyecto muestra habilidades de desarrollo frontend a través de una interfaz de usuario limpia y accesible con animaciones suaves y análisis integrados.

## Características

- **Diseño Responsivo**: Optimizado para escritorio, tablet y dispositivos móviles
- **Animaciones Suaves**: Framer Motion para interacciones de usuario atractivas
- **Formulario de Contacto**: Integración con Firebase Firestore para almacenamiento de mensajes
- **Integración de Analytics**: Google Analytics 4 para seguimiento del comportamiento del usuario
- **Optimizado para SEO**: Etiquetas meta apropiadas y estructura HTML semántica
- **Accesibilidad**: Etiquetas ARIA y navegación por teclado

## Tecnologías

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Enrutamiento**: React Router DOM
- **Animaciones**: Framer Motion
- **Backend**: Firebase (Firestore, Analytics)
- **Herramienta de Construcción**: Vite
- **Despliegue**: Vercel

## Instalación y Configuración

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/yourusername/andresG-online-resume.git
   cd andresG-online-resume
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Configuración del Entorno**
   - Copiar `.env.example` a `.env`
   - Completar los valores de configuración de Firebase:
     ```env
     VITE_API_KEY=your_api_key
     VITE_AUTH_DOMAIN=your_project.firebaseapp.com
     VITE_PROJECT_ID=your_project_id
     VITE_STORAGE_BUCKET=your_project.appspot.com
     VITE_MESSAGING_SENDER_ID=your_sender_id
     VITE_APP_ID=your_app_id
     VITE_MEASUREMENT_ID=G-XXXXXXXXXX
     ```

4. **Configuración de Firebase**
   - Crear un proyecto Firebase en [console.firebase.google.com](https://console.firebase.google.com)
   - Habilitar Firestore Database
   - Agregar una aplicación web y copiar los valores de configuración
   - Actualizar las reglas de seguridad de Firestore para permitir envíos del formulario de contacto

5. **Ejecutar servidor de desarrollo**
   ```bash
   npm run dev
   ```

## Variables de Entorno

| Variable                   | Descripción                              | Requerida |
| -------------------------- | ---------------------------------------- | --------- |
| `VITE_API_KEY`             | Clave API de Firebase                    | Sí        |
| `VITE_AUTH_DOMAIN`         | Dominio de Auth de Firebase              | Sí        |
| `VITE_PROJECT_ID`          | ID del Proyecto Firebase                 | Sí        |
| `VITE_STORAGE_BUCKET`      | Bucket de Storage de Firebase            | Sí        |
| `VITE_MESSAGING_SENDER_ID` | ID del Remitente de Mensajes de Firebase | Sí        |
| `VITE_APP_ID`              | ID de la App de Firebase                 | Sí        |
| `VITE_MEASUREMENT_ID`      | ID de Medición de Google Analytics       | Sí        |

## Scripts

- `npm run dev` - Iniciar servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Vista previa de la construcción de producción
- `npm run lint` - Ejecutar ESLint

## Estructura del Proyecto

```
src/
├── components/          # Componentes UI reutilizables
│   ├── Hero.tsx        # Sección de aterrizaje
│   ├── About.tsx       # Sección Acerca de
│   ├── Skills.tsx      # Muestra de habilidades
│   ├── ProjectsPreview.tsx  # Proyectos destacados
│   ├── Contact.tsx     # Formulario de contacto
│   ├── Navbar.tsx      # Navegación
│   └── Footer.tsx      # Pie de página
├── pages/              # Componentes de página
│   ├── Home.tsx        # Página principal
│   └── ProjectsPages.tsx  # Página de proyectos
├── lib/                # Utilidades y configuraciones
│   └── firebase.ts     # Configuración de Firebase y analytics
└── App.tsx             # Componente principal de la app
```

## Mejoras Futuras

- Agregar pruebas unitarias e de integración con Vitest
- Implementar alternancia de modo oscuro
- Agregar soporte de internacionalización (i18n)
- Crear panel de administración para gestionar mensajes de contacto
- Agregar estudios de caso más detallados de proyectos
- Implementar notificaciones por email para nuevos contactos
- Agregar monitoreo de rendimiento y seguimiento de errores

---

Construido con ❤️ por Andres Gomes

## Descripción del Proyecto

Este proyecto es mi portafolio principal como desarrollador frontend junior. Está pensado para mostrar proyectos, habilidades y una arquitectura de interfaz clara y mantenible.

## Funcionalidades

- UI consistente y profesional
- Diseño responsive para móvil y escritorio
- Animaciones suaves con Framer Motion
- Estructura accesible y semántica
- Arquitectura por componentes

## Tecnologías

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router
- Vite
- Firebase (integración básica)

## Instalación y ejecución

```bash
npm install
```

```bash
npm run dev
```

## Variables de entorno

Crea un archivo `.env` en la raíz con estas variables:

```
VITE_API_KEY=
VITE_AUTH_DOMAIN=
VITE_PROJECT_ID=
VITE_STORAGE_BUCKET=
VITE_MESSAGING_SENDER_ID=
VITE_APP_ID=
VITE_MEASUREMENT_ID=
```

## Scripts

- `npm run dev` — servidor de desarrollo
- `npm run build` — typecheck y build de producción
- `npm run preview` — preview del build
- `npm run lint` — ejecutar ESLint

## Estructura del Proyecto

```
src/
	components/
		About.tsx
		Contact.tsx
		Footer.tsx
		Hero.tsx
		Navbar.tsx
		ProjectsPreview.tsx
		Skills.tsx
	lib/
		firebase.ts
	pages/
		Home.tsx
		ProjectsPages.tsx
	App.tsx
	main.tsx
```

## Mejoras futuras

- Extraer data de proyectos a JSON o CMS
- Validación de email y mejor manejo de errores en el formulario
- Endpoint real para contacto (validación del lado servidor)
- Revisión de accesibilidad y performance con Lighthouse

## Demo

https://your-live-demo-url.com

## Contacto

- Email: andres@email.com
- GitHub: https://github.com/andle18
