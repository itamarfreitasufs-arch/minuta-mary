# Cobertura das dúvidas de educação básica

Avaliação independente das 534 entradas, em 26/11/2026. A minuta escolar foi lida como norma proposta, sem supor que regras citadas genericamente ou práticas externas completem suas respostas.

## Método e unidade de contagem

Cada entrada foi julgada individualmente, inclusive perguntas informais, em espanhol e relatos sem ponto de interrogação. RESPONDE exige comando diretamente aplicável à dúvida; uma resposta condicional é suficiente quando a própria minuta explicita todas as condições relevantes. PARCIAL identifica o assunto tratado e a informação decisiva que falta. SILENCIA exige ausência de regra material sobre assunto que cabe à escola ou à rede. O simples canal geral do art. 26 não transforma silêncio temático em cobertura parcial.

Uma pergunta com várias demandas recebe o veredito da cobertura conjunta. Foi atribuído um único tema principal a cada lacuna, para evitar dupla contagem; a coluna o_que_falta preserva suas particularidades. Artigos são separados dentro do campo por ponto e vírgula, devidamente escapado no CSV. Os perfis e a redação das perguntas foram preservados, inclusive quando o perfil não coincide com a pessoa que se apresenta no texto.

Os IDs não são únicos: todas as ocorrências foram preservadas na ordem do JSON. Nos exemplos abaixo, “entrada” é a posição de 1 a 534 no JSON e corresponde à linha do CSV menos o cabeçalho. Ela permite distinguir IDs repetidos sem modificar as colunas pedidas.

Solicitar se uma conduta é permitida foi distinguido de pedir instruções para ocultar fraude ou produzir abuso: as primeiras perguntas podem ter resposta normativa; as segundas são FORA. Uso doméstico sem ligação com entrega ou exigência escolar é FORA; o limite da intervenção escolar em tarefa ou estudo é objeto normativo. Consultas técnicas de produto, religião, saúde e educação superior foram excluídas quando alheias ao objeto.

Relatos de suicídio, automutilação, abuso e possível aliciamento classificados FORA receberam tema crise (136 entradas). Esse marcador inclui suspeitas que demandam proteção, sem afirmar diagnóstico ou confirmação criminal. Deepfakes e violência com IA permaneceram no objeto quando a dúvida pede resposta escolar: há regra material no art. 20, mas o protocolo é incompleto. Quando o núcleo é risco suicida ou agressão familiar, prevaleceu FORA/crise, mesmo com menção incidental à IA.

## Contagem total

| Veredito | Quantidade | Percentual das 534 |
|---|---:|---:|
| RESPONDE | 126 | 23,60% |
| PARCIAL | 146 | 27,34% |
| SILENCIA | 8 | 1,50% |
| FORA | 254 | 47,57% |
| TOTAL | 534 | 100,00% |

Entre as 280 entradas dentro do escopo, 126 têm resposta direta e 154 apresentam lacuna (146 parciais e 8 silêncios). Essas proporções descrevem este conjunto de perguntas, sem pretensão de estimar prevalência na população.

## Contagem por perfil

| Perfil original | RESPONDE | PARCIAL | SILENCIA | FORA | Total |
|---|---:|---:|---:|---:|---:|
| basico | 31 | 46 | 2 | 120 | 199 |
| docenteFundamental | 3 | 3 | 0 | 0 | 6 |
| docenteMedio | 4 | 1 | 0 | 2 | 7 |
| familia | 1 | 1 | 0 | 0 | 2 |
| finais | 1 | 6 | 0 | 5 | 12 |
| gestorEscolar | 27 | 23 | 3 | 18 | 71 |
| iniciais | 1 | 0 | 0 | 2 | 3 |
| medio | 2 | 2 | 1 | 10 | 15 |
| profBasico | 29 | 38 | 2 | 56 | 125 |
| responsavel | 27 | 26 | 0 | 41 | 94 |
| TOTAL | 126 | 146 | 8 | 254 | 534 |

