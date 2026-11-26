# Relatório do testador independente — Minuta, Mary!

Data: 26/11/2026. Público simulado: professor universitário que não é do Direito nem programador.

Método: leitura de `app.js`, `dados/conteudo.js`, `motor.js`, `index.html` e trechos de `dados/casos.js`; simulação mental, sem executar o navegador. As dificuldades são hipóteses apoiadas no código, não observações de usuários reais. Não avaliei a validade jurídica das fontes citadas. Nenhum arquivo de implementação foi alterado.

Roteiro A: estado novo → “Começar” → passos 1 a 8, com preenchimento próprio. Também examinei campos e escolhas deixados em branco. Roteiro B: “Carregar exemplo” → os mesmos oito passos com o preenchimento recebido → correção do detector → minuta. Casos e método são desvios possíveis nos dois roteiros. Mudanças de instância, modo e artigo próprio são ramificações explicitadas abaixo.

Durante a leitura, `app.js` mudou externamente. A releitura mostrou alternativas de conserto, confirmação “Consertado” e barra “Voltar à revisão”. Este relatório considera essa versão relida e não aponta essas melhorias como ausentes.

## Tela inicial — T.inicio

1. **O que a pessoa vê:** “quem legisla”, “tipo de prescrição”, “minuta” e “instância competente” (A e B).
   **Onde trava:** encontra linguagem jurídica antes de saber se pode preparar regras para sua própria disciplina. Pode pensar que precisa ocupar cargo de direção.
   **Sugestão concreta de conserto:** “Monte uma primeira versão das regras de uso de IA para sua disciplina, curso ou instituição. Essa primeira versão se chama minuta. Depois, leve-a a quem tem poder para aprová-la.”

2. **O que a pessoa vê:** “Ver uma demonstração” / “Carregar exemplo” (B).
   **Onde trava:** espera apresentação guiada, mas entra no formulário preenchido do passo 1. Não é avisada de que existe erro deliberado no exemplo. O clique substitui todo o preenchimento anterior, sem confirmação ou recuperação.
   **Sugestão concreta de conserto:** “Abrir formulário de exemplo”; antes do clique: “Preenche os oito passos com dados fictícios e um erro para você aprender a revisar. Substitui o preenchimento atual.” Se houver trabalho, oferecer preservá-lo antes da troca.

3. **O que a pessoa vê:** “Começar” e “Apagar o que eu já preenchi”, ao retornar ao início.
   **Onde trava:** “Começar” preserva os dados e apenas abre o passo 1; não distingue continuar de começar do zero. O salvamento automático também não é anunciado, e falhas de armazenamento são ignoradas.
   **Sugestão concreta de conserto:** com dados existentes, “Continuar meu preenchimento”; acrescentar “As alterações são salvas neste navegador”. Se falhar: “Não foi possível salvar. Mantenha esta página aberta e baixe sua minuta antes de sair”.

## Tela 1 — Quem legisla — T.quem

1. **O que a pessoa vê:** sete opções, com “Colegiado de programa de pós-graduação” já selecionado (A e B).
   **Onde trava:** pode escolher seu cargo ou local de trabalho, em vez de quem aprovará as regras. O padrão parece recomendação para todos.
   **Sugestão concreta de conserto:** “Quem vai aprovar estas regras? Para sua disciplina, escolha ‘Docente’. Para o programa inteiro, escolha ‘Colegiado de programa de pós-graduação’.” No roteiro A, pedir escolha explícita.

2. **O que a pessoa vê:** “Competência”, “LDB, LGPD”, “Fundamento da competência” e “o art. 12, inciso II, do Regimento Interno do Programa”.
   **Onde trava:** não sabe onde encontrar o fundamento nem se pode copiar aquele número. Em B, ele já está preenchido como se fosse válido. A ajuda para perguntar à secretaria aparece só na revisão.
   **Sugestão concreta de conserto:** junto ao campo: “Qual trecho do Estatuto ou Regimento permite a esse órgão aprovar estas regras? Não copie o número do exemplo. Se não souber, pergunte à secretaria.” Expandir as siglas na primeira ocorrência.

