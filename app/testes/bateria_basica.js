/* Bateria congelada da trilha "Educação básica / instituição" v1 (26/11/2026). O hash SHA-256 deste arquivo vai para HASH_basica.txt ANTES da primeira rodada.
   Cada caso: estado; o que a revisão deve acusar (tem) ou não (naoTem); trechos que a minuta deve conter ou não. */
const BB = { instancia: "escola", esfera: "federal", orgao: "Conselho Escolar da Escola Municipal Exemplo", instituicao: "Escola Municipal Exemplo",
  chefia: "a Direção da Escola", fundamento: "o art. 15, inciso II, do Regimento Escolar", modo: "regular", revisaoAnos: 2, vigenciaDias: 0,
  selecoes: {}, livre: { texto: "" }, diagnostico: {}, publicos: [] };
const SB = (o) => Object.assign(JSON.parse(JSON.stringify(BB)), o);
const BOAS = {};
for (const d of window.TRILHAS.basica.dispositivos) { const i = d.variantes.findIndex(v => !v.risco); if (i >= 0) BOAS[d.id] = i; }
const com = (o) => Object.assign({}, BOAS, o);
window.BATERIA_BASICA = [
  { nome: "01 escola com escolhas boas: sem erros", e: SB({ selecoes: com({}) }), semNivel: "erro",
    contem: ["RESOLUÇÃO Nº", "O CONSELHO ESCOLAR DA ESCOLA MUNICIPAL EXEMPLO, no uso", "arts. 17 a 24 e 46 da Resolução CNE/CP nº 1", "no âmbito da Escola Municipal Exemplo",
             "Compete à Direção da Escola:", "A escola incluirá", "RESOLVE:", "Educação Infantil"],
    naoContem: ["{", "dissertação", "art. 27 da Resolução", "DA ESCOLA MUNICIPAL EXEMPLO DA ESCOLA", "a a "] },
  { nome: "02 norma vazia", e: SB({}), tem: ["VAZIA"] },
  { nome: "03 Educação Infantil com mediação é vedada", e: SB({ selecoes: { infantil: 1 } }), tem: ["VEDADO_ETAPA"], nivel: { VEDADO_ETAPA: "erro" } },
  { nome: "04 anos iniciais: conversa com IA generativa é vedada", e: SB({ selecoes: { iniciais: 1 } }), tem: ["VEDADO_ETAPA"] },
  { nome: "05 anos finais: uso livre é vedado", e: SB({ selecoes: { finais: 1 } }), tem: ["VEDADO_ETAPA"] },
  { nome: "06 anos finais mediados passam", e: SB({ selecoes: { finais: 0 } }), naoTem: ["VEDADO_ETAPA"] },
  { nome: "07 treino com autorização dos pais é vedado", e: SB({ selecoes: { treinamento: 1 } }), tem: ["VEDADO_15"] },
  { nome: "08 nota zero por detector é vedada", e: SB({ selecoes: { detector: 1 } }), tem: ["VEDADO_41_X"] },
  { nome: "09 plataforma dando nota de redação é vedada", e: SB({ selecoes: { correcao: 1 } }), tem: ["VEDADO_41_IX"] },
  { nome: "10 proibir toda IA: um aviso só, o da trilha", e: SB({ selecoes: { proibir_tudo: 0 } }), tem: ["PROIBICAO_TOTAL"], naoTem: ["PROIBICAO_GENERICA"] },
  { nome: "11 informar famílias \"sempre que possível\"", e: SB({ selecoes: { informar_familias: 1 } }), tem: ["TERMO_VAGO", "SEM_DESTINATARIO"] },
  { nome: "12 recomendação com pena", e: SB({ selecoes: { trabalhos: 2 } }), tem: ["RECOMENDACAO_COM_PENA"] },
  { nome: "13 consequência por \"uso inadequado\"", e: SB({ selecoes: { consequencias: 1 } }), tem: ["TERMO_VAGO", "SEM_DESTINATARIO", "SEM_APURACAO"] },
  { nome: "14 detector só indício + nota zero sem apuração = conflito", e: SB({ selecoes: { detector: 0, consequencias: 1 } }), tem: ["CONFLITO_PROVA"] },
  { nome: "15 secretaria sem regras por etapa: problema", e: SB({ instancia: "secretaria", orgao: "Secretaria Municipal de Educação de Exemplo", instituicao: "Rede Municipal de Ensino de Exemplo", chefia: "", selecoes: { letramento: 0 } }),
    tem: ["PISO_BASICA"], nivel: { PISO_BASICA: "erro" } },
  { nome: "16 escola sem regras por etapa: só dica", e: SB({ selecoes: { letramento: 0 } }), tem: ["PISO_BASICA"], nivel: { PISO_BASICA: "dica" } },
  { nome: "17 secretaria: portaria, rede e \"cada escola\"", e: SB({ instancia: "secretaria", orgao: "Secretaria Municipal de Educação de Exemplo", instituicao: "Rede Municipal de Ensino de Exemplo", chefia: "", selecoes: com({}) }),
    semNivel: "erro", contem: ["PORTARIA Nº", "A SECRETARIA MUNICIPAL DE EDUCAÇÃO DE EXEMPLO, no uso", "no âmbito da Rede Municipal de Ensino de Exemplo", "Cada escola incluirá", "resolve:", "Compete à Secretaria de Educação:"] },
  { nome: "18 direção da escola: portaria com artigo feminino", e: SB({ instancia: "direcao", orgao: "Direção da Escola Estadual Exemplo", instituicao: "Escola Estadual Exemplo", selecoes: { infantil: 0 } }),
    contem: ["PORTARIA Nº", "A DIREÇÃO DA ESCOLA ESTADUAL EXEMPLO, no uso", "no âmbito da Escola Estadual Exemplo", "resolve:"], naoContem: ["O DIREÇÃO"] },
  { nome: "19 sem fundamento de competência", e: SB({ fundamento: "", selecoes: { infantil: 0 } }), tem: ["SEM_FUNDAMENTO"], contem: ["[indicar a lei do sistema de ensino"] },
  { nome: "20 escola estadual: dica sobre o decreto", e: SB({ esfera: "estadual", selecoes: { infantil: 0 } }), tem: ["ESFERA"] },
  { nome: "21 guia transforma obrigações em orientação", e: SB({ modo: "orientar", selecoes: { informar_familias: 0 } }), tem: ["GUIA_NAO_OBRIGA"], contem: ["GUIA DE USO", "Orienta-se que"], naoContem: ["RESOLVE:"] },
  { nome: "22 vigência em 30 dias, sem revogação genérica", e: SB({ vigenciaDias: 30, selecoes: com({}) }), contem: ["entra em vigor após decorridos 30 dias"], naoContem: ["revogam-se as disposições em contrário"] },
  { nome: "23 contrações com a chefia", e: SB({ selecoes: { contratos: 0, formacao: 0, acompanhamento: 0, decisoes: 0 } }),
    contem: ["pela Direção da Escola", "A Direção da Escola oferecerá", "Compete à Direção da Escola", "pedir à Direção da Escola"], naoContem: ["a a ", "pela a ", "à a "] },
  { nome: "24 família marcada e sem regra", e: SB({ publicos: ["familia"], selecoes: { infantil: 0 } }), tem: ["PUBLICO_SEM_REGRA"] },
  { nome: "25 família marcada e com regra", e: SB({ publicos: ["familia"], selecoes: { familias_voz: 0 } }), naoTem: ["PUBLICO_SEM_REGRA"] },
  { nome: "26 conselho de educação com escolhas boas", e: SB({ instancia: "csistema", orgao: "Conselho Municipal de Educação de Exemplo", instituicao: "", chefia: "", selecoes: com({}) }),
    semNivel: "erro", contem: ["O CONSELHO MUNICIPAL DE EDUCAÇÃO DE EXEMPLO, no uso", "RESOLVE:", "no âmbito desta rede de ensino"] },
  { nome: "27 nenhum texto da trilha superior vaza", e: SB({ selecoes: com({}) }), naoContem: ["discente", "orientador", "banca", "pós-graduação", "política institucional"] }
];