## Temas de lacuna por quantidade

Somente PARCIAL e SILENCIA. Empates são ordenados alfabeticamente pelo tema; a mesma regra define os dez temas com proposta. A frequência mede perguntas, inclusive formulações próximas, e não gravidade do risco.

| Ordem | Tema | Total | PARCIAL | SILENCIA |
|---:|---|---:|---:|---:|
| 1 | Resposta a montagens e deepfakes | 24 | 24 | 0 |
| 2 | Coleta e proteção de dados | 12 | 12 | 0 |
| 3 | Permissão por atividade e etapa | 9 | 9 | 0 |
| 4 | Estudo pessoal e dever escolar | 8 | 8 | 0 |
| 5 | Revisão e retificação de notas | 8 | 8 | 0 |
| 6 | Sanções proporcionais e individualizadas | 8 | 8 | 0 |
| 7 | Alcance das diretrizes nacionais | 6 | 6 | 0 |
| 8 | Responsabilidades e reparação de danos | 6 | 6 | 0 |
| 9 | Adoção e classificação de risco | 5 | 5 | 0 |
| 10 | Apuração e revisão de autoria | 5 | 5 | 0 |
| 11 | Imagens e produções escolares | 5 | 5 | 0 |
| 12 | Limites da proibição geral | 5 | 5 | 0 |
| 13 | Proteção do trabalho docente | 5 | 3 | 2 |
| 14 | Tradução revisão e autoria | 5 | 5 | 0 |
| 15 | Vigência e adequação normativa | 5 | 4 | 1 |
| 16 | Acessibilidade em todas as etapas | 4 | 4 | 0 |
| 17 | Biometria e controle de frequência | 4 | 4 | 0 |
| 18 | Consentimento e objeção familiar | 4 | 4 | 0 |
| 19 | Formação suporte e autonomia docente | 4 | 4 | 0 |
| 20 | Pareceres e planos individualizados | 4 | 4 | 0 |
| 21 | Bem estar e dependência digital | 3 | 3 | 0 |
| 22 | Governança e implementação institucional | 3 | 2 | 1 |
| 23 | Gravação e voz de terceiros | 3 | 1 | 2 |
| 24 | IA na gestão administrativa | 3 | 2 | 1 |
| 25 | Acesso e alternativas sem IA | 2 | 2 | 0 |
| 26 | Fiscalização e reclamação externa | 2 | 1 | 1 |
| 27 | IA em laboratórios técnicos | 2 | 2 | 0 |

### Dois exemplos reais de cada tema

**1. Resposta a montagens e deepfakes (24 dúvidas)**

- Entrada 46, ID E46, perfil basico: “fizeram um vídeo falso meu com ia zoando com a minha cara” (PARCIAL).
- Entrada 529, ID Z57, perfil basico: “editaram a foto de uma menina da sala e tão espalhando” (PARCIAL).

**2. Coleta e proteção de dados (12 dúvidas)**

- Entrada 45, ID E45, perfil basico: “o chatbot da escola pediu meu cpf e meu endereço” (PARCIAL).
- Entrada 430, ID W50, perfil responsavel: “o aplicativo da escola pede o endereço da minha filha” (PARCIAL).

**3. Permissão por atividade e etapa (9 dúvidas)**

- Entrada 7, ID E07, perfil basico: “posso usar ia pra fazer o dever de casa?” (PARCIAL).
- Entrada 533, ID P07, perfil basico: “posso usar ia pra fazer a redação?” (PARCIAL).

**4. Estudo pessoal e dever escolar (8 dúvidas)**

- Entrada 5, ID E05, perfil basico: “to no 2 ano do ensino médio, posso usar ia pra estudar pra prova?” (PARCIAL).
- Entrada 354, ID V17, perfil basico: “meu padrasto me ajuda no dever usando o chatgpt, pode?” (PARCIAL).

**5. Revisão e retificação de notas (8 dúvidas)**

