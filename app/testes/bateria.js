/* Bateria congelada v1 (26/11/2026). O hash SHA-256 deste arquivo é gravado em HASH.txt ANTES da primeira rodada.
   Cada caso: estado de entrada; o que a revisão deve acusar (tem), não deve acusar (naoTem) e trechos que a minuta deve conter. */
const BASE = { instancia: "ppg", esfera: "federal", orgao: "Colegiado do Programa de Pós-Graduação em História",
  instituicao: "Universidade Federal de Exemplo", chefia: "a Coordenação do Programa", fundamento: "o art. 12 do Regimento",
  modo: "regular", revisaoAnos: 2, vigenciaDias: 0, selecoes: {}, livre: { texto: "" }, diagnostico: {} };
const S = (o) => Object.assign(JSON.parse(JSON.stringify(BASE)), o);
const BOA = { usos_apoio: 0, usos_reservados: 0, declaracao: 0, responsabilidade: 0, plano_ensino: 0, correcao: 0, detector: 0,
  bancas: 0, dados_sensiveis: 0, treinamento: 0, formacao: 0, acompanhamento: 0, revisao_humana: 0, consequencias: 0 };
window.BATERIA = [
  { nome: "01 PPG com escolhas boas: sem erros", e: S({ selecoes: BOA }), semNivel: "erro",
    contem: ["RESOLUÇÃO Nº", "Art. 1º", "Art. 10.", "Parágrafo único.", "RESOLVE:", "Resolução CNE/CP nº 1, de 11 de novembro de 2026", "entra em vigor na data de sua publicação", "Compete à Coordenação do Programa:"] },
  { nome: "02 norma vazia", e: S({}), tem: ["VAZIA"] },
  { nome: "03 correção automática com nota é vedada", e: S({ selecoes: { declaracao: 0, correcao: 1 } }), tem: ["VEDADO_41_IX"] },
  { nome: "04 nota zero por detector é vedada e vaga", e: S({ selecoes: { detector: 1 } }), tem: ["VEDADO_41_X", "TERMO_VAGO"] },
  { nome: "05 detector só como indício passa", e: S({ selecoes: { detector: 0 } }), naoTem: ["VEDADO_41_X"] },
  { nome: "06 declarar sempre que possível", e: S({ selecoes: { declaracao: 2 } }), tem: ["TERMO_VAGO", "SEM_DESTINATARIO"] },
  { nome: "07 recomendação com pena", e: S({ selecoes: { recomenda_sancao: 0 } }), tem: ["RECOMENDACAO_COM_PENA"] },
  { nome: "08 proibição genérica", e: S({ selecoes: { usos_reservados: 1 } }), tem: ["PROIBICAO_GENERICA"] },
  { nome: "09 proibição delimitada não é genérica", e: S({ selecoes: { usos_reservados: 0 } }), naoTem: ["PROIBICAO_GENERICA"] },
  { nome: "10 reprovação por uso inadequado", e: S({ selecoes: { consequencias: 1 } }), tem: ["TERMO_VAGO", "SEM_DESTINATARIO", "SEM_APURACAO"] },
  { nome: "11 sem revisão periódica", e: S({ selecoes: BOA, revisaoAnos: 0 }), tem: ["SEM_REVISAO"] },
  { nome: "12 conselho precisa de todos os princípios do art. 27", e: S({ instancia: "conselho", selecoes: { usos_apoio: 0 } }), tem: ["ART27_PRINCIPIOS"], nivel: { ART27_PRINCIPIOS: "erro" } },
  { nome: "13 PPG sem todos os princípios: só dica", e: S({ selecoes: { usos_apoio: 0 } }), tem: ["ART27_PRINCIPIOS"], nivel: { ART27_PRINCIPIOS: "dica" } },
  { nome: "14 licenciatura sem formação docente", e: S({ instancia: "curso", licenciatura: true, selecoes: { declaracao: 0 } }), tem: ["LICENCIATURA"] },
  { nome: "15 licenciatura com formação docente", e: S({ instancia: "curso", licenciatura: true, selecoes: { declaracao: 0, licenciatura: 0 } }), naoTem: ["LICENCIATURA"] },
  { nome: "16 universidade estadual: dica sobre o decreto", e: S({ esfera: "estadual", selecoes: { declaracao: 0 } }), tem: ["ESFERA"] },
  { nome: "17 sem fundamento de competência", e: S({ fundamento: "", selecoes: { declaracao: 0 } }), tem: ["SEM_FUNDAMENTO"] },
  { nome: "18 guia transforma obrigações em orientação", e: S({ modo: "orientar", selecoes: { declaracao: 0 } }), tem: ["GUIA_NAO_OBRIGA"],
    contem: ["GUIA DE USO", "Orienta-se que"], naoContem: ["RESOLVE:", "entra em vigor"] },
  { nome: "19 texto próprio com cláusula genérica de revogação", e: S({ livre: { texto: "Revogam-se as disposições em contrário.", tipo: "obrigacao", destinatario: "todos" } }), tem: ["REVOGACAO_GENERICA"] },
  { nome: "20 texto próprio de obrigação sem destinatário", e: S({ livre: { texto: "Deverá ser declarado o uso de IA.", tipo: "obrigacao", destinatario: "" } }), tem: ["SEM_DESTINATARIO"] },
  { nome: "21 reitoria: portaria e resolve minúsculo", e: S({ instancia: "reitoria", orgao: "Reitoria", selecoes: { formacao: 0 } }), contem: ["PORTARIA Nº", "resolve:"] },
  { nome: "22 docente: plano de ensino sem vigência nem preâmbulo", e: S({ instancia: "docente", orgao: "Disciplina Teoria da História I", selecoes: { usos_apoio: 0 } }),
    contem: ["PLANO DE ENSINO"], naoContem: ["entra em vigor", "RESOLVE:"] },
  { nome: "23 competência: banca não cabe a colegiado de curso", e: S({ instancia: "curso", selecoes: { bancas: 0 } }), tem: ["COMPETENCIA"] },
  { nome: "24 vigência em 30 dias", e: S({ selecoes: { declaracao: 0 }, vigenciaDias: 30 }), contem: ["após decorridos 30 dias de sua publicação"] },
  { nome: "25 numeração: art. 9º ordinal e art. 10 cardinal", e: S({ selecoes: BOA }), contem: ["Art. 9º", "Art. 10."], naoContem: ["Art. 10º"] },
  { nome: "26 nunca gera 'revogam-se as disposições em contrário'", e: S({ selecoes: BOA }), naoContem: ["disposições em contrário"] },
  { nome: "27 contrações corretas com a chefia", e: S({ selecoes: { formacao: 0, consequencias: 0, revisao_humana: 0 } }),
    contem: ["A Coordenação do Programa oferecerá", "pela Coordenação do Programa", "à Coordenação do Programa a revisão"], naoContem: ["a a ", "à a ", "pela a "] }
];
