/* Minuta, Mary! — trilha "Educação básica / sala de aula": as regras do professor para a sua turma, no plano de ensino. Versão 1, 26/11/2026.
   Fontes: Resolução CNE/CP nº 1/2026, arts. 8º, 10, 13, 14, 18, 20 a 23 e 41; Lei nº 8.069/1990 (ECA); Lei nº 13.709/2018 (LGPD).
   O professor regula a sua turma dentro do regimento escolar e das normas da escola e da rede: não cria sanção própria. */
window.TRILHAS = window.TRILHAS || {};
window.TRILHAS.basica_aula = {
  id: "basica_aula",

  instancias: [
    { id: "docente", nome: "Professor (regras da sua turma, no plano de ensino)", ato: "PLANO DE ENSINO", atoNome: "Plano de Ensino", colegiado: false,
      nomeOrgaoEx: "Turma do 7º ano B — Língua Portuguesa", sujeito: "",
      pode: ["Dizer, em cada atividade, se a IA é permitida e como", "Combinar com a turma como informar o uso", "Escolher, entre as ferramentas autorizadas pela escola, as que usará"],
      naoPode: ["Liberar o que a Resolução veda para a etapa da turma", "Punir com base em detector de IA", "Criar sanção fora do regimento escolar", "Exigir ferramenta paga ou conta pessoal do aluno"],
      nota: "O plano de ensino não é ato normativo, mas orienta e obriga a turma dentro do regimento escolar e das normas da escola e da rede.",
      chefia: "o professor responsável" }
  ],

  etapas: [
    { id: "infantil", nome: "Educação Infantil (creche e pré-escola)" },
    { id: "iniciais", nome: "Anos iniciais do Ensino Fundamental (1º ao 5º ano)" },
    { id: "finais", nome: "Anos finais do Ensino Fundamental (6º ao 9º ano)" },
    { id: "medio", nome: "Ensino Médio" }
  ],

  publicos: [
    { id: "estudante", nome: "Estudantes", re: /estudante|aluno|criança|turma/i },
    { id: "professor", nome: "Professor", re: /professor/i },
    { id: "familia", nome: "Famílias e responsáveis", re: /famíli|responsáve/i },
    { id: "coordenacao", nome: "Coordenação e direção", re: /coordena|direção/i }
  ],
  publicosPadrao: ["estudante", "professor", "familia"],

  piso: {
    obrigatorio: [
      { art: "art. 17", texto: "Proteção integral de crianças e adolescentes, uso adequado à idade e centralidade das interações humanas." },
      { art: "arts. 21 a 23", texto: "Cada etapa tem a sua regra. O plano da turma não pode ir além dela." },
      { art: "art. 13", texto: "O uso de IA nas aulas é comunicado com clareza aos estudantes e, quando couber, às famílias." },
      { art: "art. 14, § 2º", texto: "O professor que usa IA para preparar material informa e responde pelo conteúdo." },
      { art: "art. 18, V", texto: "Quem não tem internet ou aparelho tem alternativa." }
    ],
    vedado: [
      { art: "art. 21, § 1º", texto: "Na Educação Infantil, as crianças não usam nenhum sistema de IA, nem com mediação do professor." },
      { art: "art. 22, §§ 1º e 2º", texto: "Nos anos iniciais, nada de acesso direto ou sem supervisão, nem conversa com IA generativa, mesmo supervisionada." },
      { art: "art. 23, parágrafo único", texto: "Nos anos finais, nada de uso direto, autônomo ou sem supervisão de IA generativa." },
      { art: "art. 41, IX", texto: "Dar nota a redação ou texto do aluno só com IA, sem a leitura e a correção do professor." },
      { art: "art. 41, X", texto: "Punir com base só em detector de texto gerado por IA." },
      { art: "art. 14", texto: "Deixar a IA no lugar do professor." }
    ],
    principios: ["etapas", "familias", "dados", "supervisao"],
    principioNome: { etapas: "a regra da etapa da turma", familias: "o aviso às famílias", dados: "os dados dos alunos", supervisao: "a correção e a decisão pelo professor" },
    codigo: "PISO_BASICA", exige: [],
    fonte: "Res. CNE/CP 1/2026, arts. 13, 14 e 21 a 23",
    msgErro: "O plano precisa tratar de: ", msgDica: "Ainda não tratados: "
  },

  riscos: {
    infantil: { codigo: "VEDADO_ETAPA", nivel: "erro", msg: "Permite que crianças da Educação Infantil usem IA. A Resolução proíbe qualquer uso pelas crianças, mesmo com mediação.", fonte: "Res. CNE/CP 1/2026, art. 21, § 1º" },
    iniciais: { codigo: "VEDADO_ETAPA", nivel: "erro", msg: "Permite que alunos dos anos iniciais conversem com IA generativa. A Resolução proíbe, ainda que haja supervisão.", fonte: "Res. CNE/CP 1/2026, art. 22, § 2º" },
    finais: { codigo: "VEDADO_ETAPA", nivel: "erro", msg: "Permite uso livre de IA generativa nos anos finais. A Resolução só admite o uso em atividade mediada pelo professor.", fonte: "Res. CNE/CP 1/2026, art. 23" }
  },

  tipos: window.DADOS ? window.DADOS.tipos : null,

  capitulos: [
    { id: "turma", nome: "DO USO NA TURMA" },
    { id: "atividades", nome: "DAS ATIVIDADES E DA AVALIAÇÃO" },
    { id: "professor", nome: "DO USO PELO PROFESSOR" },
    { id: "familias", nome: "DAS FAMÍLIAS" },
    { id: "consequencias", nome: "DO DESCUMPRIMENTO" }
  ],

  dispositivos: [
    /* ---------- a regra da etapa ---------- */
    { id: "etapa_infantil", cap: "turma", etapas: ["infantil"], titulo: "A regra da Educação Infantil", cobre: ["etapas", "supervisao"], base: "Res. CNE/CP 1/2026, art. 21", casos: [], instancias: "todas",
      variantes: [
        { tipo: "proibicao", rotulo: "Nenhuma IA com as crianças",
          caput: "Nesta turma, as crianças não usarão nenhum sistema de inteligência artificial, de forma direta ou com mediação do professor.",
          paragrafos: ["O professor poderá usar inteligência artificial no planejamento, sem inserir dados que identifiquem as crianças."],
          ficha: { conteudo: "não pôr as crianças em contato com IA", condicao: "Educação Infantil", destinatario: "professor da turma", ocasiao: "em todas as atividades", meio: "autoridade" } },
        { tipo: "permissao", rotulo: "Usar com mediação", risco: "infantil",
          caput: "Nesta turma, as crianças poderão usar aplicativos de inteligência artificial em atividades mediadas pelo professor.",
          ficha: { conteudo: "usar aplicativos de IA com as crianças", condicao: "mediação do professor", destinatario: "professor da turma", ocasiao: "nas atividades", meio: "autoridade" } } ] },

    { id: "etapa_iniciais", cap: "turma", etapas: ["iniciais"], titulo: "A regra dos anos iniciais (1º ao 5º ano)", cobre: ["etapas", "supervisao"], base: "Res. CNE/CP 1/2026, art. 22", casos: [], instancias: "todas",
      variantes: [
        { tipo: "proibicao", rotulo: "Só atividade conduzida pelo professor, sem chat de IA",
          caput: "Nesta turma, recursos de inteligência artificial serão usados apenas em atividades conduzidas pelo professor, e os estudantes não usarão essas ferramentas sozinhos nem conversarão com assistentes de inteligência artificial generativa, mesmo com supervisão.",
          paragrafos: ["Recursos de acessibilidade para eliminar barreiras à aprendizagem continuam permitidos."],
          ficha: { conteudo: "usar IA só em atividade conduzida; nada de chat de IA com os alunos", condicao: "anos iniciais", destinatario: "professor da turma", ocasiao: "em cada atividade", meio: "autoridade" } },
        { tipo: "permissao", rotulo: "Deixar conversar com IA sob supervisão", risco: "iniciais",
          caput: "Nesta turma, os estudantes poderão conversar com assistentes de inteligência artificial generativa, sob supervisão do professor.",
          ficha: { conteudo: "conversar com IA generativa", condicao: "supervisão do professor", destinatario: "estudantes da turma", ocasiao: "nas atividades", meio: "autoridade" } } ] },

    { id: "etapa_finais", cap: "turma", etapas: ["finais"], titulo: "A regra dos anos finais (6º ao 9º ano)", cobre: ["etapas", "supervisao"], base: "Res. CNE/CP 1/2026, art. 23", casos: [], instancias: "todas",
      variantes: [
        { tipo: "permissao", rotulo: "IA generativa só em atividade mediada",
          caput: "Nesta turma, ferramentas de inteligência artificial generativa serão usadas apenas em atividades planejadas e mediadas pelo professor.",
          paragrafos: ["Não haverá tarefa de casa que exija o uso dessas ferramentas pelo estudante sozinho."],
          ficha: { conteudo: "usar IA generativa só em atividade mediada", condicao: "planejamento e mediação do professor", destinatario: "professor e estudantes da turma", ocasiao: "em cada atividade", meio: "autoridade" } },
        { tipo: "permissao", rotulo: "Liberar o uso nas tarefas", risco: "finais",
          caput: "Nesta turma, os estudantes poderão usar livremente ferramentas de inteligência artificial generativa nas tarefas.",
          ficha: { conteudo: "usar IA generativa nas tarefas", condicao: "—", destinatario: "estudantes da turma", ocasiao: "nas tarefas", meio: "autoridade" } } ] },

    { id: "etapa_medio", cap: "turma", etapas: ["medio"], titulo: "A regra do Ensino Médio", cobre: ["etapas"], base: "Res. CNE/CP 1/2026, arts. 10, § 1º, e 20, parágrafo único", casos: [], instancias: "todas",
      variantes: [
        { tipo: "permissao", rotulo: "Usar quando o professor autorizar",
          caput: "Nesta turma, os estudantes poderão usar ferramentas de inteligência artificial nas atividades em que o enunciado autorizar, informando o uso e conferindo o resultado.",
          ficha: { conteudo: "usar IA nas atividades autorizadas, informando e conferindo", condicao: "autorização no enunciado", destinatario: "estudantes da turma", ocasiao: "em cada atividade", meio: "autoridade" } },
        { tipo: "recomendacao", rotulo: "Só recomendar",
          caput: "Recomenda-se que os estudantes usem ferramentas de inteligência artificial como apoio ao estudo, conferindo as respostas em outras fontes, porque elas erram e inventam informações.",
          ficha: { conteudo: "usar IA como apoio e conferir", condicao: "—", destinatario: "estudantes da turma", ocasiao: "no estudo", meio: "nodalidade" } } ] },

    /* ---------- atividades e avaliação ---------- */
    { id: "aviso_atividade", cap: "atividades", titulo: "Avisar em cada atividade", cobre: ["supervisao"], base: "Res. CNE/CP 1/2026, art. 13", casos: [], instancias: "todas",
      variantes: [
        { tipo: "obrigacao", rotulo: "Dizer no enunciado",
          caput: "O enunciado de cada atividade avaliativa ou tarefa de casa dirá se o uso de inteligência artificial é permitido e em que condições.",
          paragrafos: ["Se o enunciado nada disser, o uso de inteligência artificial pelo estudante não é permitido naquela atividade."],
          ficha: { conteudo: "dizer no enunciado se a IA é permitida", condicao: "atividade avaliativa", destinatario: "professor da turma", ocasiao: "em cada atividade avaliativa", meio: "nodalidade e autoridade" } } ] },

    { id: "informar_uso", cap: "atividades", etapas: ["finais", "medio"], titulo: "O aluno conta como usou", cobre: [], base: "Res. CNE/CP 1/2026, arts. 10, § 1º, e 20, VII", casos: [], instancias: "todas",
      variantes: [
        { tipo: "obrigacao", rotulo: "Uma linha no fim do trabalho",
          caput: "Quando o uso for permitido, o estudante informará, em uma linha no fim do trabalho, a ferramenta usada e para que a usou.",
          paragrafos: ["O estudante responde pelo que entrega e não apresentará como seu o que a ferramenta produziu."],
          ficha: { conteudo: "informar ferramenta e finalidade", condicao: "uso permitido", destinatario: "estudantes da turma", ocasiao: "na entrega de cada trabalho", meio: "autoridade" } },
        { tipo: "obrigacao", rotulo: "Mandar evitar o \"uso indevido\"", risco: "vaga",
          caput: "Os alunos deverão evitar o uso indevido de inteligência artificial nos trabalhos.",
          ficha: { conteudo: "evitar o uso indevido", condicao: "\"uso indevido\"", destinatario: "não identificado", ocasiao: "—", meio: "autoridade" } },
        { tipo: "recomendacao", rotulo: "Recomendar e punir (erro comum)", risco: "recomendacaoComPena",
          caput: "Recomenda-se que os alunos não usem inteligência artificial nos trabalhos, sob pena de nota zero.",
          ficha: { conteudo: "não usar IA nos trabalhos", condicao: "—", destinatario: "alunos", ocasiao: "—", meio: "nodalidade", consequencia: "nota zero" } } ] },

    { id: "correcao", cap: "atividades", titulo: "Quem corrige é o professor", cobre: ["supervisao"], base: "Res. CNE/CP 1/2026, arts. 40, § 4º, e 41, IX", casos: [], instancias: "todas",
      variantes: [
        { tipo: "proibicao", rotulo: "O professor lê e decide a nota",
          caput: "Nenhuma redação ou trabalho escrito terá nota dada por ferramenta de inteligência artificial.",
          paragrafos: ["O professor poderá usar a ferramenta como apoio, mas lerá todo o trabalho e decidirá a nota, sem simplesmente confirmar a sugestão da ferramenta."],
          ficha: { conteudo: "não dar nota com IA", condicao: "trabalho escrito", destinatario: "professor da turma", ocasiao: "em cada correção", meio: "autoridade" } },
        { tipo: "permissao", rotulo: "Deixar a ferramenta dar a nota", risco: "art41ix",
          caput: "As redações da turma serão corrigidas e pontuadas por ferramenta de inteligência artificial.",
          ficha: { conteudo: "corrigir e dar nota com IA", condicao: "—", destinatario: "professor da turma", ocasiao: "em cada correção", meio: "autoridade" } } ] },

    { id: "detector", cap: "atividades", titulo: "Detector de texto feito por IA", cobre: ["supervisao"], base: "Res. CNE/CP 1/2026, arts. 40, § 1º, IX, e 41, X", casos: [], instancias: "todas",
      variantes: [
        { tipo: "proibicao", rotulo: "Detector é só indício; antes, conversa",
          caput: "O resultado de detector de texto gerado por inteligência artificial será apenas indício, e nenhuma medida será tomada com base exclusiva nele.",
          paragrafos: ["Antes de qualquer medida, o professor conversará com o estudante e ouvirá a sua explicação."],
          ficha: { conteudo: "não punir só com detector; ouvir antes", condicao: "uso de detector", destinatario: "professor da turma", ocasiao: "em cada suspeita", meio: "autoridade" } },
        { tipo: "consequencia", rotulo: "Nota zero se o detector acusar", risco: "art41x",
          caput: "Os trabalhos passarão por detector e, se ele acusar uso de inteligência artificial, receberão nota zero.",
          ficha: { conteudo: "dar nota zero", condicao: "detector acusar", destinatario: "estudante afetado", ocasiao: "em cada trabalho", meio: "autoridade", consequencia: "nota zero" } } ] },

    /* ---------- uso pelo professor ---------- */
    { id: "materiais", cap: "professor", titulo: "IA para preparar aulas e materiais", cobre: ["supervisao"], base: "Res. CNE/CP 1/2026, arts. 8º e 14, § 2º", casos: [], instancias: "todas",
      variantes: [
        { tipo: "obrigacao", rotulo: "Conferir e avisar a turma",
          caput: "O professor que usar inteligência artificial para preparar aulas, materiais ou atividades conferirá o conteúdo antes de usá-lo e informará à turma que o material foi preparado com esse apoio.",
          ficha: { conteudo: "conferir e avisar", condicao: "material preparado com IA", destinatario: "professor da turma", ocasiao: "a cada material", meio: "nodalidade e autoridade" } } ] },

    { id: "dados_alunos", cap: "professor", titulo: "Dados, fotos e trabalhos dos alunos", cobre: ["dados"], base: "Res. CNE/CP 1/2026, arts. 10, § 2º, e 15; Lei nº 13.709/2018, art. 14", casos: [], instancias: "todas",
      variantes: [
        { tipo: "proibicao", rotulo: "Nada que identifique o aluno",
          caput: "O professor não inserirá em ferramenta de inteligência artificial nome, foto, voz ou trabalho de estudante identificado, salvo em ferramenta autorizada pela escola.",
          ficha: { conteudo: "não inserir dados de alunos", condicao: "fora de ferramenta autorizada pela escola", destinatario: "professor da turma", ocasiao: "a cada uso", meio: "autoridade" } } ] },

    { id: "ferramentas", cap: "professor", titulo: "Que ferramentas a turma usa", cobre: ["dados"], base: "Res. CNE/CP 1/2026, arts. 16, 18, V, e 24", casos: [], instancias: "todas",
      variantes: [
        { tipo: "obrigacao", rotulo: "Só as autorizadas, sem custo nem conta",
          caput: "A turma usará apenas ferramentas de inteligência artificial autorizadas pela escola, compatíveis com a idade dos estudantes, sem propaganda, sem pagamento e sem exigir conta pessoal do estudante.",
          paragrafos: ["Quem não tiver aparelho ou internet fará a atividade na escola ou terá alternativa equivalente."],
          ficha: { conteudo: "usar só ferramentas autorizadas, gratuitas e sem conta pessoal; garantir alternativa", condicao: "—", destinatario: "professor da turma", ocasiao: "na escolha de cada ferramenta", meio: "autoridade" } } ] },

    /* ---------- famílias ---------- */
    { id: "avisar_familias", cap: "familias", titulo: "Avisar as famílias", cobre: ["familias"], base: "Res. CNE/CP 1/2026, arts. 13 e 22, § 4º", casos: [], instancias: "todas",
      variantes: [
        { tipo: "obrigacao", rotulo: "Mandar as regras por escrito",
          caput: "No início do período letivo, o professor enviará às famílias, por escrito, estas regras e a lista das ferramentas de inteligência artificial que usará com a turma.",
          paragrafos: ["As dúvidas das famílias serão respondidas pelo professor ou pela coordenação em até dez dias úteis."],
          ficha: { conteudo: "enviar as regras e a lista de ferramentas às famílias", condicao: "—", destinatario: "professor da turma (envia e responde); famílias (recebem e podem perguntar)", ocasiao: "no início do período letivo", meio: "nodalidade" } },
        { tipo: "obrigacao", rotulo: "Avisar \"sempre que possível\"", risco: "vaga",
          caput: "As famílias deverão ser avisadas sobre o uso de inteligência artificial sempre que possível.",
          ficha: { conteudo: "avisar as famílias", condicao: "\"sempre que possível\"", destinatario: "não identificado", ocasiao: "—", meio: "nodalidade" } } ] },

    { id: "aprender_ia", cap: "familias", etapas: ["iniciais", "finais", "medio"], titulo: "Aprender sobre IA", cobre: [], base: "Res. CNE/CP 1/2026, arts. 18, § 1º, e 20", casos: [], instancias: "todas",
      variantes: [
        { tipo: "obrigacao", rotulo: "Incluir atividades sobre IA",
          caput: "A turma terá, ao longo do período letivo, atividades sobre como a inteligência artificial funciona, seus erros e vieses e como verificar as informações que ela produz.",
          ficha: { conteudo: "ensinar sobre IA", condicao: "—", destinatario: "professor da turma", ocasiao: "ao longo do período letivo", meio: "organização" } } ] },

    /* ---------- descumprimento ---------- */
    { id: "consequencias", cap: "consequencias", titulo: "Se o aluno não cumprir", cobre: [], base: "Res. CNE/CP 1/2026, art. 41, X; regimento escolar", casos: [], instancias: "todas",
      variantes: [
        { tipo: "consequencia", rotulo: "Conversa, refazer e regimento",
          caput: "Se o estudante descumprir estas regras, o professor conversará com ele e poderá pedir que refaça a atividade com acompanhamento.",
          paragrafos: ["Ninguém será punido por uso que não tenha sido vedado com antecedência, nem o grupo inteiro pela conduta de um colega.",
                       "Casos graves serão levados à coordenação pedagógica, que os examinará nos termos do regimento escolar, ouvidos o estudante e a família."],
          ficha: { conteudo: "conversar, pedir para refazer, levar casos graves à coordenação", condicao: "descumprimento destas regras",
                   destinatario: "professor e coordenação (apuram); estudante (afetado)", ocasiao: "a cada caso", meio: "autoridade", consequencia: "refazer a atividade ou regimento escolar" } },
        { tipo: "consequencia", rotulo: "Nota zero por \"uso inadequado\"", risco: "vaga",
          caput: "O uso inadequado de inteligência artificial acarretará nota zero.",
          ficha: { conteudo: "dar nota zero", condicao: "\"uso inadequado\"", destinatario: "não identificado", ocasiao: "—", meio: "autoridade", consequencia: "nota zero" } } ] }
  ],

  diagnostico: [
    { id: "problema", p: "Qual é o problema que estas regras querem resolver?", ex: "Alunos entregam textos feitos no chatbot e não sabem o que podem usar." },
    { id: "objetivo", p: "O que você quer alcançar com a turma?", ex: "Que usem IA só quando eu pedir, contem como usaram e aprendam a conferir." },
    { id: "seNada", p: "O que acontece se nada for combinado?", ex: "Notas injustas, briga com as famílias e alunos que deixam de escrever." },
    { id: "publico", p: "Quem é alcançado?", ex: "Os 32 alunos do 7º ano B e as suas famílias." }
  ],

  textos: {
    objeto: "nas atividades",
    politica: "o regimento escolar e as normas da escola e da rede de ensino",
    alcancePadrao: "nesta turma",
    quemLicao: "<b>Competência.</b> O professor regula a sua turma, mas dentro das regras de cima: Constituição, leis (LDB, ECA, LGPD), Resolução CNE/CP nº 1/2026, normas do conselho de educação e da secretaria, regimento escolar e projeto político-pedagógico. As regras da turma podem ser mais exigentes, nunca mais permissivas, e não criam punição que o regimento não preveja.",
    rotInstituicao: "Escola", exInstituicao: "Escola Municipal Exemplo", exChefia: "o professor responsável",
    pisoLicao: "<b>Obedecer não é copiar.</b> Na educação básica, a Resolução CNE/CP nº 1/2026 dá uma regra para cada etapa (arts. 21 a 23) e veda, em qualquer turma, a nota dada só por IA e a punição baseada só em detector (art. 41). Dentro disso, cada professor decide com a sua turma.",
    pisoNota: "Na revisão (passo 7), o app confere se o plano tem a regra da etapa da turma, o aviso às famílias, a proteção dos dados dos alunos e a correção feita pelo professor.",
    pisoConserto: "No passo 5, inclua a regra da etapa da sua turma, \"Avisar as famílias\", \"Dados, fotos e trabalhos dos alunos\" e \"Quem corrige é o professor\".",
    publicoConserto: "No passo 5, os temas \"Avisar as famílias\" e \"Se o aluno não cumprir\" dirigem-se às famílias e à coordenação. Ou desmarque o público no passo 1.",
    signatarios: { docente: "Professora de Língua Portuguesa" },
    livrePlaceholder: "Exemplo (só para ver, não entra no plano): Nas atividades em grupo, cada grupo dirá ao professor, antes de começar, se pretende usar inteligência artificial e para quê.",
    livreDestEx: "estudantes da turma", livreOcasiaoEx: "antes de cada atividade em grupo",
    exLivre: { texto: "Nas atividades em grupo, cada grupo dirá ao professor, antes de começar, se pretende usar inteligência artificial e para quê.",
               tipo: "obrigacao", cap: "atividades", destinatario: "estudantes da turma", ocasiao: "antes de cada atividade em grupo" },
    exLivreRuim: { texto: "Os alunos deverão evitar o uso inadequado de inteligência artificial, sempre que possível.", tipo: "obrigacao", cap: "turma", destinatario: "", ocasiao: "" },
    modeloLivre: { texto: "Nas atividades em grupo, cada grupo dirá ao professor, antes de começar, se pretende usar inteligência artificial e para quê.",
                   destinatario: "estudantes da turma", ocasiao: "antes de cada atividade em grupo", rotulo: "sobre o combinado nas atividades em grupo" },
    esferaMsg: "O Decreto nº 12.002/2024 obriga só a administração federal. Para escolas estaduais, municipais ou privadas, use o decreto como boa prática.",
    esferaConserto: "Nada a consertar.",
    docentePena: "No plano de ensino, a consequência deve estar dentro do regimento escolar e das regras de avaliação da escola.",
    perguntaEtapa: "Etapa da turma",
    demoTema: "Detector de texto feito por IA",
    demo: { instancia: "docente", esfera: "estadual", etapa: "finais", orgao: "Turma do 7º ano B — Língua Portuguesa", instituicao: "Escola Municipal Exemplo",
            chefia: "o professor responsável", signatario: "Fulana de Tal — Professora de Língua Portuguesa", revisaoAnos: 1,
            selecoes: { etapa_finais: 0, aviso_atividade: 0, informar_uso: 0, correcao: 0, detector: 1, materiais: 0, dados_alunos: 0, ferramentas: 0, avisar_familias: 0, aprender_ia: 0, consequencias: 0 } }
  }
};