3. **O que a pessoa vê:** “Nome do órgão”, “Quem acompanha a norma” e “Escreva com o artigo”.
   **Onde trava:** confunde órgão que aprova, pessoa que assina e responsável pelo acompanhamento. “Artigo” pode ser entendido como artigo da norma.
   **Sugestão concreta de conserto:** “Nome do órgão que aprovará as regras”; “Quem receberá dúvidas e acompanhará o cumprimento”; “Comece com ‘a’ ou ‘o’, como em ‘a Coordenação do Programa’.”

4. **O que a pessoa vê:** somente “Norma superior a observar” marcada como opcional; botão “Continuar”.
   **Onde trava:** não sabe o que é obrigatório ou se pode deixar pendências. O código permite avançar com tudo vazio e usa valores genéricos sem explicar isso nessa tela.
   **Sugestão concreta de conserto:** “Pode avançar com informações pendentes. Antes de compartilhar, confira órgão, instituição, fundamento e assinatura.” Indicar em cada campo o efeito de deixá-lo vazio.

5. **O que a pessoa vê:** em B, “Universidade Federal de Exemplo”, “Resolução CONSEPE nº 00/2026” e dados do programa.
   **Onde trava:** não existe identificação persistente de demonstração. Se mudar para “Docente” ou “Reitoria”, os dados anteriores permanecem. Seleções de regras também continuam, mesmo quando deixam de aparecer no passo 5 por não se aplicarem à nova instância.
   **Sugestão concreta de conserto:** mostrar “Exemplo fictício — substitua pelos dados reais”. Ao mudar a instância, listar dados e artigos mantidos que precisam ser revistos, inclusive os ocultos no passo 5.

## Tela 2 — Diagnóstico — T.diag

1. **O que a pessoa vê:** “Quem é alcançado e quantos casos há?”; exemplo “Cerca de 80 discentes, 25 docentes e as bancas de cada ano”.
   **Onde trava:** a pergunta pede casos, mas o exemplo conta pessoas. Não sabe se precisa fazer levantamento antes de avançar.
   **Sugestão concreta de conserto:** “Quem será afetado? Aproximadamente quantas pessoas? Se souber, informe também quantas situações problemáticas ocorreram. Pode usar estimativas e indicar o que precisa confirmar.”

2. **O que a pessoa vê:** “As respostas não entram nos artigos: viram a nota justificativa que acompanha a minuta”.
   **Onde trava:** não sabe onde encontrará a nota. Ela só integra o Word, não a prévia, cópia ou impressão da tela. Campos vazios não geram aviso na revisão.
   **Sugestão concreta de conserto:** “Estas respostas entram na ‘Nota justificativa’ do arquivo Word. Não aparecem no texto copiado nem na impressão desta tela.” Oferecer prévia da nota e indicar respostas pendentes.

3. **O que a pessoa vê:** “O governo federal exige estas perguntas antes de qualquer ato normativo”; em B, respostas preenchidas.
   **Onde trava:** a frase não retoma a distinção de esfera institucional; pode entender que se aplica igualmente a todos. Em B, pode aproveitar uma justificativa fictícia sem adaptá-la.
   **Sugestão concreta de conserto:** adequar a explicação à esfera escolhida e marcar “Respostas fictícias. Para sua minuta, descreva a situação real da sua unidade”.

## Tela 3 — Regular ou orientar? — T.modo

1. **O que a pessoa vê:** “Prescrição não é conselho”, “Regular” selecionado e “Orientar — escrever um guia”.
   **Onde trava:** pode achar que precisa já ter aprovação para escolher Regular, ou que a minuta por si só obrigará alguém.
   **Sugestão concreta de conserto:** “Quer propor regras obrigatórias depois de aprovadas? Escolha ‘Regular’. Quer dar sugestões de boas práticas? Escolha ‘Orientar’.”

