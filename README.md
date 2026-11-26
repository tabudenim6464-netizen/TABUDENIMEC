# TABU DENIM — Old Money Collection

Landing y catálogo de moda masculina con pedidos por WhatsApp. Sitio estático (HTML + CSS + JS, sin dependencias ni build), listo para GitHub Pages.

## Funciones
- **Catálogo de 14 prendas** con filtros por categoría, ordenamiento por precio/nombre y vista rápida con talla, color y cantidad.
- **Bolsa de pedido**: agrega varias prendas, ajusta cantidades y envía **todo el pedido en un solo mensaje de WhatsApp**, con nombre, ciudad y forma de pago. La bolsa y los datos se recuerdan en el navegador.
- **Arma tu look**: combina camisa + pantalón/bermuda, cotiza el combo o agrégalo a la bolsa.
- **Lookbook** con galería a pantalla completa (teclado y gestos de deslizar).
- Secciones: categorías, cómo comprar, formas de pago, preguntas frecuentes y cierre.
- Accesible (navegación por teclado, foco visible, diálogos con focus trap, `prefers-reduced-motion`) y adaptable de 360 px a pantallas grandes.

## Estructura
```
index.html            Página
assets/css/styles.css Estilos (tokens de diseño en :root)
assets/js/app.js      Catálogo, bolsa, look builder, galería
assets/img/*.webp     21 fotografías optimizadas (~1 MB en total)
```

## Editar productos y precios
Los productos están en el arreglo `PRODUCTS` al inicio de `assets/js/app.js`. Cada uno tiene `name`, `price` (usa `null` para "Precio por consulta"), `sizes`, `colors` e `img` (nombre del archivo en `assets/img/` sin extensión). El número de WhatsApp está en la constante `WA`.

## Diseño
Sistema generado con UI UX Pro Max: estilo editorial de lujo; paleta marfil, tinta, verde bosque y latón; tipografías Cormorant (títulos) y Montserrat (texto).

## Publicar con GitHub Pages
**Settings → Pages → Deploy from a branch**, rama **main**, carpeta **/(root)**.
URL: https://tabudenim6464-netizen.github.io/TABUDENIMEC/

## Antes de lanzar anuncios
Las imágenes editoriales son inspiracionales: verifica que cada foto represente el producto disponible y confirma precios, tallas y stock. Configura Meta Pixel y política de privacidad cuando corresponda.

**Nota:** los botones de compra abren WhatsApp. La página no procesa pagos en línea.
