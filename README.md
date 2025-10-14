# Doctorado en Geografía - UNSJ

Sitio web oficial del Doctorado en Geografía de la Universidad Nacional de San Juan (UNSJ), desarrollado con React + TypeScript + Vite.

## 🚀 Tecnologías Utilizadas

- **React 19** con TypeScript
- **Vite** como herramienta de desarrollo
- **React Router DOM v6** con `createBrowserRouter` para navegación
- **Tailwind CSS** para estilos (con colores personalizados del proyecto)
- **Firebase** para backend y autenticación
- **PostCSS** + **Autoprefixer** para compatibilidad CSS

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Navbar.tsx      # Barra de navegación
│   └── Footer.tsx      # Pie de página
├── pages/              # Páginas de la aplicación
│   ├── Home.tsx        # Página principal
│   ├── Doctorado.tsx   # Información del doctorado
│   ├── Noticias.tsx    # Noticias y eventos
│   ├── Cursos.tsx      # Listado de cursos
│   ├── Contacto.tsx    # Información de contacto
│   ├── Login.tsx       # Autenticación
│   └── Dashboard.tsx   # Panel de administración
├── router/             # Configuración de rutas
│   └── router.tsx      # Rutas principales con createBrowserRouter
├── firebase/           # Configuración de Firebase
├── App.tsx            # Layout principal con Outlet
└── main.tsx           # Punto de entrada con RouterProvider
```

## 🎨 Paleta de Colores

El proyecto utiliza una paleta de colores personalizada integrada con Tailwind CSS:

### Purple Theme
- `purple-1` a `purple-12`: Escalas de morado
- `purple-9`: Color principal morado (`#a6177c`)

### Blue Theme  
- `blue-1` a `blue-12`: Escalas de azul
- `blue-9`: Color principal azul (`#216196`)

### Colores Principales
- `accent`: #216196 (Azul principal)
- `background`: #FAFDFF (Fondo)
- `text`: #222936 (Texto principal)

## 🛠️ Instalación y Configuración

### Pasos realizados en el setup:

1. **Instalación de dependencias principales:**
```bash
npm install react-router-dom firebase tailwindcss postcss autoprefixer @tailwindcss/postcss
npm install --save-dev @types/react-router-dom
```

2. **Configuración de Tailwind CSS:**
   - Creación de `tailwind.config.js` con colores personalizados
   - Configuración de `postcss.config.js` con `@tailwindcss/postcss`
   - Integración de directivas `@tailwind` en `index.css`

3. **Implementación de React Router v6:**
   - Patrón moderno con `createBrowserRouter`
   - Estructura de rutas anidadas con `Outlet`
   - Separación de configuración en `src/router/router.tsx`

4. **Estructura de componentes:**
   - Layout principal en `App.tsx` con Navbar, Outlet y Footer
   - Páginas individuales como componentes separados
   - Componentes reutilizables (Navbar, Footer)

## 🎯 Funcionalidades Planeadas

- ✅ Estructura base del proyecto
- ✅ Página de inicio (Home) - **COMPLETADA**
- ⏳ Información del doctorado
- ⏳ Sistema de noticias/posts
- ⏳ Listado de cursos
- ⏳ Formulario de contacto
- ⏳ Sistema de autenticación (Firebase)
- ⏳ Dashboard administrativo
- ⏳ Internacionalización (ES/EN)

## 🚦 Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Preview de la build
npm run preview
```


**Universidad Nacional de San Juan - Facultad de Filosofía, Humanidades y Artes**