- Entrada 32, ID E32, perfil basico: “o aplicativo marcou errado uma questão que tava certa e a nota foi pro boletim” (PARCIAL).
- Entrada 504, ID Z21, perfil basico: “o chatgpt fez meu texto sumir, posso refazer com ia?” (PARCIAL).

**6. Sanções proporcionais e individualizadas (8 dúvidas)**

- Entrada 21, ID E21, perfil basico: “meu colega usou ia na parte dele e o grupo todo levou zero” (PARCIAL).
- Entrada 516, ID Z37, perfil profBasico: “como chamar a atenção de um aluno que usa ia escondido” (PARCIAL).

**7. Alcance das diretrizes nacionais (6 dúvidas)**

- Entrada 54, ID E54, perfil basico: “o que a resolução do cne fala sobre ia na escola?” (PARCIAL).
- Entrada 294, ID B50, perfil profBasico: “o que a resolução muda pra quem é professor de escola?” (PARCIAL).

**8. Responsabilidades e reparação de danos (6 dúvidas)**

- Entrada 18, ID E18, perfil basico: “o professor mandou a gente usar um app de ia, quem responde se der problema?” (PARCIAL).
- Entrada 273, ID B29, perfil profBasico: “se a plataforma que a escola mandou usar vazar dado de aluno a culpa é minha?” (PARCIAL).

**9. Adoção e classificação de risco (5 dúvidas)**

- Entrada 37, ID E37, perfil basico: “a plataforma da escola só me deixa fazer as atividades que ela recomenda” (PARCIAL).
- Entrada 105, ID G45, perfil gestorEscolar: “adotamos um app sem prova de que funciona, posso manter?” (PARCIAL).

**10. Apuração e revisão de autoria (5 dúvidas)**

- Entrada 17, ID E17, perfil basico: “usei ia no trabalho e não contei pra ninguém, e agora?” (PARCIAL).
- Entrada 534, ID P10, perfil profBasico: “detector” (PARCIAL).

**11. Imagens e produções escolares (5 dúvidas)**

- Entrada 23, ID E23, perfil basico: “posso usar imagem feita por ia no trabalho de artes?” (PARCIAL).
- Entrada 531, ID Z59, perfil profBasico: “posso fazer meme com ia para a aula de português?” (PARCIAL).

**12. Limites da proibição geral (5 dúvidas)**

- Entrada 27, ID E27, perfil basico: “a escola proibiu qualquer uso de ia, ela pode?” (PARCIAL).
- Entrada 500, ID Z12, perfil profBasico: “o diretor bateu o martelo: não pode ia na escola” (PARCIAL).

**13. Proteção do trabalho docente (5 dúvidas)**

- Entrada 78, ID G18, perfil gestorEscolar: “quero usar câmera com ia pra avaliar como os professores dão aula” (PARCIAL).
- Entrada 282, ID B38, perfil profBasico: “a direção quer um sistema que monitora se eu to dando aula direito pela camera, pode?” (PARCIAL).

**14. Tradução revisão e autoria (5 dúvidas)**

- Entrada 12, ID E12, perfil basico: “posso usar o tradutor na lição de inglês?” (PARCIAL).
- Entrada 315, ID U31, perfil responsavel: “minha filha faz as redações no chatgpt, pode?” (PARCIAL).

**15. Vigência e adequação normativa (5 dúvidas)**

- Entrada 15, ID E15, perfil basico: “minha escola não tem regra nenhuma sobre ia, o que vale?” (SILENCIA).
- Entrada 283, ID B39, perfil profBasico: “até quando a escola tem que se adaptar a resolução?” (PARCIAL).

**16. Acessibilidade em todas as etapas (4 dúvidas)**

- Entrada 53, ID E53, perfil basico: “tenho dislexia e uso leitor de texto com ia, posso usar na prova?” (PARCIAL).
- Entrada 393, ID V74, perfil responsavel: “meu filho precisa de leitor de tela com ia” (PARCIAL).