2. **O que a pessoa vê:** após escolher “Orientar”, encontrará no passo 5 opções “Obrigar a declarar” e “Proibir nessas tarefas”.
   **Onde trava:** o texto mostrado na seleção não é o texto transformado na montagem do guia. A conversão também não abrange o artigo próprio da mesma forma. Não sabe qual redação prevalecerá.
   **Sugestão concreta de conserto:** mostrar no passo 5 o texto efetivamente gerado; avisar “Você está preparando um guia. As escolhas abaixo devem ser recomendações” e conferir também o artigo próprio.

3. **O que a pessoa vê:** com instância Docente, “escrever uma plano de ensino”; anteriormente leu “Plano de ensino não é ato normativo”.
   **Onde trava:** a explicação geral não esclarece essa situação e há erro de concordância.
   **Sugestão concreta de conserto:** para docente, “Definir regras no plano de ensino, dentro das normas do curso”, com explicação específica desse alcance.

## Tela 4 — O piso nacional — T.piso

1. **O que a pessoa vê:** listas “Vedado” e “Obrigatório”, sem campos.
   **Onde trava:** não sabe se deve apenas ler, marcar algo ou se todos esses textos já serão inseridos na minuta.
   **Sugestão concreta de conserto:** “Aqui você só precisa ler. Nenhuma escolha é feita nesta tela. No próximo passo, escolherá os artigos da sua minuta.” Botão “Entendi: escolher os artigos”.

2. **O que a pessoa vê:** “a sua norma deve respeitar ou cumprir”, seguido de providências institucionais, inclusive licenciatura no exemplo de pós-graduação.
   **Onde trava:** não distingue limites gerais de tarefas da instituição inteira. Pode tentar reproduzir todas as obrigações numa disciplina ou programa.
   **Sugestão concreta de conserto:** separar “Limites que todas as regras devem respeitar” de “Providências da instituição”; indicar o que se aplica à instância escolhida.

3. **O que a pessoa vê:** “o app confere [...] se nada choca com as vedações”.
   **Onde trava:** parece promessa de revisão completa. O motor procura riscos marcados e alguns padrões, sem compreender qualquer redação própria ou checar todas as vedações listadas.
   **Sugestão concreta de conserto:** “O app procura alguns problemas conhecidos. A revisão não é uma análise jurídica completa e pode deixar passar erros, especialmente em textos próprios.”

## Tela 5 — Dispositivos — T.disp

1. **O que a pessoa vê:** “Dispositivos”; “Toda prescrição tem seis partes (von Wright): caráter, conteúdo, condição, autoridade, destinatário e ocasião”.
   **Onde trava:** recebe teoria antes de entender a tarefa. A ficha acrescenta “Meio”, mas não tem linha “Autoridade”, embora a introdução anuncie essa parte.
   **Sugestão concreta de conserto:** “Escolha as regras da sua minuta. Para cada tema, marque uma opção e leia o artigo que ela vai gerar.” Deixar teoria em “Entender a estrutura desta regra”, com tradução de cada termo e indicação da autoridade.

2. **O que a pessoa vê:** em A, todos os temas em “Não incluir”; opções “Obrigar a declarar”, “Só recomendar” e outras.
   **Onde trava:** não sabe por onde começar, quantas escolhas bastam ou quais dependem de outras. Pode permitir usos condicionados à declaração sem incluir declaração, ou escolher proibição que remete ao capítulo de consequências sem incluir esse capítulo. O motor lido não confere especificamente essas remissões.
   **Sugestão concreta de conserto:** mostrar quantidade de temas incluídos e avisos como “Esta opção menciona declaração de uso. Inclua também ‘Declaração de uso’ ou ajuste a redação”. Conferir remissões antes da saída.

