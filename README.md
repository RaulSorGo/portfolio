# Portfolio de Raúl Soriano

Portfolio personal moderno y profesional desarrollado con React, Vite, Tailwind CSS y Framer Motion.

## Características

- Diseño Dark Mode Premium con efectos neón
- Animaciones fluidas con Framer Motion
- Efecto de escritura automática (Typewriter)
- Tarjetas con efecto Glow al pasar el mouse
- Bento Grid para habilidades
- Timeline vertical de experiencia profesional
- 100% Responsivo (móvil y escritorio)
- Optimizado para rendimiento

## Instalación Local

### Requisitos Previos

- Node.js instalado (versión 16 o superior)
- npm (viene incluido con Node.js)

Si no tienes Node.js instalado:
1. Ve a https://nodejs.org/
2. Descarga la versión LTS (recomendada)
3. Instala siguiendo las instrucciones

### Paso 1: Instalar Dependencias

Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
```

Este comando instalará todas las dependencias necesarias:
- React y React DOM
- Vite (herramienta de build)
- Tailwind CSS (estilos)
- Framer Motion (animaciones)
- Lucide React (iconos)

### Paso 2: Ejecutar en Modo Desarrollo

Una vez instaladas las dependencias, ejecuta:

```bash
npm run dev
```

Esto iniciará un servidor de desarrollo local. Verás algo como:

```
VITE v5.1.4  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

Abre tu navegador y ve a `http://localhost:5173/` para ver tu portfolio en vivo.

### Paso 3: Build para Producción (Opcional)

Si quieres generar los archivos optimizados para producción:

```bash
npm run build
```

Esto creará una carpeta `dist` con todos los archivos listos para subir a un servidor.

## Despliegue a Internet (GRATIS)

### Opción A: Vercel (Recomendado - MÁS FÁCIL)

Vercel es la plataforma creada por los desarrolladores de Next.js. Es perfecta para proyectos React.

#### Paso 1: Crear cuenta en Vercel

1. Ve a https://vercel.com/
2. Haz clic en "Sign Up"
3. Elige "Continue with GitHub" (es la forma más fácil)
4. Autoriza a Vercel para acceder a tu GitHub

#### Paso 2: Subir tu código a GitHub

**2.1 - Crear repositorio en GitHub:**
1. Ve a https://github.com/
2. Haz clic en el botón "+" arriba a la derecha → "New repository"
3. Ponle un nombre, por ejemplo: `portfolio-raul-soriano`
4. Marca "Public" (o "Private" si prefieres)
5. **NO** marques "Add a README file" (ya tienes uno)
6. Haz clic en "Create repository"

**2.2 - Subir tu código desde la terminal:**

Abre la terminal en la carpeta de tu proyecto y ejecuta estos comandos UNO POR UNO:

```bash
git init
```

```bash
git add .
```

```bash
git commit -m "Initial commit - Portfolio completo"
```

Ahora conecta con tu repositorio de GitHub (reemplaza `TU_USUARIO` y `NOMBRE_REPO` con tus datos):

```bash
git remote add origin https://github.com/TU_USUARIO/NOMBRE_REPO.git
```

Por ejemplo, si tu usuario es `raulsoriano` y el repo se llama `portfolio`:
```bash
git remote add origin https://github.com/raulsoriano/portfolio.git
```

Finalmente, sube el código:

```bash
git branch -M main
```

```bash
git push -u origin main
```

Te pedirá tus credenciales de GitHub. Ingrésalas y el código se subirá.

#### Paso 3: Conectar GitHub con Vercel

1. En Vercel, haz clic en "Add New..." → "Project"
2. Vercel mostrará una lista de tus repositorios de GitHub
3. Busca tu repositorio (`portfolio-raul-soriano`)
4. Haz clic en "Import"

#### Paso 4: Configurar el Proyecto

Vercel detectará automáticamente que es un proyecto Vite. Asegúrate de que:

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

Haz clic en "Deploy"