**17. Biometria e controle de frequência (4 dúvidas)**

- Entrada 108, ID G49, perfil gestorEscolar: “a iscola pode uzar reconhesimento facial na xamada?” (PARCIAL).
- Entrada 429, ID W49, perfil basico: “posso ligar a câmera na aula online com ia?” (PARCIAL).

**18. Consentimento e objeção familiar (4 dúvidas)**

- Entrada 94, ID G34, perfil gestorEscolar: “preciso avisar as famílias que a escola usa ia? precisa de autorização?” (PARCIAL).
- Entrada 131, ID F17, perfil responsavel: “recebi um termo de autorização pra uso de ia, assino?” (PARCIAL).

**19. Formação suporte e autonomia docente (4 dúvidas)**

- Entrada 77, ID G17, perfil gestorEscolar: “posso obrigar os professores a usar a plataforma que a rede comprou?” (PARCIAL).
- Entrada 270, ID B26, perfil profBasico: “a secretaria mandou usar uma plataforma de ia e eu não tive formação nenhuma” (PARCIAL).

**20. Pareceres e planos individualizados (4 dúvidas)**

- Entrada 114, ID G55, perfil gestorEscolar: “posso usar ia pra escrever os pareceres descritivos dos alunos?” (PARCIAL).
- Entrada 292, ID B48, perfil profBasico: “posso usar ia pra fazer o plano de aula e o pei de um aluno com autismo?” (PARCIAL).

**21. Bem estar e dependência digital (3 dúvidas)**

- Entrada 126, ID F12, perfil responsavel: “tenho medo que minha filha fique dependente da ia e pare de pensar” (PARCIAL).
- Entrada 387, ID V67, perfil profBasico: “um aluno chega com sono porque usa ia de madrugada” (PARCIAL).

**22. Governança e implementação institucional (3 dúvidas)**

- Entrada 65, ID G05, perfil gestorEscolar: “preciso escrever a política de ia do colégio, o que não pode faltar” (PARCIAL).
- Entrada 276, ID B32, perfil profBasico: “a escola precisa ensinar sobre ia? em que materia entra?” (PARCIAL).

**23. Gravação e voz de terceiros (3 dúvidas)**

- Entrada 44, ID E44, perfil basico: “posso gravar a aula e pedir pra ia resumir?” (SILENCIA).
- Entrada 466, ID U14, perfil profBasico: “posso usar ia para cortar e editar um vídeo da aula?” (PARCIAL).

**24. IA na gestão administrativa (3 dúvidas)**

- Entrada 67, ID G07, perfil gestorEscolar: “quero colocar um chatbot no whatsapp da secretaria pra atender os pais” (PARCIAL).
- Entrada 175, ID N14, perfil docenteFundamental: “Minha IA de estimação pode fazer a chamada no meu lugar?” (PARCIAL).

**25. Acesso e alternativas sem IA (2 dúvidas)**

- Entrada 51, ID E51, perfil basico: “a escola obriga a gente a usar um aplicativo de ia, o que ela tem que me garantir?” (PARCIAL).
- Entrada 127, ID F13, perfil responsavel: “a escola mandou instalar um aplicativo de ia no celular do meu filho, o que ela tem que garantir?” (PARCIAL).

**26. Fiscalização e reclamação externa (2 dúvidas)**

- Entrada 99, ID G39, perfil gestorEscolar: “quem fiscaliza isso? a escola pode ser multada?” (SILENCIA).
- Entrada 155, ID F41, perfil responsavel: “a escola não cumpre a resolução, pra quem eu reclamo?” (PARCIAL).

**27. IA em laboratórios técnicos (2 dúvidas)**

- Entrada 8, ID E08, perfil basico: “faço curso técnico em informática integrado, pode usar ia no laboratório?” (PARCIAL).
- Entrada 277, ID B33, perfil profBasico: “dou aula no tecnico em enfermagem, os alunos podem usar ia no laboratorio?” (PARCIAL).

