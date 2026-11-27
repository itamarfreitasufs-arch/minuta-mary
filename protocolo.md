# Minuta, Mary! — protocolo do app

Protocolo de **Itamar Freitas** (Universidade Federal de Sergipe), versão **1.0 experimental**, de 26 de novembro de 2026. Construído em São Cristóvão, Sergipe, na UFS, para o curso de regulação da inteligência artificial no ensino superior oferecido aos alunos do Programa de Pós-Graduação em Desenvolvimento e Meio Ambiente (PRODEMA/UFS). Documento preparado com assistência de IA (Claude, com o Codex como executor de tarefas mecânicas e testador independente).

Este documento descreve como o Minuta, Mary! foi construído e como pode ser reconstruído, auditado ou melhorado por qualquer pessoa. Ele é a documentação do app: o que ele faz, de onde vem cada regra, como foi testado e como é publicado.

App publicado: https://iaeduca.online/mary/

---

## 1. O que é

O Minuta, Mary! é uma **escola de legisladores**. Ensina a escrever uma norma sobre uso de inteligência artificial enquanto ajuda a escrevê-la. A pessoa escolhe quem legisla, entende o problema, decide se vai regular ou orientar, conhece o piso nacional, escolhe e tipifica cada dispositivo, revisa a minuta como um legislador e sai com o texto articulado pronto para levar à instância competente.

Três camadas, nesta ordem de força:

1. **Espinha:** a Resolução CNE/CP nº 1, de 11 de novembro de 2026 (diretrizes nacionais para o uso de IA na educação). Ela define o que a norma local não pode permitir, o que deve conter e o que fica à decisão da instituição.
2. **Doutrina:** o quadro teórico sobre prescrições (von Wright; Hood e Margetts; Baldwin, Cave e Lodge), que tipifica cada dispositivo e diz o que cada tipo deve e não deve conter.
3. **Repertório:** normas reais de instituições brasileiras, usadas como casos de acerto e de falha, identificadas só pelo código da fonte.

Princípios fixos:

- **Sem IA.** O app é um sistema de regras escrito em HTML e JavaScript. Não chama nenhum modelo de linguagem.
- **Nada do que a pessoa escreve sai do aparelho.** Fica só no navegador dela (armazenamento local). Não há conta nem servidor de dados. Um contador anônimo (`conta.php`) registra só o dia e o tipo de evento (visita, começou uma norma, chegou à minuta, baixou em Word), sem cookies, sem IP e sem texto; o total de visitas aparece discreto no rodapé, e um painel protegido por chave mostra os números ao autor.
- **Minuta de apoio.** O texto não tem valor jurídico. A redação final cabe à instância competente.
- **Não constranger quem fez a norma.** Os exemplos de falha aparecem só pelo código da fonte (F02, F29 etc.), com o critério que falhou; o original pode ser consultado a partir do código.

Primeira versão: educação superior, em sete instâncias (conselho superior, reitoria, pró-reitoria, colegiado de programa de pós-graduação, colegiado de curso de graduação ou licenciatura, coordenação de programa de extensão, docente no plano de ensino).

---

## 1A. Por que este app, e por que agora

- A Resolução CNE/CP nº 1/2026 obriga cada instituição de ensino superior a ter política própria de uso de IA (art. 27) e dá doze meses para a adequação (art. 46). Universidades, programas e cursos vão escrever regras agora.
- As normas que já existiam, quase todas anteriores à Resolução, repetem defeitos de estrutura: em 61 de 66 documentos com disposições sobre IA há ao menos uma obrigação sem consequência localizada; são comuns os gatilhos vagos, a mistura de recomendação com regra e a confusão entre quem recebe a obrigação e quem apenas se beneficia dela (artigo sobre o acervo).
- A margem que a Resolução deixa às instituições é legítima, mas tem custo quando o estudante só descobre o critério no momento da avaliação: o alcance de "uso relevante" (art. 28), o peso do detector numa apuração (arts. 40 e 41, verbete 34), passagens do glossário que prescrevem (verbete 87) (ensaio A); lacunas como a revisão de uma classificação automática sem destinatário nem prazo, ambiguidades como "relevante" e contradições como a do Anexo II com a exceção de pesquisa do art. 41 (ensaio B).
- Os dois ensaios terminam no mesmo ponto: as regras locais devem ser conhecidas antes da entrega e escritas com a participação de quem vai cumpri-las. O Minuta, Mary! é a ferramenta para esse exercício, na UFS e fora dela.

