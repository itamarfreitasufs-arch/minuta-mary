/* Minuta, Mary! — conteúdo da escola (versão 1, 26/11/2026).
   Fontes conferidas: Resolução CNE/CP nº 1/2026 (normas/multilaterais/textos/N01...),
   Decreto nº 12.002/2024 e LC nº 95/1998 (planalto.gov.br, 26/11/2026),
   quadro teórico do artigo de Itamar Freitas (von Wright; Hood e Margetts; Baldwin, Cave e Lodge). */
window.DADOS = {

  /* ---------- Quem legisla ---------- */
  instancias: [
    { id: "conselho", nome: "Conselho superior (universitário ou de ensino e pesquisa)",
      ato: "RESOLUÇÃO", atoNome: "Resolução", colegiado: true, nomeOrgaoEx: "Conselho Universitário",
      sujeito: "O CONSELHO UNIVERSITÁRIO",
      pode: ["Aprovar a política institucional de IA exigida pelo art. 27 da Resolução CNE/CP nº 1/2026",
             "Fixar regras gerais para toda a universidade",
             "Remeter infrações ao regime disciplinar previsto no Estatuto e no Regimento"],
      naoPode: ["Contrariar a Resolução CNE/CP nº 1/2026, a LGPD ou o Estatuto"],
      chefia: "a Reitoria" },
    { id: "reitoria", nome: "Reitoria", ato: "PORTARIA", atoNome: "Portaria", colegiado: false,
      nomeOrgaoEx: "Reitoria", sujeito: "O REITOR",
      pode: ["Executar a política aprovada pelo conselho", "Criar comissão ou grupo de trabalho", "Designar responsáveis"],
      naoPode: ["Criar obrigação nova para toda a comunidade sem base em resolução do conselho"],
      chefia: "a Reitoria" },
    { id: "proreitoria", nome: "Pró-reitoria (graduação, pós-graduação, pesquisa ou extensão)",
      ato: "INSTRUÇÃO NORMATIVA", atoNome: "Instrução Normativa", colegiado: false,
      nomeOrgaoEx: "Pró-Reitoria de Pós-Graduação", sujeito: "O PRÓ-REITOR",
      pode: ["Detalhar procedimentos: modelo de declaração, fluxos, prazos", "Orientar as unidades"],
      naoPode: ["Inovar além da resolução que regulamenta", "Criar sanção"],
      chefia: "a Pró-Reitoria" },
    { id: "ppg", nome: "Colegiado de programa de pós-graduação", ato: "RESOLUÇÃO", atoNome: "Resolução",
      colegiado: true, nomeOrgaoEx: "Colegiado do Programa de Pós-Graduação em História",
      sujeito: "O COLEGIADO DO PROGRAMA",
      pode: ["Regras da área: tarefas reservadas à autoria humana", "Declaração de uso em dissertações e teses", "Regras para bancas e orientação"],
      naoPode: ["Contrariar a norma geral da pós-graduação e o regimento do programa", "Criar sanção disciplinar própria"],
      chefia: "a Coordenação do Programa" },
    { id: "curso", nome: "Colegiado de curso de graduação ou licenciatura", ato: "RESOLUÇÃO", atoNome: "Resolução",
      colegiado: true, nomeOrgaoEx: "Colegiado do Curso de Licenciatura em História",
      sujeito: "O COLEGIADO DO CURSO",
      pode: ["Regras do curso e sua incorporação ao Projeto Pedagógico de Curso", "Formação docente nas licenciaturas (art. 27, § 3º)"],
      naoPode: ["Criar sanção disciplinar própria"],
      chefia: "a Coordenação do Curso" },
    { id: "extensao", nome: "Coordenação de programa de extensão", ato: "NORMA INTERNA", atoNome: "Norma Interna",
      colegiado: true, nomeOrgaoEx: "Coordenação do Programa de Extensão",
      sujeito: "A COORDENAÇÃO DO PROGRAMA DE EXTENSÃO",
      pode: ["Uso de IA nas ações do programa e com o público externo", "Proteção dos dados dos participantes"],
      naoPode: ["Obrigar quem não integra o programa", "Criar sanção disciplinar"],
      nota: "Em geral precisa ser aprovada pela instância de extensão da unidade ou pela Pró-Reitoria de Extensão.",
      chefia: "a Coordenação do Programa" },
    { id: "docente", nome: "Docente (plano de ensino da disciplina)", ato: "PLANO DE ENSINO", atoNome: "Plano de Ensino",
      colegiado: false, nomeOrgaoEx: "Disciplina Teoria da História I", sujeito: "",
      pode: ["Regras da disciplina e da avaliação, dentro das normas do curso"],
      naoPode: ["Impor pena fora do regime disciplinar", "Usar detector de IA como prova única (art. 41, X)"],
      nota: "Plano de ensino não é ato normativo, mas obriga os estudantes da disciplina dentro das normas do curso.",
      chefia: "o docente responsável" }
  ],

  /* ---------- Públicos: quem a norma alcança (reconhecidos pelo destinatário de cada artigo) ---------- */
  publicos: [
    { id: "discente", nome: "Discentes", re: /discente|autor|estudante|orientando|aluno|pesquisador/i },
    { id: "docente", nome: "Docentes", re: /docente|professor|avaliador|pesquisador/i },
    { id: "orientador", nome: "Orientadores", re: /orientador/i },
    { id: "banca", nome: "Bancas e pareceristas", re: /banca|parecerista|apuração/i },
    { id: "gestao", nome: "Coordenação e gestão", re: /coordena|reitoria|pró-reitoria|chefia|colegiado|gestor|responsáveis por acervos/i },
    { id: "tecnico", nome: "Técnicos administrativos", re: /técnico|servidor/i }
  ],

  /* ---------- Piso nacional: Resolução CNE/CP nº 1/2026 (educação superior) ---------- */
  piso: {
    obrigatorio: [
      { art: "art. 27", texto: "A instituição tem política própria com princípios de autoria, integridade acadêmica, transparência, responsabilidade intelectual e proteção de direitos.", cobre: "principios" },
      { art: "art. 27, § 3º", texto: "Se oferece licenciatura, a política inclui a formação inicial docente para atuar com IA.", cobre: "licenciatura" },
      { art: "art. 28", texto: "Na pesquisa, o uso relevante de IA é declarado; a autoria e a responsabilidade continuam humanas.", cobre: "declaracao" },
      { art: "art. 12, § 2º", texto: "As políticas têm revisão periódica.", cobre: "revisao" },
      { art: "art. 13", texto: "O uso de IA nos processos educativos é comunicado com clareza a estudantes e professores.", cobre: "comunicacao" },
      { art: "art. 29", texto: "Decisões com apoio de IA na gestão acadêmica podem ser revistas por pessoa.", cobre: "revisaoHumana" },
      { art: "art. 46", texto: "As instituições têm 12 meses, contados de 12/11/2026, para adequar suas políticas." }
    ],
    vedado: [
      { art: "art. 41, IX", texto: "Atribuir nota a texto autoral (dissertação, redação, trabalho) só por IA ou sem correção humana." },
      { art: "art. 41, X", texto: "Aplicar sanção acadêmica ou disciplinar baseada só em detector de conteúdo gerado por IA." },
      { art: "art. 41, II", texto: "Reconhecer ou inferir emoções de estudantes e professores." },
      { art: "art. 29, parágrafo único", texto: "Tomar decisão só automatizada com impacto relevante sobre a trajetória do estudante." },
      { art: "art. 15", texto: "Usar o que docentes e estudantes produzem para treinar modelos de terceiros sem autorização específica." },
      { art: "art. 16", texto: "Usar IA para publicidade direcionada ou exploração comercial dos dados educacionais." },
      { art: "art. 14", texto: "Substituir a atuação docente por sistemas automatizados." }
    ],
    principios: ["autoria", "integridade", "transparencia", "responsabilidade", "direitos"],
    principioNome: { autoria: "autoria", integridade: "integridade acadêmica", transparencia: "transparência",
                     responsabilidade: "responsabilidade intelectual", direitos: "proteção de direitos" }
  },

  /* Variantes com defeito próprias desta trilha (além das já conhecidas do motor). */
  riscos: {
    sancao_servidor: { codigo: "SANCAO_SEM_COMPETENCIA", nivel: "erro", msg: "Esta instância não pode criar pena para professor ou gestor: a sanção disciplinar de servidor depende de lei (o estatuto), e a de empregado, do contrato de trabalho. A norma pode desfazer o ato irregular (a nota dada só pela IA, por exemplo) e encaminhar o caso ao regime disciplinar.", fonte: "CF, art. 5º, XXXIX e LV; Lei nº 8.112/1990, art. 127 (servidores federais); estatutos estaduais e municipais; CLT" }
  },

  /* ---------- Doutrina: tipos de prescrição ---------- */
  tipos: {
    obrigacao:   { nome: "Obrigação", cor: "azul",
      deve: "destinatário direto nomeado, ação concreta, ocasião, e consequência ou remissão",
      naoDeve: "\"sempre que possível\", \"recomenda-se\" ou tarefa atribuída a quem só se beneficia dela" },
    proibicao:   { nome: "Proibição", cor: "vermelho",
      deve: "abstenção delimitada a uma tarefa e exceções expressas",
      naoDeve: "\"vedado o uso de IA\" sem dizer em quê" },
    permissao:   { nome: "Permissão condicionada", cor: "verde",
      deve: "tarefa permitida, condições (declarar, conferir) e quem verifica",
      naoDeve: "permissão do que o art. 41 da Resolução veda" },
    recomendacao:{ nome: "Recomendação", cor: "cinza",
      deve: "marca de conselho (\"recomenda-se\"), razão e exemplo",
      naoDeve: "sanção: recomendação com pena é obrigação disfarçada" },
    competencia: { nome: "Atribuição de competência", cor: "roxo",
      deve: "órgão individualizado, finalidade e prazo se for ato único",
      naoDeve: "competência que o órgão emissor não tem" },
    direito:     { nome: "Direito", cor: "verde",
      deve: "titular, o que pode exigir e de quem",
      naoDeve: "direito sem instância que o atenda" },
    consequencia:{ nome: "Consequência", cor: "laranja",
      deve: "gatilho claro, quem apura, distinção entre medida educativa e punição",
      naoDeve: "gatilho vago (\"uso inadequado\") ou prova só por detector" },
    preliminar:  { nome: "Disposição preliminar", cor: "cinza", deve: "objeto e âmbito de aplicação", naoDeve: "mais de um objeto" },
    final:       { nome: "Disposição final", cor: "cinza", deve: "revisão e vigência expressas", naoDeve: "\"revogam-se as disposições em contrário\"" }
  },

  capitulos: [
    { id: "usos", nome: "DOS USOS PERMITIDOS E VEDADOS" },
    { id: "transparencia", nome: "DA TRANSPARÊNCIA E DA AUTORIA" },
    { id: "avaliacao", nome: "DA AVALIAÇÃO" },
    { id: "dados", nome: "DA PROTEÇÃO DE DADOS" },
    { id: "formacao", nome: "DA FORMAÇÃO" },
    { id: "governanca", nome: "DO ACOMPANHAMENTO" },
    { id: "consequencias", nome: "DAS CONSEQUÊNCIAS" }
  ],

  /* ---------- Dispositivos-modelo ----------
     {ALCANCE} = "no âmbito do <órgão>"; {CHEFIA} = coordenação/reitoria etc.
     Cada variante traz a ficha de von Wright. "risco" marca variantes que a revisão deve reprovar. */
  dispositivos: [
    { id: "usos_apoio", cap: "usos", titulo: "Usos de apoio permitidos", cobre: [], base: "Res. CNE/CP 1/2026, arts. 25 e 38, § 1º",
      casos: ["F01-D003"], instancias: "todas",
      variantes: [
        { tipo: "permissao", rotulo: "Permitir, com condições",
          caput: "É permitido o uso de ferramentas de inteligência artificial, {ALCANCE}, como apoio às seguintes tarefas, desde que declarado nos termos desta norma e conferido pelo autor:",
          incisos: ["revisão gramatical, ortográfica e de estilo de texto de autoria própria;", "tradução de textos de apoio;",
                    "organização e formatação de referências bibliográficas;", "transcrição preliminar de fontes, com conferência integral pelo pesquisador."],
          ficha: { conteudo: "usar IA nas quatro tarefas listadas", condicao: "declarar o uso e conferir o resultado",
                   destinatario: "discentes e docentes", ocasiao: "elaboração de trabalhos (repetível)", meio: "autoridade" } },
        { tipo: "recomendacao", rotulo: "Só recomendar",
          caput: "Recomenda-se que o uso de ferramentas de inteligência artificial, {ALCANCE}, se restrinja a tarefas de apoio, como revisão de texto próprio, tradução de textos de apoio, organização de referências e transcrição preliminar de fontes conferida pelo pesquisador.",
          ficha: { conteudo: "restringir o uso a tarefas de apoio", condicao: "—", destinatario: "discentes e docentes",
                   ocasiao: "elaboração de trabalhos (repetível)", meio: "nodalidade" } } ] },

    { id: "usos_reservados", cap: "usos", titulo: "Tarefas reservadas à autoria humana", cobre: ["autoria"], base: "Res. CNE/CP 1/2026, arts. 10 e 28, parágrafo único",
      casos: ["F01-D008"], instancias: "todas",
      variantes: [
        { tipo: "proibicao", rotulo: "Proibir nessas tarefas",
          caput: "É vedado o uso de ferramentas de inteligência artificial para produzir a análise, a interpretação de fontes e as conclusões de trabalhos acadêmicos, que constituem a contribuição intelectual própria do autor.",
          ficha: { conteudo: "não delegar análise, interpretação e conclusões", condicao: "trabalhos acadêmicos",
                   destinatario: "autores de trabalhos acadêmicos", ocasiao: "elaboração de trabalhos (repetível)", meio: "autoridade" } },
        { tipo: "proibicao", rotulo: "Proibir tudo (genérico)", risco: "generica",
          caput: "É vedado o uso de inteligência artificial nos trabalhos acadêmicos.",
          ficha: { conteudo: "não usar IA", condicao: "—", destinatario: "não identificado", ocasiao: "—", meio: "autoridade" } } ] },

    { id: "declaracao", cap: "transparencia", titulo: "Declaração de uso", cobre: ["transparencia", "integridade"], piso: "declaracao",
      base: "Res. CNE/CP 1/2026, arts. 27, § 2º, e 28", casos: ["F01-D009", "F75-D112"], instancias: "todas",
      variantes: [
        { tipo: "obrigacao", rotulo: "Obrigar a declarar",
          caput: "O autor de trabalho acadêmico que tenha usado ferramenta de inteligência artificial de forma relevante declarará, na introdução ou na seção de metodologia:",
          incisos: ["a ferramenta e a versão utilizadas;", "a finalidade e as etapas do trabalho em que foi usada;", "a forma de conferência dos resultados."],
          paragrafos: ["Considera-se relevante o uso que produziu ou modificou texto, tradução, dados, análises, códigos ou imagens incorporados ao trabalho, ou que alterou o conjunto de fontes analisadas, como a sugestão de termos de busca numa revisão bibliográfica; não o é a correção ortográfica automática do editor de texto.",
                       "Não se exigirá a entrega do histórico integral das conversas com a ferramenta; trechos poderão ser pedidos pela {CHEFIA}, de forma motivada, em caso de apuração.",
                       "A falta da declaração será comunicada pelo orientador ou pela banca à {CHEFIA}, que adotará as providências previstas nesta norma."],
          ficha: { conteudo: "declarar ferramenta, finalidade e conferência", condicao: "ter usado IA de forma relevante",
                   destinatario: "autor do trabalho", ocasiao: "na entrega de cada trabalho", meio: "autoridade", consequencia: "comunicação à coordenação" } },
        { tipo: "recomendacao", rotulo: "Só recomendar",
          caput: "Recomenda-se que o autor de trabalho acadêmico informe, na metodologia, as ferramentas de inteligência artificial usadas e a finalidade do uso.",
          ficha: { conteudo: "informar ferramentas e finalidade", condicao: "—", destinatario: "autor do trabalho",
                   ocasiao: "na entrega de cada trabalho", meio: "nodalidade" } },
        { tipo: "obrigacao", rotulo: "Obrigar \"sempre que possível\"", risco: "vaga",
          caput: "O uso de inteligência artificial deverá ser declarado sempre que possível.",
          ficha: { conteudo: "declarar o uso", condicao: "\"sempre que possível\"", destinatario: "não identificado", ocasiao: "—", meio: "autoridade" } } ] },

    { id: "responsabilidade", cap: "transparencia", titulo: "Responsabilidade intelectual e autoria", cobre: ["responsabilidade", "autoria"],
      base: "Res. CNE/CP 1/2026, arts. 10, § 1º, e 28, parágrafo único", casos: [], instancias: "todas",
      variantes: [
        { tipo: "obrigacao", rotulo: "Afirmar a responsabilidade do autor",
          caput: "O autor responde pela seleção, verificação, veracidade e adequação do conteúdo produzido com apoio de inteligência artificial.",
          paragrafos: ["A ferramenta de inteligência artificial não será indicada como autora ou coautora de trabalho acadêmico."],
          ficha: { conteudo: "responder pelo conteúdo; não atribuir autoria à IA", condicao: "uso de IA no trabalho",
                   destinatario: "autor do trabalho", ocasiao: "elaboração e entrega (repetível)", meio: "autoridade" } } ] },

    { id: "plano_ensino", cap: "avaliacao", titulo: "Regras claras em cada disciplina", cobre: ["transparencia"], piso: "comunicacao",
      base: "Res. CNE/CP 1/2026, art. 13", casos: [], instancias: ["conselho", "proreitoria", "ppg", "curso"],
      variantes: [
        { tipo: "obrigacao", rotulo: "Obrigar o docente a informar",
          caput: "O docente informará, no plano de ensino, os usos de inteligência artificial permitidos e vedados em cada atividade avaliativa da disciplina, podendo restringir, de forma justificada, os usos de apoio permitidos nesta norma.",
          paragrafos: ["Se o plano de ensino nada disser, valem os usos de apoio permitidos nesta norma, com declaração e conferência.", "O docente não exigirá o uso de ferramenta paga sem oferecer alternativa gratuita ou institucional."],
          ficha: { conteudo: "informar no plano de ensino os usos permitidos e vedados", condicao: "—",
                   destinatario: "docente responsável pela disciplina", ocasiao: "no início de cada período letivo", meio: "nodalidade e autoridade" } } ] },

    { id: "correcao", cap: "avaliacao", titulo: "IA na correção de trabalhos", cobre: ["direitos"], base: "Res. CNE/CP 1/2026, arts. 40, § 4º, e 41, IX",
      casos: [], instancias: "todas",
      variantes: [
        { tipo: "proibicao", rotulo: "Exigir correção humana",
          caput: "É vedado atribuir nota ou conceito a trabalho escrito com base apenas em resultado de ferramenta de inteligência artificial.",
          paragrafos: ["A ferramenta poderá auxiliar a correção, desde que o avaliador leia integralmente o trabalho e decida a nota."],
          ficha: { conteudo: "não dar nota só com IA", condicao: "trabalho escrito avaliado",
                   destinatario: "avaliadores", ocasiao: "em cada avaliação", meio: "autoridade" } },
        { tipo: "permissao", rotulo: "Permitir correção automática", risco: "art41ix",
          caput: "É permitido o uso de ferramentas de inteligência artificial para corrigir e atribuir nota aos trabalhos escritos.",
          ficha: { conteudo: "corrigir e dar nota com IA", condicao: "—", destinatario: "avaliadores", ocasiao: "em cada avaliação", meio: "autoridade" } } ] },

    { id: "detector", cap: "avaliacao", titulo: "Detectores de texto gerado por IA", cobre: ["direitos", "integridade"], base: "Res. CNE/CP 1/2026, arts. 40, § 1º, IX, e 41, X",
      casos: ["F29-D004", "F29-D005"], instancias: "todas",
      variantes: [
        { tipo: "proibicao", rotulo: "Detector só como indício",
          caput: "O resultado de ferramenta de detecção de conteúdo gerado por inteligência artificial será usado apenas como indício, vedada a aplicação de qualquer medida com base exclusiva nesse resultado.",
          ficha: { conteudo: "não aplicar medida com base só no detector", condicao: "uso de detector",
                   destinatario: "docentes, bancas e instâncias de apuração", ocasiao: "em cada apuração", meio: "autoridade" } },
        { tipo: "consequencia", rotulo: "Nota zero se o detector acusar", risco: "art41x",
          caput: "Os trabalhos serão submetidos a ferramenta de detecção e, se detectado uso inadequado de inteligência artificial, receberão nota zero.",
          ficha: { conteudo: "dar nota zero", condicao: "\"uso inadequado\" detectado", destinatario: "estudante afetado", ocasiao: "em cada trabalho", meio: "autoridade", consequencia: "nota zero" } } ] },

    { id: "bancas", cap: "avaliacao", titulo: "Sigilo nas bancas e pareceres", cobre: ["direitos"], base: "Res. CNE/CP 1/2026, arts. 10, § 2º, e 15",
      casos: [], instancias: ["conselho", "proreitoria", "ppg"],
      variantes: [
        { tipo: "proibicao", rotulo: "Proibir inserir trabalhos inéditos",
          caput: "É vedado aos membros de banca e aos pareceristas inserir em ferramenta de inteligência artificial, sem autorização do autor, o texto integral ou partes substanciais de trabalho inédito sob sua avaliação.",
          ficha: { conteudo: "não inserir trabalho inédito em IA", condicao: "sem autorização do autor",
                   destinatario: "membros de banca e pareceristas", ocasiao: "em cada avaliação", meio: "autoridade" } } ] },

    { id: "dados_sensiveis", cap: "dados", titulo: "Dados pessoais e sensíveis", cobre: ["direitos"], base: "Lei nº 13.709/2018 (LGPD); Res. CNE/CP 1/2026, art. 10, § 2º",
      casos: ["F02-D009"], instancias: "todas",
      variantes: [
        { tipo: "proibicao", rotulo: "Proibir sem salvaguarda",
          caput: "É vedado inserir em ferramenta de inteligência artificial dados pessoais sensíveis ou que permitam identificar participantes de pesquisa, salvo se a ferramenta oferecer garantia contratual de confidencialidade e o uso constar do protocolo aprovado pelo comitê de ética.",
          ficha: { conteudo: "não inserir dados sensíveis ou identificáveis", condicao: "sem garantia de confidencialidade e aprovação ética",
                   destinatario: "pesquisadores", ocasiao: "em cada pesquisa", meio: "autoridade" } } ] },

    { id: "treinamento", cap: "dados", titulo: "Treinamento de modelos de terceiros", cobre: ["direitos"], base: "Res. CNE/CP 1/2026, art. 15", casos: [], instancias: "todas",
      variantes: [
        { tipo: "proibicao", rotulo: "Proibir sem autorização",
          caput: "É vedado ceder trabalhos de discentes e docentes para treinamento de modelos de inteligência artificial de terceiros sem autorização específica do autor.",
          ficha: { conteudo: "não ceder trabalhos para treinamento", condicao: "sem autorização específica",
                   destinatario: "{CHEFIA} e demais responsáveis por acervos", ocasiao: "em cada cessão", meio: "autoridade" } } ] },

    { id: "formacao", cap: "formacao", titulo: "Formação continuada", cobre: ["integridade"], base: "Res. CNE/CP 1/2026, art. 11", casos: [], instancias: ["conselho", "reitoria", "proreitoria", "ppg", "curso", "extensao"],
      variantes: [
        { tipo: "obrigacao", rotulo: "Obrigar a oferecer",
          caput: "A {CHEFIA} oferecerá, ao menos uma vez por ano, atividade de formação sobre uso ético de inteligência artificial na pesquisa e no ensino.",
          ficha: { conteudo: "oferecer formação anual", condicao: "—", destinatario: "{CHEFIA}", ocasiao: "uma vez por ano", meio: "organização" } },
        { tipo: "recomendacao", rotulo: "Só recomendar",
          caput: "Recomenda-se que a {CHEFIA} promova atividades de formação sobre uso ético de inteligência artificial.",
          ficha: { conteudo: "promover formação", condicao: "—", destinatario: "{CHEFIA}", ocasiao: "—", meio: "nodalidade" } } ] },

    { id: "licenciatura", cap: "formacao", titulo: "Formação inicial docente (licenciaturas)", cobre: [], piso: "licenciatura",
      base: "Res. CNE/CP 1/2026, arts. 26 e 27, § 3º", casos: [], instancias: ["conselho", "curso"],
      variantes: [
        { tipo: "obrigacao", rotulo: "Incluir no currículo",
          caput: "O Projeto Pedagógico do Curso contemplará o letramento digital docente, o uso pedagógico de tecnologias emergentes e os aspectos éticos do uso de inteligência artificial nas escolas, articulados ao estágio supervisionado.",
          ficha: { conteudo: "incluir formação em IA no PPC", condicao: "curso de licenciatura",
                   destinatario: "colegiado e núcleo docente do curso", ocasiao: "na próxima revisão do PPC", meio: "organização e autoridade" } } ] },

    { id: "acompanhamento", cap: "governanca", titulo: "Quem acompanha a norma", cobre: [], base: "Res. CNE/CP 1/2026, art. 12",
      casos: ["F33-D001"], instancias: ["conselho", "reitoria", "proreitoria", "ppg", "curso", "extensao"],
      variantes: [
        { tipo: "competencia", rotulo: "Atribuir à chefia",
          caput: "Compete à {CHEFIA}:",
          incisos: ["divulgar esta norma a discentes, docentes e técnicos;", "registrar as dúvidas e os casos encaminhados;",
                    "propor ao colegiado a revisão desta norma."],
          ficha: { conteudo: "divulgar, registrar casos e propor revisão", condicao: "—", destinatario: "{CHEFIA}",
                   ocasiao: "continuamente", meio: "organização" } } ] },

    { id: "revisao_humana", cap: "governanca", titulo: "Direito à revisão por pessoa", cobre: ["direitos"], piso: "revisaoHumana",
      base: "Res. CNE/CP 1/2026, art. 29", casos: ["F75-D117"], instancias: ["conselho", "reitoria", "proreitoria", "ppg", "curso"],
      variantes: [
        { tipo: "direito", rotulo: "Garantir o direito",
          caput: "O discente pode pedir à {CHEFIA} a revisão, por pessoa, de qualquer decisão acadêmica tomada com apoio de ferramenta de inteligência artificial.",
          ficha: { conteudo: "pedir revisão humana", condicao: "decisão tomada com apoio de IA", destinatario: "discente (titular); {CHEFIA} (atende)",
                   ocasiao: "a cada decisão", meio: "autoridade" } } ] },

    { id: "consequencias", cap: "consequencias", titulo: "O que acontece no descumprimento", cobre: ["integridade"], base: "Res. CNE/CP 1/2026, arts. 27, § 2º, e 41, X",
      casos: ["F02-D010", "F75-D111"], instancias: "todas",
      variantes: [
        { tipo: "consequencia", rotulo: "Medida educativa e remissão",
          caput: "O descumprimento desta norma será examinado pela {CHEFIA}, assegurado ao interessado o direito de manifestação, e poderá resultar em:",
          incisos: ["reelaboração do trabalho, quando a falha for de declaração ou de conferência;",
                    "encaminhamento à instância disciplinar competente, nos termos do Regimento Geral, quando houver indício de fraude ou plágio."],
          ficha: { conteudo: "examinar e aplicar medida educativa ou encaminhar", condicao: "descumprimento desta norma",
                   destinatario: "{CHEFIA} (apura); autor (afetado)", ocasiao: "a cada caso", meio: "autoridade", consequencia: "reelaboração ou remissão ao regime disciplinar" } },
        { tipo: "consequencia", rotulo: "Reprovação por uso inadequado", risco: "vaga",
          caput: "O uso inadequado de inteligência artificial acarretará a reprovação do discente.",
          ficha: { conteudo: "reprovar", condicao: "\"uso inadequado\"", destinatario: "não identificado", ocasiao: "—", meio: "autoridade", consequencia: "reprovação" } } ] },

    { id: "consequencias_docentes", cap: "consequencias", titulo: "Se o professor ou o gestor descumprir", cobre: [], base: "Res. CNE/CP 1/2026, arts. 14, 40, § 3º, e 41; CF, art. 5º, LV; Lei nº 8.112/1990, arts. 116, 117 e 127 (servidores federais)",
      casos: [], instancias: ["conselho", "reitoria", "proreitoria", "ppg", "curso", "extensao"],
      variantes: [
        { tipo: "consequencia", rotulo: "Desfazer o ato e remeter ao regime disciplinar",
          caput: "Quando o descumprimento desta norma for de docente, avaliador, orientador ou gestor:",
          incisos: ["a nota, o parecer ou a decisão produzidos em desacordo com esta norma não produzirão efeito e serão refeitos por pessoa designada pela {CHEFIA}, a pedido do interessado ou de ofício;",
                    "a {CHEFIA} dará ciência do fato ao responsável e registrará a correção;",
                    "havendo indício de infração funcional, inclusive reincidência, a {CHEFIA} comunicará o fato à autoridade competente para apuração nos termos do regime disciplinar aplicável, assegurados o contraditório e a ampla defesa."],
          paragrafos: ["Esta norma não cria sanção disciplinar: as penalidades de servidores e empregados são as previstas na lei ou no contrato de trabalho que rege cada vínculo."],
          ficha: { conteudo: "desfazer o ato irregular, registrar e encaminhar ao regime disciplinar", condicao: "descumprimento por docente, avaliador, orientador ou gestor",
                   destinatario: "{CHEFIA} (apura e encaminha); docentes, avaliadores, orientadores e gestores (afetados)", ocasiao: "a cada caso", meio: "autoridade e organização",
                   consequencia: "ato sem efeito e refeito por pessoa; remessa ao regime disciplinar" } },
        { tipo: "consequencia", rotulo: "Punir o professor diretamente (erro comum)", risco: "sancao_servidor",
          caput: "O docente que descumprir esta norma será punido com advertência e, na reincidência, com suspensão de suas atividades por trinta dias.",
          ficha: { conteudo: "advertir e suspender", condicao: "descumprimento pelo docente", destinatario: "docente", ocasiao: "—", meio: "autoridade", consequencia: "advertência e suspensão" } } ] },

    { id: "orientador", cap: "transparencia", titulo: "O papel do orientador", cobre: ["integridade", "transparencia"], base: "Res. CNE/CP 1/2026, arts. 10, § 1º, e 28",
      casos: [], instancias: ["conselho", "proreitoria", "ppg", "curso"],
      variantes: [
        { tipo: "obrigacao", rotulo: "Obrigar o orientador a combinar e conferir",
          caput: "O orientador combinará com o orientando, no início da orientação, os usos de inteligência artificial admitidos no trabalho e verificará, antes do depósito ou da entrega, a declaração prevista nesta norma.",
          ficha: { conteudo: "combinar os usos e conferir a declaração", condicao: "trabalhos sob sua orientação",
                   destinatario: "orientador", ocasiao: "no início da orientação e antes do depósito", meio: "autoridade e organização" } },
        { tipo: "recomendacao", rotulo: "Só recomendar",
          caput: "Recomenda-se que o orientador converse com o orientando sobre os usos de inteligência artificial admitidos no trabalho.",
          ficha: { conteudo: "conversar sobre os usos", condicao: "—", destinatario: "orientador", ocasiao: "—", meio: "nodalidade" } } ] },

    { id: "docente_uso", cap: "avaliacao", titulo: "Quando o professor usa IA", cobre: ["transparencia", "responsabilidade"], base: "Res. CNE/CP 1/2026, art. 14, § 2º",
      casos: [], instancias: "todas",
      variantes: [
        { tipo: "obrigacao", rotulo: "Obrigar a informar e conferir",
          caput: "O docente que usar inteligência artificial para elaborar materiais, atividades ou devolutivas informará os estudantes e responde pela verificação e adequação do conteúdo.",
          ficha: { conteudo: "informar e conferir o que produziu com IA", condicao: "ter usado IA em material ou devolutiva",
                   destinatario: "docente", ocasiao: "ao entregar o material ou a devolutiva", meio: "nodalidade e autoridade" } } ] },

    { id: "tecnicos", cap: "dados", titulo: "Uso de IA nas rotinas administrativas", cobre: ["direitos"], base: "Res. CNE/CP 1/2026, art. 29; Lei nº 13.709/2018 (LGPD)",
      casos: [], instancias: ["conselho", "reitoria", "proreitoria", "ppg", "curso", "extensao"],
      variantes: [
        { tipo: "proibicao", rotulo: "Proibir dados pessoais sem contrato",
          caput: "Os servidores técnico-administrativos e a coordenação não inserirão dados pessoais de discentes e docentes em ferramenta de inteligência artificial sem contrato institucional que garanta a proteção dos dados, e submeterão à conferência humana os documentos produzidos com seu apoio.",
          ficha: { conteudo: "não inserir dados pessoais; conferir documentos", condicao: "sem contrato institucional de proteção de dados",
                   destinatario: "servidores técnico-administrativos e coordenação", ocasiao: "em cada rotina administrativa", meio: "autoridade" } } ] },

    { id: "publicacoes", cap: "transparencia", titulo: "Artigos, publicações e pareceres", cobre: ["transparencia", "integridade"], base: "Res. CNE/CP 1/2026, art. 28",
      casos: [], instancias: ["conselho", "proreitoria", "ppg"],
      variantes: [
        { tipo: "obrigacao", rotulo: "Obrigar a declarar e a parecer pessoalmente",
          caput: "Discentes e docentes que publiquem {ALCANCE} declararão o uso relevante de inteligência artificial nos artigos que submeterem, seguindo também as regras da revista, e, quando atuarem como pareceristas, elaborarão pessoalmente seus pareceres.",
          ficha: { conteudo: "declarar o uso em artigos; parecer pessoal", condicao: "uso relevante de IA; atuação como parecerista",
                   destinatario: "discentes e docentes (autores e pareceristas)", ocasiao: "a cada submissão ou parecer", meio: "autoridade" } } ] },

    { id: "materiais_terceiros", cap: "dados", titulo: "Textos de colegas e materiais de terceiros", cobre: ["direitos"], base: "Lei nº 9.610/1998 (direitos autorais); Res. CNE/CP 1/2026, arts. 10, § 2º, e 15",
      casos: [], instancias: "todas",
      variantes: [
        { tipo: "proibicao", rotulo: "Proibir sem autorização do autor",
          caput: "É vedado inserir em ferramenta de inteligência artificial texto inédito de colega, aula, material didático ou documento interno sem autorização do autor ou do responsável.",
          ficha: { conteudo: "não inserir material alheio", condicao: "sem autorização do autor ou responsável",
                   destinatario: "discentes, docentes e servidores", ocasiao: "a cada uso", meio: "autoridade" } } ] },

    { id: "vigilancia", cap: "dados", titulo: "Reconhecimento facial e vigilância", cobre: ["direitos"], base: "Res. CNE/CP 1/2026, art. 41, II e VI, e §§ 1º e 2º",
      casos: [], instancias: "todas",
      variantes: [
        { tipo: "proibicao", rotulo: "Proibir, salvo identificação pontual",
          caput: "É vedado usar, nas atividades {ALCANCE}, ferramenta de reconhecimento de emoções ou de vigilância contínua de discentes e docentes, inclusive em provas a distância.",
          paragrafos: ["A verificação pontual de identidade, quando indispensável, será informada com antecedência e terá alternativa que não use biometria.",
                       "A vedação de reconhecimento de emoções não alcança a tecnologia assistiva usada só para acessibilidade, com consentimento do estudante, nem a pesquisa aprovada por comitê de ética, vedado, nos dois casos, o uso do resultado para avaliar, punir ou selecionar."],
          ficha: { conteudo: "não usar reconhecimento de emoções nem vigilância contínua", condicao: "atividades da unidade",
                   destinatario: "docentes, coordenação e bancas", ocasiao: "em cada atividade e prova", meio: "autoridade" } } ] },

    { id: "deepfake", cap: "dados", titulo: "Montagens falsas (deepfakes) e violência com IA", cobre: ["direitos"], base: "Res. CNE/CP 1/2026, art. 10, § 2º",
      casos: [], instancias: "todas",
      variantes: [
        { tipo: "proibicao", rotulo: "Proibir e garantir acolhimento",
          caput: "É vedado criar ou divulgar, com inteligência artificial, imagem, voz ou texto falso que atribua a discente, docente ou servidor algo que não disse ou fez.",
          paragrafos: ["A {CHEFIA} acolherá quem relatar o fato, preservará o sigilo e encaminhará o caso, em até dois dias úteis, à instância competente da instituição."],
          ficha: { conteudo: "não criar nem divulgar falsificações; acolher e encaminhar", condicao: "—",
                   destinatario: "discentes, docentes e servidores (proíbe); {CHEFIA} (acolhe)", ocasiao: "a cada caso", meio: "autoridade e organização" } } ] },

    { id: "selecao", cap: "avaliacao", titulo: "Seleção, bolsas e decisões sobre o discente", cobre: ["direitos"], base: "Res. CNE/CP 1/2026, arts. 29 e 41, V",
      casos: [], instancias: ["conselho", "reitoria", "proreitoria", "ppg", "curso", "extensao"],
      variantes: [
        { tipo: "proibicao", rotulo: "Proibir decisão só automatizada",
          caput: "É vedado decidir a seleção de candidatos, a concessão ou o corte de bolsas e o desligamento de discentes com base apenas em resultado de ferramenta de inteligência artificial.",
          paragrafos: ["O edital informará se alguma ferramenta será usada e para quê, a quem o candidato pode pedir revisão por pessoa e em que prazo, que terminará antes da divulgação do resultado final."],
          ficha: { conteudo: "não decidir só com IA; informar no edital", condicao: "seleção, bolsas e desligamento",
                   destinatario: "comissões de seleção e de bolsas; coordenação", ocasiao: "em cada edital e decisão", meio: "autoridade" } } ] },

    { id: "duvidas", cap: "governanca", titulo: "Canal de dúvidas", cobre: ["transparencia"], base: "Res. CNE/CP 1/2026, arts. 12 e 13",
      casos: [], instancias: ["conselho", "reitoria", "proreitoria", "ppg", "curso", "extensao"],
      variantes: [
        { tipo: "obrigacao", rotulo: "Obrigar a responder por escrito",
          caput: "A {CHEFIA} responderá por escrito, em até dez dias úteis, às dúvidas de discentes, docentes e orientadores sobre o uso de inteligência artificial.",
          ficha: { conteudo: "responder dúvidas por escrito", condicao: "dúvida apresentada",
                   destinatario: "{CHEFIA}", ocasiao: "em até dez dias úteis", meio: "organização" } } ] },

    { id: "apuracao", cap: "consequencias", titulo: "Como se apura (inclusive acusação por detector)", cobre: ["direitos", "integridade"], base: "Res. CNE/CP 1/2026, arts. 29 e 41, X",
      casos: [], instancias: ["conselho", "proreitoria", "ppg", "curso"],
      variantes: [
        { tipo: "competencia", rotulo: "Definir o procedimento",
          caput: "Havendo indício de descumprimento desta norma, inclusive resultado de detector, a {CHEFIA}:",
          incisos: ["informará o interessado e lhe dará acesso às evidências;", "receberá sua manifestação em até dez dias úteis;",
                    "decidirá de forma motivada, com avaliação feita por pessoa, em até vinte dias úteis, indicando a regra aplicada, as evidências consideradas e a resposta à explicação do interessado."],
          paragrafos: ["O autor que declarar espontaneamente um uso que deixou de informar poderá regularizar o trabalho sem que isso seja tratado como fraude."],
          ficha: { conteudo: "informar, ouvir e decidir motivadamente", condicao: "indício de descumprimento",
                   destinatario: "{CHEFIA} (apura); interessado (manifesta-se)", ocasiao: "a cada caso, nos prazos", meio: "autoridade e organização" } } ] },

    { id: "transicao", cap: "governanca", titulo: "Transição e relação com outras normas", cobre: [], base: "Res. CNE/CP 1/2026, arts. 27 e 46",
      casos: [], instancias: ["proreitoria", "ppg", "curso", "extensao"],
      variantes: [
        { tipo: "competencia", rotulo: "Dizer o que vale enquanto não há política institucional",
          caput: "Enquanto a instituição não aprovar sua política de uso de inteligência artificial, a {CHEFIA} aplicará esta norma e a Resolução CNE/CP nº 1, de 11 de novembro de 2026, e encaminhará à instância superior as dúvidas que esta norma não resolver.",
          paragrafos: ["Esta norma aplica-se aos trabalhos entregues após o início de sua vigência."],
          ficha: { conteudo: "aplicar esta norma e a Resolução; encaminhar dúvidas", condicao: "enquanto não houver política institucional",
                   destinatario: "{CHEFIA}", ocasiao: "até a aprovação da política institucional", meio: "autoridade e organização" } } ] },

    { id: "recomenda_sancao", cap: "transparencia", titulo: "IA para redigir o texto do trabalho", cobre: ["autoria"], base: "Res. CNE/CP 1/2026, arts. 10 e 30, VII", casos: [], instancias: "todas",
      variantes: [
        { tipo: "recomendacao", rotulo: "Recomendar e punir (erro comum)", risco: "recomendacaoComPena",
          caput: "Recomenda-se não usar inteligência artificial na redação de trabalhos, sob pena de reprovação.",
          ficha: { conteudo: "não usar IA na redação", condicao: "—", destinatario: "não identificado", ocasiao: "—", meio: "nodalidade", consequencia: "reprovação" } },
        { tipo: "recomendacao", rotulo: "Recomendar, sem pena",
          caput: "Recomenda-se que o autor não use inteligência artificial para redigir o texto do trabalho acadêmico, salvo nos usos de apoio permitidos nesta norma, porque a escrita é parte da formação do pesquisador.",
          ficha: { conteudo: "não redigir o texto com IA", condicao: "—", destinatario: "autor do trabalho", ocasiao: "elaboração de trabalhos (repetível)", meio: "nodalidade" } },
        { tipo: "proibicao", rotulo: "Proibir, com consequência",
          caput: "É vedado ao autor usar inteligência artificial para redigir o texto do trabalho acadêmico, ressalvados os usos de apoio permitidos nesta norma.",
          paragrafos: ["O descumprimento será examinado nos termos do capítulo das consequências desta norma."],
          ficha: { conteudo: "não redigir o texto com IA", condicao: "salvo usos de apoio permitidos", destinatario: "autor do trabalho", ocasiao: "elaboração de trabalhos (repetível)", meio: "autoridade", consequencia: "remissão ao capítulo das consequências" } } ] }
  ],

  /* ---------- Perguntas do diagnóstico (Anexo do Decreto nº 12.002/2024, adaptado) ---------- */
  diagnostico: [
    { id: "problema", p: "Qual é o problema que a norma quer resolver?", ex: "Discentes usam IA na dissertação sem regra clara, e bancas não sabem o que exigir." },
    { id: "objetivo", p: "O que se pretende alcançar?", ex: "Uso transparente e conferido, com a análise e a interpretação das fontes preservadas como trabalho do autor." },
    { id: "seNada", p: "O que acontece se nada for feito?", ex: "Decisões diferentes em casos iguais, e risco de punições sem base." },
    { id: "publico", p: "Quem é alcançado e quantos casos há?", ex: "Cerca de 80 discentes, 25 docentes e as bancas de cada ano." }
  ]
};