## Dispositivos propostos para os dez maiores temas

Caputs complementares, em ordem de frequência. “Ambas” significa regra da rede e execução escolar conforme suas competências; contratação e sanção administrativa dependem da competência legal de cada órgão.

### 1. Resposta a montagens e deepfakes — 24 dúvidas

**Cabe a:** ambas.

**Caput proposto:** A Direção, ao tomar ciência de montagem ou personificação por IA que atinja a comunidade escolar, adotará imediatamente medidas para cessar a circulação e proteger a vítima, preservará provas sem reproduzir conteúdo íntimo, comunicará com segurança os responsáveis e os órgãos de proteção e investigação competentes e acompanhará o caso até a cessação do dano.

### 2. Coleta e proteção de dados — 12 dúvidas

**Cabe a:** ambas.

**Caput proposto:** A escola e a rede, antes de cada coleta por IA, identificarão a base legal, os dados estritamente necessários, a finalidade, os acessos e o prazo de retenção, vedarão coleta excessiva e, identificado incidente, conterão imediatamente o risco, registrarão as medidas e comunicarão os afetados e a autoridade competente nos prazos legais, com canal de correção e reparação.

### 3. Permissão por atividade e etapa — 9 dúvidas

**Cabe a:** escola.

**Caput proposto:** O professor informará por escrito, antes de toda atividade, avaliativa ou não, os usos de IA permitidos e vedados para a etapa, os objetivos de aprendizagem, a contribuição própria exigida e a forma de declaração, e esclarecerá os pedidos dos estudantes antes do início da tarefa, observadas as restrições nacionais e as adaptações de acessibilidade.

### 4. Estudo pessoal e dever escolar — 8 dúvidas

**Cabe a:** ambas.

**Caput proposto:** O professor, antes de propor tarefa, distinguirá o estudo pessoal da produção a entregar e informará os usos de IA admitidos conforme a etapa, a contribuição própria exigida e a forma de declaração, cabendo à escola orientar as famílias e avaliar previamente os aplicativos que recomendar, sem estender as restrições escolares a usos domésticos estranhos à atividade.

### 5. Revisão e retificação de notas — 8 dúvidas

**Cabe a:** ambas.

**Caput proposto:** O professor e a Direção, ao receberem contestação ou identificarem erro em material ou avaliação apoiados por IA, suspenderão de imediato os efeitos prejudiciais, realizarão revisão humana em até dez dias úteis e, confirmado o erro, corrigirão o material e os registros de todos os estudantes atingidos, com nova oportunidade de avaliação quando necessária.

### 6. Sanções proporcionais e individualizadas — 8 dúvidas

**Cabe a:** ambas.

**Caput proposto:** A Direção, ao apurar uso irregular de IA, individualizará a conduta e a contribuição de cada estudante, assegurará defesa e recurso e priorizará orientação e refazimento, aplicando medida regimental proporcional à gravidade comprovada, vedadas punição coletiva e penalização fundada em condição de uso que não tenha sido previamente comunicada.

### 7. Alcance das diretrizes nacionais — 6 dúvidas

**Cabe a:** ambas.

**Caput proposto:** A Direção disponibilizará, antes da vigência desta norma, quadro acessível das exigências nacionais e das escolhas locais, com indicação dos direitos, das obrigações e dos destinatários, esclarecendo que as diretrizes nacionais alcançam instituições públicas e privadas e que este ato se limita ao seu âmbito, e o atualizará sempre que houver alteração normativa.

### 8. Responsabilidades e reparação de danos — 6 dúvidas

**Cabe a:** ambas.

**Caput proposto:** A escola e a rede, antes de exigir IA, informarão quem responde pela adequação pedagógica, pela contratação e pela segurança, e, constatado dano, prestarão atendimento imediato, apurarão as responsabilidades e assegurarão a correção da atividade e dos prejuízos escolares em até dez dias úteis, sem transferir ao docente obrigações técnicas e contratuais institucionais ou ao estudante consequências de erro institucional.