### Textos que fundamentam o app

- FREITAS, Itamar. Regulação e orientação do uso da inteligência artificial no trabalho historiográfico: agentes, práticas e instrumentos. Texto apresentado na palestra “Inteligência Artificial e Integridade Acadêmica: como utilizar ferramentas de IA de forma crítica, ética e metodologicamente adequada nas diferentes etapas da elaboração de dissertações”, Mestrado Profissional em Rede Nacional em Gestão e Regulação de Recursos Hídricos (ProfÁgua), Universidade Federal de Roraima. Boa Vista, 21 out. 2026. Disponível em: https://iaeduca.online/textos/regulacao-ia-trabalho-historiografico/. Acesso em: 26 nov. 2026.
- FREITAS, Itamar. A regulação do uso de inteligência artificial na pós-graduação. Ensaio apresentado no Curso IA e Regulamentação no Ensino Superior, Programa de Pós-Graduação em Desenvolvimento e Meio Ambiente, Universidade Federal de Sergipe. São Cristóvão, 25 nov. 2026. Disponível em: https://iaeduca.online/textos/regulacao-ia-pos-graduacao/. Acesso em: 26 nov. 2026. (ensaio A)
- FREITAS, Itamar. Lacunas, ambiguidades e contradições nas regras de uso da IA na pós-graduação. Ensaio apresentado no Curso IA e Regulamentação no Ensino Superior, Programa de Pós-Graduação em Desenvolvimento e Meio Ambiente, Universidade Federal de Sergipe. São Cristóvão, 25 nov. 2026. Disponível em: https://iaeduca.online/textos/lacunas-ambiguidades-contradicoes-ia/. Acesso em: 26 nov. 2026. (ensaio B)

---

## 1B. Quatro trilhas (versão publicada 14)

- Na primeira tela, duas perguntas: o nível (educação básica ou superior) e o alcance (para a instituição ou para a sala de aula). Elas levam a quatro trilhas.
- **Superior / instituição:** a trilha original (conselho superior, reitoria, pró-reitoria, programa de pós-graduação, curso, extensão), congelada. Depois da mudança, a minuta e os alertas foram comparados com os da versão 13 em 33 situações, sem diferença.
- **Superior / sala de aula:** o plano de ensino do docente, que já existia dentro da trilha original.
- **Básica / instituição:** conselho de educação (municipal ou estadual), secretaria de educação, conselho escolar e direção da escola. São 27 temas em nove capítulos: uso em cada etapa (arts. 21 a 23), uso pedagógico, avaliação e decisões sobre o estudante, proteção dos estudantes e de seus dados, famílias, adoção e contratos, formação, acompanhamento e consequências. A revisão acusa o que a Resolução veda para cada etapa, o treino de IA com produções de crianças e adolescentes (art. 15, parágrafo único) e a proibição total de IA na escola.
- **Básica / sala de aula:** as regras do professor para a sua turma, no plano de ensino. O passo 1 pergunta a etapa da turma, e o passo 5 mostra só os temas daquela etapa.
- Uma base técnica para todas: o mesmo motor de montagem e de revisão, os mesmos tipos de prescrição e a mesma técnica legislativa. Cada trilha tem o seu arquivo de conteúdo (dados/conteudo.js, dados/basica.js, dados/basica_aula.js) e a sua bateria congelada.
- Testes da educação básica:
  - escola: 25 de 27 casos; as 2 falhas são do próprio teste, que procura "a a " e acha "revista a cada", o mesmo defeito do caso 27 da bateria superior;
  - turma: 14 de 14;
  - avaliador independente (Codex): as 534 dúvidas de educação básica do "Pode isso, Jane?" contra a minuta completa da escola. Resultado: 126 respostas diretas, 146 parciais, 8 silêncios e 254 fora do objeto, dos quais 136 são situações de crise que nenhuma norma de IA resolve.
- Do exame jurídico do avaliador entraram na versão 14:
  - a revisão de nota sem prejuízo dos recursos do regimento;
  - a correção dos registros de todos os atingidos;
  - nenhuma medida por uso que não tenha sido vedado antes, nem punição coletiva;
  - a correção sem mera confirmação do que a ferramenta sugeriu;
  - a identificação pontual que não vira controle de frequência;
  - o protocolo de montagens falsas (cessar a circulação, preservar provas sem reproduzir, não expor a vítima, Conselho Tutelar já na suspeita);
  - os conteúdos dos professores, que só treinam IA com autorização específica;
  - o uso equilibrado e a autonomia intelectual no currículo.
