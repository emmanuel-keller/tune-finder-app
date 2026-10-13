---
{
  "id": "manual-index",
  "title": "Editar índices e trocar CSV",
  "summary": "Crie entradas, corrija páginas e importe ou exporte índices.",
  "section": "Índices e deteção",
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
## Criar ou editar um índice {#edit}
1. Abra os detalhes em **Livros**.
2. Use **Criar índice manualmente** sem índice ou **Editar índice**.
3. **Adicionar tema**: título, **Primeira página** e **Última página** opcional; guarde a entrada.
4. Corrija com **Editar** ou retire com **Eliminar**.
5. Toque em **Guardar** no topo para guardar o índice completo.
Guardar a entrada e o índice completo são passos distintos. Pesquise entradas no editor. Ao sair com edições pendentes, leia a confirmação antes de guardar ou descartar.
![Edição de títulos e páginas](/screenshots/pt/index-editor.png)
## Corrigir intervalos PDF {#pages}
Páginas são inteiros positivos desde PDF 1. Última página vazia significa uma página; se indicada, deve ser igual ou posterior à primeira. Verifique abrindo a página no editor.
Capas e sumários podem deslocar a numeração impressa. Corrija números PDF: não há controlo global do desvio. Se a página impressa 10 for PDF 14, use 14 e verifique o desvio ao longo do documento.
## Importar CSV {#import-csv}
1. Exporte o índice atual antes de o substituir.
2. Use **Importar CSV** em detalhes e escolha um CSV de texto.
3. Confira entradas e páginas com **Editar índice**.
Colunas separadas por vírgulas: **Title,FirstPage,LastPage**. Esse cabeçalho é aceite. **Blue Example,12,14** cobre PDF 12–14. A terceira coluna é opcional e assume a primeira página. Ponha títulos com vírgulas entre aspas e duplique aspas internas. Use inteiros positivos e fim não anterior ao início.
CSV vazio/inválido é rejeitado. Importar substitui o índice, não acrescenta PDF nem corrige uma associação errada. Conserve a cópia e resolva conflitos de versões antes de repetir.
## Exportar e verificar {#export}
**Exportar CSV** partilha texto CSV; guarde ou copie para um destino que preserve as vírgulas. Não contém o PDF nem é cópia completa da biblioteca.
**Marcar como revisto para este PDF**, se disponível após revisão, regista a verificação sem corrigir páginas. **Repor o índice inicial** substitui edições pelo índice inicial do catálogo; exporte antes para as conservar.