### 9. Adoção e classificação de risco — 5 dúvidas

**Cabe a:** ambas.

**Caput proposto:** A autoridade competente, antes da adoção de IA, inclusive gratuita, documentará a classificação pelo maior risco aplicável e as salvaguardas nacionais correspondentes, assegurará revisão docente e alternativa aos percursos automatizados e fixará prazo e indicadores de avaliação da eficácia, reavaliando a solução a cada semestre e sempre que houver mudança de finalidade, dados ou funcionalidades, para mantê-la, corrigi-la ou suspendê-la.

### 10. Apuração e revisão de autoria — 5 dúvidas

**Cabe a:** escola.

**Caput proposto:** A Direção, ao receber suspeita ou declaração tardia de uso de IA, informará a regra e as evidências ao estudante, oferecerá orientação para regularização, admitirá demonstração de autoria em condições acessíveis e sem constrangimento e decidirá de forma fundamentada após a escuta em até dez dias úteis, vedado tratar resultado de detector como prova suficiente ou exigir demonstração vexatória.

## Exame jurídico e ambiguidades

A numeração abaixo é da minuta da escola. A portaria confirma o conteúdo e transfere algumas atribuições à Secretaria, sem suprir as lacunas materiais. Distingo incompatibilidade possível, insuficiência de implementação e escolha local mais protetiva. A referência genérica do art. 1º não converte omissões em respostas diretas às pessoas.

### Pontos que exigem correção ou interpretação expressa

1. **Art. 14, parágrafo único — revisão e prazo.** O direito de revisão não pode ser interpretado como extinto após dez dias úteis, nem limitado ao rol do caput, que omite notas e certificação. Essa leitura restritiva contrariaria o direito de contestar critérios avaliativos e recorrer às instâncias escolares superiores (ECA, art. 53, III) e a revisão efetiva das aplicações de alto risco (CNE, art. 40, § 2º, VI, e § 4º). Esclarecer que o prazo organiza o atendimento, preservar outras vias e incluir revisão de notas e correção dos registros. Na portaria, o pedido vai à Secretaria; na escola, à Direção: falta definir articulação e recurso.

2. **Art. 20, parágrafo único — comunicação às famílias e sigilo.** A comunicação automática a todas as famílias pode expor a vítima quando um responsável for agressor ou houver ameaça de retaliação; o sigilo não pode impedir a comunicação legal à rede de proteção. O texto deve exigir avaliação imediata de segurança e compartilhamento restrito com quem protege. A expressão “havendo violência” não pode exigir confirmação antes da comunicação: o ECA, arts. 13 e 56, I, alcança suspeitas de maus-tratos. Uma leitura que aguarde confirmação ou avise o agressor sem proteção seria incompatível com os arts. 17 e 18 do ECA. Falta protocolo específico para deepfake sexual, retirada, preservação de provas e encaminhamento, sem reexposição.

3. **Arts. 7º, I, 2º, § 1º, e 16 — proibição e exceção contraditórias.** O uso docente no planejamento e em materiais proíbe identificar estudantes; o art. 16 parece permitir identificação em ferramenta autorizada. Não fica claro se a autorização supera as proibições específicas. Determinar a prevalência da regra específica e as condições estritas de eventual tratamento necessário. A mera contratação ou autorização da Direção não basta para tornar qualquer tratamento legítimo. Preservar imagem, identidade e intimidade (ECA, art. 17; CNE, art. 10, § 2º), minimização e salvaguardas de alto risco para laudos e demais dados sensíveis.

4. **Art. 19, § 1º — biometria na entrada e na chamada.** O exemplo de entrada da escola pode normalizar coleta diária, confundida com verificação pontual. A exceção nacional exige necessidade estrita, proporcionalidade, supervisão e alternativa menos invasiva (CNE, art. 41, § 1º); não autoriza indiscriminadamente controle facial de frequência. Exigir justificativa documentada, distinguir identidade de rastreamento e impedir transformação da exceção em vigilância contínua. A existência de opção não biométrica, por si só, não legitima a coleta biométrica desnecessária.