3. **O que a pessoa vê:** “Algumas opções estão erradas de propósito”; “Permitir correção automática” e “Nota zero se o detector acusar”.
   **Onde trava:** exercício e decisão real se misturam. Em B, a punição pelo detector já vem selecionada, sem aviso específico de que esse é o erro a procurar.
   **Sugestão concreta de conserto:** marcar cada alternativa de treino como “Exercício: esta opção contém um erro”; em B, “Desafio do exemplo: no passo 7, corrija a regra do detector”.

4. **O que a pessoa vê:** cada escolha acrescenta artigo, ficha e casos; “Continuar” está no fim da página.
   **Onde trava:** a tela fica longa. Cada seleção reconstrói a tela inteira e remove o elemento que tinha foco; a mudança de altura pode deslocar a leitura. Não confirmei o deslocamento visual em navegador.
   **Sugestão concreta de conserto:** preservar foco e posição; oferecer índice de temas e acesso ao avanço durante a leitura, indicando escolhas pendentes.

5. **O que a pessoa vê:** “Meio: nodalidade”, “Medida educativa e remissão”, “Proibir sem salvaguarda”, “instâncias de apuração”.
   **Onde trava:** não traduz os termos em decisões. A nota de método usa “informação”, mas não explica “nodalidade”.
   **Sugestão concreta de conserto:** “Meio usado: informação e orientação”; “Pedir correção do trabalho ou encaminhar ao órgão responsável”; “Proibir, salvo com proteção dos dados”; “órgão que examinará o caso”. Apresentar o termo técnico acompanhado da tradução.

6. **O que a pessoa vê:** modelos em caixas sem edição e “Um dispositivo seu”.
   **Onde trava:** quer adaptar uma frase do modelo, mas não pode digitar nela. O artigo próprio acrescenta outra regra, sem substituir o modelo; pode criar duplicação ou contradição.
   **Sugestão concreta de conserto:** “Os textos acima são modelos fixos. Para substituir um deles, marque ‘Não incluir’ naquele tema e escreva sua versão abaixo. Este campo acrescenta um artigo.”

7. **O que a pessoa vê:** “caput, que é a frase principal do artigo”, “Caráter”, “Destinatário”, “Ocasião” e “Capítulo”.
   **Onde trava:** caput já está explicado, mas os demais campos não têm ajuda equivalente. Exemplos de dissertação ou tese não ajudam tanto quem prepara regras de disciplina. Há valores padrão de caráter e capítulo sem orientação de escolha.
   **Sugestão concreta de conserto:** “Tipo de regra”; “Quem deve cumprir?”; “Quando deve cumprir?”; “Capítulo em que este artigo será colocado”. Adaptar exemplos à instância.

8. **O que a pessoa vê:** “Usar um exemplo bem feito”, “Usar um exemplo com erro” e “Apagar”.
   **Onde trava:** os exemplos substituem todo o artigo próprio e seus campos sem aviso nem desfazer. O exemplo bom trata de orientador e orientando, mesmo para disciplina de graduação. “Apagar” não explicita seu alcance.
   **Sugestão concreta de conserto:** “Substituir meu artigo por este exemplo” e “Apagar somente meu artigo”; oferecer desfazer e modelos adequados à instância.

9. **O que a pessoa vê:** “A revisão do passo 7 confere o que você escrever”.
   **Onde trava:** entende que todas as partes e o sentido serão conferidos. O motor não verifica integralmente isso. Preencher destinatário na ficha não insere automaticamente esse sujeito no artigo.
   **Sugestão concreta de conserto:** “A revisão procura alguns erros. Confira também se o próprio artigo diz quem faz o quê e quando. Os campos da ficha não são inseridos automaticamente no texto.”

## Tela 6 — Revisão e vigência — T.final

1. **O que a pessoa vê:** “Revisão e vigência”, “Rever a cada”, “Entra em vigor”.
   **Onde trava:** confunde revisar o rascunho agora com reavaliar a norma no futuro; o passo seguinte também se chama revisão. Não sabe qual publicação inicia o prazo.
   **Sugestão concreta de conserto:** “Quando as regras começarão a valer e quando serão reavaliadas”; “Reavaliar a norma aprovada a cada”; “Prazo após a publicação oficial pela instituição”.

