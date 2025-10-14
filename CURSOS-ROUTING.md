# Sistema de Rutas Dinámicas - Cursos

## ✅ Implementación Completada

Se implementó el mismo sistema de navegación dinámica para los cursos, siguiendo el patrón de noticias.

---

## 🗺️ Estructura de Rutas

```
/cursos           → Lista de cursos
/cursos/:id       → Detalle individual del curso
```

---

## 📁 Archivos Creados/Modificados

### ✨ Nuevos Archivos

1. **`src/components/Courses/CursoDetalle.tsx`**
   - Página completa de detalle del curso
   - Usa `useParams()` para obtener el ID
   - Fetch individual desde Firebase
   - Estados: loading, error, success

### 🔧 Archivos Modificados

2. **`src/components/Courses/CourseCard.tsx`**
   - Agregado prop `id?: string`
   - Envuelve contenido en `<Link>` cuando recibe id
   - Cambiado `button` a `div` para evitar conflictos de click

3. **`src/components/Courses/NextCourses.tsx`**
   - Pasa `id={course.id}` a cada CourseCard

4. **`src/router/router.tsx`**
   - Agregado import de `CursoDetalle`
   - Agregada ruta `/cursos/:id`

5. **`src/components/Home/FeaturedArticleCard.tsx`**
   - Agregado `referrerPolicy="no-referrer"` a imagen de autor
   - Cambiado `button` a `div` para "Leer más"

6. **`src/components/Home/ArticleSection.tsx`**
   - Agregado `id={noticia.id}` a FeaturedArticleCard

---

## 🎨 Página de Detalle del Curso (`CursoDetalle.tsx`)

### Campos Mostrados:

- ✅ **Breadcrumb**: Inicio / Cursos / {título}
- ✅ **Badge de categoría**: Doctorado, Maestría, etc.
- ✅ **Fecha destacada**: Día, mes, año con icono
- ✅ **Título y Subtítulo**: Typography grande y clara
- ✅ **Inscriptos**: Contador con icono de usuarios
- ✅ **Imagen del curso**: Full width responsive
- ✅ **Descripción completa**: Cuerpo con formato whitespace-pre-line
- ✅ **CTA de inscripción**: Box destacado con gradiente y link a contacto
- ✅ **Botón "Volver a Cursos"**: Navegación fácil

### Estados Manejados:

1. **Loading**: Spinner mientras carga
2. **Error**: Mensaje de error + botón para volver
3. **Success**: Muestra todo el contenido

---

## 🔄 Flujo de Usuario

```
1. Usuario en /cursos
   ↓
2. Ve tarjetas de cursos (CourseCard)
   ↓
3. Click en "Ver más..."
   ↓
4. Navega a /cursos/abc123
   ↓
5. useParams() extrae el ID
   ↓
6. Hace fetch a Firebase: doc(db, 'cursos', id)
   ↓
7. Muestra curso COMPLETO
```

---

## 💡 Diferencias con Noticias

### Noticias:
- Autor con foto y posición
- Frase destacada en quote
- Imagen secundaria
- Conclusión separada

### Cursos:
- Fecha destacada visualmente
- Contador de inscriptos
- CTA de inscripción con gradiente
- Link directo a contacto

---

## 🎯 Ventajas

✅ **URLs compartibles**: `/cursos/abc123`  
✅ **Deep linking**: Funciona en refresh  
✅ **SEO optimizado**: Cada curso tiene URL única  
✅ **Escalable**: Patrón reutilizable  
✅ **Performance**: Solo carga lo necesario  

---

## 🧪 Para Probar

1. Ir a página de inicio (Home)
2. Buscar sección "Próximos Cursos"
3. Click en "Ver más..." de cualquier curso
4. Deberías ver el curso completo en `/cursos/{id}`
5. Click en "Volver a Cursos" o breadcrumb
6. Copiar URL y pegar en nueva pestaña → ¡Funciona!

---

## 📊 Comparación: Antes vs Ahora

### Antes:
```tsx
<CourseCard
  day={10}
  month="ENE"
  title="Curso de ejemplo"
  isClosest={true}
/>
// ❌ No era clickeable
```

### Ahora:
```tsx
<CourseCard
  id="abc123"        // ← ID agregado
  day={10}
  month="ENE"
  title="Curso de ejemplo"
  isClosest={true}
/>
// ✅ Es clickeable y navega a /cursos/abc123
```

---

## 🎨 UI/UX Features

### Página de Detalle:
- 🌓 **Dark mode** completo
- 📱 **Responsive** design
- 🎨 Colores del tema (blue-9/purple-9)
- 🔙 Navegación intuitiva
- 📅 Fecha grande y destacada
- 👥 Contador de inscriptos
- 🎯 CTA de inscripción llamativo
- ✨ Transiciones suaves

### CourseCard:
- 🔗 Envuelto en Link
- 🎯 Cursor pointer
- ✨ Hover effects
- 🎨 Tema adaptable (isClosest)

---

## 🚀 Próximos Pasos Sugeridos

1. ✅ **Botón "Inscribirse"** en detalle del curso
2. ✅ **Formulario de inscripción** modal
3. ✅ **Cursos relacionados** al final
4. ✅ **Contador regresivo** para fecha de inicio
5. ✅ **Compartir en redes sociales**
6. ✅ **Requisitos del curso** (si aplica)
7. ✅ **Docentes/profesores** del curso

---

## 📝 Notas Técnicas

### formatFirebaseDate para Cursos:
```typescript
// Retorna objeto con día, mes, año
{
  dia: 15,
  mes: "ENE",
  año: 2025
}
```

### formatFirebaseDate para Noticias:
```typescript
// Retorna string
"15 ENE, 2025"
```

---

## ✅ Checklist

- [x] CursoDetalle.tsx creado
- [x] Ruta `/cursos/:id` configurada
- [x] CourseCard acepta prop `id`
- [x] CourseCard envuelve en Link
- [x] NextCourses pasa id a cada card
- [x] Loading y error states
- [x] Breadcrumb navigation
- [x] Botón de regreso
- [x] Dark mode support
- [x] Responsive design
- [x] TypeScript types correctos
- [x] CTA de inscripción
- [x] Contador de inscriptos

---

## 🎉 ¡Sistema Completo!

Ahora tanto **Noticias** como **Cursos** tienen navegación dinámica con páginas de detalle completas.

**Patrón reutilizable para futuras secciones!**
