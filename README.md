# Dragon Ball Cards

Aplicación web desarrollada con **React** y **Vite** que utiliza la [Dragon Ball API](https://web.dragonball-api.com/) para mostrar tarjetas (cards) de personajes, planetas y sus transformaciones del universo Dragon Ball. Permite explorar y ver detalles de cada entidad mediante rutas dinámicas.

## Características

- **Personajes:** Galería paginada de personajes con detalles individuales, incluyendo raza, ki, afiliación y transformaciones.
- **Planetas:** Listado de planetas con imagen, descripción, estado y habitantes asociados.
- **Transformaciones:** Sección dedicada a las transformaciones, mostrando detalles y personaje relacionado.
- **Navegación:** Barra de navegación para acceder fácilmente a cada sección.
- **Detalles:** Cada card permite ver información ampliada mediante rutas con IDs.
- **Manejo de errores y carga:** Placeholders y alertas para mejorar la experiencia de usuario.

## Tecnologías utilizadas

- **React 19**
- **TypeScript**
- **Vite** (build y desarrollo rápido)
- **React Router DOM** (ruteo SPA)
- **React Bootstrap** y **Bootstrap** (UI y estilos)
- **Axios** (peticiones HTTP)
- **@tanstack/react-query** (manejo de datos asíncronos y caché)
- **ESLint** (calidad de código)
- **Vercel** (despliegue)
- **NProgress** (barra de progreso)

## Estructura de carpetas

- `src/components/ui/`: Componentes visuales reutilizables (cards, galerías, placeholders, alertas, paginación).
- `src/pages/`: Vistas principales (Home, Personajes, Planetas, Transformaciones, Detalles, NotFound).
- `src/services/`: Lógica para consumir la API de Dragon Ball.
- `src/hooks/`: Custom hooks para manejo de datos y navegación.
- `src/layouts/`: Componentes de layout (Navbar, Footer).
- `src/routes/`: Configuración de rutas de la app.

## Instalación y ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build
npm run preview

# Linting
npm run lint
```

## Despliegue

La app está lista para ser desplegada en **Vercel**. El archivo `vercel.json` asegura el correcto enrutamiento SPA.

## Créditos

- API: [Dragon Ball API](https://web.dragonball-api.com/)
- Autor: [Emmanuel Cruz](https://github.com/emmanuel-cruz-dev/)
