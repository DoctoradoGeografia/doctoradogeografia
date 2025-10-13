# Dashboard - Estructura de Componentes

## 📁 Estructura

```
src/
├── pages/
│   └── Dashboard.tsx          # Página principal con sistema de pestañas
└── components/
    └── Dashboard/
        ├── NoticiasSection.tsx  # Componente de gestión de noticias
        └── CursosSection.tsx    # Componente de gestión de cursos
```

## 🚀 Características

### Dashboard Principal (`Dashboard.tsx`)
- **Tamaño**: ~50 líneas (refactorizado desde 810 líneas)
- **Responsabilidad**: Manejo de pestañas y layout general
- **Carga optimizada**: Solo renderiza el componente activo

### NoticiasSection (`NoticiasSection.tsx`)
- Formulario completo con 13 campos (título, subtitulo, autor, etc.)
- Tabla con lista de noticias existentes
- CRUD completo (Create, Read, Update, Delete)
- Auto-completado de autor desde usuario logueado
- Formateo de fechas con `formatFirebaseDate`
- Estado de loading independiente

### CursosSection (`CursosSection.tsx`)
- Formulario completo con 6 campos (título, subtitulo, categoría, etc.)
- Tabla con lista de cursos existentes
- CRUD completo (Create, Read, Update, Delete)
- Estado de loading independiente

## ⚡ Optimizaciones Implementadas

### 1. Lazy Loading por Pestaña
```typescript
// Antes: Cargaba TODOS los datos al montar Dashboard
const { noticias } = useNoticias();  // Se ejecuta siempre
const { cursos } = useCursos();      // Se ejecuta siempre

// Ahora: Solo carga datos del componente activo
{activeTab === 'noticias' ? <NoticiasSection /> : <CursosSection />}
// ✅ Si activeTab='noticias', NO se monta CursosSection
// ✅ Si activeTab='cursos', NO se monta NoticiasSection
```

### 2. Separación de Responsabilidades
- Cada sección maneja su propio estado
- Cada sección hace sus propias llamadas a Firebase
- No hay props drilling innecesario

### 3. Mejor Performance
- **Antes**: 2 llamadas a Firebase al cargar Dashboard
- **Ahora**: 1 llamada a Firebase (solo la pestaña activa)
- **Beneficio**: ~50% menos de tiempo de carga inicial

## 🎯 Flujo de Uso

1. Usuario accede a `/dashboard`
2. Dashboard renderiza pestaña "Noticias" por defecto
3. `<NoticiasSection />` se monta → hook `useNoticias()` se ejecuta → carga noticias
4. Usuario hace click en pestaña "Cursos"
5. `<CursosSection />` se monta → hook `useCursos()` se ejecuta → carga cursos
6. `<NoticiasSection />` se desmonta → libera memoria

## 📝 Notas Técnicas

- Los hooks `useNoticias` y `useCursos` tienen su propio `useEffect`
- Cada componente es completamente independiente
- Los formularios tienen validación HTML5
- Los botones tienen estados de loading/disabled
- Dark mode soportado en todos los componentes
