NUNTIAMX 2.0 — INSTALACIÓN RÁPIDA

1. Crea un proyecto gratuito en Supabase.
2. Abre SQL Editor y ejecuta supabase.sql.
3. En Authentication > Users crea tu usuario administrador.
4. En config.js coloca la Project URL, la anon/publishable key y el correo del admin.
5. En supabase.sql reemplaza YOUR_ADMIN_EMAIL por el mismo correo y ejecuta de nuevo la sección de políticas.
6. Sube estos archivos a GitHub Pages:
   index.html
   articulo.html
   articulos.js
   config.js
   admin.html
7. Abre admin.html para publicar. La portada y los artículos leen Supabase automáticamente.

YOUTUBE:
Solo guarda el ID del video (lo que aparece después de v=). La página usa el reproductor oficial embebido de YouTube; el video no se aloja en tu servidor.

NOTA:
La anon key de Supabase está diseñada para ir en el frontend. NUNCA pongas la service_role key en estos archivos.