5. **Arts. 9º, parágrafo único, e 27 — proibição por silêncio e sanção.** A regra de silêncio não é, isoladamente, contrária ao CNE, mas sua combinação com sanção é ambígua quando o professor descumpre o dever de informar. Não punir estudante por condição que a escola deixou de comunicar. O art. 27 remete genericamente ao regimento sem critérios de proporcionalidade, individualização ou recurso; o art. 28 assegura escuta, mas não os supre. A aplicação que resulte em humilhação, punição coletiva ou supressão da contestação violaria os arts. 17, 18 e 53 do ECA. Não há no texto autorização expressa para expulsão ou suspensão automática.

6. **Arts. 12 a 14 — qualidade da intervenção humana.** Ler e decidir a nota é compatível com a pré-correção nacional; proibir validação em bloco é adequado. Porém, a redação “com base apenas” não deve admitir mera assinatura humana ou ratificação do resultado. Explicitar validação prévia, qualificada, fundamentada e documentada e vedação de ratificação tácita (CNE, art. 40, §§ 2º a 4º). Isso é insuficiência de precisão, não demonstração de que a minuta já autorize correção automática.

### Deveres nacionais implementados apenas em parte

7. **Arts. 23 e 26 — risco e governança.** A remissão aos arts. 37 a 41 nacionais é útil, mas avaliação de impacto e supervisão documentada não esgotam o art. 40, § 2º. Faltam tornar operacionais rastreabilidade, explicação, contestação, monitoramento de vieses, alternativas menos invasivas e relatório de proteção de dados quando aplicável; também reclassificação periódica (CNE, art. 42). Para risco moderado, faltam responsáveis, revisão das recomendações e monitoramento (art. 39, § 2º). Não interpretar os itens locais como lista exaustiva que dispensa obrigações nacionais.

8. **Arts. 7º, parágrafo único, 11, § 2º, e 25 — responsabilidade e condições de trabalho.** A responsabilidade docente pela adequação pedagógica não autoriza atribuir-lhe falhas contratuais, técnicas ou de segurança (CNE, art. 4º, §§ 2º e 3º). Formação anual é piso possível, mas não substitui programa permanente, suporte, tempo institucional e formação específica antes de uso novo ou revisão humana (arts. 11 e 12, § 4º). A escola deve delimitar competências e acionar apoio da rede, inclusive conforme o porte (arts. 43 e 44).

9. **Arts. 17, 18 e 24 — proteção dos profissionais.** A vedação de treinamento protege as produções dos estudantes, mas não cobre aulas e conteúdos docentes, sujeitos à autorização específica nacional (CNE, art. 15). A proibição comercial local tampouco reproduz a proteção dos dados educacionais docentes do art. 16 nacional. São omissões, não permissão jurídica para explorar esses conteúdos. A proibição absoluta de treinamento de produções estudantis é compatível e mais protetiva no caso de estudantes adultos; para crianças e adolescentes é obrigatória, mesmo com autorização (CNE, art. 41, XI).

10. **Arts. 6º, 21 e 22 — currículo, participação e objeção.** Faltam operacionalizar bem-estar, prevenção da dependência e autonomia intelectual (CNE, art. 18, III, e art. 20, X), a dimensão computacional e a transversalidade curricular (art. 19), participação no acompanhamento, além da adoção (art. 12, § 3º), e os efeitos da objeção familiar. Não se pode inferir veto familiar absoluto de uma simples previsão de resposta em dez dias, nem tratar ciência como consentimento genérico. Manter a exceção assistiva em todas as etapas, sem subordinar o apoio necessário a autorização discricionária de uso comum.