- Ficaram para depois:
  - a reclassificação periódica de risco;
  - o apoio da rede às escolas pequenas;
  - o protocolo de incidente de dados com prazos.

---

## 1C. No celular, sem loja (versão publicada 15)

- O app pode ser instalado na tela inicial do celular, como o "Pode isso, Jane?": manifesto (`manifest.webmanifest`), ícone da pena (`icones/`), abertura como app e funcionamento sem internet (`sw.js`).
- Regra do funcionamento sem internet: com internet, abre sempre a versão publicada mais recente (rede primeiro); sem internet, a última cópia guardada no aparelho. O contador (`conta.php`) nunca passa pelo cache. O que a pessoa escreve continua só no armazenamento local do aparelho.
- Na tela inicial, a caixa "Baixe o Mary no celular" mostra o botão Instalar no Android e os dois passos no iPhone (Compartilhar, "Adicionar à Tela de Início"). "Agora não" esconde a caixa por 30 dias. No computador, a caixa só aparece pelo link "Instalar no celular" do rodapé.
- A cada versão nova, além de subir o `?v=N` no `index.html`, é preciso subir o nome do cache e a lista de arquivos em `sw.js`.
- Contador de instalações (aproximado, sem cookies nem dado pessoal): no Android conta o botão Instalar (`inst_android`); no iPhone, que não avisa, conta a primeira abertura como app pelo ícone, uma vez por aparelho (`app_iphone`), com uma marca guardada só no aparelho; a mesma regra vale no Android como conferência (`app_android`). O painel mostra a tabela "Instalações no celular (aproximado)".
- Testes: Android e iPhone simulados, funcionamento sem internet com o servidor desligado, as três baterias sem mudança.

---

## 2. Base normativa e técnica legislativa

### 2.1 Resolução CNE/CP nº 1/2026 (espinha)

Lida artigo por artigo e organizada em quatro grupos, cada um com um comportamento no app:

| Grupo | Exemplos | O que o app faz |
| --- | --- | --- |
| Vedado | art. 41, IX (nota a texto autoral só por IA); art. 41, X (sanção baseada só em detector); art. 41, II (inferência de emoções); art. 15 (treinar modelos de terceiros com produção de docentes e estudantes sem autorização); art. 29, parágrafo único (decisão só automatizada) | Avisa e marca o artigo que permitir algo vedado |
| Obrigatório | art. 27 (política própria com autoria, integridade, transparência, responsabilidade intelectual e proteção de direitos); art. 27, § 3º (formação docente nas licenciaturas); art. 28 (declaração do uso relevante na pesquisa); art. 12, § 2º (revisão periódica) | Confere se a minuta cobre cada item |
| Facultado | art. 27, § 2º (critérios de transparência, formas de declaração, procedimentos de revisão) | Oferece dispositivos opcionais |
| Deixado à instituição | tarefas reservadas à autoria humana, regras por disciplina, comissões locais | Campo livre, guiado pela doutrina |

A interpretação das disposições que mais pesam na pós-graduação (o alcance de "uso relevante" no art. 28, as passagens prescritivas do glossário, como o verbete 34 sobre detectores e o verbete 87 sobre uso individual, e o papel do detector na apuração, arts. 40 e 41) está no ensaio de Itamar Freitas "A regulação do uso de inteligência artificial na pós-graduação".

O art. 46 dá às instituições 12 meses para se adequarem, contados de 12/11/2026.

Texto usado: cópia da ABMES do Diário Oficial da União de 12/11/2026 (Edição 213-B, Seção 1 Extra B, p. 7). O site do DOU bloqueou o download automático; recomenda-se conferir com a versão do DOU.

### 2.2 Técnica legislativa

