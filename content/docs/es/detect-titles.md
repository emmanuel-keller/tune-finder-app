---
{
  "id": "detect-titles",
  "title": "Detectar y revisar títulos",
  "summary": "Genera un índice editable con OCR local y revisa sus propuestas.",
  "section": "Índices y detección",
  "order": 4,
  "platforms": [
    "ios",
    "android"
  ],
  "minVersion": "1.5.5",
  "verifiedRelease": "1.5.5",
  "related": [
    "manual-index",
    "troubleshooting"
  ]
}
---
## Qué hace la detección {#overview}
El OCR propone títulos y rangos de páginas leyendo texto impreso. Funciona en el dispositivo, sin enviar el PDF a un servicio OCR. Solo las propuestas revisadas y guardadas entran en la búsqueda.
Empieza con un [PDF importado](/es/docs/import-pdf/). El índice es la lista de títulos y páginas, separada del PDF.
## Detecta títulos {#detect}
1. Abre **Libros** y el libro.
2. Toca **Detectar títulos**; se abre el editor y empieza la detección.
3. Mantén TuneFinder en primer plano.
4. Revisa las entradas al terminar.
## Pausa y continúa {#pause-resume}
**Cancelar** pausa después de la página actual. Pasar a segundo plano también interrumpe. Se conservan PDF y páginas procesadas; vuelve a **Detectar títulos** para continuar.
Guarda o descarta ediciones pendientes antes de detectar. Cambiar el PDF puede invalidar un borrador anterior: genera otro para el nuevo documento.
## Revisa y guarda {#review}
1. Comprueba títulos y primera/última página.
2. Abre páginas desde el editor; la numeración PDF puede diferir de la impresa.
3. Usa **Editar**, **Eliminar** o **Añadir tema** para corregir.
4. Toca **Guardar** para guardar el índice.
5. En detalles, elige **Usar para buscar** para búsqueda gratuita si no está seleccionado.
![Revisión de títulos y rangos de páginas](/screenshots/es/index-editor.png)
## Mejora resultados imperfectos {#quality}
El texto latino impreso y nítido funciona mejor. Escritura manual, tipografías decorativas, escaneos torcidos/débiles, índices de contenido y varios temas por página causan errores. La notación sola no identifica un tema.
Revisa rangos: encabezados repetidos pueden unirse y continuaciones sin título necesitar corrección. Si no detecta títulos, añádelos manualmente; el PDF sigue disponible.
## Reconstruye o recupera {#rebuild}
Puedes detectar de nuevo tras eliminar un índice si el PDF sigue presente. Restaura o selecciona su PDF si falta. No borres la biblioteca para reparar OCR.
[Contacta con ayuda](mailto:contact@tunefinder.app) con versión, plataforma, acción y referencia persistente. Los índices aceptados pueden [sincronizarse](/es/docs/android-drive/).