2. **O que a pessoa vê:** “Toda norma diz [...] quando será revista”, mas pode escolher “não prever revisão”.
   **Onde trava:** o app oferece opção contrária à própria orientação e depois a trata apenas como aviso. Não ajuda a escolher o prazo.
   **Sugestão concreta de conserto:** “Sugestão inicial: 2 anos. Escolha um prazo compatível com o acompanhamento da unidade”; avisar junto à opção de ausência que ela deixará a minuta sem reavaliação prevista.

3. **O que a pessoa vê:** “se houver norma anterior, diga qual se revoga”, sem campo para isso.
   **Onde trava:** recebe instrução sem lugar claro de execução. O único artigo próprio do passo 5 pode já estar ocupado.
   **Sugestão concreta de conserto:** explicitar a limitação atual: “Para escrever uma revogação, volte ao passo 5 e use ‘Um dispositivo seu’. O app aceita apenas um artigo próprio”. Preferencialmente oferecer campo específico de normas substituídas.

4. **O que a pessoa vê:** “Quem assina”; em B, “Fulana de Tal — Presidente do Colegiado”. Em guia e plano, o campo de vigência desaparece, mas a lição permanece.
   **Onde trava:** não sabe se informa seu nome como redator ou o da autoridade que aprovará; pode exportar assinatura fictícia. No guia, procura o campo que a lição geral parece exigir.
   **Sugestão concreta de conserto:** “Nome e cargo de quem aprovará e assinará a versão final. Se ainda não souber, deixe pendente”. Destacar dados fictícios e adaptar a lição quando não houver escolha de vigência.

## Tela 7 — Revisão do legislador — T.rev, cartaoProblema e conserto

1. **O que a pessoa vê:** “Clique no botão azul Consertar [...] redação correta”; cartões com alternativas de solução.
   **Onde trava:** “correta” soa como certificação. Algumas alternativas mudam a decisão entre recomendar e proibir; não são apenas reparos de frase.
   **Sugestão concreta de conserto:** “Escolha a solução que corresponde ao que você quer decidir. O app propõe modelos; não certifica a validade jurídica.” Nomear os efeitos: “Manter recomendação, sem punição” / “Transformar em proibição com consequência”.

2. **O que a pessoa vê:** em A sem escolhas, erro de norma vazia, aviso de fundamento e dica de princípios; em B, problema do detector e aviso de termo vago no mesmo artigo.
   **Onde trava:** vários cartões parecem problemas independentes. Um conserto elimina outros e reorganiza a lista. A versão relida já confirma “Consertado. A lista abaixo foi atualizada”, mas não diz quais pontos foram resolvidos.
   **Sugestão concreta de conserto:** agrupar por artigo e confirmar “Regra do detector substituída. Resolvidos: punição baseada só no detector e expressão ‘uso inadequado’”.

3. **O que a pessoa vê:** “Prefiro corrigir eu mesmo (abre o passo 1)” e barra “Corrija o ponto marcado em laranja e depois volte”.
   **Onde trava:** fundamento e princípios ausentes não têm alvo definido para marcar. A promessa de marca laranja não se cumpre nesses caminhos. Nos dispositivos com alvo, a marca existe, mas some quando uma seleção recria a tela; a barra permanece.
   **Sugestão concreta de conserto:** marcar campo ou temas exatos e manter destaque. Sem alvo, dizer “Você veio da revisão. Corrija o campo indicado abaixo e clique em ‘Voltar à revisão’”, repetindo a orientação pertinente na barra.