- **Lei Complementar nº 95/1998**, art. 10 (articulação: artigo, parágrafo, inciso, alínea; ordinal até o nono e cardinal a partir do décimo) e art. 1º, parágrafo único (aplica-se "no que couber" aos atos do Executivo).
- **Decreto nº 12.002/2024**, que revogou os Decretos nº 9.191/2017 e nº 10.139/2019. Vale para a administração federal direta, autárquica e fundacional (inclui as universidades federais). Usado no app: art. 3º e Anexo (diagnóstico prévio), art. 4º (estrutura e fundamento de validade no preâmbulo), art. 6º (objeto e âmbito nos primeiros artigos), art. 7º (um só objeto), art. 9º (portaria e instrução normativa para autoridade singular; resolução para colegiado), art. 10 (vedado aprovar ato normativo por despacho), art. 11 (clareza, precisão e ordem lógica), art. 15 (proibida a cláusula "revogam-se as disposições em contrário"), arts. 16 a 18 (vigência expressa), arts. 27 a 30 (consulta pública).
- Para instituições estaduais e privadas, o decreto é tratado como boa prática, e o app avisa isso.

### 2.3 Hierarquia ensinada no passo 1

Constituição (art. 207, autonomia universitária) → leis (LDB, LGPD) → Resolução CNE/CP nº 1/2026 → Estatuto e Regimento Geral → resoluções dos conselhos superiores → portarias da reitoria e instruções normativas das pró-reitorias → normas dos colegiados → plano de ensino.

"Obedecer não é copiar": a própria Resolução manda cada instituição ter política própria e respeita a autonomia pedagógica (art. 4º, VI).

---

## 3. Quadro teórico (a doutrina)

Origem: o artigo de Itamar Freitas "Regulação e orientação do uso da inteligência artificial no trabalho historiográfico: agentes, práticas e instrumentos", que analisou 71 unidades documentais brasileiras com sete perguntas (agentes e destinatários; conduta visada; âmbito; meio de intervenção; caráter e consequências; fundamento; relação com outros documentos).

Componentes de cada prescrição (von Wright): **caráter** (obrigação, proibição, permissão), **conteúdo** (ação ou abstenção), **condição de aplicação**, **autoridade**, **destinatário** e **ocasião**. Os três primeiros formam o núcleo. Recomendações e conselhos ficam identificados como tais.

Meios de intervenção (Hood e Margetts): informação (nodalidade), autoridade, recursos (tesouro) e organização; funções detectora e efetora.

Regulação (Baldwin, Cave e Lodge): influência deliberada sobre condutas, incluindo instrumentos além do comando.

No app, cada dispositivo passa por uma **ficha**, mostrada em linguagem simples: Tipo (caráter), O que fazer (conteúdo), Em que condição, Quem cumpre (destinatário), Quando (ocasião), Como age (meio), Se não cumprir (consequência).

Tabela doutrinária usada pela revisão (o que cada tipo deve e não deve conter):

| Tipo | Deve conter | Não deve conter |
| --- | --- | --- |
| Obrigação | destinatário direto nomeado; ação concreta; ocasião; consequência ou remissão | "sempre que possível", "recomenda-se"; tarefa atribuída a quem só se beneficia dela |
| Proibição | abstenção delimitada a uma tarefa; exceções expressas | "vedado o uso de IA" sem dizer em quê |
| Permissão condicionada | tarefa permitida; condições; quem verifica | permissão do que o art. 41 veda |
| Recomendação | marca de conselho; razão; exemplo | sanção (recomendação com pena é obrigação disfarçada) |
| Atribuição de competência | órgão individualizado; finalidade; prazo se for ato único | competência que o emissor não tem |
| Direito | titular; o que pode exigir e de quem | direito sem instância que o atenda |
| Consequência | gatilho claro; quem apura; distinção entre medida educativa e punição | gatilho vago ("uso inadequado"); prova só por detector |

---

## 4. Acervo

- **Corpus de pesquisa:** 78 documentos (F01 a F78), 82 transcrições, e uma base analítica com 1.689 registros (1.527 disposições sobre IA), cada um com trecho literal, página e linhas, classificado pelas sete perguntas. Recorte principal: 71 unidades brasileiras.
- **Casos usados no app:** 15 disposições escolhidas para ensinar (acertos, pontos de atenção, falhas e um exemplo de guia), extraídas da base pelo Codex e conferidas. Cada caso leva a lição e "Para a sua escolha".
- **Documentos multilaterais e nacionais** (para considerandos e remissões, não como modelo de artigo): Unesco (Guia para a IA generativa na educação e na pesquisa; Recomendação sobre a Ética da IA; Consenso de Pequim; referenciais de competências para professores e estudantes), Comissão Europeia (Orientações éticas para educadores; Living guidelines sobre IA generativa na pesquisa), OCDE (Recomendação do Conselho sobre IA), Conselho da Europa (Convenção-Quadro sobre IA) e a Resolução CNE/CP nº 1/2026. Origem e hash de cada um em `LEIAME_multilaterais.csv`.

