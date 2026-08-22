/*
  ============================================================
  ARTÍCULOS DE NUNTIAMX
  ============================================================
  Este es el ÚNICO archivo que necesitas editar para publicar.
  No toques index.html ni articulo.html para subir contenido.

  CÓMO AGREGAR UN ARTÍCULO NUEVO:
  1. Copia uno de los bloques { ... } de abajo completo.
  2. Pégalo justo debajo de "const ARTICULOS = [" (al principio).
  3. Cambia los textos entre comillas "..." por los tuyos.
  4. NO borres las comas, ni las comillas, ni las llaves { }.
  5. El "slug" debe ser único (sin espacios, sin acentos, con guiones).
  6. Guarda (Commit changes) en GitHub. Vercel publica solo.

  CAMPOS:
  slug      -> identificador único para la URL (ej: "volcan-colima")
  titulo    -> título del artículo
  categoria -> "Última hora" | "Tecnología" | "Cultura pop" | "Deportes" | "Cine y estrenos" | "Curiosidades"
  icono     -> un emoji (se usa SOLO si no subes imagen, como respaldo)
  imagen    -> (opcional) ruta a tu imagen, ej: "img/claudia-wells.jpg"
               Si la pones, se usa la imagen en vez del emoji.
               Si la dejas fuera (o la borras), se ve el emoji como antes.
  fecha     -> formato "AAAA-MM-DD" (el más reciente se muestra primero)
  resumen   -> 1-2 frases cortas, se ven en la tarjeta
  contenido -> arreglo de párrafos, cada uno entre comillas y separado por coma

  CÓMO SUBIR UNA IMAGEN:
  1. En GitHub, dentro de tu repositorio, crea una carpeta llamada "img"
     (Add file > Create new file > escribe "img/nombre-de-tu-imagen.jpg"
     como nombre, eso crea la carpeta sola).
  2. O más fácil: entra a la carpeta del repo, dale "Add file" > "Upload files",
     sube tu imagen, y asegúrate de que quede dentro de una carpeta "img".
  3. En este archivo, agrega la línea imagen: "img/nombre-de-tu-imagen.jpg"
     dentro del artículo correspondiente (usa el nombre EXACTO del archivo que subiste).
  ============================================================
*/

const ARTICULOS = [
  {
    slug: "claudia-wells-twin-pines-mall-2026",
    titulo: "Jennifer Parker vuelve al mall donde nació 'Volver al Futuro'",
    categoria: "Cultura pop",
    icono: "🚗",
    imagen: "img/IMG_5178.jpeg",
    fecha: "2026-08-22",
    resumen: "Claudia Wells confirmó su presencia en el encuentro de fans en Puente Hills Mall — la locación real de la película, que podría desaparecer pronto.",
    contenido: [
      "Claudia Wells, la actriz que dio vida a Jennifer Parker en Volver al Futuro, confirmó que va a estar presente en un evento que reúne cada año a fans en el centro comercial que sirvió de locación original para la película.",
      "El encuentro, llamado Twin Pines Mall Meet Up, se realizará el domingo 25 de octubre de 2026 a las 4:00 pm en Puente Hills Mall, en City of Industry, California — el mismo estacionamiento donde Marty McFly vio aparecer el DeLorean por primera vez.",
      "Es un evento organizado por fans, no por el estudio, pero cada año se ha vuelto punto de reunión obligado para seguidores de la saga. Este año tiene un peso extra: el mall lleva años semiabandonado y fue vendido para redesarrollo, así que los organizadores ya advirtieron que este podría ser el último encuentro en el lugar tal como lo conocemos.",
      "La confirmación de Wells aparece tanto en su sitio oficial como en el anuncio de los organizadores del evento. Por ahora no hay información sobre boletos ni registro previo."
    ]
  },
  {
    slug: "esto-acaba-de-pasar",
    titulo: "Esto acaba de pasar y ya es tendencia en redes",
    categoria: "Última hora",
    icono: "⚡",
    fecha: "2026-08-22",
    resumen: "Te contamos qué se sabe hasta ahora y por qué todos están hablando de esto.",
    contenido: [
      "Esto es un párrafo de ejemplo. Reemplázalo con la primera parte de tu noticia — lo que pasó, en pocas frases.",
      "Segundo párrafo de ejemplo. Aquí puedes agregar el dato curioso, el giro o la reacción que generó."
    ]
  },
  {
    slug: "lanzamiento-que-tiene-a-todos-hablando",
    titulo: "El lanzamiento que tiene a todos hablando esta semana",
    categoria: "Tecnología",
    icono: "📱",
    fecha: "2026-08-22",
    resumen: "Lo nuevo, lo que cambia, y si de verdad vale la pena o es solo ruido.",
    contenido: [
      "Párrafo de ejemplo sobre el lanzamiento. Cambia esto por el contenido real.",
      "Puedes agregar tantos párrafos como quieras, solo separa cada uno con una coma."
    ]
  },
  {
    slug: "estreno-rompio-records",
    titulo: "El estreno que rompió récords este fin de semana",
    categoria: "Cultura pop",
    icono: "🎬",
    fecha: "2026-08-21",
    resumen: "Las cifras, las reacciones y lo que viene después para la franquicia.",
    contenido: [
      "Párrafo de ejemplo sobre el estreno. Reemplaza con el contenido real del artículo.",
      "Cierre del artículo con la consecuencia o lo que sigue."
    ]
  }
];