4. **O que a pessoa vê:** para erros de artigo próprio, “Consertar: usar este texto” propõe declaração de IA em dissertação ou tese.
   **Onde trava:** o conserto substitui assunto e tipo da regra, mesmo se faltava apenas destinatário numa regra de outra área. Há prévia, mas o rótulo apresenta a substituição como reparo equivalente; não há desfazer.
   **Sugestão concreta de conserto:** “Substituir meu artigo inteiro por um exemplo sobre declaração de uso”; avisar “Este exemplo pode tratar de outro assunto. Para manter sua regra, corrija o campo indicado”. Priorizar orientação específica ao defeito e oferecer desfazer.

5. **O que a pessoa vê:** “Consertar: deixar só a recomendação”.
   **Onde trava:** a ação remove punição por padrão limitado a “sob pena de...”. Texto próprio como “Recomenda-se declarar o uso. A falta causará reprovação.” pode continuar com o problema mesmo após “Consertado”. É inferência do código, não execução em navegador.
   **Sugestão concreta de conserto:** confirmar sucesso somente se o problema deixar de ser detectado; senão, “Ainda há uma punição no texto. Apague ou reescreva o trecho indicado”.

6. **O que a pessoa vê:** “Nenhum problema encontrado. A minuta está pronta para o passo 8”; “Ver a minuta” mesmo com erros.
   **Onde trava:** pode tomar ausência de detecção como confirmação de que nomes, assinatura, diagnóstico e fundamento real foram conferidos. Vários desses dados não são validados. O menu também permite pular direto à minuta.
   **Sugestão concreta de conserto:** “Nenhum problema detectado pelas verificações automáticas. Confira os dados reais e campos pendentes antes de compartilhar”. Com erros, “Ver prévia com pendências”.

## Tela 8 — A minuta — T.minuta

1. **O que a pessoa vê:** “RESOLUÇÃO Nº ___, DE ___ DE __________ DE 20__”, possível assinatura entre colchetes ou dados fictícios de B.
   **Onde trava:** não há campos para número e data nem instrução de preenchimento; a tela é somente leitura. Pode procurar uma etapa esquecida.
   **Sugestão concreta de conserto:** “Esta é uma prévia. Número e data serão preenchidos na versão aprovada. Para editar, baixe em Word. Confira os nomes e as referências fictícias do exemplo.”

2. **O que a pessoa vê:** “Há X artigo(s) marcado(s) com problema. Veja o passo 7”, somente para erros vinculados a artigos.
   **Onde trava:** erros gerais como norma vazia e princípios ausentes ficam fora desse aviso. A prévia pode parecer sem pendências quando falta conteúdo. “ver revisão” dentro do artigo é negrito, não link.
   **Sugestão concreta de conserto:** mostrar todos os problemas e avisos, inclusive gerais, e botão “Voltar à revisão — X problemas”. Tornar “ver revisão” um link funcional.

3. **O que a pessoa vê:** “Copiar o texto”, que muda para “Copiado”.
   **Onde trava:** a confirmação aparece sem esperar o resultado da cópia, inclusive se a API não existir. Pode tentar colar sem receber o texto. Não confirmei quais navegadores ou modos de abertura falham.
   **Sugestão concreta de conserto:** confirmar somente após sucesso; em falha, “Não foi possível copiar automaticamente. Selecione a minuta e use Ctrl+C”.

4. **O que a pessoa vê:** “Baixar em Word”.
   **Onde trava:** o clique solicita `minuta-mary.doc` sem retorno na página ou orientação para localizá-lo. O conteúdo é HTML com extensão `.doc`; aviso de formato em alguns editores é possível, mas não foi observado neste teste mental.
   **Sugestão concreta de conserto:** “Download solicitado: minuta-mary.doc. Procure na lista de downloads do navegador”. Explicar o formato oferecido ou produzir formato Word nativo; não afirmar conclusão do download sem confirmação.

