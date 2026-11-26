/* Minuta, Mary! — motor (regras puras, sem tela). Usado por app.js e pelos testes. */
(function (G) {
  /* A trilha ativa é sempre window.DADOS; trocar de trilha = trocar window.DADOS. */
  const D = new Proxy({}, { get: (_, k) => (k === "tipos" && !G.DADOS.tipos ? G.TIPOS_BASE : G.DADOS[k]) });
  const TX = (k, padrao) => (G.DADOS.textos && G.DADOS.textos[k] !== undefined ? G.DADOS.textos[k] : padrao);

  /* ---------- numeração (LC 95/1998, art. 10) ---------- */
  function ordinal(n) { return n <= 9 ? n + "º" : n + "."; }
  function romano(n) {
    const t = [[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];
    let s = ""; for (const [v, r] of t) while (n >= v) { s += r; n -= v; } return s;
  }
  function rotuloArt(n) { return "Art. " + ordinal(n); }
  function rotuloPar(i, total) { return total === 1 ? "Parágrafo único." : "§ " + ordinal(i); }

  function instancia(id) { return D.instancias.find(x => x.id === id); }
  function dispositivo(id) { return D.dispositivos.find(x => x.id === id); }

  function chefiaDe(est) { return (est.chefia && est.chefia.trim()) || instancia(est.instancia).chefia; }
  function nomeAto(est) { return est.modo === "orientar" ? "Guia" : instancia(est.instancia).atoNome; }
  function alcance(est) {
    const inst = instancia(est.instancia);
    if (["conselho", "reitoria"].includes(est.instancia) || (inst && inst.amplo))
      return est.instituicao ? "no âmbito da " + est.instituicao.trim() : TX("alcancePadraoAmplo", "no âmbito desta instituição");
    let org = (est.orgao || "").trim().replace(/^(o|a|do|da)\s+/i, "")
      .replace(/^(Colegiado|Coordenação|Conselho(?: Escolar)?|Comissão|Direção)\s+d[oa]s?\s+/i, "");
    if (!org) return TX("alcancePadrao", "no âmbito desta unidade");
    const fem = /^(Pró-Reitoria|Disciplina|Coordenação|Comissão|Unidade|Faculdade|Escola|Turma)/i.test(org);
    return "no âmbito " + (fem ? "da " : "do ") + org;
  }
  function contrai(prep, ch) { // "de" + "a Coordenação" -> "da Coordenação"; "à" etc.
    const m = /^(a|o|as|os)\s+(.*)$/.exec(ch); if (!m) return prep + " " + ch;
    const art = m[1];
    const tab = { de: { a: "da", o: "do", as: "das", os: "dos" }, a: { a: "à", o: "ao", as: "às", os: "aos" },
                  por: { a: "pela", o: "pelo", as: "pelas", os: "pelos" } };
    return tab[prep][art] + " " + m[2];
  }
  function semArtigo(ch) { return ch.replace(/^(a|o|as|os)\s+/, ""); }
  function preencher(txt, est) {
    const ch = chefiaDe(est);
    if (G.DADOS.marcadores) for (const k in G.DADOS.marcadores) txt = txt.split("{" + k + "}").join(G.DADOS.marcadores[k](est, instancia(est.instancia)));
    return txt.replace(/\{ALCANCE\}/g, alcance(est))
      .replace(/(à|À) \{CHEFIA\}/g, (_, p) => contrai("a", ch))
      .replace(/pela \{CHEFIA\}/g, () => contrai("por", ch))
      .replace(/(^|[^\wÀ-ú])(A|a) \{CHEFIA\}/g, (_, pre, A) => pre + (A === "A" ? ch.charAt(0).toUpperCase() + ch.slice(1) : ch))
      .replace(/\{CHEFIA\}/g, ch);
  }
  function aplicavel(disp, est) {
    return (disp.instancias === "todas" || disp.instancias.includes(est.instancia)) && (!disp.etapas || !est.etapa || disp.etapas.includes(est.etapa));
  }

  /* ---------- seleção -> lista de dispositivos escolhidos ---------- */
  function escolhidos(est) {
    const out = [];
    for (const d of D.dispositivos) {
      const v = est.selecoes ? est.selecoes[d.id] : undefined;
      if (v === undefined || v === null || v < 0) continue;
      const vari = d.variantes[v];
      if (!vari) continue;
      out.push({ disp: d, vari, idx: v });
    }
    return out;
  }

  /* ---------- montagem da minuta ---------- */
  function montar(est) {
    const inst = instancia(est.instancia);
    const ato = nomeAto(est);
    const guia = est.modo === "orientar";
    const artigos = []; // {cap, tipo, caput, incisos, paragrafos, origem, ficha, risco}
    const nomeNorma = guia ? "Este Guia" : (inst.id === "docente" ? "Este plano" : "Esta " + ato);

    artigos.push({ cap: "_pre", tipo: "preliminar", origem: "Decreto nº 12.002/2024, art. 6º (objeto e âmbito nos primeiros dispositivos)",
      caput: nomeNorma + " dispõe sobre o uso de ferramentas de inteligência artificial " + TX("objeto", "nas atividades de ensino, pesquisa e elaboração de trabalhos acadêmicos") + " " + alcance(est) + ".",
      paragrafos: [nomeNorma + " observa as diretrizes da Resolução CNE/CP nº 1, de 11 de novembro de 2026, " + (TX("politica", null) || ("e a política institucional de uso de inteligência artificial" + (est.instituicao ? " da " + est.instituicao : ""))) + "."],
      ficha: { conteudo: "definir objeto e âmbito", destinatario: "toda a unidade", ocasiao: "—", condicao: "—", meio: "—" } });

    for (const cap of D.capitulos) {
      for (const e of escolhidos(est).filter(x => x.disp.cap === cap.id)) {
        let tipo = e.vari.tipo;
        let caput = preencher(e.vari.caput, est);
        if (guia && tipo !== "recomendacao" && !e.vari.risco) {
          // em guia, prescrições viram orientação explícita
          caput = "Orienta-se que: " + caput.charAt(0).toLowerCase() + caput.slice(1);
          tipo = "recomendacao";
        }
        artigos.push({ cap: cap.id, tipo, caput,
          incisos: (e.vari.incisos || []).map(t => preencher(t, est)),
          paragrafos: (e.vari.paragrafos || []).map(t => preencher(t, est)),
          origem: e.disp.base, casos: e.disp.casos, risco: e.vari.risco || null, dispId: e.disp.id,
          ficha: Object.fromEntries(Object.entries(e.vari.ficha).map(([k, v]) => [k, preencher(String(v), est)])) });
      }
      // texto livre do usuário entra no fim do seu próprio capítulo
      if (est.livre && est.livre.texto && est.livre.texto.trim() && (est.livre.cap || "usos") === cap.id) {
        artigos.push({ cap: cap.id, tipo: est.livre.tipo || "obrigacao", caput: est.livre.texto.trim(),
          incisos: [], paragrafos: [], origem: "redação própria", risco: null, dispId: "livre",
          ficha: { conteudo: est.livre.conteudo || "", destinatario: est.livre.destinatario || "", ocasiao: est.livre.ocasiao || "",
                   condicao: est.livre.condicao || "", meio: "autoridade" } });
      }
    }

    const anos = Number(est.revisaoAnos) || 0;
    if (anos > 0) artigos.push({ cap: "_fin", tipo: "final", origem: "Res. CNE/CP 1/2026, art. 12, § 2º (revisão periódica)",
      caput: nomeNorma + " será revist" + (guia || ato === "Plano de Ensino" ? "o" : "a") + " a cada " + anos + (anos === 1 ? " ano" : " anos") +
             " ou quando houver alteração " + TX("revisaoMotivo", "da política institucional ou das diretrizes nacionais") + ", por proposta " + contrai("de", chefiaDe(est)) + ".",
      ficha: { conteudo: "rever a norma", destinatario: chefiaDe(est), ocasiao: "a cada " + anos + " anos", condicao: "—", meio: "organização" } });
    if (!guia && inst.id !== "docente") {
      const dias = Number(est.vigenciaDias) || 0;
      artigos.push({ cap: "_fin", tipo: "final", origem: "Decreto nº 12.002/2024, arts. 16 a 18 (vigência expressa)",
        caput: nomeNorma + " entra em vigor " + (dias > 0 ? "após decorridos " + dias + " dias de sua publicação." : "na data de sua publicação."),
        ficha: { conteudo: "fixar a vigência", destinatario: "—", ocasiao: "—", condicao: "—", meio: "—" } });
    }

    artigos.forEach((a, i) => { a.incisos = a.incisos || []; a.paragrafos = a.paragrafos || []; a.casos = a.casos || []; a.n = i + 1; a.rotulo = guia ? (i + 1) + "." : rotuloArt(i + 1); });
    return { inst, ato, guia, artigos, epigrafe: epigrafe(est), ementa: ementa(est), preambulo: preambulo(est) };
  }

  function normalizar(t) {
    if (!t || !t.trim()) return "";
    return t.trim().replace(/\s+/g, " ")
      .replace(/\bart\.?\s*(\d+)(?:\s*º)?/gi, (m, n) => "art. " + (Number(n) <= 9 ? n + "º" : n))
      .replace(/(^|[\s(])n(?:o|°|\.º|º)\.?\s*(\d)/gi, "$1nº $2")
      .replace(/\binc(?:\.|iso)?\s+([ivxlc]+)\b/gi, (m, r) => "inciso " + r.toUpperCase())
      .replace(/[.;,]\s*$/, "");
  }
  function epigrafe(est) {
    const inst = instancia(est.instancia);
    if (est.modo === "orientar") return "GUIA DE USO DE INTELIGÊNCIA ARTIFICIAL" + (est.orgao ? " — " + est.orgao.toUpperCase() : "");
    if (inst.id === "docente") return "PLANO DE ENSINO — REGRAS DE USO DE INTELIGÊNCIA ARTIFICIAL" + (est.orgao ? " — " + est.orgao.toUpperCase() : "");
    return inst.ato + " Nº ___, DE ___ DE __________ DE 20__";
  }
  function ementa(est) {
    if (est.modo === "orientar" || est.instancia === "docente") return "";
    return "Dispõe sobre o uso de ferramentas de inteligência artificial " + alcance(est) + ".";
  }
  function preambulo(est) {
    const inst = instancia(est.instancia);
    if (est.modo === "orientar" || inst.id === "docente") return "";
    const org = (est.orgao || "").toUpperCase().replace(/^O\s+|^A\s+/, "");
    const artigo = TX("objeto", null) && /^(DIREÇÃO|SECRETARIA|ESCOLA|COORDENAÇÃO|COMISSÃO)/.test(org) ? "A " : "O ";
    const sujeito = (est.orgao ? artigo + org : inst.sujeito) + (est.instituicao && !inst.amplo && !org.includes(est.instituicao.trim().toUpperCase()) ? " DA " + est.instituicao.toUpperCase() : "");
    const fund = normalizar(est.fundamento) || TX("fundamentoVazio", "[indicar o artigo do Regimento ou Estatuto que dá a competência]");
    const sup = normalizar(est.normaSuperior) ? ", e na " + normalizar(est.normaSuperior).replace(/^(a|na)\s+/i, "") : "";
    return sujeito + ", no uso das atribuições que lhe confere " + fund +
      ", e tendo em vista o disposto " + TX("preambuloRef", "no art. 27 da Resolução CNE/CP nº 1, de 11 de novembro de 2026") + sup + ", " +
      (inst.colegiado ? "RESOLVE:" : "resolve:");
  }

  /* ---------- texto corrido da minuta ---------- */
  function textoArtigo(a) {
    const L = [a.rotulo + " " + a.caput];
    a.incisos.forEach((t, i) => L.push(romano(i + 1) + " – " + t));
    a.paragrafos.forEach((t, i) => L.push(rotuloPar(i + 1, a.paragrafos.length) + " " + t));
    return L.join("\n");
  }
  function capituloDe(id) {
    if (id === "_pre") return "DISPOSIÇÕES PRELIMINARES";
    if (id === "_fin") return "DISPOSIÇÕES FINAIS";
    const c = D.capitulos.find(c => c.id === id); return c ? c.nome : "";
  }
  function blocos(m) { // agrupa por capítulo, na ordem
    const out = []; let atual = null;
    for (const a of m.artigos) {
      if (!atual || atual.cap !== a.cap) { atual = { cap: a.cap, nome: capituloDe(a.cap), artigos: [] }; out.push(atual); }
      atual.artigos.push(a);
    }
    out.forEach((b, i) => b.rotulo = (m.guia ? (i + 1) + ". " : "CAPÍTULO " + romano(i + 1) + "\n") + b.nome);
    return out;
  }
  function textoMinuta(m, est) {
    const L = [m.epigrafe];
    if (m.ementa) L.push("", m.ementa);
    if (m.preambulo) L.push("", m.preambulo);
    for (const b of blocos(m)) { L.push("", b.rotulo); for (const a of b.artigos) L.push("", textoArtigo(a)); }
    L.push("", "", (est && est.signatario) || "[Nome e cargo da autoridade signatária]");
    return L.join("\n");
  }

  /* ---------- quem cada artigo alcança ---------- */
  function publicosDe(a) {
    if (a.cap.startsWith("_")) return [];
    const t = (a.ficha.destinatario || "") + " " + (a.dispId === "livre" ? a.caput : "");
    return D.publicos.filter(p => p.re.test(t)).map(p => p.id);
  }
  function publicosDaMinuta(m) {
    const r = Object.fromEntries(D.publicos.map(p => [p.id, []]));
    m.artigos.forEach(a => publicosDe(a).forEach(id => r[id].push(a)));
    return r;
  }

  /* ---------- revisão do legislador ---------- */
  const VAGAS = [/sempre que poss[ií]vel/i, /\binadequad[oa]\b/i, /\bindevid[oa]\b/i, /\badequad[oa]\b(?! (às|aos|a|ao) )/i, /quando cab[ií]vel/i];
  function revisar(est) {
    const m = montar(est);
    const P = []; // {codigo, nivel: erro|aviso|dica, msg, fonte, art}
    const add = (codigo, nivel, msg, fonte, art) => P.push({ codigo, nivel, msg, fonte, art: art ? art.rotulo : null,
      dispId: art ? art.dispId || null : null, texto: art ? textoArtigo(art) : null });
    const inst = m.inst;

    for (const a of m.artigos) {
      const txt = [a.caput, ...a.incisos, ...a.paragrafos].join(" ");
      if (a.risco && G.DADOS.riscos && G.DADOS.riscos[a.risco]) { const R = G.DADOS.riscos[a.risco]; add(R.codigo, R.nivel, R.msg, R.fonte, a); }
      if (a.risco === "art41ix") add("VEDADO_41_IX", "erro", "Permite dar nota a trabalho escrito por IA. A Resolução proíbe sem correção humana.", "Res. CNE/CP 1/2026, art. 41, IX", a);
      if (a.risco === "art41x" || (/detec/i.test(txt) && /(nota zero|reprova|san[cç][aã]o|pena)/i.test(txt) && !/indício|exclusiva/i.test(txt)))
        add("VEDADO_41_X", "erro", "Pune com base em detector de IA. A Resolução proíbe sanção baseada só nesse resultado.", "Res. CNE/CP 1/2026, art. 41, X", a);
      if (a.tipo === "obrigacao" || a.tipo === "consequencia") {
        if (VAGAS.some(r => r.test(a.caput))) add("TERMO_VAGO", "aviso", "Termo vago (\"sempre que possível\", \"inadequado\", \"indevido\"): quem cumpre não sabe o que fazer, e quem apura não sabe o que provar.", "Decreto nº 12.002/2024, art. 11, II, d", a);
        const dest = (a.ficha.destinatario || "").toLowerCase();
        if (!dest || dest === "—" || /não identificado/.test(dest)) add("SEM_DESTINATARIO", "erro", "Obrigação sem destinatário: diga quem deve cumprir.", "von Wright: destinatário é componente da prescrição", a);
      }
      if (a.tipo === "recomendacao" && /(sob pena|reprova|nota zero|san[cç][aã]o|puni)/i.test(txt))
        add("RECOMENDACAO_COM_PENA", "erro", "Recomendação com pena é obrigação disfarçada. Escolha: obrigar (e dizer a consequência) ou recomendar (sem pena).", "Quadro teórico: caráter da disposição", a);
      if (a.tipo === "proibicao" && !(a.risco && G.DADOS.riscos && G.DADOS.riscos[a.risco]) && /vedado o uso de (ferramentas de )?(intelig[eê]ncia artificial|ia)\b(?! para)/i.test(a.caput) && !/para|na produção|nas seguintes/i.test(a.caput.split(/intelig[eê]ncia artificial|\bIA\b/i)[1] || ""))
        add("PROIBICAO_GENERICA", "aviso", "Proibição genérica: diga em que tarefa o uso é vedado. A própria Resolução permite usos de apoio (arts. 25 e 38).", "Quadro teórico: conteúdo da proibição", a);
      if (/revogam-se as disposi[cç][oõ]es em contr[aá]rio/i.test(txt))
        add("REVOGACAO_GENERICA", "erro", "A cláusula \"revogam-se as disposições em contrário\" não deve ser usada: liste o que se revoga.", "Decreto nº 12.002/2024, art. 15, § 1º", a);
      if (a.tipo === "consequencia" && !/(chefia|coordena|inst[aâ]ncia|comiss|colegiado|examinad|apura)/i.test(txt))
        add("SEM_APURACAO", "aviso", "Consequência sem quem apura nem direito de manifestação do interessado.", "Quadro teórico: consequências; Res. CNE/CP 1/2026, art. 29", a);
      if (a.dispId && a.dispId !== "livre") {
        const d = dispositivo(a.dispId);
        if (d && !aplicavel(d, est)) add("COMPETENCIA", "erro", "Esta instância não costuma ter competência para este dispositivo. Proponha-o a quem tem.", "Competência da instância", a);
      }
      if (inst.id === "docente" && a.tipo === "consequencia" && /disciplinar/i.test(txt) === false && /(reprova|nota zero)/i.test(txt))
        add("DOCENTE_PENA", "aviso", TX("docentePena", "No plano de ensino, a consequência deve estar dentro das regras de avaliação do curso."), "Competência do docente", a);
    }

    // remissões internas sem alvo: o texto manda a um capítulo de consequências que não existe
    const temConseq = escolhidos(est).some(e => e.disp.cap === "consequencias" && !e.vari.risco);
    for (const a of m.artigos) {
      const txt = [a.caput, ...a.incisos, ...a.paragrafos].join(" ");
      if (!temConseq && /(cap[ií]tulo das consequ[eê]ncias|provid[eê]ncias previstas nesta norma)/i.test(txt))
        add("REMISSAO_SEM_ALVO", "aviso", "Este artigo remete às consequências previstas na norma, mas a norma não tem esse capítulo. Inclua o tema \"O que acontece no descumprimento\" (passo 5).", "Decreto nº 12.002/2024, art. 11, III (ordem lógica)", a);
    }
    // ---------- coerência entre artigos ----------
    const arts = m.artigos.filter(a => !a.cap.startsWith("_"));
    const txtA = a => [a.caput, ...a.incisos, ...a.paragrafos].join(" ");
    const permiteRevisao = arts.find(a => a.dispId === "usos_apoio" && a.tipo === "permissao");
    const contraRedacao = arts.find(a => (a.tipo === "proibicao" || a.tipo === "recomendacao") && /(redação|redigir)/i.test(txtA(a)) && !/(ressalvad|salvo|exceto|apoio permitidos)/i.test(txtA(a)));
    if (permiteRevisao && contraRedacao)
      add("CONFLITO_REDACAO", "aviso", "Conflito: o " + permiteRevisao.rotulo + " permite usar IA na revisão do texto, mas o " + contraRedacao.rotulo + " desaconselha ou proíbe usar IA na redação, sem ressalva. Quem lê não sabe se pode revisar o próprio texto com IA.", "Coerência entre artigos (Decreto nº 12.002/2024, art. 11, II, a)", contraRedacao);
    const regraDetector = arts.find(a => a.dispId === "detector" && a.tipo === "proibicao");
    const penaSemProva = arts.find(a => a.tipo === "consequencia" && /(reprova|nota zero)/i.test(txtA(a)) && !/(examinad|apura|manifesta)/i.test(txtA(a)));
    if (regraDetector && penaSemProva)
      add("CONFLITO_PROVA", "aviso", "Conflito: o " + penaSemProva.rotulo + " prevê pena sem dizer como se prova o descumprimento, e o " + regraDetector.rotulo + " proíbe punir só com base no detector. Na prática, a pena fica sem caminho para ser aplicada.", "Coerência entre artigos; Res. CNE/CP 1/2026, art. 41, X", penaSemProva);
    const palavras = t => new Set(t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").match(/[a-z]{5,}/g) || []);
    for (let i = 0; i < arts.length; i++) for (let j = i + 1; j < arts.length; j++) {
      if (arts[i].dispId !== "livre" && arts[j].dispId !== "livre") continue; // os modelos do app já foram escritos sem repetição
      const A = palavras(txtA(arts[i])), B = palavras(txtA(arts[j]));
      const inter = [...A].filter(w => B.has(w)).length, menor = Math.min(A.size, B.size) || 1;
      const mesmaCoisa = (/declar/i.test(txtA(arts[i])) && /declar/i.test(txtA(arts[j])) && /(metodologia|introdução)/i.test(txtA(arts[i])) && /(metodologia|introdução)/i.test(txtA(arts[j])));
      if (inter / menor >= 0.6 || mesmaCoisa)
      { const [orig, rep] = arts[i].dispId === "livre" ? [arts[j], arts[i]] : [arts[i], arts[j]];
        add("DUPLICIDADE", "aviso", "O " + rep.rotulo + " repete o que já diz o " + orig.rotulo + ", com outra redação. Duas regras para a mesma coisa abrem espaço para leituras diferentes: fique com uma.", "Decreto nº 12.002/2024, art. 11, II, c (mesmas palavras para a mesma ideia)", rep); }
    }
    // ---------- públicos ----------
    const alcPub = publicosDaMinuta(m);
    (est.publicos || []).forEach(pid => {
      const P = D.publicos.find(x => x.id === pid);
      if (P && !alcPub[pid].length) add("PUBLICO_SEM_REGRA", "aviso", P.nome + ": você marcou este público no passo 1, mas nenhum artigo diz o que ele deve, pode ou não pode fazer.", "Quadro teórico: destinatários");
    });
    if (m.guia && escolhidos(est).some(e => ["obrigacao", "proibicao", "consequencia"].includes(e.vari.tipo)))
      add("GUIA_NAO_OBRIGA", "dica", "Num guia, obrigações e proibições foram transformadas em orientações. Para obrigar, a instância precisa aprovar uma norma.", "Guia não é ato normativo");

    // cobertura do piso nacional (art. 27): só exigida da política institucional
    const cobre = new Set();
    escolhidos(est).forEach(e => { if (!e.vari.risco) (e.disp.cobre || []).forEach(c => cobre.add(c)); });
    const faltam = D.piso.principios.filter(p => !cobre.has(p));
    const PZ = D.piso, cod = PZ.codigo || "ART27_PRINCIPIOS", fontePiso = PZ.fonte || "Res. CNE/CP 1/2026, art. 27";
    if ((PZ.exige || ["conselho"]).includes(inst.id) && faltam.length)
      add(cod, "erro", (PZ.msgErro || "A política institucional precisa contemplar: ") + faltam.map(p => PZ.principioNome[p]).join(", ") + ".", fontePiso);
    else if (faltam.length)
      add(cod, "dica", (PZ.msgDica || "Ainda não tratados: ") + faltam.map(p => PZ.principioNome[p]).join(", ") + (PZ.msgDica ? "." : ". Na sua instância isso pode ficar com a política institucional, mas convém remeter a ela."), fontePiso);

    if (est.licenciatura && ["conselho", "curso"].includes(inst.id) && !(est.selecoes && est.selecoes.licenciatura >= 0))
      add("LICENCIATURA", "erro", "Curso de licenciatura: falta a formação inicial docente para atuar com IA.", "Res. CNE/CP 1/2026, art. 27, § 3º, e art. 26");
    if (!(Number(est.revisaoAnos) > 0))
      add("SEM_REVISAO", "aviso", "A norma não diz quando será revista.", "Res. CNE/CP 1/2026, art. 12, § 2º");
    if (!m.guia && inst.id !== "docente" && !(est.fundamento && est.fundamento.trim()))
      add("SEM_FUNDAMENTO", "aviso", TX("semFundamento", "Indique, no preâmbulo, o artigo do Regimento ou do Estatuto que dá competência à instância."), "Decreto nº 12.002/2024, art. 4º, I, c, 2 (fundamento de validade)");
    if (est.esfera && est.esfera !== "federal")
      add("ESFERA", "dica", TX("esferaMsg", "O Decreto nº 12.002/2024 obriga só a administração federal. Para universidades estaduais ou privadas, siga as regras próprias e use o decreto como boa prática."), "Decreto nº 12.002/2024, art. 2º");
    if (escolhidos(est).length === 0 && !(est.livre && est.livre.texto))
      add("VAZIA", "erro", "A norma ainda não tem nenhum dispositivo de conteúdo.", "—");
    return { minuta: m, problemas: P };
  }

  G.Motor = { publicosDe, publicosDaMinuta, normalizar, ordinal, romano, rotuloArt, rotuloPar, montar, revisar, textoMinuta, textoArtigo, blocos, instancia, dispositivo, aplicavel, escolhidos, preencher };
})(typeof window !== "undefined" ? window : globalThis);
