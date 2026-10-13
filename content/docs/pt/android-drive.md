---
{
  "id": "android-drive",
  "title": "Sincronização",
  "summary": "Sincronize com iCloud no iPhone/iPad ou Google Drive no Android.",
  "section": "Sincronização e recuperação",
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
## Antes de ligar {#before-connecting}
A biblioteca funciona localmente. Sincronização opcional necessita de internet: iCloud Documents no iPhone/iPad, Google Drive no Android. Use a mesma conta cloud nos dispositivos de cada plataforma.
Não existe sincronização entre iOS e Android. Escolha a plataforma acima.
## Ligar a conta {#connect}
::: ios
### iPhone e iPad: iCloud {#connect-ios}
1. Inicie sessão no iCloud e ative iCloud Drive para TuneFinder nas definições do dispositivo.
2. Abra **Definições** pela roda dentada.
3. Toque em **Ativar iCloud** quando disponível.
4. Espere pelo fim e confira o estado.
5. Ative noutro iPhone/iPad com a mesma conta.
Se indisponível, confira sessão e Drive. A imagem mostra esse estado; a biblioteca local funciona.
![Definições iOS com disponibilidade do iCloud](/screenshots/pt/device-sync.png)
**Pausar iCloud** interrompe sem eliminar cópias locais/cloud. Ative para retomar e mantenha disponíveis dispositivos com edições pendentes.
:::
::: android
### Android: Google Drive {#connect-android}
1. Abra **Definições**.
2. Toque em **Conectar Google Drive**.
3. Escolha a conta e autorize acesso.
4. Espere pela sincronização inicial e confira antes de sair.
5. Repita noutros Android com a mesma conta, incluindo os com edições locais.
TuneFinder gere **TuneFinder Sincronização**; não escolhe pasta no seletor. Cancelar ou recusar acesso conserva a biblioteca local.
![Definições Android com ligação ao Google Drive](/screenshots/pt/device-sync-android.png)
:::
## O que sincroniza {#what-syncs}
PDF, índices aceites, nomes e playlists. Edições não guardadas e progresso OCR ficam no dispositivo; guarde antes de esperar o índice noutro.
Todos os índices podem sincronizar, mas a pesquisa gratuita usa um selecionado. Ficheiros cloud não desbloqueiam compras.
## Quando chegam as alterações {#when}
Sincroniza no arranque quando o serviço está pronto e após alterações locais aceites de livros/playlists. Não verifica continuamente nem sincroniza apenas por voltar a primeiro plano.
Use **Sincronizar agora** em **Definições** ou puxe para atualizar **Livros**/**Playlists**. Faça sincronização manual no outro dispositivo e espere o fim em ambos antes de comparar.
## Problemas de ligação ou sincronização {#troubleshooting}
Confira internet, conta (iCloud no iOS, Google no Android) e espaço local/cloud. Android: **Reconectar Google Drive** renova acesso. iOS: confira Drive e pausa. Não mude de conta para reparar.
PDF grandes demoram. Conserve originais e cópias locais; não elimine/reimporte a biblioteca. Em conflitos, compare versões sem presumir que cloud é mais recente.
Para **TF-SYNC-4300** ou referência persistente, [contacte o apoio](mailto:contact@tunefinder.app) com versões da app/sistema, ação e referência. No Android, a cópia de segurança do sistema é recuperação separada, não sincronização.
Adicione com [Importar PDF](/pt/docs/import-pdf/) e [reveja títulos](/pt/docs/detect-titles/).
