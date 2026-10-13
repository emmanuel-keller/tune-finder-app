---
{
  "id": "android-drive",
  "title": "Sincronización",
  "summary": "Sincroniza con iCloud en iPhone/iPad o Google Drive en Android.",
  "section": "Sincronización y recuperación",
  "order": 8,
  "platforms": [
    "ios",
    "android"
  ],
  "minVersion": "1.5.5",
  "verifiedRelease": "1.5.5",
  "related": [
    "playlists",
    "troubleshooting"
  ]
}
---
## Antes de conectar {#before-connecting}
La biblioteca funciona localmente. La sincronización opcional necesita internet: iCloud Documents en iPhone/iPad y Google Drive en Android. Usa la misma cuenta cloud en los dispositivos de cada plataforma.
No hay sincronización entre iOS y Android. Elige la plataforma arriba.
## Conecta tu cuenta {#connect}
::: ios
### iPhone y iPad: iCloud {#connect-ios}
1. Inicia sesión en iCloud y activa iCloud Drive para TuneFinder en los ajustes del dispositivo.
2. Abre **Ajustes** con el engranaje.
3. Toca **Activar iCloud** cuando esté disponible.
4. Espera al final y comprueba el estado.
5. Actívalo en otro iPhone/iPad con la misma cuenta.
Si falta iCloud, comprueba sesión y Drive. La imagen muestra estado no disponible; tu biblioteca local funciona.
![Ajustes iOS con disponibilidad de iCloud](/screenshots/es/device-sync.png)
**Pausar iCloud** detiene la sincronización sin borrar copias locales/cloud. Actívala para continuar y conserva disponibles dispositivos con cambios pendientes.
:::
::: android
### Android: Google Drive {#connect-android}
1. Abre **Ajustes**.
2. Toca **Conectar Google Drive**.
3. Elige tu cuenta y autoriza acceso.
4. Espera a la sincronización inicial y comprueba el estado antes de salir.
5. Repite en otros Android con la misma cuenta, incluidos los que tengan cambios locales.
TuneFinder gestiona **TuneFinder Sincronización**: no eliges carpeta en el selector. Cancelar o denegar acceso conserva la biblioteca local.
![Ajustes Android con conexión Google Drive](/screenshots/es/device-sync-android.png)
:::
## Qué se sincroniza {#what-syncs}
PDF, índices aceptados, nombres y listas. Ediciones sin guardar y progreso OCR permanecen en el dispositivo; guarda el índice antes de esperarlo en otro.
Todos los índices pueden sincronizarse, pero búsqueda gratuita usa uno seleccionado. Los archivos cloud no desbloquean compras.
## Cuándo llegan los cambios {#when}
Se sincroniza al iniciar con el servicio listo y tras cambios locales aceptados de libros/listas. No se consulta continuamente ni se sincroniza solo por volver a primer plano.
Usa **Sincronizar ahora** en **Ajustes**, o tira para actualizar **Libros**/**Listas**. Haz sincronización manual en el otro dispositivo y espera al final en ambos antes de comparar.
## Problemas de conexión o sincronización {#troubleshooting}
Comprueba internet, cuenta (iCloud en iOS, Google en Android) y espacio local/cloud. Android: **Reconectar Google Drive** para renovar acceso. iOS: comprueba Drive y pausa. No cambies cuenta para reparar.
PDF grandes tardan. Conserva originales y copias locales; no borres/reimportes la biblioteca. En conflictos compara ambas versiones, sin suponer que cloud es más reciente.
Para **TF-SYNC-4300** u otra referencia persistente, [contacta con ayuda](mailto:contact@tunefinder.app) con versiones de app/sistema, acción y referencia. En Android, la copia del sistema es recuperación aparte, no sincronización.
Añade documentos con [Importar PDF](/es/docs/import-pdf/) y [revisa títulos](/es/docs/detect-titles/).