5. **O que a pessoa vê:** “mostrar tipo e origem de cada artigo”, “Ficha de tipificação”, “Ficha de conformidade” e “nota justificativa”.
   **Onde trava:** não sabe o que cada saída inclui. Word leva fichas e diagnóstico; cópia só leva minuta; imprimir usa a tela. As notas de estudo usam classe `nao-doc`, não ocultada pelo CSS de impressão lido, e podem sair impressas com a caixa marcada.
   **Sugestão concreta de conserto:** “Word: minuta + fichas + justificativa. Copiar: somente minuta. Imprimir: conteúdo desta tela”. Usar “Mostrar explicações para estudo” e distinguir impressão com ou sem explicações.

6. **O que a pessoa vê:** somente “Voltar” no final, levando à revisão.
   **Onde trava:** não sabe se terminou, o que fazer com o documento ou se está aprovado; B não recebe encerramento do exercício.
   **Sugestão concreta de conserto:** “Você concluiu a primeira versão. Confira os dados reais e encaminhe ao órgão responsável para discussão e aprovação. O app não publica nem aprova a norma.” Em B, orientar como iniciar a própria minuta e o que fazer com os dados do exemplo.

## Tela Casos do acervo — T.casos

1. **O que a pessoa vê:** “Para ver o original, abra o caso”, seguido de cartões “Fonte F01”, sem botão Abrir.
   **Onde trava:** não percebe que todo cartão é clicável. O cartão é uma `div`, sem link, botão ou foco de teclado; Tab não o alcança como controle.
   **Sugestão concreta de conserto:** botão ou link real “Abrir caso: [tema]”; manter código como informação complementar.

2. **O que a pessoa vê:** grupos “Acertos”, “Pontos de atenção”, “Falhas” e “Orientação, não norma”.
   **Onde trava:** procura por julgamento quando sua dúvida é por assunto, como declaração ou detectores; códigos não ajudam a localizar temas rapidamente.
   **Sugestão concreta de conserto:** dar título descritivo a cada caso e acesso por tema; “Estes trechos são para estudo. Abrir um caso não acrescenta nada à sua minuta.”

3. **O que a pessoa vê:** após sair de um passo para um caso e escolher “Todos os casos”, somem os oito passos do menu; o “Voltar” da lista leva ao início.
   **Onde trava:** perde retorno direto ao trabalho, apesar de a origem ainda poder estar guardada. “Voltar” não significa voltar à atividade anterior.
   **Sugestão concreta de conserto:** manter “Voltar à minha minuta — passo 5” ou “passo 8” na lista; nomear o outro destino como “Voltar ao início”.

## Tela de um caso — T.caso

1. **O que a pessoa vê:** “Caso F01-D008”, “Caráter na base”, “F01-P001 linhas 54-56”, “IAGen” e siglas de programas nos trechos.
   **Onde trava:** não sabe o significado das siglas nem se precisa usar os códigos em algum preenchimento. “Na base” é linguagem da pesquisa.
   **Sugestão concreta de conserto:** título “Exemplo: tarefas reservadas à autoria humana”; “Código do caso: F01-D008”; “Tipo de regra na pesquisa”; “Onde encontrar o trecho na transcrição”. Explicar siglas fora da citação.

2. **O que a pessoa vê:** “Consultar o original: F01 (abre a transcrição completa da fonte)”.
   **Onde trava:** abre outra aba de texto sem localizar o trecho automaticamente nem indicar como retornar. Os caminhos são relativos a `../normas/textos/`. Confirmei o arquivo F01 no workspace, não todas as fontes nem a distribuição junto de uma cópia isolada de `app/`.
   **Sugestão concreta de conserto:** “Abrir transcrição F01 em outra aba. Procure as linhas indicadas e depois volte a esta aba”. Tratar fonte ausente com mensagem explícita.

3. **O que a pessoa vê:** “Todos os casos” e, quando existe origem, “Voltar ao passo”.
   **Onde trava:** não sabe qual passo; o retorno abre o início da tela, sem restaurar o cartão ou artigo consultado.
   **Sugestão concreta de conserto:** “Voltar ao passo 5 — Detectores de texto gerado por IA” ou “Voltar à minuta — artigo consultado”, preservando o ponto de leitura.

