## Propósito

Orientaciones específicas para agentes de código que contribuyan a este repositorio React + Vite.

## Resumen rápido (qué es)
- Proyecto SPA construido con Vite y React (entrada: `src/main.jsx`).
- Componente raíz: `src/App.jsx` que monta secciones desde `src/components/layout/`.

## Comandos importantes
- Instalar dependencias: `npm install` (o `pnpm install` si el equipo lo usa).
- Desarrollo (HMR): `npm run dev` (usa Vite).
- Construir para producción: `npm run build`.
- Previsualizar build: `npm run preview`.
- Lint: `npm run lint` (hay `eslint.config.js` en el repo).

## Arquitectura y puntos clave
- Entrada: `src/main.jsx` → `App.jsx` → componentes en `src/components/layout/`.
- Estilos globales: `src/normalize.css`, `src/index.css`. Los componentes importan su CSS localmente (ej.: `Trabajos.css`).
- Activos estáticos: `public/assets/*` (imágenes referenciadas en `src/components/data/trabajos.jsx` como `./assets/...`).
- Datos de ejemplo: `src/components/data/trabajos.jsx` exporta un arreglo `trabajos` con objetos `{ id, categoria, thumb: {url, alt}, info: { nombre, categoria, contenido(JSX) } }` — el campo `contenido` contiene JSX ya listo para render.

## Convenciones detectadas (seguirlas)
- Archivos de componentes en `.jsx`, nombres en PascalCase (`Header`, `Hero`, `Trabajos`).
- CSS por componente con el mismo nombre (import directo): `import './Trabajos.css'`.
- Variables/identificadores en español (ej.: `trabajos`, `categoriaSelecionada`, `estadoModal`). Mantener consistencia con español cuando se modifique código existente.
- No se usan CSS modules; las clases son globales y en español (`proyectos`, `encabezado`, `titulo`).

## Patrones y APIs internas relevantes
- Modal: `src/components/Modal.jsx` espera props `{ closeModal, trabajo }`. El `trabajo` usa la forma del arreglo en `trabajos.jsx`.
- Apertura del modal (ejemplo en `Trabajos.jsx`):
  - Llamar `openModal(e, id)` que hace `setEstadoModal(true)`, `document.body.style.overflow = 'hidden'` y selecciona el `trabajo` por `id`.
  - Cerrar: `closeModal()` debe restaurar `document.body.style.overflow = 'auto'`.
  - No eliminar este comportamiento sin entender el impacto en scroll y accesibilidad.
- Filtrado: `Trabajos.jsx` mantiene `categoriaSelecionada` y filtra `trabajos` por `categoria` (usar `trabajos.filter(t => t.categoria === categoria)`).

## Integraciones externas y dependencias
- Dependencias principales: `react`, `react-dom`, `vite`, `@vitejs/plugin-react`.
- No hay API backend detectado en el repo; todo es estático/cliente.

## Qué evitar / notas de seguridad del repo
- No modificar referencias a `public/assets` sin validar rutas en `build` (Vite sirve `public` en la raíz).
- Evitar introducir manipulaciones directas del DOM que rompan el patrón de React (salvo casos controlados como `document.body.style.overflow` con revert explícito).

## Ejemplos útiles (rápidos)
- Estructura de un `trabajo`:
```
{
  id: 1,
  categoria: 'diseño-web',
  thumb: { url: './assets/trabajos/diseño-1.png', alt: 'Trabajo 1' },
  info: { nombre: 'Nexa Sys', categoria: 'Diseño Web', contenido: <Fragment>...</Fragment> }
}
```
- Abrir modal desde una vista de trabajo:
```
<a href="#" onClick={(e) => openModal(e, trabajo.id)}>...</a>
```

## Archivos clave para revisar antes de cambiar comportamiento
- `src/main.jsx`, `src/App.jsx`, `src/components/layout/Trabajos.jsx`, `src/components/data/trabajos.jsx`, `src/components/Modal.jsx`, `src/index.css`, `vite.config.js`, `package.json`.

## Últimos pasos y contacto
- Si algo no es claro o faltan convenciones, pide ejemplos concretos (p. ej. cómo añadir un nuevo componente en `layout/` o cómo estructurar nuevas entradas en `trabajos.jsx`).

---
Por favor revisa este borrador y dime si quieres que añada ejemplos de tests, reglas de ESLint concretas o convenciones de commit/PR.