O acervo de pesquisa não integra a distribuição pública; o app usa só os 15 casos, por código.

---

## 5. Desenho do app

Oito passos, cada um com uma lição curta, uma escolha e um exemplo real:

1. **Quem legisla:** instância, órgão, instituição, esfera (federal, estadual ou privada), fundamento da competência, norma superior, quem acompanha e a quem a norma se dirige (discentes, docentes, orientadores, bancas, gestão, técnicos).
2. **Diagnóstico:** as perguntas do Anexo do Decreto nº 12.002/2024. As respostas viram a nota justificativa.
3. **Regular ou orientar:** norma ou guia. Num guia, prescrições viram orientações.
4. **Piso nacional:** o que a Resolução veda e obriga.
5. **Dispositivos:** 27 temas (26 para programa de pós-graduação), cada um com variantes. Algumas variantes têm defeito de propósito, marcadas "com defeito, para aprender". Botão "Marcar as opções recomendadas nos temas que faltam" e campo "Um dispositivo seu".
6. **Revisão e vigência:** revisão periódica, vigência expressa, quem assina.
7. **Revisão do legislador:** 22 verificações automáticas, com "Como está", "Como poderia ficar", botão "Consertar" e "Corrigir eu mesmo".
8. **A minuta:** texto articulado, quadro "O que esta norma pede de cada um", tipo e origem de cada artigo; Word (com fichas de tipificação e de conformidade e nota justificativa), copiar e imprimir ou salvar em PDF.

Verificações do passo 7: vedações do art. 41 (IX e X); termo vago; obrigação sem destinatário; recomendação com pena; proibição genérica; cláusula genérica de revogação; consequência sem apuração; competência da instância; pena no plano de ensino; guia que não obriga; princípios do art. 27; licenciatura sem formação docente; sem revisão periódica; sem fundamento de competência; esfera não federal; norma vazia; remissão a capítulo inexistente; conflito entre permitir a revisão do texto e vedar a redação; conflito entre pena sem prova e uso só indiciário do detector; duplicidade com texto próprio; público marcado sem regra.

Arquitetura: `index.html` (estrutura e estilo), `app.js` (telas), `motor.js` (regras puras: montagem, numeração, normalização do preâmbulo, revisão, públicos), `dados/conteudo.js` (instâncias, piso, tipos, capítulos, dispositivos-modelo, diagnóstico) e `dados/casos.js` (casos). Funciona com dois cliques no arquivo e em qualquer servidor estático.

---

## 6. Método de construção (replicável)

1. **Varredura antes de construir.** Busca de apps abertos que redigem normas (GitHub, GitLab, Codeberg; busca de repositórios e de código), com auditoria independente. Resultado: nenhum app aberto monta minuta sem IA, em português, a partir de um acervo, e nenhum tipifica prescrições. Peças avaliadas: editor de articulação da ALMG (LGPL-3.0), LexML do Senado (GPL-2.0), sql.js, docxtemplater. Na versão 1, a numeração e a saída em Word foram escritas no próprio app, sem dependências.
2. **Proposta de desenho** curta, revista com o autor até a direção ficar clara (escola de legisladores; Resolução como espinha; doutrina; acervo como repertório).
3. **Construção pequena e completa:** um percurso inteiro funcionando antes de ampliar.
4. **Trabalho por erro e acerto:** o autor usa como usuário e aponta o que estranha; cada ponto é consertado, testado e devolvido.
5. **Divisão de trabalho:** decisões de conteúdo e redação com o modelo principal; tarefas mecânicas (extração da base, varreduras, contagens, avaliação de cobertura, exportações) com o Codex de linha de comando ou com modelo menor; testes de usabilidade e críticas visuais com agentes independentes, que não escreveram o código.

---

## 7. Testes

