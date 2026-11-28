/* Minuta, Mary! — trilha "Educação básica / instituição" (escola, rede, secretaria, conselho de educação). Versão 1, 26/11/2026.
   Fontes: Resolução CNE/CP nº 1/2026, sobretudo arts. 6º, 10 a 24, 29, 36 a 41 e 46 (normas/multilaterais/textos/N01...);
   Lei nº 8.069/1990 (ECA); Lei nº 13.709/2018 (LGPD), art. 14; LC nº 95/1998; quadro teórico do app (von Wright; Hood e Margetts;
   Baldwin, Cave e Lodge). Dúvidas de teste: perfis de educação básica do "Pode isso, Jane?" (testes/cobertura_basica). */
window.TRILHAS = window.TRILHAS || {};
window.TRILHAS.superior = window.TRILHAS.superior || window.DADOS;
window.TIPOS_BASE = window.DADOS && window.DADOS.tipos;
window.TRILHAS.basica = {
  id: "basica",

  instancias: [
    { id: "csistema", nome: "Conselho de Educação (municipal ou estadual)", ato: "RESOLUÇÃO", atoNome: "Resolução", colegiado: true, amplo: true,
      nomeOrgaoEx: "Conselho Municipal de Educação de Exemplo", sujeito: "O CONSELHO MUNICIPAL DE EDUCAÇÃO",
      pode: ["Fixar normas para todas as escolas do sistema de ensino, públicas e privadas a ele vinculadas",
             "Dizer o que os regimentos escolares devem conter sobre IA"],
      naoPode: ["Contrariar a Resolução CNE/CP nº 1/2026, o Estatuto da Criança e do Adolescente e a LGPD",
                "Administrar as escolas: compras, contratos e formação são da secretaria"],
      chefia: "a Secretaria de Educação" },
    { id: "secretaria", nome: "Secretaria de Educação (rede municipal ou estadual)", ato: "PORTARIA", atoNome: "Portaria", colegiado: false, amplo: true,
      nomeOrgaoEx: "Secretaria Municipal de Educação de Exemplo", sujeito: "O SECRETÁRIO MUNICIPAL DE EDUCAÇÃO",
      pode: ["Escolher, contratar e homologar ferramentas para a rede", "Fixar procedimentos para as escolas da rede", "Organizar a formação dos profissionais"],
      naoPode: ["Ir além das normas do conselho de educação", "Criar sanção para estudantes fora do regimento escolar"],
      chefia: "a Secretaria de Educação" },
    { id: "escola", nome: "Conselho escolar (regras da escola)", ato: "RESOLUÇÃO", atoNome: "Resolução", colegiado: true,
      nomeOrgaoEx: "Conselho Escolar da Escola Municipal Exemplo", sujeito: "O CONSELHO ESCOLAR",
      pode: ["Regras de uso de IA na escola, discutidas com famílias, estudantes e professores", "Propor a alteração do regimento escolar"],
      naoPode: ["Contrariar as normas da rede e do conselho de educação", "Criar sanção que não esteja no regimento escolar"],
      nota: "Regra que cria dever ou consequência para estudantes deve constar do regimento escolar, que em geral depende de aprovação do órgão do sistema de ensino.",
      chefia: "a Direção da Escola" },
    { id: "direcao", nome: "Direção da escola", ato: "PORTARIA", atoNome: "Portaria", colegiado: false,
      nomeOrgaoEx: "Direção da Escola Municipal Exemplo", sujeito: "A DIREÇÃO DA ESCOLA",
      pode: ["Organizar o uso de IA no dia a dia da escola", "Designar responsáveis e fixar procedimentos internos"],
      naoPode: ["Criar dever novo para estudantes e famílias sem base no regimento escolar", "Criar sanção"],
      chefia: "a Direção da Escola" }
  ],

  publicos: [
    { id: "estudante", nome: "Estudantes", re: /estudante|aluno|criança|adolescente|turma/i },
    { id: "professor", nome: "Professores", re: /professor|docente|profissionais da educação|avaliador/i },
    { id: "familia", nome: "Famílias e responsáveis", re: /famíli|responsáveis legais|pais/i },
    { id: "gestao", nome: "Direção, coordenação e secretaria", re: /direção|diretor|coordena|secretaria de educação|gestor|conselho/i },
    { id: "funcionario", nome: "Funcionários", re: /funcionári|servidor/i }
  ],
  publicosPadrao: ["estudante", "professor", "familia", "gestao"],

  piso: {
    obrigatorio: [
      { art: "art. 17", texto: "Proteção integral de crianças e adolescentes, uso adequado à idade e centralidade das interações humanas." },
      { art: "arts. 21 a 23", texto: "Regras próprias para cada etapa: Educação Infantil, anos iniciais e anos finais do Ensino Fundamental." },
      { art: "arts. 13 e 22, § 4º", texto: "O uso de IA é comunicado com clareza aos estudantes, aos professores e às famílias ou responsáveis." },
      { art: "art. 18, § 1º", texto: "Quem adota IA também ensina sobre IA no currículo, de forma progressiva." },
      { art: "art. 18, V", texto: "Há alternativa para quem não tem internet ou aparelho, para que ninguém fique de fora." },
      { art: "art. 6º", texto: "A adoção de ferramenta é decidida de forma fundamentada, com participação da comunidade escolar." },
      { art: "art. 11", texto: "Formação permanente dos profissionais da educação." },
      { art: "art. 12, § 2º", texto: "As regras têm revisão periódica." },
      { art: "art. 46", texto: "Sistemas e escolas têm 12 meses, contados de 12/11/2026, para se adequar; as vedações do art. 41 valem desde já." }
    ],
    vedado: [
      { art: "art. 21, § 1º", texto: "Na Educação Infantil, as crianças não usam nenhum sistema de IA, nem com mediação do professor." },
      { art: "art. 22, §§ 1º e 2º", texto: "Nos anos iniciais, nada de acesso direto ou sem supervisão, nem conversa com IA generativa, mesmo supervisionada." },
      { art: "art. 23, parágrafo único", texto: "Nos anos finais, nada de uso direto, autônomo ou sem supervisão de IA generativa." },
      { art: "art. 15, parágrafo único", texto: "Usar o que crianças e adolescentes produzem para treinar IA de terceiros, mesmo com autorização." },
      { art: "arts. 16 e 24", texto: "Publicidade direcionada, perfil comercial ou exploração comercial dos dados dos estudantes." },
      { art: "art. 41, II e VI", texto: "Reconhecer emoções ou vigiar continuamente estudantes e professores." },
      { art: "art. 41, I, IV e VIII", texto: "Pontuação social, perfil comportamental para classificar ou excluir, segregação por inferência automática." },
      { art: "art. 41, V, IX e X", texto: "Decisão só automatizada sobre promoção, vaga ou sanção; nota de redação só por IA; punição baseada só em detector." },
      { art: "art. 14", texto: "Substituir o professor por sistema automatizado." }
    ],
    principios: ["etapas", "familias", "dados", "supervisao", "letramento"],
    principioNome: { etapas: "uso por etapa (arts. 21 a 23)", familias: "comunicação às famílias (arts. 13 e 22, § 4º)",
                     dados: "proteção dos dados de crianças e adolescentes (arts. 10, § 2º, e 15)",
                     supervisao: "mediação e supervisão humana (arts. 14 e 18, § 3º)", letramento: "ensino sobre IA (art. 18, § 1º)" },
    codigo: "PISO_BASICA", exige: ["csistema", "secretaria"],
    fonte: "Res. CNE/CP 1/2026, arts. 13, 17, 18 e 21 a 23",
    msgErro: "As regras do sistema de ensino precisam tratar de: ",
    msgDica: "Ainda não tratados: "
  },

  /* Variantes com defeito que a revisão deve reprovar (além das já conhecidas do motor). */
  riscos: {
    sancao_servidor: { codigo: "SANCAO_SEM_COMPETENCIA", nivel: "erro", msg: "Esta instância não pode criar pena para professor ou gestor: a sanção disciplinar de servidor depende de lei (o estatuto), e a de empregado, do contrato de trabalho. A norma pode desfazer o ato irregular (a nota dada só pela IA, por exemplo) e encaminhar o caso ao regime disciplinar.", fonte: "CF, art. 5º, XXXIX e LV; Lei nº 8.112/1990, art. 127 (servidores federais); estatutos estaduais e municipais; CLT" },
    infantil: { codigo: "VEDADO_ETAPA", nivel: "erro", msg: "Permite que crianças da Educação Infantil usem IA. A Resolução proíbe qualquer uso pelas crianças, mesmo com mediação.", fonte: "Res. CNE/CP 1/2026, art. 21, § 1º" },
    iniciais: { codigo: "VEDADO_ETAPA", nivel: "erro", msg: "Permite que alunos dos anos iniciais conversem com IA generativa. A Resolução proíbe, ainda que haja supervisão.", fonte: "Res. CNE/CP 1/2026, art. 22, § 2º" },
    finais: { codigo: "VEDADO_ETAPA", nivel: "erro", msg: "Permite uso livre de IA generativa nos anos finais. A Resolução só admite o uso em atividade mediada pelo professor.", fonte: "Res. CNE/CP 1/2026, art. 23" },
    treino: { codigo: "VEDADO_15", nivel: "erro", msg: "Permite usar o que os alunos produzem para treinar IA de terceiros. Com crianças e adolescentes, isso é vedado mesmo com autorização.", fonte: "Res. CNE/CP 1/2026, arts. 15, parágrafo único, e 41, XI" },
    generica: { codigo: "PROIBICAO_TOTAL", nivel: "aviso", msg: "Proibir toda IA na escola choca com o ensino sobre IA (art. 18, § 1º) e com os recursos de acessibilidade (art. 22, § 5º). Proíba em tarefas e etapas certas, não em tudo.", fonte: "Res. CNE/CP 1/2026, arts. 18, § 1º, 21 a 23 e 36, § 3º" }
  },

  tipos: window.DADOS ? window.DADOS.tipos : null, /* mesmos tipos de prescrição da trilha superior */

  capitulos: [
    { id: "etapas", nome: "DO USO EM CADA ETAPA" },
    { id: "usos", nome: "DO USO PEDAGÓGICO" },
    { id: "avaliacao", nome: "DA AVALIAÇÃO E DAS DECISÕES SOBRE O ESTUDANTE" },
    { id: "dados", nome: "DA PROTEÇÃO DOS ESTUDANTES E DE SEUS DADOS" },
    { id: "familias", nome: "DAS FAMÍLIAS" },
    { id: "adocao", nome: "DA ADOÇÃO E DA CONTRATAÇÃO DE FERRAMENTAS" },
    { id: "formacao", nome: "DA FORMAÇÃO" },
    { id: "governanca", nome: "DO ACOMPANHAMENTO" },
    { id: "consequencias", nome: "DAS CONSEQUÊNCIAS" }
  ],

  /* {ALCANCE} = "no âmbito da <rede ou escola>"; {CHEFIA} = secretaria ou direção; {A_ESCOLA}/{A_ESCOLA_M} = "a escola" ou "cada escola". */
  dispositivos: [
    /* ---------- etapas ---------- */
    { id: "infantil", cap: "etapas", titulo: "Educação Infantil (creche e pré-escola)", cobre: ["etapas", "supervisao"], base: "Res. CNE/CP 1/2026, art. 21", casos: [], instancias: "todas",
      variantes: [
        { tipo: "proibicao", rotulo: "Vedar o uso pelas crianças",
          caput: "Na Educação Infantil, é vedado o uso de qualquer sistema de inteligência artificial pelas crianças, de forma direta ou com mediação dos profissionais da educação.",
          paragrafos: ["Os profissionais da educação poderão usar ferramentas de inteligência artificial no planejamento e na gestão pedagógica, sem inserir dados que identifiquem as crianças.",
                       "Recursos de acessibilidade são admitidos apenas para eliminar barreiras, sem inferências sensíveis, perfil individual ou decisão sobre a criança."],
          ficha: { conteudo: "não pôr crianças em contato com IA", condicao: "Educação Infantil", destinatario: "profissionais da educação da Educação Infantil",
                   ocasiao: "em todas as atividades", meio: "autoridade" } },
        { tipo: "permissao", rotulo: "Permitir com mediação", risco: "infantil",
          caput: "Na Educação Infantil, as crianças poderão usar aplicativos de inteligência artificial em atividades mediadas pelo professor.",
          ficha: { conteudo: "usar aplicativos de IA com as crianças", condicao: "mediação do professor", destinatario: "professores da Educação Infantil", ocasiao: "nas atividades", meio: "autoridade" } } ] },

    { id: "iniciais", cap: "etapas", titulo: "Anos iniciais do Ensino Fundamental (1º ao 5º ano)", cobre: ["etapas", "supervisao"], base: "Res. CNE/CP 1/2026, art. 22", casos: [], instancias: "todas",
      variantes: [
        { tipo: "proibicao", rotulo: "Só em atividade mediada, sem IA generativa",
          caput: "Nos anos iniciais do Ensino Fundamental, recursos baseados em inteligência artificial serão usados apenas em atividades planejadas, conduzidas e mediadas pelo professor, vedados:",
          incisos: ["o acesso direto, autônomo, individual ou sem supervisão dos estudantes;",
                    "a interação dos estudantes com ferramentas de inteligência artificial generativa ou conversacional, ainda que supervisionada."],
          paragrafos: ["A vedação não alcança as tecnologias assistivas e os recursos de acessibilidade destinados a eliminar barreiras à aprendizagem.",
                       "As famílias serão informadas, antes do uso, da finalidade pedagógica de cada recurso."],
          ficha: { conteudo: "usar IA só em atividade mediada; nada de IA generativa com os alunos", condicao: "anos iniciais do Ensino Fundamental",
                   destinatario: "professores dos anos iniciais", ocasiao: "em cada atividade", meio: "autoridade" } },
        { tipo: "permissao", rotulo: "Permitir conversa supervisionada com IA", risco: "iniciais",
          caput: "Nos anos iniciais do Ensino Fundamental, os estudantes poderão conversar com assistentes de inteligência artificial generativa, desde que sob supervisão do professor.",
          ficha: { conteudo: "conversar com IA generativa", condicao: "supervisão do professor", destinatario: "estudantes dos anos iniciais", ocasiao: "nas atividades", meio: "autoridade" } } ] },

    { id: "finais", cap: "etapas", titulo: "Anos finais do Ensino Fundamental (6º ao 9º ano)", cobre: ["etapas", "supervisao"], base: "Res. CNE/CP 1/2026, art. 23", casos: [], instancias: "todas",
      variantes: [
        { tipo: "permissao", rotulo: "Permitir só em atividade mediada",
          caput: "Nos anos finais do Ensino Fundamental, ferramentas de inteligência artificial generativa poderão ser usadas apenas em atividades planejadas e mediadas pelo professor, vedado o uso direto, autônomo, individual ou sem supervisão pelos estudantes nas atividades escolares.",
          paragrafos: ["Não será passada tarefa de casa que exija o uso dessas ferramentas pelo estudante sozinho."],
          ficha: { conteudo: "usar IA generativa só em atividade mediada", condicao: "planejamento e mediação do professor",
                   destinatario: "professores e estudantes dos anos finais", ocasiao: "em cada atividade", meio: "autoridade" } },
        { tipo: "permissao", rotulo: "Liberar o uso nas tarefas", risco: "finais",
          caput: "Nos anos finais do Ensino Fundamental, os estudantes poderão usar livremente ferramentas de inteligência artificial generativa nas tarefas escolares.",
          ficha: { conteudo: "usar IA generativa nas tarefas", condicao: "—", destinatario: "estudantes dos anos finais", ocasiao: "nas tarefas", meio: "autoridade" } } ] },

    { id: "medio", cap: "etapas", titulo: "Ensino Médio", cobre: ["etapas"], base: "Res. CNE/CP 1/2026, arts. 10, § 1º, 18, III, e 20, parágrafo único", casos: [], instancias: "todas",
      variantes: [
        { tipo: "permissao", rotulo: "Permitir quando o professor autorizar",
          caput: "No Ensino Médio, os estudantes poderão usar ferramentas de inteligência artificial nas atividades em que o professor autorizar, informando o uso e conferindo o resultado.",
          paragrafos: ["O estudante responde pelo que entrega e não apresentará como seu o que a ferramenta produziu."],
          ficha: { conteudo: "usar IA nas atividades autorizadas, informando e conferindo", condicao: "autorização do professor",
                   destinatario: "estudantes do Ensino Médio", ocasiao: "em cada atividade", meio: "autoridade" } },
        { tipo: "recomendacao", rotulo: "Só recomendar",
          caput: "Recomenda-se que os estudantes do Ensino Médio usem ferramentas de inteligência artificial como apoio ao estudo, conferindo as respostas em outras fontes, porque elas erram e inventam informações.",
          ficha: { conteudo: "usar IA como apoio e conferir", condicao: "—", destinatario: "estudantes do Ensino Médio", ocasiao: "no estudo", meio: "nodalidade" } } ] },

    /* ---------- uso pedagógico ---------- */
    { id: "letramento", cap: "usos", titulo: "Ensinar sobre IA no currículo", cobre: ["letramento"], base: "Res. CNE/CP 1/2026, arts. 18, § 1º, 19 e 20", casos: [], instancias: "todas",
      variantes: [
        { tipo: "obrigacao", rotulo: "Incluir no projeto político-pedagógico",
          caput: "{A_ESCOLA_M} incluirá no projeto político-pedagógico o ensino sobre inteligência artificial, de forma progressiva e compatível com cada etapa, articulado à educação digital e midiática, abrangendo:",
          incisos: ["o funcionamento básico desses sistemas, seus limites e seus vieses;", "a verificação de fontes e de informações produzidas por inteligência artificial;",
                    "a diferença entre apoio da ferramenta e elaboração própria;", "os riscos de desinformação, de montagens falsas e de exposição de dados;", "o uso equilibrado, que preserve a autonomia intelectual e evite a dependência da ferramenta."],
          ficha: { conteudo: "ensinar sobre IA de forma progressiva", condicao: "—", destinatario: "direção e coordenação pedagógica",
                   ocasiao: "na próxima revisão do projeto político-pedagógico", meio: "organização" } } ] },

    { id: "professor_uso", cap: "usos", titulo: "Uso pelos professores no planejamento", cobre: ["supervisao"], base: "Res. CNE/CP 1/2026, arts. 8º e 14, § 2º", casos: [], instancias: "todas",
      variantes: [
        { tipo: "permissao", rotulo: "Permitir, com condições",
          caput: "Os professores poderão usar ferramentas de inteligência artificial para planejar aulas e para elaborar e adaptar materiais e atividades, desde que:",
          incisos: ["não insiram dados que identifiquem estudantes;", "confiram o conteúdo antes de usá-lo com a turma;",
                    "informem aos estudantes, e às famílias quando couber, que o material foi elaborado com esse apoio."],
          paragrafos: ["O professor responde pela adequação do material aos objetivos de aprendizagem e à idade dos estudantes."],
          ficha: { conteudo: "usar IA no planejamento, sem dados dos alunos, conferindo e informando", condicao: "as três condições dos incisos",
                   destinatario: "professores", ocasiao: "no planejamento (repetível)", meio: "autoridade" } } ] },

    { id: "substituicao", cap: "usos", titulo: "O professor não é substituído", cobre: ["supervisao"], base: "Res. CNE/CP 1/2026, arts. 9º, § 1º, e 14", casos: [], instancias: "todas",
      variantes: [
        { tipo: "proibicao", rotulo: "Proibir a substituição",
          caput: "É vedado substituir a atuação do professor por sistema de inteligência artificial, inclusive em aulas de reforço, recuperação ou tutoria, e transferir a esse sistema a responsabilidade pedagógica.",
          ficha: { conteudo: "não substituir o professor por IA", condicao: "—", destinatario: "{CHEFIA}, direção e mantenedora",
                   ocasiao: "na organização das turmas e do reforço", meio: "autoridade" } } ] },

    { id: "regras_atividade", cap: "usos", titulo: "Regras claras em cada atividade", cobre: ["familias"], base: "Res. CNE/CP 1/2026, art. 13", casos: [], instancias: "todas",
      variantes: [
        { tipo: "obrigacao", rotulo: "Obrigar o professor a avisar antes",
          caput: "O professor informará à turma, antes de cada atividade avaliativa ou tarefa de casa, se o uso de inteligência artificial é permitido e em que condições.",
          paragrafos: ["Se nada for informado, o uso de inteligência artificial generativa pelo estudante não é permitido naquela atividade."],
          ficha: { conteudo: "avisar antes se a IA é permitida", condicao: "atividade avaliativa", destinatario: "professores",
                   ocasiao: "antes de cada atividade avaliativa", meio: "nodalidade e autoridade" } } ] },

    { id: "trabalhos", cap: "usos", titulo: "Trabalhos escolares: autoria e aviso de uso", cobre: ["supervisao"], base: "Res. CNE/CP 1/2026, arts. 10, § 1º, e 20, VII", casos: [], instancias: "todas",
      variantes: [
        { tipo: "obrigacao", rotulo: "Obrigar o estudante a informar",
          caput: "Nas atividades em que o uso de inteligência artificial for permitido, o estudante informará, de modo compatível com a sua idade, em que parte do trabalho usou a ferramenta.",
          paragrafos: ["A forma de informar será combinada pelo professor com a turma e poderá ser oral."],
          ficha: { conteudo: "informar em que parte usou IA", condicao: "atividade em que o uso é permitido", destinatario: "estudantes",
                   ocasiao: "na entrega de cada trabalho", meio: "autoridade" } },
        { tipo: "obrigacao", rotulo: "Mandar evitar o \"uso indevido\"", risco: "vaga",
          caput: "Os alunos deverão evitar o uso indevido de inteligência artificial nos trabalhos escolares.",
          ficha: { conteudo: "evitar o uso indevido", condicao: "\"uso indevido\"", destinatario: "não identificado", ocasiao: "—", meio: "autoridade" } },
        { tipo: "recomendacao", rotulo: "Recomendar e punir (erro comum)", risco: "recomendacaoComPena",
          caput: "Recomenda-se que os alunos não usem inteligência artificial nos trabalhos, sob pena de nota zero.",
          ficha: { conteudo: "não usar IA nos trabalhos", condicao: "—", destinatario: "alunos", ocasiao: "—", meio: "nodalidade", consequencia: "nota zero" } } ] },

    { id: "acesso", cap: "usos", titulo: "Quem não tem internet, aparelho ou conta", cobre: [], base: "Res. CNE/CP 1/2026, arts. 18, V, e 6º, VIII", casos: [], instancias: "todas",
      variantes: [
        { tipo: "obrigacao", rotulo: "Garantir alternativa",
          caput: "Atividade que exija ferramenta de inteligência artificial será feita na escola, com equipamento da escola, ou terá alternativa que o estudante possa cumprir sem internet ou aparelho próprio.",
          paragrafos: ["Não se exigirá ferramenta paga nem a criação de conta pessoal do estudante em serviço de terceiros.",
                       "Quando o professor ou a escola exigir determinada ferramenta, a escola responde por sua adequação à idade e pela proteção dos dados dos estudantes."],
          ficha: { conteudo: "fazer na escola ou oferecer alternativa; não exigir ferramenta paga nem conta pessoal", condicao: "atividade que exija IA",
                   destinatario: "professores e direção", ocasiao: "em cada atividade", meio: "autoridade e tesouro" } } ] },

    { id: "proibir_tudo", cap: "usos", titulo: "Proibir toda IA na escola?", cobre: [], base: "Res. CNE/CP 1/2026, arts. 18, § 1º, e 36, § 3º", casos: [], instancias: "todas",
      variantes: [
        { tipo: "proibicao", rotulo: "Proibir tudo (genérico)", risco: "generica",
          caput: "É vedado o uso de inteligência artificial na escola.",
          ficha: { conteudo: "não usar IA", condicao: "—", destinatario: "não identificado", ocasiao: "—", meio: "autoridade" } } ] },

    /* ---------- avaliação e decisões ---------- */
    { id: "correcao", cap: "avaliacao", titulo: "Correção de redações e provas", cobre: ["supervisao"], base: "Res. CNE/CP 1/2026, arts. 40, §§ 1º e 4º, e 41, IX", casos: [], instancias: "todas",
      variantes: [
        { tipo: "proibicao", rotulo: "Exigir correção pelo professor",
          caput: "É vedado atribuir nota ou conceito a redação, produção de texto ou avaliação dissertativa com base apenas em resultado de ferramenta de inteligência artificial.",
          paragrafos: ["A ferramenta poderá auxiliar a correção, desde que o professor leia integralmente a produção do estudante e decida a nota, vedada a mera confirmação do resultado sugerido pela ferramenta.",
                       "Em provas objetivas corrigidas com apoio automatizado, nenhuma nota terá efeito sem conferência do professor, vedada a validação em bloco."],
          ficha: { conteudo: "não dar nota só com IA", condicao: "avaliação com efeito na nota", destinatario: "professores e coordenação pedagógica",
                   ocasiao: "em cada avaliação", meio: "autoridade" } },
        { tipo: "permissao", rotulo: "Deixar a plataforma dar a nota", risco: "art41ix",
          caput: "As redações dos estudantes serão corrigidas e pontuadas pela plataforma de inteligência artificial adotada pela rede.",
          ficha: { conteudo: "corrigir e dar nota com IA", condicao: "—", destinatario: "professores", ocasiao: "em cada avaliação", meio: "autoridade" } } ] },

    { id: "detector", cap: "avaliacao", titulo: "Detectores de texto gerado por IA", cobre: ["supervisao"], base: "Res. CNE/CP 1/2026, arts. 40, § 1º, IX, e 41, X", casos: [], instancias: "todas",
      variantes: [
        { tipo: "proibicao", rotulo: "Detector só como indício",
          caput: "O resultado de ferramenta de detecção de conteúdo gerado por inteligência artificial será usado apenas como indício, vedada a aplicação de qualquer medida ao estudante com base exclusiva nesse resultado.",
          ficha: { conteudo: "não aplicar medida com base só no detector", condicao: "uso de detector", destinatario: "professores e direção",
                   ocasiao: "em cada apuração", meio: "autoridade" } },
        { tipo: "consequencia", rotulo: "Nota zero se o detector acusar", risco: "art41x",
          caput: "Os trabalhos serão submetidos a ferramenta de detecção e, se detectado uso de inteligência artificial, receberão nota zero.",
          ficha: { conteudo: "dar nota zero", condicao: "detector acusar", destinatario: "estudante afetado", ocasiao: "em cada trabalho", meio: "autoridade", consequencia: "nota zero" } } ] },

    { id: "decisoes", cap: "avaliacao", titulo: "Decisões sobre o estudante: vaga, turma, reforço, promoção", cobre: ["supervisao"], base: "Res. CNE/CP 1/2026, arts. 29, 40, § 3º, e 41, V", casos: [], instancias: "todas",
      variantes: [
        { tipo: "proibicao", rotulo: "Proibir decisão só automatizada e garantir revisão",
          caput: "É vedado decidir com base apenas em resultado de ferramenta de inteligência artificial a matrícula ou a vaga, a enturmação, o encaminhamento a reforço ou recuperação, a nota ou o conceito, a promoção ou a retenção, a concessão de benefícios e a aplicação de medidas disciplinares.",
          paragrafos: ["O estudante ou sua família poderá pedir à {CHEFIA}, em até dez dias úteis da ciência, que a decisão tomada com apoio dessa ferramenta seja revista por pessoa, e receberá resposta fundamentada em até dez dias úteis.",
                       "O prazo do § 1º não exclui os recursos previstos no regimento escolar, e, confirmado o erro, serão corrigidos os registros de todos os estudantes atingidos."],
          ficha: { conteudo: "não decidir só com IA; rever por pessoa a pedido", condicao: "decisão sobre a trajetória do estudante",
                   destinatario: "direção, secretaria e comissões; estudante e família (pedem revisão)", ocasiao: "em cada decisão; prazos de dez dias úteis", meio: "autoridade" } } ] },

    { id: "perfis", cap: "avaliacao", titulo: "Rankings, pontos de comportamento e previsão de evasão", cobre: ["supervisao", "dados"], base: "Res. CNE/CP 1/2026, arts. 40, § 1º, VI, e 41, I, IV e VIII", casos: [], instancias: "todas",
      variantes: [
        { tipo: "proibicao", rotulo: "Proibir rankings e perfis; previsão só para apoiar",
          caput: "É vedado usar, {ALCANCE}, pontuação ou ranking de comportamento de estudantes, perfil comportamental ou psicológico para classificar ou restringir oportunidades, e separação de estudantes em turmas com base em inferência automatizada sobre capacidade ou comportamento.",
          paragrafos: ["Ferramenta que estime risco de evasão ou de baixo desempenho só poderá ser usada para oferecer apoio ao estudante, com avaliação prévia de impacto, conferência por profissional da educação e comunicação à família, e nunca para sanção, retenção ou exclusão."],
          ficha: { conteudo: "não ranquear nem perfilar alunos; previsão só para apoio", condicao: "—", destinatario: "{CHEFIA}, direção e professores",
                   ocasiao: "na adoção e no uso de ferramentas", meio: "autoridade" } } ] },

    /* ---------- proteção dos estudantes e de seus dados ---------- */
    { id: "dados_estudantes", cap: "dados", titulo: "Dados, imagem e voz dos estudantes", cobre: ["dados"], base: "Res. CNE/CP 1/2026, art. 10, § 2º; Lei nº 13.709/2018 (LGPD), art. 14", casos: [], instancias: "todas",
      variantes: [
        { tipo: "proibicao", rotulo: "Proibir fora de ferramenta autorizada",
          caput: "É vedado inserir em ferramenta de inteligência artificial nome, foto, voz ou outro dado que identifique estudante, salvo em ferramenta contratada ou autorizada pela {CHEFIA} para essa finalidade, com garantia de proteção de dados, apenas os dados estritamente necessários e finalidade pedagógica informada às famílias.",
          paragrafos: ["O tratamento de dados de crianças observará o seu melhor interesse e, quando a Lei nº 13.709/2018 o exigir, o consentimento específico de um dos pais ou do responsável legal."],
          ficha: { conteudo: "não inserir dados de alunos fora de ferramenta autorizada", condicao: "sem contrato ou autorização e sem aviso às famílias",
                   destinatario: "professores, funcionários e direção", ocasiao: "a cada uso", meio: "autoridade" } } ] },

    { id: "treinamento", cap: "dados", titulo: "Treinar IA com o que os alunos produzem", cobre: ["dados"], base: "Res. CNE/CP 1/2026, arts. 15, parágrafo único, e 41, XI", casos: [], instancias: "todas",
      variantes: [
        { tipo: "proibicao", rotulo: "Proibir sempre",
          caput: "É vedado ceder ou permitir que fornecedor use redações, atividades, imagens, voz ou outros conteúdos produzidos pelos estudantes para treinar modelos de inteligência artificial, ainda que haja autorização.",
          paragrafos: ["Conteúdos produzidos pelos professores só serão cedidos para treinamento com autorização específica do autor."],
          ficha: { conteudo: "não ceder produções dos alunos para treinar IA", condicao: "—", destinatario: "{CHEFIA} e direção",
                   ocasiao: "na contratação e durante o uso", meio: "autoridade" } },
        { tipo: "permissao", rotulo: "Permitir com autorização dos pais", risco: "treino",
          caput: "Conteúdos produzidos pelos estudantes poderão ser usados pelo fornecedor da plataforma para treinar seus modelos, mediante autorização dos responsáveis.",
          ficha: { conteudo: "ceder produções para treinar IA", condicao: "autorização dos responsáveis", destinatario: "direção", ocasiao: "na contratação", meio: "autoridade" } } ] },

    { id: "publicidade", cap: "dados", titulo: "Propaganda e uso comercial dos dados", cobre: ["dados"], base: "Res. CNE/CP 1/2026, arts. 16, 24 e 41, VII", casos: [], instancias: "todas",
      variantes: [
        { tipo: "proibicao", rotulo: "Proibir, mesmo se a ferramenta for grátis",
          caput: "É vedado adotar, {ALCANCE}, ferramenta de inteligência artificial que exiba publicidade aos estudantes, trace perfil para fins comerciais ou explore comercialmente seus dados, ainda que oferecida gratuitamente.",
          ficha: { conteudo: "não adotar ferramenta com propaganda ou uso comercial de dados", condicao: "—", destinatario: "{CHEFIA} e direção",
                   ocasiao: "na adoção e durante o uso", meio: "autoridade" } } ] },

    { id: "vigilancia", cap: "dados", titulo: "Câmeras, reconhecimento facial e emoções", cobre: ["dados", "supervisao"], base: "Res. CNE/CP 1/2026, arts. 40, § 1º, II, e 41, II e VI, e §§ 1º e 2º", casos: [], instancias: "todas",
      variantes: [
        { tipo: "proibicao", rotulo: "Proibir, salvo identificação pontual",
          caput: "É vedado usar, {ALCANCE}, ferramenta que reconheça ou infira emoções ou atenção de estudantes e profissionais da educação, ou que faça vigilância biométrica contínua ou monitoramento permanente dos estudantes.",
          paragrafos: ["A verificação pontual de identidade só será adotada se estritamente necessária, com justificativa registrada, informada antes às famílias e com alternativa que não use biometria, e não servirá para controle de frequência nem para rastreamento.",
                       "A vedação de reconhecimento de emoções não alcança a tecnologia assistiva usada só para acessibilidade, com consentimento do estudante ou de seus responsáveis, vedado o uso do resultado para avaliar, punir ou selecionar."],
          ficha: { conteudo: "não usar reconhecimento de emoções nem vigilância contínua", condicao: "—", destinatario: "{CHEFIA}, direção e professores",
                   ocasiao: "em cada atividade e prova", meio: "autoridade" } } ] },

    { id: "deepfake", cap: "dados", titulo: "Montagens falsas (deepfakes) e violência digital", cobre: ["dados"], base: "Res. CNE/CP 1/2026, art. 10, § 2º; Lei nº 8.069/1990 (ECA), art. 13", casos: [], instancias: "todas",
      variantes: [
        { tipo: "proibicao", rotulo: "Proibir e garantir acolhimento",
          caput: "É vedado criar ou divulgar, com inteligência artificial, imagem, voz ou texto falso que atribua a estudante, professor ou funcionário algo que não disse ou fez.",
          paragrafos: ["A Direção da Escola, ao saber do fato, acolherá a vítima, adotará medidas para cessar a circulação do conteúdo, preservará as provas sem reproduzi-lo e comunicará os responsáveis pelos estudantes envolvidos de modo que não exponha a vítima.",
                       "Havendo suspeita de violência contra criança ou adolescente, a Direção da Escola comunicará o fato ao Conselho Tutelar, sem aguardar confirmação."],
          ficha: { conteudo: "não criar nem divulgar falsificações; acolher e comunicar", condicao: "—",
                   destinatario: "estudantes, professores e funcionários (proíbe); direção da escola (acolhe e comunica)", ocasiao: "a cada caso", meio: "autoridade e organização" } } ] },

    /* ---------- famílias ---------- */
    { id: "informar_familias", cap: "familias", titulo: "Informar as famílias", cobre: ["familias"], base: "Res. CNE/CP 1/2026, arts. 13 e 22, § 4º", casos: [], instancias: "todas",
      variantes: [
        { tipo: "obrigacao", rotulo: "Obrigar a informar por escrito",
          caput: "{A_ESCOLA_M} informará às famílias ou aos responsáveis, no início do ano letivo e antes de adotar nova ferramenta, quais ferramentas de inteligência artificial usa com os estudantes, para quê, em que etapas e que dados dos estudantes elas tratam.",
          paragrafos: ["A informação será dada por escrito, em linguagem simples, e ficará disponível na secretaria da escola."],
          ficha: { conteudo: "informar às famílias ferramentas, finalidade, etapas e dados", condicao: "—", destinatario: "direção da escola (informa); famílias (recebem a informação)",
                   ocasiao: "no início do ano letivo e antes de nova ferramenta", meio: "nodalidade" } },
        { tipo: "obrigacao", rotulo: "Informar \"sempre que possível\"", risco: "vaga",
          caput: "As famílias deverão ser informadas sobre o uso de inteligência artificial sempre que possível.",
          ficha: { conteudo: "informar as famílias", condicao: "\"sempre que possível\"", destinatario: "não identificado", ocasiao: "—", meio: "nodalidade" } } ] },

    { id: "familias_voz", cap: "familias", titulo: "Famílias e estudantes na decisão", cobre: ["familias"], base: "Res. CNE/CP 1/2026, arts. 6º e 13", casos: [], instancias: "todas",
      variantes: [
        { tipo: "direito", rotulo: "Garantir participação e resposta",
          caput: "A adoção de ferramenta de inteligência artificial que será usada pelos estudantes será discutida previamente no conselho escolar, com representantes das famílias, dos estudantes e dos professores.",
          paragrafos: ["A família poderá apresentar à Direção da Escola dúvida ou objeção ao uso de ferramenta com seu filho e receberá resposta por escrito em até dez dias úteis."],
          ficha: { conteudo: "discutir a adoção no conselho escolar; responder às famílias", condicao: "ferramenta usada pelos estudantes",
                   destinatario: "direção da escola e conselho escolar (atendem); famílias (titulares)", ocasiao: "antes de cada adoção; dez dias úteis para responder", meio: "organização" } } ] },

    /* ---------- adoção e contratos ---------- */
    { id: "adocao", cap: "adocao", titulo: "Antes de adotar uma ferramenta", cobre: ["supervisao"], base: "Res. CNE/CP 1/2026, arts. 6º, 7º, 12, § 1º, e 36 a 40", casos: [], instancias: "todas",
      variantes: [
        { tipo: "obrigacao", rotulo: "Registrar a decisão por escrito",
          caput: "Antes de adotar ferramenta de inteligência artificial para uso com estudantes, {CHEFIA} registrará por escrito:",
          incisos: ["a finalidade pedagógica e as etapas em que será usada;", "o nível de risco, segundo os arts. 37 a 41 da Resolução CNE/CP nº 1/2026;",
                    "a adequação à idade dos estudantes;", "os dados tratados e as garantias de proteção oferecidas pelo fornecedor;",
                    "as evidências de que a ferramenta funciona ou, na falta delas, como e quando seus resultados serão avaliados."],
          paragrafos: ["Ferramenta de alto risco só será adotada com avaliação prévia de impacto e supervisão humana documentada."],
          ficha: { conteudo: "registrar finalidade, risco, idade, dados e evidências", condicao: "ferramenta para uso com estudantes",
                   destinatario: "{CHEFIA}", ocasiao: "antes de cada adoção", meio: "organização" } } ] },

    { id: "contratos", cap: "adocao", titulo: "Contratos com fornecedores", cobre: ["dados"], base: "Res. CNE/CP 1/2026, arts. 5º, 15 e 16", casos: [], instancias: "todas",
      variantes: [
        { tipo: "obrigacao", rotulo: "Exigir cláusulas mínimas",
          caput: "Os contratos e termos de adesão a ferramentas de inteligência artificial firmados {ALCANCE} conterão cláusulas que:",
          incisos: ["proíbam o uso dos dados e das produções dos estudantes para treinar modelos, para publicidade ou para qualquer fim comercial;",
                    "garantam a exclusão dos dados ao fim do contrato;", "obriguem o fornecedor a informar falhas e incidentes de segurança;",
                    "permitam auditoria e acompanhamento pela {CHEFIA}."],
          ficha: { conteudo: "incluir cláusulas de proteção nos contratos", condicao: "contrato ou adesão a ferramenta de IA", destinatario: "{CHEFIA}",
                   ocasiao: "em cada contratação", meio: "autoridade e tesouro" } } ] },

    /* ---------- formação e acompanhamento ---------- */
    { id: "formacao", cap: "formacao", titulo: "Formação dos profissionais", cobre: ["supervisao"], base: "Res. CNE/CP 1/2026, arts. 11 e 12, § 4º", casos: [], instancias: "todas",
      variantes: [
        { tipo: "obrigacao", rotulo: "Obrigar a oferecer",
          caput: "A {CHEFIA} oferecerá aos professores e funcionários, ao menos uma vez por ano, em horário de trabalho e antes da adoção de nova ferramenta, formação sobre uso pedagógico de inteligência artificial, proteção de dados de crianças e adolescentes, mediação crítica e identificação de vieses.",
          ficha: { conteudo: "oferecer formação anual em horário de trabalho", condicao: "—", destinatario: "{CHEFIA}", ocasiao: "uma vez por ano", meio: "organização" } },
        { tipo: "recomendacao", rotulo: "Só recomendar",
          caput: "Recomenda-se que a {CHEFIA} promova atividades de formação sobre uso de inteligência artificial.",
          ficha: { conteudo: "promover formação", condicao: "—", destinatario: "{CHEFIA}", ocasiao: "—", meio: "nodalidade" } } ] },

    { id: "acompanhamento", cap: "governanca", titulo: "Quem acompanha a norma", cobre: [], base: "Res. CNE/CP 1/2026, art. 12", casos: [], instancias: "todas",
      variantes: [
        { tipo: "competencia", rotulo: "Atribuir a quem acompanha",
          caput: "Compete à {CHEFIA}:",
          incisos: ["manter registro das ferramentas de inteligência artificial em uso, com finalidade e nível de risco;",
                    "receber e responder, por escrito, dúvidas e reclamações de estudantes, famílias e profissionais;", "propor a revisão desta norma."],
          ficha: { conteudo: "registrar ferramentas, responder dúvidas e propor revisão", condicao: "—", destinatario: "{CHEFIA}", ocasiao: "continuamente", meio: "organização" } } ] },

    /* ---------- consequências ---------- */
    { id: "consequencias", cap: "consequencias", titulo: "O que acontece no descumprimento", cobre: [], base: "Res. CNE/CP 1/2026, art. 41, X; Lei nº 8.069/1990 (ECA)", casos: [], instancias: "todas",
      variantes: [
        { tipo: "consequencia", rotulo: "Medida pedagógica e regimento",
          caput: "O descumprimento desta norma por estudante será examinado pela Direção da Escola, ouvidos o estudante e sua família, e poderá resultar em:",
          incisos: ["refazer a atividade, com acompanhamento do professor, quando a falha for de informação ou de conferência;",
                    "medidas previstas no regimento escolar, nos demais casos, observado o Estatuto da Criança e do Adolescente."],
          paragrafos: ["Nenhuma medida será aplicada por uso que não tenha sido vedado ao estudante com antecedência, nem ao grupo inteiro pela conduta de um de seus integrantes.",
                       "O descumprimento por profissional da educação ou funcionário será tratado pela {CHEFIA}, nos termos do regime que lhe for aplicável."],
          ficha: { conteudo: "examinar, ouvir e aplicar medida pedagógica ou do regimento", condicao: "descumprimento desta norma",
                   destinatario: "direção da escola (apura); estudante e família (ouvidos)", ocasiao: "a cada caso", meio: "autoridade", consequencia: "refazer a atividade ou medida do regimento" } },
        { tipo: "consequencia", rotulo: "Nota zero e advertência por \"uso inadequado\"", risco: "vaga",
          caput: "O uso inadequado de inteligência artificial pelo aluno acarretará nota zero e advertência.",
          ficha: { conteudo: "dar nota zero e advertir", condicao: "\"uso inadequado\"", destinatario: "não identificado", ocasiao: "—", meio: "autoridade", consequencia: "nota zero e advertência" } } ] },

    { id: "consequencias_medio", cap: "consequencias", titulo: "Se o estudante do Ensino Médio descumprir", cobre: [], base: "Res. CNE/CP 1/2026, arts. 10, § 1º, 20, VII, e 41, X; Lei nº 8.069/1990 (ECA), arts. 53, III, e 100; regimento escolar",
      casos: [], instancias: "todas",
      variantes: [
        { tipo: "consequencia", rotulo: "Medidas graduais, pedagógicas primeiro",
          caput: "O estudante do Ensino Médio que usar inteligência artificial em atividade em que o uso não era permitido, ou que deixar de informar o uso quando exigido, estará sujeito, apurado o fato nos termos desta norma e conforme a gravidade e a repetição, a:",
          incisos: ["orientação pelo professor e nova entrega da atividade, com acompanhamento, valendo a nova nota;",
                    "na repetição, nova avaliação da atividade feita em sala, sem uso da ferramenta;",
                    "nos casos graves, como apresentar como próprio um trabalho inteiro produzido pela ferramenta, nota zero naquela atividade e as medidas previstas no regimento escolar, com comunicação à família."],
          paragrafos: ["Nenhuma medida será aplicada com base exclusiva em resultado de detector, que vale só como indício, nem por uso que não tenha sido vedado com antecedência.",
                       "As medidas têm caráter pedagógico, observam o Estatuto da Criança e do Adolescente e garantem ao estudante o direito de contestar a decisão perante a Direção da Escola."],
          ficha: { conteudo: "aplicar medidas graduais: refazer, reavaliar em sala, regimento nos casos graves", condicao: "uso não permitido ou não informado, apurado",
                   destinatario: "estudantes do Ensino Médio (afetados); professor e Direção da Escola (apuram)", ocasiao: "a cada caso, conforme a gravidade e a repetição",
                   meio: "autoridade", consequencia: "nova entrega; reavaliação em sala; nota zero na atividade e regimento escolar" } },
        { tipo: "consequencia", rotulo: "Nota zero e suspensão por \"uso indevido\" (erro comum)", risco: "vaga",
          caput: "O aluno do Ensino Médio que fizer uso indevido de inteligência artificial receberá nota zero e será suspenso por três dias.",
          ficha: { conteudo: "dar nota zero e suspender", condicao: "\"uso indevido\"", destinatario: "aluno do Ensino Médio", ocasiao: "—", meio: "autoridade", consequencia: "nota zero e suspensão" } } ] },

    { id: "consequencias_docentes", cap: "consequencias", titulo: "Se o professor ou o gestor descumprir", cobre: ["supervisao"], base: "Res. CNE/CP 1/2026, arts. 14, 40, § 3º, e 41; CF, art. 5º, LV; estatuto do magistério ou dos servidores; CLT",
      casos: [], instancias: "todas",
      variantes: [
        { tipo: "consequencia", rotulo: "Desfazer o ato e remeter ao regime disciplinar",
          caput: "Quando o descumprimento desta norma for de professor, coordenador ou gestor:",
          incisos: ["a nota, o relatório ou a decisão produzidos em desacordo com esta norma não produzirão efeito e serão refeitos por pessoa designada pela {CHEFIA}, a pedido do estudante, da família ou de ofício;",
                    "a {CHEFIA} dará ciência do fato ao responsável e registrará a correção;",
                    "havendo indício de infração funcional, inclusive reincidência, a {CHEFIA} comunicará o fato à autoridade competente para apuração nos termos do estatuto do magistério, do estatuto dos servidores ou do contrato de trabalho, assegurados o contraditório e a ampla defesa."],
          paragrafos: ["Esta norma não cria sanção disciplinar: as penalidades dos profissionais da educação são as previstas na lei ou no contrato de trabalho que rege cada vínculo."],
          ficha: { conteudo: "desfazer o ato irregular, registrar e encaminhar ao regime disciplinar", condicao: "descumprimento por professor, coordenador ou gestor",
                   destinatario: "{CHEFIA} (apura e encaminha); professores, coordenadores e gestores (afetados)", ocasiao: "a cada caso", meio: "autoridade e organização",
                   consequencia: "ato sem efeito e refeito por pessoa; remessa ao regime disciplinar" } },
        { tipo: "consequencia", rotulo: "Punir o professor diretamente (erro comum)", risco: "sancao_servidor",
          caput: "O professor que descumprir esta norma será punido com advertência e, na reincidência, com suspensão de suas atividades por trinta dias.",
          ficha: { conteudo: "advertir e suspender", condicao: "descumprimento pelo professor", destinatario: "professor", ocasiao: "—", meio: "autoridade", consequencia: "advertência e suspensão" } } ] },

    { id: "apuracao", cap: "consequencias", titulo: "Como se apura (inclusive acusação por detector)", cobre: ["familias"], base: "Res. CNE/CP 1/2026, arts. 40, § 3º, e 41, X", casos: [], instancias: "todas",
      variantes: [
        { tipo: "competencia", rotulo: "Definir o procedimento",
          caput: "Havendo indício de descumprimento desta norma por estudante, inclusive resultado de detector, a Direção da Escola:",
          incisos: ["informará o estudante e sua família e lhes dará acesso às evidências;",
                    "ouvirá o estudante, que poderá estar acompanhado de seu responsável, em até dez dias úteis;",
                    "decidirá de forma motivada, indicando a regra aplicada, as evidências consideradas e a resposta à explicação do estudante."],
          ficha: { conteudo: "informar, ouvir e decidir motivadamente", condicao: "indício de descumprimento",
                   destinatario: "direção da escola (apura); estudante e família (manifestam-se)", ocasiao: "a cada caso, nos prazos", meio: "autoridade e organização" } } ] }
  ],

  diagnostico: [
    { id: "problema", p: "Qual é o problema que a norma quer resolver?", ex: "Alunos do 6º ao 9º ano usam chatbots nas tarefas sem regra, e cada professor decide de um jeito." },
    { id: "objetivo", p: "O que se pretende alcançar?", ex: "Uso mediado e adequado à idade, famílias informadas e dados dos alunos protegidos." },
    { id: "seNada", p: "O que acontece se nada for feito?", ex: "Punições baseadas em detector, exposição de dados de crianças e conflitos com as famílias." },
    { id: "publico", p: "Quem é alcançado e quantos casos há?", ex: "Cerca de 600 estudantes, 40 professores, 15 funcionários e as famílias." }
  ],

  /* Textos das telas e da minuta próprios desta trilha. */
  textos: {
    objeto: "nas atividades pedagógicas, na avaliação e na gestão escolar",
    revisaoMotivo: "das normas do sistema de ensino ou das diretrizes nacionais",
    politica: "e as normas do sistema de ensino",
    preambuloRef: "nos arts. 17 a 24 e 46 da Resolução CNE/CP nº 1, de 11 de novembro de 2026",
    alcancePadraoAmplo: "no âmbito desta rede de ensino",
    alcancePadrao: "no âmbito desta escola",
    fundamentoVazio: "[indicar a lei do sistema de ensino ou o artigo do regimento que dá a competência]",
    semFundamento: "Indique, no preâmbulo, a lei do sistema de ensino ou o artigo do regimento escolar que dá competência à instância.",
    quemLicao: "<b>Competência.</b> Cada instância só pode mandar no que é seu, e cada ato obedece aos de cima: Constituição, leis (LDB, ECA, LGPD), Resolução CNE/CP nº 1/2026, normas do conselho de educação do seu sistema (municipal ou estadual), atos da secretaria, regimento escolar e projeto político-pedagógico, normas internas da escola e, por fim, o plano de aula.",
    rotInstituicao: "Rede ou escola",
    esferaMsg: "O Decreto nº 12.002/2024 obriga só a administração federal. Para escolas e redes estaduais, municipais ou privadas, siga as regras de redação do seu estado ou município e use o decreto como boa prática.",
    esferaConserto: "Nada a consertar. Só confira as regras de redação do seu estado ou município, ou do regimento da escola.",
    exInstituicao: "Rede Municipal de Ensino de Exemplo",
    exChefia: "a Direção da Escola",
    exFundamento: "o art. 8º, inciso III, da Lei Municipal nº 0.000/2010, que organiza o Sistema Municipal de Ensino",
    exNormaSuperior: "Resolução CME nº 00/2026, que fixa normas sobre o uso de IA nas escolas do sistema",
    pisoLicao: "<b>Obedecer não é copiar.</b> A Resolução CNE/CP nº 1/2026 dedica à educação básica os arts. 17 a 24: proteção integral de crianças e adolescentes, uso adequado à idade e regras para cada etapa. Ela fixa o que é vedado e o que é obrigatório; o resto é decisão do sistema de ensino e da escola. Prazo de adequação: 12 meses a partir de 12/11/2026 (art. 46). As vedações do art. 41 valem desde já.",
    pisoNota: "O art. 1º da minuta já remete à Resolução. Na revisão (passo 7), o app confere se você tratou o uso por etapa, a comunicação às famílias, os dados dos estudantes, a supervisão humana e o ensino sobre IA, e se nada choca com as vedações.",
    pisoConserto: "No passo 5, inclua os temas que cobrem o que falta: as quatro etapas (uso por etapa), \"Informar as famílias\", \"Dados, imagem e voz dos estudantes\", \"Correção de redações e provas\" (supervisão humana) e \"Ensinar sobre IA no currículo\".",
    publicoConserto: "No passo 5, os temas \"Uso pelos professores no planejamento\", \"Informar as famílias\", \"Famílias e estudantes na decisão\" e \"Dados, imagem e voz dos estudantes\" dirigem-se a públicos diferentes do estudante. Ou desmarque o público no passo 1, se a norma não for para ele.",
    signatarios: { csistema: "Presidente do Conselho Municipal de Educação", secretaria: "Secretária Municipal de Educação", escola: "Presidente do Conselho Escolar", direcao: "Diretora da Escola" },
    livrePlaceholder: "Exemplo (só para ver, não entra na minuta): A coordenação pedagógica registrará, a cada bimestre, as atividades com uso de inteligência artificial realizadas em cada turma.",
    livreDestEx: "coordenação pedagógica", livreOcasiaoEx: "a cada bimestre",
    exLivre: { texto: "A coordenação pedagógica registrará, a cada bimestre, as atividades com uso de inteligência artificial realizadas em cada turma e as apresentará ao conselho escolar.",
               tipo: "obrigacao", cap: "governanca", destinatario: "coordenação pedagógica", ocasiao: "a cada bimestre" },
    exLivreRuim: { texto: "Os alunos deverão evitar o uso inadequado de inteligência artificial, sempre que possível.", tipo: "obrigacao", cap: "usos", destinatario: "", ocasiao: "" },
    modeloLivre: { texto: "O professor que usar ferramenta de inteligência artificial para elaborar atividade informará à turma, no enunciado, que a atividade foi preparada com esse apoio.",
                   destinatario: "professor", ocasiao: "em cada atividade elaborada com IA", rotulo: "sobre o aviso do professor à turma" },
    demo: { instancia: "escola", esfera: "estadual", orgao: "Conselho Escolar da Escola Municipal Exemplo", instituicao: "Escola Municipal Exemplo",
            chefia: "a Direção da Escola", fundamento: "o art. 15, inciso II, do Regimento Escolar",
            normaSuperior: "Resolução CME nº 00/2026, que fixa normas sobre o uso de IA nas escolas do sistema",
            signatario: "Fulana de Tal — Presidente do Conselho Escolar",
            selecoes: { infantil: 0, iniciais: 0, finais: 0, medio: 0, letramento: 0, professor_uso: 0, substituicao: 0, regras_atividade: 0, trabalhos: 0, acesso: 0,
                        correcao: 0, detector: 1, decisoes: 0, perfis: 0, dados_estudantes: 0, treinamento: 0, publicidade: 0, vigilancia: 0, deepfake: 0,
                        informar_familias: 0, familias_voz: 0, adocao: 0, formacao: 0, acompanhamento: 0, consequencias: 0, apuracao: 0 } }
  },

  /* Marcadores próprios desta trilha. */
  marcadores: {
    A_ESCOLA: (est, inst) => inst.amplo ? "cada escola" : "a escola",
    A_ESCOLA_M: (est, inst) => inst.amplo ? "Cada escola" : "A escola"
  }
};
