---
{
  "id": "manual-index",
  "title": "Editar índices e intercambiar CSV",
  "summary": "Crea entradas, corrige páginas e importa o exporta índices.",
  "section": "Índices y detección",
  "order": 5,
  "platforms": [
    "ios",
    "android"
  ],
  "minVersion": "1.5.5",
  "verifiedRelease": "1.5.5",
  "related": [
    "detect-titles",
    "search-reading"
  ]
}
---
## Crea o edita un índice {#edit}
1. Abre los detalles desde **Libros**.
2. Usa **Crear índice manualmente** sin índice, o **Editar índice**.
3. **Añadir tema**: título, **Primera página** y **Última página** opcional; guarda la entrada.
4. Corrige con **Editar** o elimina con **Eliminar**.
5. Toca **Guardar** arriba para guardar el índice completo.
Guardar la entrada y el índice completo son pasos distintos. Busca entradas dentro del editor. Al salir con cambios pendientes, lee la confirmación antes de conservarlos o descartarlos.
![Edición de títulos y páginas](/screenshots/es/index-editor.png)
## Corrige rangos PDF {#pages}
Las páginas son enteros positivos desde PDF 1. Última página vacía significa una página; si se indica debe ser igual o posterior a la primera. Verifica abriendo la página desde el editor.
Portadas y contenidos pueden desfasar la numeración impresa. Corrige números PDF: no hay ajuste global del desfase. Si la página impresa 10 es PDF 14, usa 14 y comprueba el desfase en todo el documento.
## Importa CSV {#import-csv}
1. Exporta una copia del índice actual antes de reemplazarlo.
2. Usa **Importar CSV** en detalles y elige el CSV de texto.
3. Revisa entradas y páginas con **Editar índice**.
Las columnas separadas por comas son **Title,FirstPage,LastPage**; ese encabezado es válido. **Blue Example,12,14** cubre PDF 12–14. La tercera columna es opcional y toma la primera página. Encierra títulos con comas entre comillas y duplica comillas internas. Usa enteros positivos y un final no anterior al inicio.
CSV vacíos/inválidos se rechazan. Importar reemplaza el índice; no añade un PDF ni corrige una asociación equivocada. Conserva la copia y resuelve un conflicto de versiones antes de reintentar.
## Exporta y verifica {#export}
**Exportar CSV** comparte texto CSV: guarda o copia en un destino que preserve las comas. No contiene el PDF ni constituye una copia completa de la biblioteca.
**Marcar como revisado para este PDF**, si se ofrece tras revisar, registra tu comprobación sin corregir páginas. **Restablecer el índice inicial** reemplaza ediciones por el índice inicial del catálogo; exporta antes si quieres conservarlas.
