# Sistema de Rutas Dinámicas para Noticias

## 📋 Descripción

Sistema completo de navegación para noticias individuales usando React Router con parámetros dinámicos.

## 🗺️ Flujo de Navegación

```
/noticias (Lista) → Click en tarjeta → /noticias/:id (Detalle)
```

## 🏗️ Arquitectura

### 1. **Rutas Configuradas**
```typescript
// router.tsx
{
  path: "/noticias",
  element: <Noticias />  // Lista de noticias
},
{
  path: "/noticias/:id",
  element: <Noticia />   // Detalle individual
}
```

### 2. **Componentes Involucrados**

#### `ArticleCard.tsx` (Tarjeta Clickeable)
- **Props**: `id` (opcional) - ID de la noticia
- **Comportamiento**: 
  - Si recibe `id` → Envuelve contenido en `<Link to={/noticias/${id}}>`
  - Si NO recibe `id` → Renderiza tarjeta sin link (para demos)

```typescript
// Con ID (clickeable)
<ArticleCard
  id="abc123"
  image="..."
  title="..."
  // ... otros props
/>

// Sin ID (estático)
<ArticleCard
  image="..."
  title="..."
  // ... otros props
/>
```

#### `Noticias.tsx` (Página Lista)
- Obtiene todas las noticias con `useNoticias()`
- Pasa el `id` a cada `ArticleCard`
- Cada tarjeta se vuelve un link a `/noticias/{id}`

```typescript
noticias.map((noticia) => (
  <ArticleCard
    key={noticia.id}
    id={noticia.id}  // ← ID pasado para hacer clickeable
    image={noticia.imagencentral}
    // ... resto de props
  />
))
```

#### `Noticia.tsx` (Página Detalle)
- Usa `useParams()` para obtener el `id` de la URL
- Hace fetch individual de la noticia desde Firebase
- Muestra contenido completo con todos los campos

**Campos mostrados:**
- ✅ Título y subtítulo
- ✅ Categoría
- ✅ Autor (con imagen y posición)
- ✅ Fecha formateada
- ✅ Imagen central
- ✅ Cuerpo completo
- ✅ Frase destacada (quote)
- ✅ Imagen secundaria
- ✅ Conclusión
- ✅ Breadcrumb de navegación
- ✅ Botón "Volver a Noticias"

## ⚡ Optimización

### **Fetch Individual vs. Pasar Props**
❌ **No usamos**: Pasar toda la noticia como state en el Link
```typescript
// Esto NO lo hacemos (menos eficiente)
<Link to="/noticia" state={{ noticia }}>
```

✅ **Usamos**: Solo pasar ID y hacer fetch individual
```typescript
// Esto SÍ hacemos (más eficiente y SEO-friendly)
<Link to={`/noticias/${id}`}>
```

**Ventajas:**
1. **URL compartible**: `/noticias/abc123` funciona directamente
2. **Recarga funcional**: Si actualizas la página, sigue funcionando
3. **SEO optimizado**: Cada noticia tiene su propia URL única
4. **Estado limpio**: No contamina el state del router
5. **Deep linking**: Puedes guardar/compartir links específicos

## 🔄 Estados Manejados

### `Noticia.tsx` maneja 3 estados:

1. **Loading** (cargando)
```typescript
if (loading) return <Spinner />
```

2. **Error** (noticia no encontrada o error de red)
```typescript
if (error) return <ErrorMessage />
```

3. **Success** (noticia cargada)
```typescript
return <ArticleContent />
```

## 🎨 UI/UX Features

### Breadcrumb
```
Inicio / Noticias / {titulo-de-noticia}
```

### Navegación
- Link "Volver a Noticias" al final del artículo
- Botón de regreso en caso de error
- Breadcrumb clickeable

### Responsive
- Layout optimizado para mobile/tablet/desktop
- Imágenes responsivas
- Typography escalable

### Dark Mode
- Soporte completo en todos los componentes
- Colores adaptados al tema (blue-9/purple-9)

## 🔍 Ejemplo de Uso

```typescript
// Usuario hace click en tarjeta
URL: /noticias

// React Router navega a:
URL: /noticias/Kx4mW9RLaJ8nQvP2fY5r

// useParams extrae:
const { id } = useParams(); // "Kx4mW9RLaJ8nQvP2fY5r"

// Fetch individual:
const docRef = doc(db, 'noticias', id);
const docSnap = await getDoc(docRef);

// Renderiza noticia completa
```

## 📦 Dependencias

```typescript
import { useParams, useNavigate, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
```

## 🚀 Para Extender

### Agregar más páginas de detalle (ej: Cursos)

1. Crear `CursoDetalle.tsx` similar a `Noticia.tsx`
2. Agregar ruta en `router.tsx`:
```typescript
{
  path: "/cursos/:id",
  element: <CursoDetalle />
}
```
3. Actualizar `CourseCard` para aceptar `id` prop
4. Envolver en `<Link to={`/cursos/${id}`}>`

## ✅ Checklist de Implementación

- [x] Ruta dinámica configurada (`/noticias/:id`)
- [x] `useParams()` implementado en Noticia.tsx
- [x] Fetch individual con error handling
- [x] ArticleCard acepta prop `id`
- [x] ArticleCard envuelve en Link cuando tiene id
- [x] Noticias.tsx pasa id a cada tarjeta
- [x] Loading y error states
- [x] Navegación breadcrumb
- [x] Botón de regreso
- [x] Dark mode support
- [x] Responsive design
- [x] TypeScript types correctos
