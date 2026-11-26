# Teste independente de usabilidade — segunda rodada

26/11/2026. Público: aluno de pós-graduação ou professor sem formação em Direito, preparando uma minuta para a aula de hoje, inclusive no celular.

Método: li o relatório anterior e os cinco arquivos de `app/dist/`. Executei os scripts em ambiente JavaScript com DOM, armazenamento e download simulados, acionando os eventos do app. Não usei navegador nem abri o arquivo no Word: confirmei a geração do HTML e a solicitação de download, não o recebimento no aparelho. Comprimento da tela e perda de foco são inferências do código; não medi rolagem ou largura em celular. Não conferi validade jurídica nem a publicação remota. Nenhum arquivo do app foi alterado.

## 1. Rodada 1: o que foi resolvido

- **Exemplo deliberadamente errado:** agora há aviso persistente nos passos 1 a 6, identificando “Nota zero se o detector acusar”. A substituição de trabalho pede confirmação quando há órgão, instituição ou seleções. **Parcial:** se houver somente diagnóstico, assinatura ou texto próprio, a confirmação não é acionada; o aviso de exemplo não aparece nos passos 7 e 8.
- **Quem aprova e fundamento:** “Marque quem vai aprovar a norma” e a ajuda para deixar o fundamento pendente esclarecem a tarefa. **Parcial:** o colegiado continua previamente selecionado; os demais campos e a assinatura ainda não têm orientação suficiente sobre pendências e papéis.
- **Piso nacional:** “Nada a preencher aqui: leia e clique em Continuar” resolve a dúvida sobre a ação. Permanece a mistura entre limites gerais e providências da instituição inteira.
- **Começar as escolhas:** botão de recomendações e contador resolvem a falta de ponto de partida. Alternativas arriscadas agora trazem “com defeito, para aprender”. A ficha traduz destinatário, ocasião e nodalidade. **Parcial:** continuam termos como “Medida educativa e remissão”; a ficha não mostra quem manda, apesar da introdução anunciar essa parte.
- **Remissões:** há verificação e conserto para certas referências a consequências. **Parcial:** permitir apoio “desde que declarado nos termos desta norma” sem incluir “Declaração de uso” ainda não produz aviso específico dessa dependência.
- **Troca de instância:** remove seleções incompatíveis e informa quais saíram. **Parcial:** conserva órgão, fundamento, assinatura e texto próprio; eles podem continuar pertencendo à instância anterior.
- **Limites da revisão:** passo 7 agora diz que procura defeitos conhecidos e não garante texto próprio correto; a mensagem de lista vazia também melhorou. **Parcial:** passo 4 ainda promete conferir “se nada choca com as vedações”; passo 5 diz “confere o que você escrever”; passo 7 ainda oferece “redação correta”.
- **Substituição do artigo próprio:** resolvida a falta de aviso: “Trocar o meu texto por este modelo” explica que substitui o texto inteiro e trata de declaração de uso. Continua sem desfazer. O conserto de recomendação ainda só retira o trecho “sob pena de...”: outra frase de punição pode permanecer após “Consertado”.
- **Prévia e saídas:** passo 8 agora resume todos os erros, inclusive gerais, e oferece “Ver e consertar no passo 7”. Cópia espera sucesso e trata falha. “E agora?” explica número, data, dados de exemplo, conteúdo do Word e encaminhamento. **Parcial:** avisos e dicas não entram no resumo da tela; a justificativa só pode ser lida no arquivo; não há retorno do download. O arquivo continua HTML chamado `.doc`, não `.docx`; não observei aviso de formato em editor.

**Permanecem da rodada 1:** “Começar” não distingue continuar; falha de salvamento é silenciosa; diagnóstico mantém pergunta sobre “casos” com exemplo que conta pessoas e explicação federal geral; modo Orientar mantém rótulos obrigatórios no passo 5 e não converte igualmente o artigo próprio; passo 6 orienta revogação sem campo específico e mantém lição geral quando esconde vigência; casos continuam cartões sem foco de teclado, sem busca por tema e com retorno pouco claro; nota de método mantém vocabulário e retorno ao início; histórico do navegador não acompanha os passos. A impressão continua sem ocultar `.nao-doc`. Os destaques da correção manual continuam ausentes em alguns campos e desaparecem ao reconstruir a tela.

## 2. Dois percursos completos

Usei estados novos e separados, com a instância inicial de colegiado de pós-graduação. Preenchi órgão, instituição, acompanhamento e assinatura de teste; respondi às quatro perguntas com informação a confirmar. Deixei fundamento vazio, seguindo a ajuda da tela, pois um leigo pode não conhecer o regimento. Mantive Regular, revisão em dois anos e vigência na publicação; não acrescentei artigo próprio no percurso principal.

**A — escolher uma a uma:** Começar → passo 1 → diagnóstico → Regular → leitura do piso → decidi cada um dos 26 temas, escolhendo uma alternativa sem marca de defeito → passo 6 → revisão → prévia → Baixar em Word. Foram gerados 29 artigos e um aviso de fundamento, sem erros. O download solicitado foi `minuta-mary.doc`, incluindo fichas, quadro por público e justificativa. A tela não exige resolver o fundamento para baixar.

**B — recomendações:** mesmo percurso, mas no passo 5 cliquei em “Marcar as opções recomendadas”. O resultado também foi 26 temas incluídos, 29 artigos e o aviso de fundamento; a solicitação de download funcionou. O botão escolhe a primeira variante sem risco de cada tema aplicável. Não escolhe conforme os públicos marcados. Nesta configuração, não apareceu conflito entre os modelos recomendados.

