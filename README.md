¡Claro! Te armo un **README profesional para GitHub**, usando toda la documentación técnica que hicimos, pero adaptado al formato y tono perfecto para un repositorio.

Te lo dejo listo para copiar/pegar:

---

# Dattapro – Plataforma de Mapeo de Talento

**React + TypeScript + Vite + Tailwind + Zustand + PWA**

Dattapro es una plataforma web diseñada para **identificar, organizar y visualizar el talento humano** de una institución académica, permitiendo conectar docentes, investigadores y profesionales con proyectos y convocatorias.

Este repositorio contiene el **frontend**, desarrollado con tecnologías modernas orientadas a escalabilidad, rendimiento y una interfaz accesible para usuarios de diferentes perfiles.

---

## Tecnologías principales

| Área                     | Tecnologías                   |
| ------------------------ | ----------------------------- |
| **Framework**            | React 19, TypeScript          |
| **Bundler / Dev Server** | Vite 7                        |
| **UI / Estilos**         | Tailwind CSS 4, CSS variables |
| **Estado global**        | Zustand + Persist             |
| **Formularios**          | react-hook-form               |
| **HTTP**                 | Axios                         |
| **PWA**                  | vite-plugin-pwa               |
| **Rutas**                | React Router DOM              |
| **Exportación Excel**    | xlsx                          |
| **Íconos**               | react-icons                   |

---

## Estructura del proyecto

```text
src/
 ├── App.tsx
 ├── main.tsx
 ├── index.css
 ├── components/
 │    ├── layout/
 │    ├── ui/
 │    ├── perfil/
 │    ├── convocatoria/
 │    ├── forms/
 │    └── signup/
 ├── pages/
 ├── modals/
 ├── hook/
 ├── store/
 ├── types/
 └── assets/
```

---

## Funcionalidades principales

### Autenticación (básica)

* Manejo de sesión mediante Zustand persistido en localStorage.
* Simulación de login (lista para conectar a un backend real).

### Navegación

* Implementada con **React Router**.
* Rutas principales:

  * `/login`
  * `/signup/:id` (registro multi-paso)
  * `/mapa-talento`
  * `/mapa-talento/perfil-profesional/:id`
  * `/convocatorias`
  * `/convocatorias/:mode/:id`

### Mapa de Talento

* Listado de perfiles profesionales.
* Listado de centros de investigación.
* Tarjetas de usuario dinámicas (fetch individual por ID).
* Modal de detalle para centros de investigación.

### Perfil Profesional

* Vista completa del usuario: datos, experiencia, formación, competencias, certificaciones y áreas de conocimiento.
* Exportación del perfil a **Excel (.xlsx)**.
* Soporte para íconos dinámicos por área de conocimiento.

### Registro multi-paso

* 6 pantallas progresivas con validación.
* Guardado temporal de datos con Zustand.
* Peticiones dinámicas a catálogos (idiomas, facultades, sectores, etc.).
* Listo para enviar al backend en un único payload final.

### Convocatorias

* Listado de convocatorias con filtros.
* Detalle con imagen, entidad, descripción y estado.
* Formulario de creación/edición.
* Sistema de recomendación de perfiles según parámetros de match.

### Sistema global de modales

Controlado mediante la URL:
`/?modal=centro-investigacion&id=3`

Incluye:

* Modal de redirección
* Exportación de perfil
* Validación de documento
* Perfil externo
* Centro de investigación

---

## Arquitectura y flujo

### App Shell

El componente `App.tsx` actúa como esqueleto principal:

* Renderiza Navbar, Header y Modal global.
* Controla permisos para navegaciones.
* Contiene todas las rutas de la app.

### Estado global (Zustand)

**useUserStore**

* Guarda la sesión del usuario.
* Persistencia automática.

**signupStore**

* Maneja el formulario multi-step.
* Permite guardar progresivamente información.

### Hooks personalizados

* **useModal** → Abre/cierra modales desde la query string.
* **useDragScroll** → Scroll horizontal mediante arrastre (disponible para usar).

---

## PWA

Configurada mediante:

```
vite-plugin-pwa
```

Incluye:

* Manifest
* Service Worker con autoUpdate
* Iconos en múltiples resoluciones

Permite:

* Instalación como app
* Carga más rápida
* Funcionalidad básica offline

---

## Configuración de entornos

El proyecto utiliza distintos `.env` según el escenario:

```
.env.dev
.env.devlan
.env.hotspot
.env.production
```

Variables importantes:

```env
VITE_PAGE_URL=
VITE_API_BASE_URL=
```

---

## Scripts disponibles

```bash
npm run dev          # modo desarrollo
npm run dev:lan      # desarrollo por red LAN
npm run dev:hotspot  # desarrollo vía hotspot
npm run build        # build de producción
npm run preview      # previsualizar build
npm run lint         # corre ESLint
```