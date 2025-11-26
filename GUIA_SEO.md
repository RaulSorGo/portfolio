# Guía de SEO - Cómo Aparecer en Google

Esta guía te explica paso a paso cómo hacer que tu portfolio aparezca cuando alguien busque "Raúl Soriano" en Google.

## 1. Configuración Inicial (Ya está hecho ✓)

Tu portfolio ya tiene configurado:
- ✓ Meta tags SEO optimizados
- ✓ Open Graph para redes sociales
- ✓ Twitter Cards
- ✓ Archivo robots.txt
- ✓ Sitemap.xml

## 2. Pasos CRÍTICOS Después del Deploy

### Paso 1: Actualizar URLs en los Archivos

Una vez que subas tu portfolio a Vercel, **reemplaza** `https://tu-dominio.vercel.app/` con tu URL real en:

1. **`index.html`** (líneas 15, 19, 22, 28, 31)
2. **`public/robots.txt`** (última línea)
3. **`public/sitemap.xml`** (todas las URLs)

**Ejemplo:** Si tu URL de Vercel es `https://raul-soriano.vercel.app/`, reemplaza todas las apariciones de `tu-dominio` con `raul-soriano`.

### Paso 2: Enviar tu Sitio a Google

#### Opción A: Google Search Console (Recomendado)

1. **Ir a Google Search Console**
   - Ve a: https://search.google.com/search-console/
   - Inicia sesión con tu cuenta de Google

2. **Añadir tu Propiedad**
   - Click en "Añadir propiedad"
   - Elige "Prefijo de URL"
   - Pega tu URL completa: `https://raul-soriano.vercel.app`

3. **Verificar Propiedad**
   - Método recomendado: **Etiqueta HTML**
   - Google te dará un código como: `<meta name="google-site-verification" content="ABC123XYZ" />`
   - Copia el código `ABC123XYZ`
   - Abre `index.html` y reemplaza `tu-codigo-de-verificacion` en la línea 34 con tu código
   - Sube los cambios a Vercel
   - Vuelve a Google Search Console y haz click en "Verificar"

4. **Enviar el Sitemap**
   - Una vez verificado, ve a "Sitemaps" en el menú lateral
   - Añade: `https://raul-soriano.vercel.app/sitemap.xml`
   - Click en "Enviar"

#### Opción B: Método Rápido (Menos efectivo)

Simplemente pide a Google que indexe tu página:
- Ve a: https://www.google.com/ping?sitemap=https://raul-soriano.vercel.app/sitemap.xml
- Presiona Enter

## 3. Optimización de Contenido

### Enlaces Importantes

Añade tu portfolio en estos lugares para mejorar el SEO:

**Redes Profesionales:**
- LinkedIn: Añade el enlace en tu perfil (sección "Información de contacto")
- GitHub: Añade en tu bio y README del perfil
- Twitter/X: En tu bio

**Comunidades de Desarrolladores:**
- Dev.to: Crea un artículo sobre tu portfolio
- Hashnode: Blog post presentándote
- Medium: Escribe sobre tu experiencia

**Directorios:**
- https://www.credly.com/ (si tienes certificaciones)
- https://stackoverflow.com/ (en tu perfil)

### Crear Backlinks

Los backlinks son enlaces desde otros sitios hacia el tuyo. Google los considera votos de confianza.

**Cómo conseguirlos:**
1. Escribe artículos técnicos en Dev.to o Medium y enlaza tu portfolio
2. Participa en foros de programación y firma con tu enlace
3. Comenta en blogs técnicos (sin spam)
4. Colabora en proyectos open source y menciona tu portfolio en tu perfil

## 4. Mejorar la Indexación

### Actualiza el Contenido Regularmente

Google favorece sitios activos:
- Añade proyectos nuevos cada mes
- Escribe notas personales semanalmente
- Actualiza tus habilidades

### Usa Palabras Clave Estratégicas

En tus notas y descripciones de proyectos, usa:
- "Raúl Soriano"
- "desarrollador web Sevilla"
- "programador React"
- "automatización n8n"
- "portfolio desarrollador"

### Estructura de URLs Amigable

Ya tienes URLs limpias:
- ✓ `/proyectos` en lugar de `/p?id=123`
- ✓ `/notas` en lugar de `/blog.php`
- ✓ `/contacto` en lugar de `/contact.html`

## 5. Compartir en Redes Sociales

Cada vez que compartes tu portfolio, Google lo detecta:

**Primera semana:**
- LinkedIn: Post presentando tu portfolio
- Twitter: Tweet con capturas
- Facebook: Comparte en grupos de desarrolladores

**Mensualmente:**
- Comparte nuevos proyectos
- Publica notas técnicas
- Participa en comunidades

## 6. Verificar la Indexación

### Método 1: Búsqueda Directa
Después de 2-7 días, busca en Google:
```
site:raul-soriano.vercel.app
```

Deberías ver tu sitio listado.

### Método 2: Búsqueda por Nombre
Después de 2-4 semanas, busca:
```
Raúl Soriano desarrollador
```

Tu portfolio debería aparecer en los primeros resultados.

## 7. Tiempos Esperados

**Indexación inicial:** 2-7 días
- Google encuentra tu sitio y lo añade al índice

**Posicionamiento básico:** 2-4 semanas
- Apareces al buscar tu nombre exacto

**Posicionamiento avanzado:** 2-3 meses
- Apareces en búsquedas como "desarrollador web Sevilla"

## 8. Acelerar el Proceso

### Acción Inmediata (Día 1)
1. Deploy en Vercel
2. Actualizar todas las URLs
3. Verificar en Google Search Console
4. Enviar sitemap
5. Compartir en LinkedIn y GitHub

### Primera Semana
1. Escribir una nota personal sobre tu portfolio
2. Compartir en redes sociales
3. Añadir enlace en perfiles profesionales
4. Pedir a Google indexación manual:
   - En Search Console: "Inspección de URL" → Pega tu URL → "Solicitar indexación"

### Primer Mes
1. Añadir 2-3 proyectos nuevos
2. Escribir 2-3 notas técnicas
3. Conseguir 5-10 backlinks
4. Compartir actualizaciones en redes

## 9. Herramientas Útiles

**Verificar Indexación:**
- https://search.google.com/search-console/
- Búsqueda: `site:tu-dominio.vercel.app`

**Analizar SEO:**
- https://pagespeed.web.dev/ (velocidad)
- https://www.seobility.net/es/seocheck/ (análisis completo)
- https://cards-dev.twitter.com/validator (Twitter Cards)
- https://developers.facebook.com/tools/debug/ (Open Graph)

**Monitorear Posición:**
- https://www.google.com/alerts (alertas cuando te mencionen)
- Google Search Console (clics e impresiones)

## 10. Checklist Final

Antes de esperar resultados, verifica:

- [ ] Portfolio desplegado en Vercel con URL definitiva
- [ ] URLs actualizadas en `index.html`, `robots.txt` y `sitemap.xml`
- [ ] Google Search Console verificado
- [ ] Sitemap enviado a Google
- [ ] Enlace añadido en LinkedIn
- [ ] Enlace añadido en GitHub
- [ ] Al menos 1 proyecto documentado
- [ ] Al menos 1 nota personal publicada
- [ ] Compartido en 2-3 redes sociales

## 11. Errores Comunes a Evitar

❌ **NO uses** URLs temporales de preview
❌ **NO cambies** la URL una vez configurado todo
❌ **NO pongas** `robots.txt` bloqueando Google
❌ **NO uses** contenido duplicado de otros portfolios
❌ **NO esperes** resultados en 24 horas (toma semanas)

✓ **SÍ actualiza** contenido regularmente
✓ **SÍ comparte** en redes sociales
✓ **SÍ añade** proyectos y notas nuevas
✓ **SÍ usa** tu nombre completo en contenido

## 12. Dominio Personalizado (Opcional pero Recomendado)

Si quieres mejorar AÚN MÁS tu SEO:

1. **Compra un dominio:**
   - Namecheap: ~10€/año
   - Google Domains: ~12€/año
   - Sugerencia: `raulsoriano.dev` o `raulsoriano.es`

2. **Ventajas:**
   - Más profesional
   - Mejor posicionamiento
   - Más fácil de recordar
   - URLs como: `raulsoriano.dev` en lugar de `raul-soriano.vercel.app`

3. **Configuración en Vercel:**
   - Settings → Domains
   - Add Domain → Sigue las instrucciones
   - Toma 24-48h en activarse

## Soporte

Si tienes dudas:
1. Revisa Google Search Console (mensajes de Google)
2. Usa las herramientas de análisis SEO
3. Espera al menos 2 semanas antes de preocuparte

**Recuerda:** El SEO es un proceso gradual. Los primeros resultados tardan, pero una vez posicionado, te mantienes arriba por mucho tiempo.

---

**Última actualización:** Enero 2025
**Próxima revisión recomendada:** Después de 1 mes del deploy