## Tela Nota de método — T.metodo

1. **O que a pessoa vê:** “A doutrina”, von Wright, Hood e Margetts, Baldwin, Cave e Lodge, “administração federal direta, autárquica e fundacional”.
   **Onde trava:** quem procura esclarecimento encontra novas referências sem exemplos de uso. Não há explicação de “nodalidade” ou “preâmbulo”. “Ementa” é nome interno do código, não rótulo visível da prévia; não a tratei como palavra que obrigatoriamente aparece nessa tela. Caput já tem explicação no passo 5.
   **Sugestão concreta de conserto:** “Esta página explica de onde vêm os modelos. Você não precisa dominar estas teorias para usar o app”. Glossário: “Preâmbulo: trecho antes dos artigos que identifica quem aprova e com que poder”; “Ementa: frase que resume o assunto”; “Nodalidade: uso de informação e orientação”.

2. **O que a pessoa vê:** referências à cópia da ABMES, leis e estudo de Itamar Freitas, sem links nesse texto.
   **Onde trava:** não sabe como conferir fontes ou encontrar a base normativa das afirmações.
   **Sugestão concreta de conserto:** links com nomes claros para documentos efetivamente usados; separar fontes normativas e teóricas; indicar quais precisam de internet.

3. **O que a pessoa vê:** “Voltar”, que sempre abre o início.
   **Onde trava:** se veio de “Por que só o código?”, não volta à lista. As telas não atualizam histórico de rotas; o Voltar do navegador não percorre os oito passos como pode esperar.
   **Sugestão concreta de conserto:** “Voltar aos casos” quando essa for a origem e “Voltar à minha minuta” quando houver trabalho; implementar histórico coerente de telas. Até lá, explicitar os destinos.

## Os 10 problemas mais graves, em ordem

1. **Revisão apresentada como mais completa do que é.** Passos 4, 5 e 7 podem dar confiança de que o artigo próprio está correto, embora o motor só procure certos padrões. Explicitar limites e evitar certificação de “redação correta”.
2. **Carregar exemplo substitui trabalho anterior sem aviso.** A entrada parece demonstração, mas troca todo o preenchimento. Preservar trabalho ou comunicar claramente a substituição antes do clique.
3. **Exemplo inclui punição pelo detector sem identificação específica do exercício.** A pessoa pode exportar a regra sem passar pela revisão. Sinalizar o desafio e as pendências do exemplo.
4. **Conserto de artigo próprio pode substituir todo o assunto.** Uma regra de outra área vira declaração em dissertação ou tese. Priorizar ajuda específica e nomear qualquer substituição integral.
5. **Tela da minuta não resume erros gerais.** Norma vazia e falta de princípios podem chegar sem o aviso usado para artigos marcados. Mostrar todas as pendências nas saídas.
6. **Falta orientação sobre escolhas e dependências no passo 5.** Tudo começa em Não incluir, e remissões podem apontar para regras ausentes. Indicar relações entre temas e conferir referências internas.
7. **“Copiado” pode ser confirmação falsa.** Não há espera ou tratamento da falha. Confirmar só após sucesso e fornecer alternativa de cópia manual.
8. **Troca de instância conserva dados e regras que podem ficar invisíveis na seleção.** Especialmente após o exemplo, a pessoa pode gerar documento incoerente sem identificar a origem. Mostrar o que ficou mantido e precisa de revisão.
9. **Informações e vocabulário jurídico sem ajuda no ponto de uso.** Fundamento da competência, nodalidade, remissão, destinatário e ocasião interrompem decisões centrais. Usar perguntas simples e exemplos adequados à instância.
10. **Saídas e conclusão do trabalho pouco explicadas.** Word, cópia e impressão levam conteúdos diferentes; número, data e dados fictícios permanecem. Explicar cada saída e o que conferir antes de compartilhar.
