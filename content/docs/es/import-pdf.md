---
{
  "id": "import-pdf",
  "title": "Importar y compartir un PDF",
  "summary": "Añade un PDF personal desde el selector de archivos u otra app.",
  "section": "Libros y PDF",
  "order": 2,
  "platforms": [
    "ios",
    "android"
  ],
  "minVersion": "1.5.5",
  "verifiedRelease": "1.5.5",
  "related": [
    "manage-books",
    "detect-titles"
  ]
}
---
## Antes de empezar {#before-you-start}
Usa un PDF desbloqueado de hasta 500 MB y 1.000 páginas. Descárgalo completamente en la app original. Un enlace web no es un PDF.
TuneFinder copia el documento a tu biblioteca privada sin modificar el original. Los cambios posteriores del original no actualizan la copia. Importar no requiere compra ni conexión cloud.
## Importa en TuneFinder {#import}
1. Abre **Libros**.
2. Toca **Importar PDF** y selecciona el PDF.
3. Espera a que termine **Importando PDF…**; aparecerá en la biblioteca.
4. Abre sus detalles. Puedes leer el PDF sin índice.
![Biblioteca con importación de PDF](/screenshots/es/book-indexes.png)
## Comparte desde otra app {#share}
::: ios
### iPhone o iPad {#share-ios}
1. En Apple Books, abre las opciones del PDF y Compartir; en Archivos, comparte el PDF.
2. Elige **TuneFinder** en la fila de apps; puede estar en Más.
3. Espera a la importación y a los detalles del libro.
Si TuneFinder no aparece, comprueba que compartes un PDF real, no un enlace o un documento de otro formato.
:::
::: android
### Android {#share-android}
1. En la app de archivos/PDF, elige Compartir o Abrir con.
2. Elige **TuneFinder** y espera.
3. Comprueba los detalles. Varios PDF compartidos se importan uno tras otro.
No necesitas permiso de almacenamiento adicional ni Google Drive. La app original debe dar acceso al PDF, no compartir solo un enlace.
:::
## Después de importar {#after-importing}
Un duplicado exacto abre el libro existente. [Detecta y revisa títulos](/es/docs/detect-titles/) o crea un índice manualmente para buscar. Puedes elegir gratuitamente un libro indexado sin eliminar los demás. **Búsqueda en varios libros** permite buscar en varios a la vez.
## Si falla la importación {#troubleshooting}
Comprueba que la app original abre el PDF completo, desbloqueado y dentro de los límites. Prueba **Importar PDF** y conserva el original.
**TF-SYNC-4610**: descarga localmente y comparte el archivo real. **TF-SYNC-4612**: tamaño; **TF-SYNC-4613**: contraseña; **TF-SYNC-4614**: páginas. Otras referencias, como **TF-SYNC-4606**, indican que la instalación no pudo terminar de forma segura, sin demostrar daños en el PDF.
[Contacta con ayuda](mailto:contact@tunefinder.app) indicando versión de app y sistema, acción y referencia. No envíes un PDF privado salvo petición y con tu consentimiento.
