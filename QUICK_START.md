# Guía Rápida - Portfolio Raúl Soriano

## Inicio Rápido en 3 Comandos

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar en desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:5173/
```

## Despliegue a Internet en 5 Minutos

### Paso 1: Crear repositorio en GitHub
1. Ve a https://github.com/new
2. Nombre: `portfolio-raul-soriano`
3. Click en "Create repository"

### Paso 2: Subir código
```bash
git init
git add .
git commit -m "Initial commit - Portfolio completo"
git remote add origin https://github.com/TU_USUARIO/portfolio-raul-soriano.git
git branch -M main
git push -u origin main
```

### Paso 3: Deploy en Vercel
1. Ve a https://vercel.com/
2. Sign up con GitHub
3. Click "Add New..." → "Project"
4. Selecciona tu repositorio
5. Click "Deploy"

**¡Listo! Tu portfolio estará en vivo en una URL como:**
`https://portfolio-raul-soriano.vercel.app`

## Actualizar el Portfolio

```bash
# Después de hacer cambios en el código:
git add .
git commit -m "Descripción de los cambios"
git push
```

Vercel actualizará automáticamente tu sitio en 1-2 minutos.

## Comandos Útiles

| Comando | Descripción |
|---------|-------------|
| `npm install` | Instala todas las dependencias |
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Crea versión optimizada para producción |
| `npm run preview` | Previsualiza el build de producción |

## Características del Portfolio

- Efecto de escritura automática en el Hero
- Tarjetas con efecto glow al hacer hover
- Bento Grid con animaciones suaves
- Timeline vertical de experiencia
- Sección de idiomas con insignia especial
- Formulario de contacto con enlaces directos
- 100% Responsivo

## Personalización Rápida

Para cambiar colores, edita `src/App.jsx` y busca:
- `from-cyan-400` → Color principal
- `to-violet-400` → Color secundario
- `text-fuchsia-400` → Color de acento

## Problemas Comunes

**"npm: command not found"**
→ Instala Node.js desde https://nodejs.org/

**"Port 5173 already in use"**
→ Cierra otras instancias de Vite o usa otro puerto: `npm run dev -- --port 3000`

**Los estilos no se cargan**
→ Asegúrate de que Tailwind esté configurado correctamente: `npm install -D tailwindcss`

---

**¿Necesitas ayuda?** Contacta a raulsorgo@gmail.com