Há 27 temas no acervo, mas 26 aparecem para pós-graduação; a quantidade varia por instância (14 para Docente). Portanto, não são 26 para todos.

## 3. Travas novas e agravadas, por tela

### Passo 1 — públicos

**Texto:** “A quem a norma se dirige” / “Marque todos os públicos. Na revisão, o app avisa se algum deles ficou sem regra.” Cinco públicos já vêm marcados; técnicos ficam desmarcados. A escolha só alimenta avisos: não filtra temas nem impede inserir regras para públicos desmarcados. O leigo pode entender que delimitou o alcance real da minuta.

**Sugestão:** “Estas marcas servem para conferir cobertura; não retiram artigos. Para excluir regras de um público, ajuste os temas no passo 5.” Oferecer seleção inicial explícita.

### Passo 5 — extensão da tela e recomendações

**Texto:** “Em cada tema, marque uma opção” / “26 de 26 temas decididos.” São 26 cartões abertos, com opções, casos e, após seleção, texto e ficha. Só há “Continuar” no fim. Cada escolha recria todo o conteúdo, sem restaurar foco; não há índice nem recolhimento. As recomendações abrem 26 textos e fichas de uma vez. É uma carga grande para conferir no celular; não medi quantas telas ocupa.

**Sugestão:** índice por capítulo, cartões recolhíveis, preservação do foco e botão de avanço acessível durante a leitura. Separar contagem de temas decididos e artigos incluídos: “Não incluir” também conta como decisão.

**Texto:** “Marcar as opções recomendadas”. O botão preenche também temas explicitamente marcados como “Não incluir”, mas conserva alternativas já selecionadas, inclusive defeituosas. Um aluno pode perder exclusões intencionais e pensar que o botão tornou todo o conjunto recomendado.

**Sugestão:** preencher só temas ainda não decididos; explicar “Mantém escolhas anteriores, inclusive as com defeito” e informar o que foi acrescentado.

### Passo 7 — conflito e Consertar

**Texto:** “Consertar: recomendar, ressalvando os usos de apoio” / “Consertado. A lista abaixo foi atualizada.” Reproduzi um conflito acrescentando “É proibido redigir textos com IA.” como artigo próprio, com usos de apoio permitidos. O motor aponta `CONFLITO_REDACAO`, mas esse conserto altera `recomenda_sancao`, não o artigo próprio. O conflito permanece. O mesmo problema de alvo existe no conserto de prova quando a pena está no texto próprio: a ação inclui/altera o modelo de consequências.

**Sugestão:** aplicar a ação ao artigo indicado ou oferecer correção manual específica; confirmar “Consertado” somente após conferir se o alerta desapareceu.

**Texto:** “repete o que já diz” / “Consertar: apagar o meu texto repetido”. Duplicidade é estimada por palavras compartilhadas ou menções a declaração e metodologia/introdução, somente em pares com artigo próprio. Não compara todos os modelos nem demonstra equivalência de sentido. O botão apaga o artigo próprio inteiro, sem desfazer.

**Sugestão:** “Possível repetição: compare estes dois artigos”, mostrando ambos e oferecendo desfazer a exclusão. Conflitos também são verificações específicas de redação e prova, não uma busca geral de contradições.

### Passo 8 — quadro por público e pendências

**Texto:** “O que esta norma pede de cada um” / “nenhum artigo — e você marcou este público”. O quadro oferece números e tipos clicáveis, não um resumo das tarefas. A classificação usa palavras da ficha de destinatário; no artigo próprio, também usa o caput. Por exemplo, “apuração” conta para “Bancas e pareceristas”, mesmo sem identificar uma banca. Assim, presença de artigo não garante cobertura efetiva daquele público.

**Sugestão:** título “Artigos associados a cada público — confira os destinatários”, com frase curta da ação e aviso de classificação aproximada. Os links para artigos existem e têm alvos correspondentes.

**Texto:** “Baixar em Word”. Nos dois percursos, o aviso de fundamento desaparece do resumo da prévia, pois ali só aparecem erros. Ele continua na ficha exportada. O botão não informa que solicitou o download, nem onde procurar o arquivo.

**Sugestão:** mostrar também “1 aviso pendente — revisar fundamento” antes da saída; após o clique, “Download solicitado: minuta-mary.doc. Procure nos downloads do navegador”.

## 4. As cinco travas mais graves para hoje à noite

1. **Consertar o artigo errado:** conflito em texto próprio pode permanecer após confirmação de conserto. Corrigir o alvo e verificar o resultado.
2. **Conferir 26 temas numa tela extensa:** escolhas reconstroem a tela e retiram o foco; leitura e avanço ficam trabalhosos no celular. Recolher cartões e preservar posição/foco.
3. **Recomendações desfazem exclusões deliberadas:** “Não incluir” é preenchido novamente, e escolhas defeituosas permanecem. Distinguir decisões anteriores de temas pendentes.
4. **Públicos dão impressão de controle maior do que oferecem:** desmarcar não exclui regras; o quadro usa associação por palavras. Explicar o efeito e mostrar destinatários e tarefas.
5. **Pendências ficam discretas na hora de baixar:** fundamento ausente some do resumo, e o download não dá retorno. Exibir avisos na saída e orientar onde encontrar o arquivo.
