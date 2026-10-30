# 📱 TechPhone – Aplicación React + PWA

TechPhone es una aplicación web construida con **React 19** y **Vite** que simula una tienda de tecnología enfocada en celulares. Incluye una página de inicio (landing) con banner, beneficios y productos destacados, un flujo de autenticación (inicio de sesión, registro y recuperación de cuenta), una sección de equipo desarrollada con *props* y una vista que consume la API pública de **Rick and Morty**. Además, está configurada como **PWA**, por lo que se puede instalar en el dispositivo y funcionar como una aplicación nativa.

## 🚀 Características

- **Arquitectura por funcionalidades (features)**: el código se organiza en `auth` y `landing`, cada una con sus propios componentes, lo que facilita el mantenimiento y la escalabilidad.
- **Enrutamiento del lado del cliente**: navegación fluida entre páginas con React Router (`BrowserRouter`, `Routes` y `NavLink`).
- **Landing de tienda**: banner principal, tarjetas de beneficios (envío gratis, compra segura, garantía oficial) y catálogo de productos destacados.
- **Autenticación (interfaz)**: formularios de inicio de sesión, registro (con validación de contraseñas) y recuperación de cuenta. Actualmente funcionan solo en el frontend; falta conectarlos con un backend.
- **Uso de Props**: la sección "Nosotros" reutiliza componentes (`Avatar`, `TeamCard`) a los que se les pasan datos por props.
- **Consumo de API**: listado de personajes de Rick and Morty con búsqueda por nombre, paginación y manejo de resultados vacíos usando `useState` y `useEffect`.
- **PWA**: instalable y con soporte de caché mediante `vite-plugin-pwa` (manifest, íconos y *service worker* con actualización automática).
- **Diseño responsivo**: uso de CSS Grid, Flexbox y las utilidades de Bootstrap para adaptarse a distintos tamaños de pantalla.
- **Navegación con Bootstrap 6 (alpha)**: menú lateral tipo *drawer* y menú desplegable para las categorías de productos.
- **React Hooks**: manejo de estado y efectos secundarios con componentes funcionales.

## 🛠️ Tecnologías

- **Frontend**: React, React Router, Bootstrap, styled-components, CSS
- **Herramienta de build**: Vite
- **PWA**: vite-plugin-pwa
- **Dependencias**: `react`, `react-dom`, `react-router-dom`, `bootstrap`, `styled-components`, `vite-plugin-pwa`
- **Dependencias de desarrollo**: `vite`, `@vitejs/plugin-react`, `oxlint`, `@types/react`, `@types/react-dom`
- **API externa**: [Rick and Morty API](https://rickandmortyapi.com/)

## 📦 Instalación

Para ejecutar el proyecto en tu equipo, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/johndaviddiax-ai/RickAndMorty.git
   ```
2. Entra a la carpeta del proyecto:
   ```bash
   cd t1_react
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 💻 Uso

1. Ejecuta `npm run dev` para iniciar el servidor de desarrollo.
2. Abre el navegador y entra a `http://localhost:5173`.
3. Navega por la aplicación y explora sus secciones.

### Rutas disponibles

| Ruta          | Descripción                                          |
| ------------- | ---------------------------------------------------- |
| `/`           | Página de inicio con banner y productos destacados   |
| `/Login`      | Inicio de sesión                                     |
| `/registro`   | Creación de cuenta                                   |
| `/recuperar`  | Recuperación de contraseña                           |
| `/Props`      | Sección "Nosotros" (equipo de TechPhone)             |
| `/randm`      | Personajes de Rick and Morty (API, búsqueda y paginación) |

### Scripts disponibles

| Comando           | Descripción                                   |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo              |
| `npm run build`   | Genera la versión de producción en `dist/`    |
| `npm run preview` | Previsualiza localmente la build de producción |
| `npm run lint`    | Analiza el código con Oxlint                  |

## 📂 Estructura del proyecto

```
t1_react
├── index.html
├── package.json
├── vite.config.js
├── .oxlintrc.json
├── public
│   ├── carro_rojo.png
│   ├── carro192x192.png
│   ├── carro512x512.png
│   └── robots.txt
└── src
    ├── main.jsx
    ├── App.jsx
    ├── assets
    └── features
        ├── auth
        │   └── components
        │       ├── Login.jsx
        │       ├── Registro.jsx
        │       └── Recuperar.jsx
        └── landing
            └── components
                ├── Header.jsx
                ├── Main.jsx
                ├── Footer.jsx
                ├── Props.jsx
                └── Rickandmorty.jsx
```

## 📲 PWA

La aplicación está configurada como Progressive Web App en `vite.config.js`:

- **Nombre**: Mi primer PWA (`MyPWA`)
- **Modo de visualización**: `standalone`
- **Registro del service worker**: `autoUpdate`
- **Íconos**: `carro192x192.png` y `carro512x512.png`

Para probarla, genera la build con `npm run build`, ejecútala con `npm run preview` y usa la opción "Instalar" del navegador.

## 🤝 Contribuir

Si quieres contribuir al proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama:
   ```bash
   git checkout -b nombre-de-tu-rama
   ```
3. Realiza tus cambios y haz commit:
   ```bash
   git commit -m "descripción de tus cambios"
   ```
4. Sube tus cambios:
   ```bash
   git push origin nombre-de-tu-rama
   ```
5. Abre un Pull Request para fusionar tus cambios con la rama principal.

## 📬 Contacto

Autor: **John David Diaz Correa**
GitHub: [johndaviddiax-ai](https://github.com/johndaviddiax-ai)