11. **Arts. 29 e 30 — adequação.** A vigência imediata do ato local não é incompatível com a diretriz. Contudo, o prazo nacional não está no articulado: são doze meses da publicação nacional, sem adiamento das vedações do art. 41 (CNE, arts. 46 e 47). A publicação identificada é de 12/11/2026; a referência temporal é, portanto, 12/11/2027 para a adequação, preservada a incidência imediata das vedações. A revisão bienal da norma local não substitui a reavaliação de ferramentas quando houver mudanças relevantes.

12. **Preâmbulos — competência não comprovada.** O regimento invocado não foi fornecido, de modo que não é possível confirmar a competência normativa do Conselho nem a atribuição de contratar pela escola. Na portaria, a Secretaria também invoca o art. 15, II, do Regimento Escolar: essa fundamentação precisa ser conferida e substituída ou complementada pela base municipal pertinente. Não afirmo nulidade sem conhecer esses atos.

Não identifiquei incompatibilidade necessária nas restrições por etapa dos arts. 2º a 4º, que acompanham os arts. 21 a 23 nacionais, nem na proibição de substituição docente do art. 8º. A expressão “uso direto” nos anos finais merece explicação operacional: a mediação não deve virar simples presença física enquanto o estudante atua autonomamente. O art. 20 também precisa separar personificação enganosa de ficção didática claramente identificada; sua literalidade é ampla. Restrições locais mais protetivas, como vedar toda publicidade estudantil ou monitoramento permanente, não são contradições só por excederem o mínimo nacional.

## Fontes e limites da conferência

- Minuta escolar como objeto principal; minuta da Secretaria apenas para conferência. Os artigos no CSV são sempre os da minuta escolar, não os do CNE ou do ECA.
- [Resolução CNE/CP nº 1/2026 — endereço oficial do MEC](https://www.gov.br/mec/pt-br/cne/2026/novembro-2026/rcp001_26.pdf) e [publicação oficial no DOU](https://www.in.gov.br/web/dou/-/resolucao-cne/cp-n-1-de-11-de-novembro-de-2026-744136563). Os acessos automatizados oficiais retornaram, respectivamente, desafio de verificação e erro 502. A leitura foi feita na [cópia do documento normativo integral, com identificação do MEC/CNE, disponibilizada pelo SINEPE-PE](https://sinepe-pe.org.br/imagens/noticias/RCP_001_26.pdf), conferida também com a identificação da publicação reproduzida em cópia do DOU. Essa limitação de acesso impede afirmar autenticação direta no portal oficial nesta sessão.
- [Cópia da publicação do DOU, com edição, data e página](https://educationet.com.br/wp-content/uploads/2026/11/RESOLUCAO-CNE_CP-N-1-DE-11-DE-NOVEMBRO-DE-2026_compressed.pdf): publicação em 12/11/2026, edição 213-B, seção 1, Extra B, página 7.
- [Estatuto da Criança e do Adolescente — texto compilado oficial](https://www.planalto.gov.br/ccivil_03/leis/l8069compilado.htm), especialmente arts. 13, 17, 18, 53, III, e 56, I. Consulta em 26/11/2026.
- Os caputs propostos são complementos à minuta e às normas superiores; os prazos locais sugeridos são propostas desta avaliação. Nenhum texto de entrada foi alterado. “FORA” indica apenas exclusão do escopo desta avaliação de cobertura, não ausência de dever geral da escola de proteger, acolher e encaminhar.

## Integridade dos insumos

SHA-256 dos arquivos de entrada utilizados, para permitir reprodução e detectar alteração posterior:

| Arquivo | SHA-256 |
|---|---|
| minuta_escola.txt | 35dec4018d704e54ea5012de37612df357621b483f98fd467483e1d6282816d7 |
| minuta_secretaria.txt | f5500e58030ecbb06a6efb95e1a4168196793e417ba6aacdf4df4ef233b167dc |
| duvidas_basica.json | 9ff1949e667b89aa683b2641e3e46f3c977749275f7f9dd6b8691c4c80a5c660 |