- **Bateria congelada:** 27 casos em `testes/bateria.js`, com o hash SHA-256 gravado em `testes/HASH.txt` antes da primeira rodada. A bateria não é alterada depois de congelada; defeitos do próprio teste são registrados e corrigidos na bateria seguinte, congelada de novo. Resultado em todas as rodadas de 26/11: 26 de 27, sendo a falha um defeito do próprio teste 27 (registrado em `RELATORIO_rodada1.txt`).
- **Cobertura contra dúvidas reais:** 300 dúvidas reais de usuários do app irmão "Pode isso, Jane?" (discentes, docentes, orientadores, gestores), avaliadas por um avaliador independente (Codex). 119 cabiam numa norma de programa. Resposta direta: 18 na minuta inicial, 57 depois dos sete temas novos; as que a minuta ignorava caíram de 40 para 6.
- **Usabilidade:** percurso de leigo no navegador, do zero e com o exemplo, no computador e em tela de celular (375 px), mais duas rodadas de testador independente lendo as telas como leigo.
- **Estética:** especialista visual e crítico independente, com capturas em celular e computador.
- **Teste final no endereço público:** percurso completo, voltar e avançar, demonstração, 15 casos e originais, Word, cópia e PDF real (Chrome), revisão e "Consertar", persistência no aparelho, "Apagar", robustez (campos vazios, 20 mil caracteres, emoji, HTML colado, cliques repetidos), peso (cerca de 150 KB) e tempo de carga, ausência de chamadas externas, telas sem transbordo no celular, foco do teclado e links.
- **Não testado:** Firefox, Safari do iPhone, celular físico em rede lenta.

---

## 8. Publicação

- Endereço: https://iaeduca.online/mary/ (Hostinger, pasta `public_html/mary`), sem tocar nas pastas de outros apps.
- Só com autorização escrita do autor.
- Passos: substituir os arquivos no gerenciador de arquivos; conferir o SHA-256 de cada arquivo no servidor contra o pacote local; limpar o cache da CDN só do domínio principal; abrir o site público e conferir.
- Cada versão sobe o número `?v=N` dos scripts no `index.html`, e o servidor manda `Cache-Control: no-cache` para os `.html`, para o navegador dos usuários não ficar com cópia antiga.
- A versão anterior é guardada antes de cada publicação, para voltar atrás em um passo.

---

## 9. Limites e próximos passos

- Minuta de apoio, sem valor jurídico; a revisão automática procura defeitos conhecidos e não garante que um texto escrito pela pessoa esteja certo. A síntese de técnica legislativa e de competências não é parecer jurídico.
- A saída em Word é um `.doc` (HTML que o Word abre), não `.docx` nativo.
- Próxima versão: quatro trilhas (nível: educação básica ou superior; alcance: sala de aula ou instituição), com conteúdo e bateria próprios por trilha, motor comum e a trilha atual congelada como regressão.

---

## 10. Histórico (26/11/2026)

Varredura e auditoria de apps → acervo multilateral → proposta de desenho → escola de legisladores e técnica legislativa → v1 construída e testada → exemplos explicados, amostras nos campos, revisão com conserto → teste de leigo e testador independente → cobertura contra 300 dúvidas, públicos e conflitos → publicação → identidade visual (marca, paleta, trilha de passos) → impressão e PDF → ajustes a partir de fotos do celular do autor → teste final e correção do preâmbulo → contador anônimo de visitas → nota de método com o lugar, o tempo, a justificativa e os três textos do autor → ajustes de conteúdo a partir dos ensaios (versão publicada 13) → quatro trilhas, com a escola e o professor da educação básica (versão publicada 14) → instalável no celular, sem loja (versão publicada 15).

Ajustes da versão publicada 13, tirados dos ensaios do autor:
- Declaração de uso: "relevante" inclui o uso que alterou o conjunto de fontes, como a sugestão de termos de busca numa revisão bibliográfica (ensaio B, ambiguidade).
- Seleção e bolsas: o edital indica a quem se pede a revisão por pessoa e em que prazo, que termina antes do resultado final (ensaio B, lacuna).
- Vigilância: a vedação ao reconhecimento de emoções traz as exceções do art. 41, § 2º (acessibilidade e pesquisa aprovada por comitê de ética), que o Anexo II omite em parte (ensaio B, contradição).
- Apuração: a decisão indica a regra aplicada, as evidências e a resposta à explicação do interessado (ensaio A).

Deixados para a versão seguinte: distinguir o uso exigido pela instituição do uso individual; alerta de critério divulgado antes da entrega; exemplos de uso relevante tirados das pesquisas do programa.