#### Paso 5: ¡Listo!

Espera 1-2 minutos mientras Vercel construye tu sitio. Una vez terminado:

- Recibirás una URL pública como: `https://portfolio-raul-soriano.vercel.app`
- Esta URL es tu portfolio en vivo y GRATIS
- Cada vez que hagas cambios y los subas a GitHub (`git push`), Vercel lo actualizará automáticamente

---

### Opción B: Netlify (Alternativa igualmente fácil)

#### Paso 1: Crear cuenta en Netlify

1. Ve a https://www.netlify.com/
2. Haz clic en "Sign Up"
3. Elige "GitHub" para registrarte
4. Autoriza a Netlify

#### Paso 2: Subir código a GitHub

Si aún no lo has hecho, sigue los pasos de "Subir código a GitHub" de la Opción A.

#### Paso 3: Conectar GitHub con Netlify

1. En Netlify, haz clic en "Add new site" → "Import an existing project"
2. Selecciona "Deploy with GitHub"
3. Autoriza a Netlify para acceder a tus repositorios
4. Selecciona tu repositorio

#### Paso 4: Configurar Build Settings

- **Build command:** `npm run build`
- **Publish directory:** `dist`

Haz clic en "Deploy site"

#### Paso 5: ¡Listo!

Netlify te dará una URL como: `https://raul-portfolio-abc123.netlify.app`

Puedes personalizar el nombre del dominio en Site Settings → Domain Management.

---

## Personalización del Dominio (Opcional)

Tanto Vercel como Netlify te permiten conectar un dominio personalizado (ej: `raulsoriano.com`):

1. Compra un dominio en Namecheap, GoDaddy, etc.
2. En Vercel/Netlify, ve a "Domains"
3. Añade tu dominio personalizado
4. Sigue las instrucciones para actualizar los DNS

---

## Actualizar tu Portfolio

Cada vez que hagas cambios:

1. Modifica los archivos en tu editor de código
2. Guarda los cambios
3. En la terminal, ejecuta:

```bash
git add .
```

```bash
git commit -m "Descripción de los cambios"
```

```bash
git push
```

Vercel o Netlify detectarán los cambios y actualizarán tu sitio automáticamente en 1-2 minutos.

---

## Estructura del Proyecto

```
Portfolio/
├── public/              # Archivos públicos estáticos
├── src/
│   ├── App.jsx         # Componente principal con todos los componentes
│   ├── main.jsx        # Punto de entrada de React
│   └── index.css       # Estilos globales + Tailwind
├── index.html          # HTML base
├── package.json        # Dependencias del proyecto
├── vite.config.js      # Configuración de Vite
├── tailwind.config.js  # Configuración de Tailwind
└── README.md           # Este archivo
```

---

## Tecnologías Utilizadas

- **React 18** - Framework de UI
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Framework de estilos utility-first
- **Framer Motion** - Librería de animaciones
- **Lucide React** - Iconos modernos y limpios

---

## Soporte

Si tienes problemas:

1. **Error al instalar dependencias:**
   - Asegúrate de tener Node.js instalado: `node --version`
   - Borra la carpeta `node_modules` y ejecuta `npm install` de nuevo

2. **El sitio no se ve bien:**
   - Borra la caché del navegador (Ctrl + Shift + Delete)
   - Prueba en modo incógnito

3. **Problemas con Git:**
   - Verifica que Git esté instalado: `git --version`
   - Si no lo está, descárgalo de https://git-scm.com/

4. **Errores en Vercel/Netlify:**
   - Revisa los logs de build en la plataforma
   - Asegúrate de que el build command sea `npm run build`
   - Verifica que el output directory sea `dist`

---

## Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

## Autor

**Raúl Soriano**
- Email: raulsorgo@gmail.com
- Teléfono: +34 608 40 89 70
- Ubicación: Sevilla, España

---

¡Disfruta de tu nuevo portfolio! Si necesitas ayuda adicional, no dudes en contactarme.
