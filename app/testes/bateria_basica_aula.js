/* Bateria congelada da trilha "Educação básica / sala de aula" v1 (26/11/2026). Hash em HASH_basica_aula.txt antes da primeira rodada. */
const BA = { instancia: "docente", esfera: "estadual", etapa: "finais", orgao: "Turma do 7º ano B — Língua Portuguesa", instituicao: "Escola Municipal Exemplo",
  chefia: "", modo: "regular", revisaoAnos: 1, vigenciaDias: 0, selecoes: {}, livre: { texto: "" }, diagnostico: {}, publicos: [] };
const SA = (o) => Object.assign(JSON.parse(JSON.stringify(BA)), o);
const boasDa = (etapa) => { const r = {}; for (const d of window.TRILHAS.basica_aula.dispositivos) { if (d.etapas && !d.etapas.includes(etapa)) continue; const i = d.variantes.findIndex(v => !v.risco); if (i >= 0) r[d.id] = i; } return r; };
window.BATERIA_BASICA_AULA = [
  { nome: "01 anos finais com escolhas boas: sem erros nem avisos", e: SA({ selecoes: boasDa("finais") }), semNivel: "aviso",
    contem: ["PLANO DE ENSINO — REGRAS DE USO DE INTELIGÊNCIA ARTIFICIAL", "Este plano dispõe", "no âmbito da Turma do 7º ano B", "o regimento escolar e as normas da escola", "Nesta turma, ferramentas de inteligência artificial generativa serão usadas apenas"],
    naoContem: ["RESOLVE", "entra em vigor", "{", "discente", "dissertação"] },
  { nome: "02 Educação Infantil com escolhas boas: sem erros", e: SA({ etapa: "infantil", selecoes: boasDa("infantil") }), semNivel: "erro", contem: ["não usarão nenhum sistema"], naoContem: ["uma linha no fim do trabalho"] },
  { nome: "03 Educação Infantil com mediação é vedada", e: SA({ etapa: "infantil", selecoes: { etapa_infantil: 1 } }), tem: ["VEDADO_ETAPA"], nivel: { VEDADO_ETAPA: "erro" } },
  { nome: "04 anos iniciais: chat com IA é vedado", e: SA({ etapa: "iniciais", selecoes: { etapa_iniciais: 1 } }), tem: ["VEDADO_ETAPA"] },
  { nome: "05 anos finais: uso livre é vedado", e: SA({ selecoes: { etapa_finais: 1 } }), tem: ["VEDADO_ETAPA"] },
  { nome: "06 nota pela ferramenta é vedada", e: SA({ selecoes: { correcao: 1 } }), tem: ["VEDADO_41_IX"] },
  { nome: "07 nota zero por detector é vedada", e: SA({ selecoes: { detector: 1 } }), tem: ["VEDADO_41_X"] },
  { nome: "08 recomendação com pena", e: SA({ selecoes: { informar_uso: 2 } }), tem: ["RECOMENDACAO_COM_PENA"] },
  { nome: "09 \"uso indevido\" e \"sempre que possível\"", e: SA({ selecoes: { informar_uso: 1, avisar_familias: 1 } }), tem: ["TERMO_VAGO", "SEM_DESTINATARIO"] },
  { nome: "10 nota zero por \"uso inadequado\"", e: SA({ selecoes: { consequencias: 1 } }), tem: ["TERMO_VAGO", "SEM_APURACAO"] },
  { nome: "11 plano sem a regra da etapa: só dica", e: SA({ selecoes: { aviso_atividade: 0 } }), tem: ["PISO_BASICA"], nivel: { PISO_BASICA: "dica" } },
  { nome: "12 sem preâmbulo, sem vigência, revisão anual", e: SA({ selecoes: boasDa("finais") }), contem: ["Este plano será revisto a cada 1 ano"], naoContem: ["no uso das atribuições"] },
  { nome: "13 tema de outra etapa não aparece como aplicável", e: SA({ etapa: "infantil", selecoes: {} }), aplicaveisSem: ["informar_uso", "etapa_finais", "aprender_ia"] },
  { nome: "14 contrações sem erro", e: SA({ selecoes: boasDa("medio"), etapa: "medio" }), naoContem: [" a a ", "pela a ", "à a ", "do Turma"] }
];
