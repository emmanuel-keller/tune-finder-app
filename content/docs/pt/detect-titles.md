---
{
  "id": "detect-titles",
  "title": "Detetar e rever títulos",
  "summary": "Crie um índice editável com OCR no dispositivo e reveja as propostas.",
  "section": "Índices e deteção",
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
## O que faz a deteção {#overview}
OCR lê texto impresso e propõe títulos e intervalos de páginas no dispositivo, sem enviar o PDF a um serviço OCR. Só propostas revistas e guardadas entram na pesquisa.
Comece com um [PDF importado](/pt/docs/import-pdf/). O índice é a lista de títulos e páginas, distinta do PDF.
## Detetar títulos {#detect}
1. Abra **Livros** e o livro.
2. Toque em **Detetar títulos**; o editor abre e inicia a deteção.
3. Mantenha TuneFinder em primeiro plano.
4. Reveja as entradas no final.
## Pausar e retomar {#pause-resume}
**Cancelar** pausa após a página atual. Passar para segundo plano também interrompe. PDF e progresso ficam guardados; toque novamente em **Detetar títulos** para retomar.
Guarde ou descarte edições pendentes antes de detetar. Substituir o PDF pode invalidar um rascunho; gere outro para o novo documento.
## Rever e guardar {#review}
1. Confira títulos e primeira/última página.
2. Abra páginas no editor; a numeração PDF pode diferir da impressa.
3. Use **Editar**, **Eliminar** ou **Adicionar tema** para corrigir.
4. Toque em **Guardar** para guardar o índice.
5. Em detalhes, escolha **Usar na pesquisa** se não estiver selecionado para pesquisa gratuita.
![Revisão de títulos e intervalos de páginas](/screenshots/pt/index-editor.png)
## Melhorar resultados imperfeitos {#quality}
Texto latino impresso nítido funciona melhor. Escrita manual, tipos decorativos, digitalizações inclinadas/fracas, sumários e vários temas por página causam erros. Notação sem texto não identifica um tema.
Reveja intervalos: cabeçalhos repetidos podem unir-se; continuações sem título podem precisar de correção. Se não houver títulos, adicione manualmente; o PDF permanece.
## Reconstruir ou recuperar {#rebuild}
Pode reconstruir um índice removido se o PDF existir. Restaure ou escolha o PDF se estiver indisponível. Não elimine a biblioteca para reparar OCR.
[Contacte o apoio](mailto:contact@tunefinder.app) com versão, plataforma, ação e referência persistente. Os índices aceites podem [sincronizar-se](/pt/docs/android-drive/).
