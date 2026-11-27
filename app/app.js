/* Minuta, Mary! — telas. */
(function () {
  /* ---------- trilhas: nível (básica/superior) x alcance (instituição/sala de aula) ---------- */
  const TRILHAS = window.TRILHAS || { superior: window.DADOS };
  if (!TRILHAS.superior) TRILHAS.superior = window.DADOS;
  const D = new Proxy({}, { get: (_, k) => window.DADOS[k] });
  const M = window.Motor, CASOS = window.CASOS || [];
  const CHAVE_PREF = "minuta-mary-trilha";
  let PREF; try { PREF = Object.assign({ nivel: "superior", alcance: "inst" }, JSON.parse(localStorage.getItem(CHAVE_PREF) || "{}")); } catch (e) { PREF = { nivel: "superior", alcance: "inst" }; }
  const dadosDe = pr => (pr.nivel !== "basica" ? "superior" : pr.alcance === "aula" ? (TRILHAS.basica_aula ? "basica_aula" : "basica") : (TRILHAS.basica ? "basica" : "superior"));
  const emBreve = pr => pr.nivel === "basica" && pr.alcance === "aula" && !TRILHAS.basica_aula;
  let TRILHA = dadosDe(PREF);
  window.DADOS = TRILHAS[TRILHA];
  const chave = () => "minuta-mary-v1" + (TRILHA === "superior" ? "" : "-" + TRILHA);
  const TX = (k, padrao) => (D.textos && D.textos[k] !== undefined ? D.textos[k] : padrao);
  const PASSOS = [
    ["quem", "1 Quem legisla"], ["diag", "2 Diagnóstico"], ["modo", "3 Regular ou orientar"], ["piso", "4 Piso nacional"],
    ["disp", "5 Dispositivos"], ["final", "6 Revisão e vigência"], ["rev", "7 Revisão do legislador"], ["minuta", "8 A minuta"]
  ];
  const novo = () => ({ tela: "inicio", instancia: TRILHA === "basica" ? "escola" : (PREF.alcance === "aula" ? "docente" : "ppg"), esfera: TRILHA === "superior" ? "federal" : "estadual", orgao: "", instituicao: "", chefia: "",
    fundamento: "", normaSuperior: "", signatario: "", licenciatura: false, diagnostico: {}, modo: "regular",
    selecoes: {}, publicos: (D.publicosPadrao || ["discente", "docente", "orientador", "banca", "gestao"]).slice(), revisaoAnos: 2, vigenciaDias: 0, livre: { texto: "" }, verTipos: true });
  let E;
  const carregar = () => { try { E = Object.assign(novo(), JSON.parse(localStorage.getItem(chave()) || "{}")); } catch (e) { E = novo(); } };
  carregar();
  const salvar = () => { try { localStorage.setItem(chave(), JSON.stringify(E)); localStorage.setItem(CHAVE_PREF, JSON.stringify(PREF)); } catch (e) {} };
  function escolherTrilha(campo, valor) {
    const tela = E.tela; salvar();
    PREF[campo] = valor;
    const nova = dadosDe(PREF);
    if (nova !== TRILHA) { TRILHA = nova; window.DADOS = TRILHAS[TRILHA]; carregar(); }
    if (TRILHA === "superior") {
      if (PREF.alcance === "aula") E.instancia = "docente";
      else if (E.instancia === "docente") E.instancia = "ppg";
      D.dispositivos.forEach(d => { if (E.selecoes[d.id] >= 0 && !M.aplicavel(d, E)) delete E.selecoes[d.id]; });
    }
    E.tela = tela; salvar(); render();
  }
  /* Na trilha superior, a sala de aula é o plano de ensino do docente; a instituição são as demais instâncias. */
  const instanciasVisiveis = () => TRILHA !== "superior" ? D.instancias
    : D.instancias.filter(i => PREF.alcance === "aula" ? i.id === "docente" : i.id !== "docente");
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const $ = sel => document.querySelector(sel);
  const tipoBadge = t => { const T = D.tipos[t] || { nome: t, cor: "cinza" }; return `<span class="tipo t-${T.cor}">${esc(T.nome)}</span>`; };

  /* Contador (conta.php): manda só o tipo de evento; nada do que a pessoa escreve. Uma vez por sessão do navegador. */
  function conta(e) {
    try {
      if (location.protocol === "file:" || sessionStorage.getItem("mm-conta-" + e)) return;
      sessionStorage.setItem("mm-conta-" + e, "1");
      const d = new FormData(); d.append("e", e);
      navigator.sendBeacon && navigator.sendBeacon("conta.php", d);
    } catch (x) {}
  }
  /* ---------- instalar no celular (sem loja) ---------- */
  const UA = /[?&]simular=iphone(&|$)/.test(location.search) ? "iPhone" : (navigator.userAgent || ""); /* ?simular=iphone: só para testar a caixa */
  const ehIOS = /iPhone|iPad|iPod/i.test(UA) || (/Macintosh/.test(UA) && navigator.maxTouchPoints > 1);
  const ehAndroid = /Android/i.test(UA);
  const ehCelular = ehIOS || ehAndroid;
  const instalado = () => (window.matchMedia && matchMedia("(display-mode: standalone)").matches) || navigator.standalone === true;
  const ADIA = "minuta-mary-instalar-adiado", TRINTA_DIAS = 30 * 24 * 3600 * 1000;
  const adiado = () => { try { return Date.now() - Number(localStorage.getItem(ADIA) || 0) < TRINTA_DIAS; } catch (e) { return false; } };
  let pedidoInstalar = null, forcarInstalar = false;
  window.addEventListener("beforeinstallprompt", ev => { ev.preventDefault(); pedidoInstalar = ev; if (E && E.tela === "inicio") render(); });
  window.addEventListener("appinstalled", () => { pedidoInstalar = null; forcarInstalar = false; if (ehAndroid) conta("inst_android"); render(); });
  /* Primeira abertura como app (pelo ícone), uma vez por aparelho: é o único sinal de instalação no iPhone. */
  function contaPrimeiraAbertura() {
    try {
      if (!instalado() || !ehCelular || localStorage.getItem("minuta-mary-abriu-app")) return;
      localStorage.setItem("minuta-mary-abriu-app", "1"); conta(ehIOS ? "app_iphone" : "app_android");
    } catch (e) {}
  }
  function caixaInstalar() {
    if (instalado() || !(forcarInstalar || (ehCelular && !adiado()))) return "";
    const passos = ehIOS || !ehAndroid && !pedidoInstalar
      ? `<ol><li>Toque em <b>Compartilhar</b> (o quadrado com a seta para cima).</li><li>Escolha <b>Adicionar à Tela de Início</b>.</li></ol>${ehCelular ? "" : `<p>No Android, abra este endereço no Chrome e toque em <b>Instalar</b>.</p>`}`
      : pedidoInstalar ? `<p>Fica na tela inicial como um app e abre mesmo sem internet.</p>`
      : `<p>No menu do navegador (⋮), toque em <b>Instalar app</b> ou <b>Adicionar à tela inicial</b>.</p>`;
    return `<div class="instalar" id="caixa-instalar" role="region" aria-label="Baixe o Mary no celular">
      <img src="icones/icone-192.png" alt="">
      <div><span class="tit">Baixe o Mary no celular</span>
        ${ehCelular || pedidoInstalar ? "" : `<p>No celular, abra <b>iaeduca.online/mary</b> e:</p>`}${passos}
        <p>Sem loja e sem cadastro. O que você escreve continua só no aparelho.</p>
        <div class="acoes">${pedidoInstalar ? `<button class="prim" id="instalarAgora">Instalar</button>` : ""}<button class="sec" id="instalarDepois">Agora não</button></div></div></div>`;
  }
  if ("serviceWorker" in navigator && location.protocol !== "file:") window.addEventListener("load", () => { navigator.serviceWorker.register("sw.js").catch(() => {}); });

  function ir(t) { E.tela = t; salvar(); render(); window.scrollTo(0, 0); if (t === "quem") conta("comeco"); if (t === "minuta") conta("minuta"); }
  window.__ir = ir;

  /* Ícones de traço (SVG embutido, sem rede). */
  const ico = d => `<svg class="ico" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
  const ICO = {
    casa: ico('<path d="M4 11 12 4l8 7"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/>'),
    seta: ico('<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>'),
    olho: ico('<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/>'),
    livro: ico('<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5Z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/>')
  };
  const ILUSTRA = `<svg class="ilustra" viewBox="0 0 280 320" aria-hidden="true" focusable="false">
    <rect x="46" y="22" width="200" height="268" rx="6" fill="#ebe4d4"/>
    <rect x="34" y="12" width="200" height="268" rx="6" fill="#fffdf8" stroke="#d9d1bf"/>
    <rect x="84" y="40" width="100" height="7" rx="3.5" fill="#2d3468"/>
    <rect x="124" y="62" width="88" height="5" rx="2.5" fill="#c9c2b2"/><rect x="124" y="74" width="72" height="5" rx="2.5" fill="#c9c2b2"/>
    <text x="56" y="128" font-family="Palatino Linotype, Palatino, Georgia, serif" font-size="46" fill="#a63a24">§</text>
    <rect x="88" y="104" width="122" height="5" rx="2.5" fill="#8f97a8"/><rect x="88" y="116" width="110" height="5" rx="2.5" fill="#c9c2b2"/>
    <rect x="56" y="146" width="154" height="5" rx="2.5" fill="#c9c2b2"/><rect x="56" y="158" width="140" height="5" rx="2.5" fill="#c9c2b2"/>
    <rect x="70" y="176" width="126" height="5" rx="2.5" fill="#c9c2b2"/><rect x="70" y="188" width="110" height="5" rx="2.5" fill="#c9c2b2"/>
    <rect x="56" y="206" width="150" height="5" rx="2.5" fill="#c9c2b2"/>
    <path d="M70 252c14-10 22 8 34-2s14-6 22 0" fill="none" stroke="#2d3468" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="200" cy="246" r="22" fill="#a63a24"/><circle cx="200" cy="246" r="15" fill="none" stroke="#f3d9cf" stroke-width="1.5"/>
    <path d="M193 246l5 5 9-10" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
    <g transform="translate(226 158) rotate(28)"><path d="M0-58c9 10 13 22 11 34L0-6-11-24C-13-36-9-48 0-58Z" fill="#2d3468"/><path d="M0-6V-28" stroke="#fffdf8" stroke-width="1.6"/><circle cx="0" cy="-31" r="2.6" fill="#fffdf8"/><path d="M-2-58h4v-44h-4Z" fill="#2d3468" opacity=".55"/></g>
  </svg>`;

  const SELO = document.querySelector('header .selo') ? document.querySelector('header .selo').outerHTML : '';

  /* Barra de passos: trilha com progresso nas telas 1 a 8; abas simples nas demais. */
  function nav() {
    const el = $("#passos");
    const i = PASSOS.findIndex(x => x[0] === E.tela);
    if (i < 0) {
      el.className = "passos abas"; el.setAttribute("aria-label", "Seções");
      el.innerHTML = (E.tela !== "inicio" ? `<button data-ir="inicio">${ICO.casa}<span>Início</span></button>` : "") +
        `<button data-ir="casos" class="${["casos", "caso"].includes(E.tela) ? "atual" : ""}">Casos do acervo</button><button data-ir="metodo" class="${E.tela === "metodo" ? "atual" : ""}">Nota de método</button>`;
    } else {
      el.className = "passos trilha"; el.setAttribute("aria-label", `Passos: você está no ${i + 1} de ${PASSOS.length}`);
      el.innerHTML = `<div class="trilha-in"><button data-ir="inicio" class="casa" aria-label="Início" title="Início">${ICO.casa}</button>
        <span class="trilha-conta" aria-hidden="true">Passo <b>${i + 1}</b> de ${PASSOS.length}</span><ol>` +
        PASSOS.map(([id, n], k) => { const nome = n.replace(/^\d+\s*/, "");
          return `<li><button data-ir="${id}" class="${k < i ? "feito" : k === i ? "atual" : ""}"${k === i ? ' aria-current="step"' : ""} title="${esc(nome)}"><span class="pn">${k + 1}</span><span class="pnome">${esc(nome)}</span></button></li>`; }).join("") +
        `</ol></div>`;
    }
  }
  function botoes(ant, prox, rotProx) {
    return `<div class="botoes">${ant ? `<button class="sec" data-ir="${ant}">Voltar</button>` : "<span></span>"}${prox ? `<button class="prim" data-ir="${prox}">${esc(rotProx || "Continuar")}</button>` : ""}</div>`;
  }

  const temDados = () => !!(E.orgao || E.instituicao || Object.keys(E.selecoes || {}).length || (E.livre && E.livre.texto));
  /* ---------- telas ---------- */
  const T = {};

  T.inicio = () => `${caixaInstalar()}
    <section class="abertura">
      <div class="abertura-txt">
        <h2 class="chamada"><span class="selo-grande">${SELO}</span>Minuta, <em>Mary!</em></h2>
        <p class="subtitulo">Construa a norma da sua instituição sobre o uso&nbsp;de&nbsp;IA.</p>
        <div class="trilhas" role="group" aria-label="Escolha a sua trilha">
          <div class="pergunta-trilha"><span class="pt-rot">Qual o nível?</span>
            <div class="seg">${[["basica", "Educação básica"], ["superior", "Educação superior"]].map(([v, n]) => `<button data-nivel="${v}" class="${PREF.nivel === v ? "sel" : ""}" aria-pressed="${PREF.nivel === v}">${n}</button>`).join("")}</div></div>
          <div class="pergunta-trilha"><span class="pt-rot">A norma vale para quê?</span>
            <div class="seg">${[["inst", "Para a instituição"], ["aula", "Para a sala de aula"]].map(([v, n]) => `<button data-alcance="${v}" class="${PREF.alcance === v ? "sel" : ""}" aria-pressed="${PREF.alcance === v}">${n}</button>`).join("")}</div></div>
          <p class="ex pt-ajuda">${emBreve(PREF) ? "<b>Em breve.</b> As regras do professor para a sua turma na educação básica ainda estão em teste. Por enquanto, escolha \"Para a instituição\": escola, rede ou secretaria." :
            ({ "basica-inst": "Escola, rede de ensino, secretaria ou conselho de educação.", "superior-inst": "Universidade, pró-reitoria, programa de pós-graduação, curso ou extensão.", "superior-aula": "O professor e as regras da sua disciplina, no plano de ensino.", "basica-aula": "O professor e as regras da sua turma, no plano de ensino." })[PREF.nivel + "-" + PREF.alcance]}</p>
        </div>
        <button class="prim cta" data-ir="quem" ${emBreve(PREF) ? "disabled" : ""}>${temDados() ? (E.demoAviso ? "Continuar o exemplo" : "Continuar a minha norma") : "Começar"} ${ICO.seta}</button>
        ${temDados() && !emBreve(PREF) ? `<div class="recomecar"><button class="sec" id="comecarZero">${E.demoAviso ? "Começar a minha do zero" : "Começar uma nova (apaga a atual)"}</button></div>` : ""}
        <div class="atalhos">
          ${emBreve(PREF) ? "" : `<button class="atalho" id="demo">${ICO.olho}<span>Ver uma demonstração</span></button>`}
          <button class="atalho" data-ir="casos">${ICO.livro}<span>Aprender com ${CASOS.length} casos reais${TRILHA === "superior" ? "" : " do ensino superior"}</span></button>
        </div>
      </div>
      ${ILUSTRA}
    </section>
    <div class="rodape-inicio"><p class="aviso-fixo">Minuta de apoio, sem valor jurídico. A decisão e a redação final cabem à instância competente.</p>
    ${E.orgao || E.instituicao || Object.keys(E.selecoes || {}).length || (E.livre && E.livre.texto) ? `<p class="aviso-fixo"><a href="#" id="zerar">Apagar o que eu já preenchi</a></p>` : ""}</div>`;

  T.quem = () => {
    const inst = M.instancia(E.instancia);
    return `<h2>1. Quem legisla</h2>
    <div class="licao">${TX("quemLicao", "<b>Competência.</b> Cada instância só pode mandar no que é seu, e cada ato obedece aos de cima: Constituição (art. 207, autonomia), leis (LDB, LGPD), Resolução CNE/CP nº 1/2026, Estatuto e Regimento, resoluções dos conselhos, portarias e instruções normativas, normas dos colegiados e, por fim, o plano de ensino.")}</div>
    <p><b>Marque quem vai aprovar a norma.</b> <span class="ex">O resto do app se ajusta a essa escolha.</span></p>
    <div class="cartao">${instanciasVisiveis().map(i => `
      <label class="opcao ${i.id === E.instancia ? "sel" : ""}"><input type="radio" name="inst" value="${i.id}" ${i.id === E.instancia ? "checked" : ""}>
      <span><b>${esc(i.nome)}</b> <span class="ex">— edita ${esc(i.atoNome)}</span></span></label>`).join("")}</div>
    ${D.etapas ? `<label class="campo">${esc(TX("perguntaEtapa", "Etapa"))}</label><select data-c="etapa"><option value="">Escolha</option>${D.etapas.map(x => `<option value="${x.id}" ${E.etapa === x.id ? "selected" : ""}>${esc(x.nome)}</option>`).join("")}</select><div class="ex">O passo 5 mostra só os temas que valem para esta etapa.</div>` : ""}
    <div class="cartao"><b>${esc(inst.nome)}</b>
      <div class="regra"><b>Pode:</b> ${inst.pode.map(esc).join("; ")}.</div>
      <div class="regra"><b>Não pode:</b> ${inst.naoPode.map(esc).join("; ")}.</div>
      ${inst.nota ? `<div class="regra">${esc(inst.nota)}</div>` : ""}
    </div>
    <div class="linha">
      <div><label class="campo">Nome do órgão</label><input type="text" data-c="orgao" value="${esc(E.orgao)}" placeholder="Ex.: ${esc(inst.nomeOrgaoEx)}"></div>
      <div><label class="campo">${esc(TX("rotInstituicao", "Instituição"))}</label><input type="text" data-c="instituicao" value="${esc(E.instituicao)}" placeholder="Ex.: ${esc(TX("exInstituicao", "Universidade Federal de Exemplo"))}"></div>
    </div>
    <div class="linha">
      <div><label class="campo">A instituição é</label><select data-c="esfera">
        ${[["federal", "pública federal"], ["estadual", "pública estadual ou municipal"], ["privada", "privada"]].map(([v, n]) => `<option value="${v}" ${E.esfera === v ? "selected" : ""}>${n}</option>`).join("")}</select></div>
      <div><label class="campo">Quem acompanha a norma</label><input type="text" data-c="chefia" value="${esc(E.chefia)}" placeholder="Ex.: ${esc(inst.chefia)}"><div class="ex">Quem vai divulgar e acompanhar a norma. Escreva com o artigo: "${esc(TX("exChefia", "a Coordenação do Programa"))}".</div></div>
    </div>
    ${inst.id !== "docente" ? `<label class="campo">Fundamento da competência</label><input type="text" data-c="fundamento" value="${esc(E.fundamento)}" placeholder="Ex.: ${esc(TX("exFundamento", "o art. 12, inciso II, do Regimento Interno do Programa"))}"><div class="ex">Qual artigo da lei ou do regimento dá à sua instância o poder de fazer esta norma. Se não souber, deixe em branco: a minuta marca o lugar.</div>
    <label class="campo">Norma superior a observar (opcional)</label><input type="text" data-c="normaSuperior" value="${esc(E.normaSuperior)}" placeholder="Ex.: ${esc(TX("exNormaSuperior", "Resolução CONSEPE nº 00/2026, que estabelece as normas gerais da pós-graduação"))}">` : ""}
    <label class="campo">A quem a norma se dirige</label><div class="ex">Estas marcas servem para conferir: na revisão, o app avisa se algum público ficou sem regra. Elas não tiram artigos; para isso, ajuste os temas no passo 5.</div>
    <div class="linha">${D.publicos.map(p => `<label class="opcao" style="flex:0 1 auto"><input type="checkbox" data-pub="${p.id}" ${(E.publicos || []).includes(p.id) ? "checked" : ""}> ${esc(p.nome)}</label>`).join("")}</div>
    ${["curso", "conselho"].includes(inst.id) ? `<label class="opcao"><input type="checkbox" data-c="licenciatura" ${E.licenciatura ? "checked" : ""}> <span>${inst.id === "curso" ? "É curso de licenciatura" : "A instituição oferece licenciaturas"}</span></label>` : ""}
    ${botoes("inicio", "diag")}`;
  };

  T.diag = () => `<h2>2. Diagnóstico</h2>
    <div class="licao"><b>Antes de escrever, entenda o problema.</b> O governo federal exige estas perguntas antes de qualquer ato normativo (Anexo do Decreto nº 12.002/2024). As respostas não entram nos artigos: viram a nota justificativa que acompanha a minuta.</div>
    <p><b>Responda em poucas linhas.</b> <span class="ex">Pode deixar em branco e voltar depois.</span></p>
    ${D.diagnostico.map(q => `<label class="campo">${esc(q.p)}</label><textarea data-d="${q.id}" placeholder="Ex.: ${esc(q.ex)}">${esc(E.diagnostico[q.id] || "")}</textarea>`).join("")}
    ${botoes("quem", "modo")}`;

  T.modo = () => `<h2>3. Regular ou orientar?</h2>
    <div class="licao"><b>Prescrição não é conselho.</b> Uma norma (resolução, portaria, instrução normativa) obriga, proíbe e permite, e pode ter consequências. Um guia orienta e recomenda, sem pena. Muitos documentos do acervo misturam os dois, e quem lê não sabe o que é dever.</div>
    <p><b>Escolha uma opção.</b> <span class="ex">Na dúvida, escolha "Regular".</span></p>
    <div class="cartao">
      <label class="opcao ${E.modo === "regular" ? "sel" : ""}"><input type="radio" name="modo" value="regular" ${E.modo === "regular" ? "checked" : ""}><span><b>Regular</b> — escrever uma ${esc(M.instancia(E.instancia).atoNome.toLowerCase())}, com artigos que obrigam, proíbem e permitem.</span></label>
      <label class="opcao ${E.modo === "orientar" ? "sel" : ""}"><input type="radio" name="modo" value="orientar" ${E.modo === "orientar" ? "checked" : ""}><span><b>Orientar</b> — escrever um guia, com recomendações numeradas. Para obrigar, depois será preciso uma norma.</span></label>
    </div>${botoes("diag", "piso")}`;

  T.piso = () => `<h2>4. O piso nacional</h2>
    <div class="licao">${TX("pisoLicao", "<b>Obedecer não é copiar.</b> A Resolução CNE/CP nº 1/2026 manda cada instituição ter política própria (art. 27) e respeita a autonomia pedagógica (art. 4º, VI). Ela fixa o que é vedado e o que é obrigatório; o resto é decisão local. Prazo de adequação: 12 meses a partir de 12/11/2026 (art. 46).")}</div>
    <div class="cartao"><b>Vedado — a sua norma não pode permitir</b>
      ${D.piso.vedado.map(v => `<div class="regra"><b>${esc(v.art)}:</b> ${esc(v.texto)}</div>`).join("")}</div>
    <div class="cartao"><b>Obrigatório — a sua norma deve respeitar ou cumprir</b>
      ${D.piso.obrigatorio.map(v => `<div class="regra"><b>${esc(v.art)}:</b> ${esc(v.texto)}</div>`).join("")}</div>
    <p><b>Nada a preencher aqui: leia e clique em Continuar.</b></p>
    <p class="ex">${esc(TX("pisoNota", "O art. 1º da minuta já remete à Resolução. Na revisão (passo 7), o app confere se você tratou os princípios do art. 27 e se nada choca com as vedações."))}</p>
    ${botoes("modo", "disp")}`;

  function meioSimples(m) {
    if (!m || m === "—") return "—";
    return m.replace(/nodalidade/g, "informa e orienta").replace(/autoridade/g, "manda, proíbe ou permite")
            .replace(/organização/g, "organiza pessoas e serviços").replace(/tesouro/g, "oferece recursos");
  }
  function fichaHtml(f, tipo) {
    const R = D.tipos[tipo] || {};
    return `<table class="ficha">
      <tr><td>Tipo <span class="ex">(caráter)</span></td><td>${tipoBadge(tipo)}</td></tr>
      <tr><td>O que fazer <span class="ex">(conteúdo)</span></td><td>${esc(f.conteudo || "—")}</td></tr>
      <tr><td>Em que condição</td><td>${esc(f.condicao || "—")}</td></tr>
      <tr><td>Quem cumpre <span class="ex">(destinatário)</span></td><td>${esc(f.destinatario || "—")}</td></tr>
      <tr><td>Quando <span class="ex">(ocasião)</span></td><td>${esc(f.ocasiao || "—")}</td></tr>
      <tr><td>Como age <span class="ex">(meio)</span></td><td>${esc(meioSimples(f.meio))}</td></tr>
      ${f.consequencia ? `<tr><td>Se não cumprir</td><td>${esc(f.consequencia)}</td></tr>` : ""}
    </table>
    <div class="regra"><b>${esc(R.nome || "")} — deve ter:</b> ${esc(R.deve || "")}. <b>Não deve ter:</b> ${esc(R.naoDeve || "")}.</div>`;
  }
  const JUIZO = { acerto: "Exemplo real que acertou", atencao: "Exemplo real com ponto de atenção",
                  falha: "Exemplo real que falhou", guia: "Exemplo real de guia (orienta, não obriga)" };
  const JCURTO = { acerto: "acerto", atencao: "ponto de atenção", falha: "falha", guia: "orientação" };
  function casosMini(ids) {
    const cs = CASOS.filter(c => ids.includes(c.id)); if (!cs.length) return "";
    return `<div class="exemplos"><div class="regra"><b>O que normas reais ensinam sobre este tema</b> (fonte só pelo código):</div>` +
      cs.map(c => `<div class="exemplo ex-${c.juizo}">
        <div><span class="juizo j-${c.juizo}">${esc(JUIZO[c.juizo])}</span> <span class="ex">· fonte ${esc(c.fonte)}</span></div>
        <div>${esc(c.licao)}</div>
        <div><b>Para a sua escolha:</b> ${esc(c.uso)}</div>
        <a href="#" data-caso="${c.id}">Ver o trecho original e a análise</a></div>`).join("") + `</div>`;
  }

  T.disp = () => {
    const ap = D.dispositivos.filter(d => M.aplicavel(d, E));
    return `<h2>5. Dispositivos</h2>
    <div class="licao"><b>Toda regra tem seis partes:</b> o tipo (obriga, proíbe, permite, recomenda), o que se deve fazer, em que condição, quem manda, quem cumpre e quando. Sem as três primeiras, não há regra. Cada opção abaixo mostra essas partes numa ficha.</div>
    <p><b>Em cada tema, marque uma opção.</b> <span class="ex">Não sabe por onde começar? Use o botão abaixo e depois ajuste. As opções marcadas "com defeito" existem para você aprender: escolha uma e veja o que a revisão diz.</span></p>
    <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-bottom:6px"><button class="sec" id="recomendadas" title="Só nos temas ainda não decididos; o que você já escolheu fica como está">Marcar as opções recomendadas nos temas que faltam</button><button class="sec" data-ir="final">Pular para o passo 6</button>
    <span class="ex">${ap.filter(d => E.selecoes[d.id] !== undefined).length} de ${ap.length} temas decididos.</span></div>
    ${D.capitulos.map(cap => {
      const ds = ap.filter(d => d.cap === cap.id); if (!ds.length) return "";
      return `<h3>${esc(cap.nome.charAt(0) + cap.nome.slice(1).toLowerCase())}</h3>` + ds.map(d => {
        const s = E.selecoes[d.id]; const v = (s === undefined || s === null) ? -1 : s; const vari = d.variantes[v];
        return `<div class="cartao" id="d-${d.id}"><b>${esc(d.titulo)}</b> <span class="ex">· base: ${esc(d.base)}</span>
          <div>${d.variantes.map((x, i) => `<label class="opcao ${v === i ? "sel" : ""}"><input type="radio" name="d_${d.id}" data-disp="${d.id}" value="${i}" ${v === i ? "checked" : ""}> <span>${esc(x.rotulo)} ${tipoBadge(x.tipo)}${x.risco ? ' <span class="ex" style="color:var(--laranja)">· com defeito, para aprender</span>' : ""}</span></label>`).join("")}
          <label class="opcao ${v === -1 ? "sel" : ""}"><input type="radio" name="d_${d.id}" data-disp="${d.id}" value="-1" ${v === -1 ? "checked" : ""}> <span class="ex">Não incluir</span></label></div>
          ${vari ? `<div class="texto-modelo">${esc(M.preencher(vari.caput, E))}${(vari.incisos || []).map((t, i) => "\n" + M.romano(i + 1) + " – " + esc(M.preencher(t, E))).join("")}${(vari.paragrafos || []).map((t, i, a) => "\n" + M.rotuloPar(i + 1, a.length) + " " + esc(M.preencher(t, E))).join("")}</div>
            <details class="mais"><summary>Ver a ficha desta regra${(d.casos || []).length ? " e exemplos reais" : ""}</summary>
            ${fichaHtml(Object.fromEntries(Object.entries(vari.ficha).map(([k, x]) => [k, M.preencher(String(x), E)])), vari.tipo)}
            ${casosMini(d.casos || [])}</details>` : ((d.casos || []).length ? `<details class="mais"><summary>Ver exemplos reais deste tema</summary>${casosMini(d.casos || [])}</details>` : "")}</div>`;
      }).join("");
    }).join("")}
    <h3>Um dispositivo seu</h3>
    <div class="cartao" id="d-livre"><div class="regra">Pode deixar em branco. Use este campo se a sua norma precisa de uma regra que não está nas opções acima. Escreva o <b>caput</b>, que é a frase principal do artigo (sem o "Art."), e diga quem deve cumprir e quando. A revisão do passo 7 confere o que você escrever.</div>
      <div style="margin:8px 0;display:flex;gap:8px;flex-wrap:wrap"><button class="sec" id="exLivre">Usar um exemplo bem feito</button><button class="sec" id="exLivreRuim">Usar um exemplo com erro</button>${E.livre.texto ? `<button class="sec" id="limpaLivre">Apagar</button>` : ""}</div>
      <label class="campo">Texto do caput</label><textarea data-l="texto" style="min-height:96px" placeholder="${esc(TX("livrePlaceholder", "Exemplo (só para ver, não entra na minuta): O discente que utilizar ferramenta de inteligência artificial generativa na elaboração da dissertação ou tese deverá declarar o uso na seção de metodologia, indicando a ferramenta e a finalidade."))}">${esc(E.livre.texto || "")}</textarea>
      <div class="linha"><div><label class="campo">Caráter</label><select data-l="tipo">${["obrigacao", "proibicao", "permissao", "recomendacao", "competencia", "direito", "consequencia"].map(t => `<option value="${t}" ${E.livre.tipo === t ? "selected" : ""}>${esc(D.tipos[t].nome)}</option>`).join("")}</select></div>
      <div><label class="campo">Capítulo</label><select data-l="cap">${D.capitulos.map(c => `<option value="${c.id}" ${E.livre.cap === c.id ? "selected" : ""}>${esc(c.nome.toLowerCase())}</option>`).join("")}</select></div></div>
      <div class="linha"><div><label class="campo">Destinatário</label><input type="text" data-l="destinatario" value="${esc(E.livre.destinatario || "")}" placeholder="Ex.: ${esc(TX("livreDestEx", "discente autor da dissertação ou tese"))}"></div>
      <div><label class="campo">Ocasião</label><input type="text" data-l="ocasiao" value="${esc(E.livre.ocasiao || "")}" placeholder="Ex.: ${esc(TX("livreOcasiaoEx", "na entrega da dissertação ou tese"))}"></div></div>
    </div>
    ${botoes("piso", "final")}`;
  };

  T.final = () => `<h2>6. Revisão e vigência</h2>
    <div class="licao"><b>Toda norma diz quando nasce e quando será revista.</b> A vigência tem de ser expressa (Decreto nº 12.002/2024, arts. 16 a 18), e a Resolução exige revisão periódica das políticas de IA (art. 12, § 2º). Não use "revogam-se as disposições em contrário" (art. 15): se houver norma anterior, diga qual se revoga.</div>
    <div class="linha">
      <div><label class="campo">Rever a cada</label><select data-c="revisaoAnos">${[0, 1, 2, 3, 4].map(n => `<option value="${n}" ${Number(E.revisaoAnos) === n ? "selected" : ""}>${n === 0 ? "não prever revisão" : n + (n === 1 ? " ano" : " anos")}</option>`).join("")}</select></div>
      ${E.modo === "orientar" || E.instancia === "docente" ? "" : `<div><label class="campo">Entra em vigor</label><select data-c="vigenciaDias">${[[0, "na data da publicação"], [30, "30 dias após a publicação"], [60, "60 dias após a publicação"], [90, "90 dias após a publicação"]].map(([n, r]) => `<option value="${n}" ${Number(E.vigenciaDias) === n ? "selected" : ""}>${r}</option>`).join("")}</select></div>`}
    </div>
    <label class="campo">Quem assina</label><input type="text" data-c="signatario" value="${esc(E.signatario)}" placeholder="Ex.: Maria da Silva — ${esc(Object.assign({}, TX("signatarios", {}), {conselho:"Presidente do Conselho Universitário",reitoria:"Reitora",proreitoria:"Pró-Reitora de Pós-Graduação",ppg:"Presidente do Colegiado do Programa",curso:"Coordenadora do Curso",extensao:"Coordenadora do Programa de Extensão",docente:"Professora responsável pela disciplina"}, TX("signatarios", {}))[E.instancia]||"cargo")}">
    ${botoes("disp", "rev", "Revisar a minuta")}`;

  /* ---------- consertos sugeridos na revisão ---------- */
  const EX_LIVRE = "O discente que utilizar ferramenta de inteligência artificial generativa na elaboração da dissertação ou tese declarará o uso na seção de metodologia, indicando a ferramenta e a finalidade.";
  function textoVariante(d, i) {
    const v = d && d.variantes[i]; if (!v) return "";
    return M.preencher(v.caput, E) + (v.incisos || []).map((t, k) => "\n" + M.romano(k + 1) + " – " + M.preencher(t, E)).join("") +
      (v.paragrafos || []).map((t, k, a) => "\n" + M.rotuloPar(k + 1, a.length) + " " + M.preencher(t, E)).join("");
  }
  function conserto(p) {
    // devolve { opcoes: [{rotulo, depois, acao}], nota, passo, alvo }
    const d = p.dispId && p.dispId !== "livre" ? M.dispositivo(p.dispId) : null;
    const atual = d ? d.variantes[E.selecoes[d.id]] : null;
    if (p.codigo === "CONFLITO_REDACAO" && p.dispId === "livre") return { opcoes: [{
        rotulo: "Consertar: acrescentar a ressalva ao meu texto",
        depois: (E.livre.texto || "").replace(/\.?\s*$/, "") + ", salvo nos usos de apoio permitidos nesta norma.",
        acao: () => { E.livre.texto = (E.livre.texto || "").replace(/\.?\s*$/, "") + ", salvo nos usos de apoio permitidos nesta norma."; } }],
      nota: "O seu texto proíbe ou desaconselha a redação com IA, mas outro artigo permite a revisão do texto. A ressalva deixa claro que a revisão continua permitida.", passo: "disp", alvo: "livre" };
    if (p.codigo === "DUPLICIDADE") return p.dispId === "livre"
      ? { opcoes: [{ rotulo: "Consertar: apagar o meu texto repetido", depois: "(Fica só o artigo que o app já montou.)", acao: () => { E.livre = { texto: "" }; } }], passo: "disp", alvo: "livre" }
      : { opcoes: d ? [{ rotulo: "Consertar: tirar este artigo repetido", depois: "(Fica só o artigo anterior.)", acao: () => { E.selecoes[d.id] = -1; } }] : [], passo: "disp", alvo: p.dispId };
    if (d && atual && atual.risco) {
      const opcoes = d.variantes.map((v, i) => ({ v, i })).filter(x => !x.v.risco).map(x => ({
        rotulo: "Consertar: " + x.v.rotulo.toLowerCase(), depois: textoVariante(d, x.i), acao: () => { E.selecoes[d.id] = x.i; } }));
      return { opcoes, passo: "disp", alvo: d.id,
        nota: opcoes.length > 1 ? "Há " + opcoes.length + " jeitos certos. Escolha um clicando no botão abaixo do texto que preferir." : "" };
    }
    if (p.codigo === "COMPETENCIA" && d) return { opcoes: [{ rotulo: "Consertar: tirar este artigo da norma", depois: "(O artigo sai. Proponha o tema à instância que tem competência para ele.)", acao: () => { E.selecoes[d.id] = -1; } }], passo: "quem" };
    if (p.dispId === "livre") {
      if (p.codigo === "REVOGACAO_GENERICA") return { opcoes: [], nota: "Escreva, no campo \"Um dispositivo seu\", a norma exata que se revoga, por exemplo: \"Fica revogada a Resolução nº 00/2025 deste Colegiado.\" Se não houver norma anterior, apague o texto.", passo: "disp", alvo: "livre" };
      const ML = TX("modeloLivre", { texto: EX_LIVRE, destinatario: "discente autor da dissertação ou tese", ocasiao: "na entrega da dissertação ou tese", rotulo: "sobre declaração de uso" });
      const opc = [{ rotulo: "Trocar o meu texto por este modelo", depois: ML.texto + "\n(Destinatário: " + ML.destinatario + ". Ocasião: " + ML.ocasiao + ".)",
        acao: () => { E.livre = Object.assign({}, E.livre, { texto: ML.texto, tipo: "obrigacao", destinatario: ML.destinatario, ocasiao: ML.ocasiao }); } }];
      if (p.codigo === "RECOMENDACAO_COM_PENA") opc.unshift({ rotulo: "Consertar: deixar só a recomendação", depois: "(O caráter fica \"Recomendação\". Apague do texto a pena, como \"sob pena de...\".)", acao: () => { E.livre.tipo = "recomendacao"; E.livre.texto = (E.livre.texto || "").replace(/,?\s*sob pena de[^.;]*/i, ""); } });
      return { opcoes: opc, passo: "disp", alvo: "livre", nota: "O modelo abaixo é " + ML.rotulo + " e substitui o seu texto inteiro. Se o seu artigo é sobre outro assunto, prefira corrigir você mesmo: diga quem cumpre, o que fazer e quando, sem palavras vagas." };
    }
    const G = {
      SEM_REVISAO: { opcoes: [{ rotulo: "Consertar: rever a cada 2 anos", depois: "Esta norma será revista a cada 2 anos ou quando houver alteração da política institucional ou das diretrizes nacionais.", acao: () => { E.revisaoAnos = 2; } }], passo: "final" },
      LICENCIATURA: { opcoes: [{ rotulo: "Consertar: incluir a formação docente", depois: textoVariante(M.dispositivo("licenciatura"), 0), acao: () => { E.selecoes.licenciatura = 0; } }], passo: "disp", alvo: "licenciatura" },
      SEM_FUNDAMENTO: { opcoes: [], nota: "Escreva no passo 1, campo \"Fundamento da competência\", o artigo do regimento que dá poder à sua instância. Ex.: \"o art. 12, inciso II, do Regimento Interno do Programa\". Se não souber, pergunte à secretaria.", passo: "quem" },
      PISO_BASICA: { opcoes: [], nota: TX("pisoConserto", ""), passo: "disp" },
      ART27_PRINCIPIOS: { opcoes: [], nota: "No passo 5, inclua os temas que cobrem o que falta: \"Declaração de uso\" (transparência e integridade), \"Responsabilidade intelectual e autoria\" (autoria e responsabilidade), \"Dados pessoais e sensíveis\" (proteção de direitos).", passo: "disp" },
      CONFLITO_REDACAO: { opcoes: [
          { rotulo: "Consertar: recomendar, ressalvando os usos de apoio", depois: textoVariante(M.dispositivo("recomenda_sancao"), 1), acao: () => { E.selecoes.recomenda_sancao = 1; } },
          { rotulo: "Consertar: proibir, ressalvando os usos de apoio", depois: textoVariante(M.dispositivo("recomenda_sancao"), 2), acao: () => { E.selecoes.recomenda_sancao = 2; } }],
        nota: "Os dois artigos precisam dizer a mesma coisa: a revisão do texto com IA é permitida; a redação do texto, não.", passo: "disp", alvo: "recomenda_sancao" },
      CONFLITO_PROVA: { opcoes: [{ rotulo: "Consertar: dizer quem apura e como", depois: textoVariante(M.dispositivo("consequencias"), 0), acao: () => { E.selecoes.consequencias = 0; } }], passo: "disp", alvo: "consequencias" },
      DUPLICIDADE: { opcoes: [{ rotulo: "Consertar: apagar o meu texto repetido", depois: "(Fica só o artigo que o app já montou.)", acao: () => { E.livre = { texto: "" }; } }], passo: "disp", alvo: "livre" },
      PUBLICO_SEM_REGRA: { opcoes: [], nota: TX("publicoConserto", null) || "No passo 5, os temas \"O papel do orientador\", \"Quando o professor usa IA\", \"Sigilo nas bancas\" e \"Uso de IA nas rotinas administrativas\" dirigem-se a públicos diferentes do discente. Ou desmarque o público no passo 1, se a norma não for para ele.", passo: "disp" },
      REMISSAO_SEM_ALVO: { opcoes: [{ rotulo: "Consertar: incluir o capítulo de consequências", depois: textoVariante(M.dispositivo("consequencias"), 0), acao: () => { E.selecoes.consequencias = 0; } }], passo: "disp", alvo: "consequencias" },
      VAZIA: { opcoes: [], nota: "No passo 5, marque ao menos uma opção em algum tema.", passo: "disp" },
      GUIA_NAO_OBRIGA: { opcoes: [], nota: "Nada a fazer, se você quer só orientar. Para obrigar, volte ao passo 3 e escolha \"Regular\".", passo: "modo" },
      ESFERA: { opcoes: [], nota: TX("esferaConserto", "Nada a consertar. Só confira as regras de redação do seu estado ou do estatuto da instituição."), passo: null }
    };
    return G[p.codigo] || { opcoes: [], passo: "disp" };
  }
  function cartaoProblema(p, i) {
    const c = conserto(p);
    const nome = p.nivel === "erro" ? "Problema" : p.nivel === "aviso" ? "Aviso" : "Dica";
    const nPasso = c.passo ? PASSOS.findIndex(x => x[0] === c.passo) + 1 : 0;
    return `<div class="problema p-${p.nivel}"><b>${nome}${p.art ? " no " + esc(p.art.replace(/\.$/, "")) : ""}:</b> ${esc(p.msg)}${p.fonte && p.fonte !== "—" ? `<small>${esc(p.fonte)}</small>` : ""}
      ${p.texto ? `<div class="regra"><b>Como está:</b></div><div class="texto-modelo">${esc(p.texto)}</div>` : ""}
      ${c.nota ? `<div class="regra"><b>O que fazer:</b> ${esc(c.nota)}</div>` : ""}
      ${c.opcoes.map((o, k) => `<div class="regra"><b>${c.opcoes.length > 1 ? "Jeito " + (k + 1) + ":" : "Como poderia ficar:"}</b></div>
        <div class="texto-modelo" style="border-color:var(--verde)">${esc(o.depois)}</div>
        <button class="prim" data-conserto="${i}" data-opcao="${k}">${esc(o.rotulo)}</button>`).join("")}
      ${c.passo ? `<div style="margin-top:8px"><button class="sec" data-ir="${c.passo}" data-alvo="${esc(c.alvo || "")}">Corrigir eu mesmo no passo ${nPasso}</button></div>` : ""}
    </div>`;
  }

  T.rev = () => {
    const { problemas } = M.revisar(E);
    const ord = { erro: 0, aviso: 1, dica: 2 }; problemas.sort((a, b) => ord[a.nivel] - ord[b.nivel]);
    const n = k => problemas.filter(p => p.nivel === k).length;
    return `<h2>7. Revisão do legislador</h2>
    <div class="licao"><b>Como revisar.</b> Leia cada cartão de cima para baixo. Ele mostra o artigo <b>como está</b>, explica o defeito e mostra <b>como poderia ficar</b>. Clique no botão azul <b>Consertar</b> para o app trocar pela redação correta. Se preferir escrever, clique em <b>Corrigir eu mesmo</b>: o app abre o passo certo e mostra um botão para voltar aqui. A lista se atualiza sozinha. <i>A revisão procura defeitos conhecidos; ela não garante que um texto escrito por você esteja certo. Leia a minuta inteira antes de levar.</i><br>
    <span style="color:var(--vermelho)">■</span> <b>Problema:</b> resolva antes de levar ao colegiado (contraria a Resolução, a técnica ou falta parte essencial). <span style="color:var(--laranja)">■</span> <b>Aviso:</b> vale corrigir, mas não impede. <span style="color:var(--acento)">■</span> <b>Dica:</b> sugestão.</div>
    <p><b>${n("erro")}</b> problema(s), <b>${n("aviso")}</b> aviso(s), <b>${n("dica")}</b> dica(s).</p>
    ${problemas.length ? problemas.map((p, i) => cartaoProblema(p, i)).join("") : `<div class="cartao">Nenhum dos defeitos que o app sabe procurar foi encontrado. Siga para o passo 8 e leia a minuta inteira.</div>`}
    ${botoes("final", "minuta", "Ver a minuta")}`;
  };

  T.minuta = () => {
    const { minuta: m, problemas } = M.revisar(E);
    const marcados = new Set(problemas.filter(p => p.nivel === "erro" && p.art).map(p => p.art));
    const bl = M.blocos(m);
    const corpo = `<div class="minuta" id="doc">
      <p class="epi">${esc(m.epigrafe)}</p>
      ${m.ementa ? `<p class="ementa">${esc(m.ementa)}</p>` : ""}
      ${m.preambulo ? `<p>${esc(m.preambulo)}</p>` : ""}
      ${bl.map(b => `<p class="cap">${esc(b.rotulo)}</p>` + b.artigos.map(a => `<div class="art ${marcados.has(a.rotulo) ? "marca" : ""}" id="art-${a.n}">
          <div><b>${esc(a.rotulo)}</b> ${esc(a.caput)}</div>
          ${a.incisos.map((t, i) => `<div class="sub">${M.romano(i + 1)} – ${esc(t)}</div>`).join("")}
          ${a.paragrafos.map((t, i) => `<div class="sub">${esc(M.rotuloPar(i + 1, a.paragrafos.length))} ${esc(t)}</div>`).join("")}
          ${E.verTipos ? `<div class="meta nao-doc">${tipoBadge(a.tipo)} de onde veio: ${esc(a.origem)}${(a.casos || []).length ? " · exemplos reais: " + [...new Map(a.casos.map(id => CASOS.find(x => x.id === id)).filter(Boolean).map(c => [c.fonte + c.juizo, c])).values()].map(c => `<a href="#" data-caso="${c.id}">${esc(c.fonte)} (${esc(JCURTO[c.juizo])})</a>`).join(", ") : ""}${marcados.has(a.rotulo) ? ' · <b style="color:var(--vermelho)">ver revisão</b>' : ""}</div>` : ""}
        </div>`).join("")).join("")}
      <p style="margin-top:28px">${esc(E.signatario || "[Nome e cargo da autoridade signatária]")}</p>
    </div>`;
    return `<h2>8. A minuta</h2>
    <div class="nao-imprime" style="display:flex;gap:10px;flex-wrap:wrap;margin:10px 0">
      <button class="prim" id="baixar" title="Arquivo .docx: abre no Word e no Google Docs">Baixar o arquivo (.docx)</button>
      <button class="sec" id="copiar">Copiar o texto</button>
      <button class="sec" onclick="window.print()">Imprimir ou salvar em PDF</button>
      <label class="opcao"><input type="checkbox" id="verTipos" ${E.verTipos ? "checked" : ""}> mostrar tipo e origem de cada artigo</label>
    </div>
    <p class="ex nao-imprime dica-pdf">No celular: Compartilhar ou Imprimir → Salvar como PDF.</p>
    ${!problemas.filter(p => p.nivel === "erro").length && problemas.filter(p => p.nivel === "aviso").length ? `<div class="problema p-aviso nao-imprime">${problemas.filter(p => p.nivel === "aviso").length} aviso(s) pendente(s): ${esc(problemas.filter(p => p.nivel === "aviso").map(p => (p.msg.length > 80 ? p.msg.slice(0, 80) + "…" : p.msg)).join(" · "))}. <button class="sec" data-ir="rev">Ver no passo 7</button></div>` : ""}
    ${problemas.filter(p => p.nivel === "erro").length ? `<div class="problema p-erro nao-imprime">A revisão ainda aponta ${problemas.filter(p => p.nivel === "erro").length} problema(s)${marcados.size ? ", com " + marcados.size + " artigo(s) marcado(s) em vermelho abaixo" : ""}. <button class="sec" data-ir="rev">Ver e consertar no passo 7</button></div>` : ""}
    ${quadroPublicos(m)}
    ${corpo}
    <div class="licao nao-imprime"><b>E agora?</b> 0) Clique em "Baixar o arquivo (.docx)": ele abre no Word e no Google Docs e leva tudo ("Copiar" leva só o texto da minuta). 1) No arquivo, preencha o número e a data na primeira linha e troque qualquer dado de exemplo. 2) Leve o arquivo à reunião da sua instância: ele traz a minuta, a ficha de tipificação, a conformidade com a Resolução e a nota justificativa. 3) Para mudar algo, volte a qualquer passo pela barra lá em cima; o que você preencheu fica guardado neste computador.</div>
    <p class="aviso-fixo">Minuta de apoio, sem valor jurídico. O arquivo .docx (Word ou Google Docs) traz também a ficha de tipificação, a ficha de conformidade com a Resolução e a nota justificativa.</p>
    ${botoes("rev", null)}`;
  };

  function quadroPublicos(m) {
    const r = M.publicosDaMinuta(m);
    return `<div class="cartao nao-imprime"><b>O que esta norma pede de cada um</b> <span class="ex">(classificação aproximada, pelo destinatário de cada artigo; clique num artigo para conferir)</span>
      <table class="ficha">${D.publicos.map(p => `<tr><td>${esc(p.nome)}</td><td>${r[p.id].length ? r[p.id].map(a => `<span style="white-space:nowrap;display:inline-block;margin:1px 6px 1px 0"><a href="#art-${a.n}">${esc(a.rotulo)}</a> ${tipoBadge(a.tipo)}</span>`).join("") : `<span style="color:var(--laranja)">nenhum artigo${(E.publicos || []).includes(p.id) ? " — e você marcou este público" : ""}</span>`}</td></tr>`).join("")}</table></div>`;
  }
  T.casos = () => `<h2>Casos do acervo</h2>
    <div class="licao">Dispositivos de normas reais de instituições brasileiras, a maioria anterior à Resolução CNE/CP nº 1/2026. Cada um aparece só pelo código da fonte. Para ver o original, abra o caso.</div>
    ${["acerto", "atencao", "falha", "guia"].map(j => {
      const cs = CASOS.filter(c => c.juizo === j); if (!cs.length) return "";
      return `<h3 class="juizo j-${j}">${{ acerto: "Acertos", atencao: "Pontos de atenção", falha: "Falhas", guia: "Orientação, não norma" }[j]}</h3>` +
        cs.map(c => `<div class="cartao caso" data-caso="${c.id}"><b>Fonte ${esc(c.fonte)}</b> ${tipoBadge(c.tipo)}<div class="regra">${esc(c.licao)}</div><div class="regra"><b>Para a sua escolha:</b> ${esc(c.uso || "")}</div></div>`).join("");
    }).join("")}
    <p class="ex"><a href="#" data-ir="metodo">Por que só o código?</a></p>
    ${botoes("inicio", null)}`;

  T.caso = () => {
    const c = CASOS.find(x => x.id === E.casoAtual); if (!c) return T.casos();
    return `<h2>Caso ${esc(c.id)}</h2>
    <p><span class="juizo j-${c.juizo}">${esc({ acerto: "acerto", atencao: "ponto de atenção", falha: "falha", guia: "orientação" }[c.juizo])}</span> ${tipoBadge(c.tipo)}</p>
    <div class="texto-modelo">${esc(c.texto)}</div>
    <div class="licao"><b>O que ensina.</b> ${esc(c.licao)}<br><b>Para a sua escolha:</b> ${esc(c.uso || "")}</div>
    <div class="cartao"><b>Ficha do caso</b> <span class="ex">(classificação da base de pesquisa)</span>
      <table class="ficha">
        <tr><td>Caráter na base</td><td>${esc(c.carater_base)}</td></tr>
        <tr><td>Conteúdo</td><td>${esc(c.acao)}</td></tr>
        <tr><td>Condição</td><td>${esc(c.condicao || "—")}</td></tr>
        <tr><td>Destinatário</td><td>${esc(c.destinatario || "—")}</td></tr>
        <tr><td>Ocasião</td><td>${esc(c.ocasiao || "—")}</td></tr>
        ${c.consequencia ? `<tr><td>Consequência</td><td>${esc(c.consequencia)}</td></tr>` : ""}
        <tr><td>Localização</td><td>${esc((c.localizacao || []).join("; "))}</td></tr>
      </table></div>
    <p class="ex">Consultar o original: <a href="${esc(c.original)}" target="_blank">${esc(c.fonte)}</a> (abre a transcrição completa da fonte).</p>
    <div class="botoes"><button class="sec" data-ir="casos">Todos os casos</button>${E.voltarPara ? `<button class="prim" data-ir="${E.voltarPara}">Voltar ao passo</button>` : ""}</div>`;
  };

  T.metodo = () => `<h2>Nota de método</h2>
    <div class="cartao">
    <p><b>Onde e quando.</b> O Minuta, Mary! foi construído em São Cristóvão, Sergipe, na Universidade Federal de Sergipe (UFS), em novembro de 2026, para o curso de regulação da inteligência artificial no ensino superior oferecido aos alunos do Programa de Pós-Graduação em Desenvolvimento e Meio Ambiente (PRODEMA/UFS). Concepção de Itamar Freitas. Realização: IAEduca.</p>
    <p><b>Por que este app, e por que agora.</b> A Resolução CNE/CP nº 1/2026 manda cada instituição de ensino superior ter política própria de uso de IA (art. 27) e dá doze meses para a adequação (art. 46). Universidades, programas e cursos vão escrever regras agora. As que já existiam, quase todas anteriores à Resolução, repetem os mesmos defeitos: em 61 de 66 documentos analisados há obrigação sem consequência indicada, e são comuns os gatilhos vagos e a mistura de conselho com regra. A margem que a norma nacional deixa às instituições é legítima, mas tem um custo quando o estudante só descobre o critério no momento da avaliação: o que é um uso "relevante", que peso tem um detector, quem revisa uma classificação automática e em que prazo. O app existe para que essas regras sejam escritas com clareza, conhecidas antes da entrega e discutidas por quem vai cumpri-las.</p>
    <p><b>Como foi feito, em seis passos.</b></p>
    <ol>
      <li><b>Procurar antes de construir.</b> Varremos os grandes repositórios abertos (GitHub, GitLab, Codeberg) atrás de apps que redigem leis e normas. Nenhum monta uma minuta sem IA a partir de um acervo, e nenhum ensina a reconhecer o tipo de cada prescrição. Por isso o app foi escrito do zero, aproveitando ideias, não código.</li>
      <li><b>Ler as normas que já existem.</b> Reunimos 78 documentos de instituições brasileiras sobre IA, quase todos anteriores à Resolução de 2026, e analisamos uma a uma as suas 1.527 disposições sobre o tema. O estudo está no artigo de Itamar Freitas "Regulação e orientação do uso da inteligência artificial no trabalho historiográfico: agentes, práticas e instrumentos". Dali saíram os acertos e os erros mais comuns que o app ensina a evitar: obrigação sem quem cumpra, pena com gatilho vago, recomendação com punição, proibição que não diz em quê.</li>
      <li><b>Construir o quadro teórico.</b> Do confronto entre Baldwin, Cave e Lodge (o que é regular), Hood e Margetts (com que meios: informar, mandar, financiar, organizar) e G. H. von Wright (as partes de uma prescrição: caráter, conteúdo, condição, autoridade, destinatário, ocasião) nasceram as sete perguntas do estudo e a ficha que acompanha cada artigo no passo 5.</li>
      <li><b>Pôr a Resolução no centro.</b> A Resolução CNE/CP nº 1/2026 foi lida artigo por artigo e separada em vedado, obrigatório, facultado e deixado à instituição. As dúvidas que ela abre na pós-graduação estão em dois ensaios de Itamar Freitas escritos para o curso: "A regulação do uso de inteligência artificial na pós-graduação" (o uso "relevante", o glossário que prescreve, o detector na apuração) e "Lacunas, ambiguidades e contradições nas regras de uso da IA na pós-graduação" (o que falta, o que admite duas leituras e o que se contradiz no texto).</li>
      <li><b>Escrever como se escreve uma norma.</b> A numeração e a estrutura seguem a Lei Complementar nº 95/1998 e o Decreto nº 12.002/2024. O decreto obriga a administração federal; para instituições estaduais e privadas, vale como boa prática.</li>
      <li><b>Testar com quem vai usar.</b> Uma bateria de testes congelada antes de rodar; 300 dúvidas reais de estudantes, professores e gestores, vindas do app irmão "Pode isso, Jane?"; testes como usuário leigo, no computador e no celular; e avaliadores independentes de uso e de aparência.</li>
    </ol>
    <p><b>Textos que fundamentam o app.</b></p>
    <ul>
      <li>FREITAS, Itamar. Regulação e orientação do uso da inteligência artificial no trabalho historiográfico: agentes, práticas e instrumentos. Texto apresentado na palestra “Inteligência Artificial e Integridade Acadêmica: como utilizar ferramentas de IA de forma crítica, ética e metodologicamente adequada nas diferentes etapas da elaboração de dissertações”, Mestrado Profissional em Rede Nacional em Gestão e Regulação de Recursos Hídricos (ProfÁgua), Universidade Federal de Roraima. Boa Vista, 21 out. 2026. Disponível em: <a href="https://iaeduca.online/textos/regulacao-ia-trabalho-historiografico/" target="_blank" rel="noopener">https://iaeduca.online/textos/regulacao-ia-trabalho-historiografico/</a>. Acesso em: 26 nov. 2026.</li>
      <li>FREITAS, Itamar. A regulação do uso de inteligência artificial na pós-graduação. Ensaio apresentado no Curso IA e Regulamentação no Ensino Superior, Programa de Pós-Graduação em Desenvolvimento e Meio Ambiente, Universidade Federal de Sergipe. São Cristóvão, 25 nov. 2026. Disponível em: <a href="https://iaeduca.online/textos/regulacao-ia-pos-graduacao/" target="_blank" rel="noopener">https://iaeduca.online/textos/regulacao-ia-pos-graduacao/</a>. Acesso em: 26 nov. 2026.</li>
      <li>FREITAS, Itamar. Lacunas, ambiguidades e contradições nas regras de uso da IA na pós-graduação. Ensaio apresentado no Curso IA e Regulamentação no Ensino Superior, Programa de Pós-Graduação em Desenvolvimento e Meio Ambiente, Universidade Federal de Sergipe. São Cristóvão, 25 nov. 2026. Disponível em: <a href="https://iaeduca.online/textos/lacunas-ambiguidades-contradicoes-ia/" target="_blank" rel="noopener">https://iaeduca.online/textos/lacunas-ambiguidades-contradicoes-ia/</a>. Acesso em: 26 nov. 2026.</li>
    </ul>
    <p><b>Quatro trilhas.</b> Na primeira tela, duas perguntas levam a quatro caminhos: educação básica ou superior; norma para a instituição ou para a sala de aula. Cada trilha tem os seus temas, os seus modelos de artigo e a sua bateria de testes; a revisão e a técnica legislativa são as mesmas. Na educação básica, os temas seguem o que a Resolução reserva a crianças e adolescentes (arts. 17 a 24): uma regra para cada etapa, as famílias informadas, os dados de menores protegidos e nenhuma decisão ou nota entregue à máquina. As dúvidas de estudantes, professores, gestores e famílias da educação básica reunidas no "Pode isso, Jane?" serviram de teste.</p>
    <p><b>Os casos.</b> As normas do acervo aparecem como exemplos reais, não como modelos. Para não constranger quem as escreveu, cada exemplo é identificado só pelo código da fonte (F02, F29 etc.), com o critério que o torna acerto ou falha. Quem quiser pode consultar o original a partir do código. Os defeitos apontados são de estrutura, não de intenção.</p>
    <p><b>Limites.</b> A minuta é de apoio e não tem valor jurídico; a redação final cabe à instância competente. A revisão automática procura defeitos conhecidos e não garante que um texto escrito por você esteja certo. As trilhas da educação básica são novas e estão em teste: avise se algo não servir à sua escola.</p>
    <p><b>Declaração de uso de IA.</b> O app não usa inteligência artificial, e o que você escreve fica só no seu aparelho. Ele conta apenas quantas visitas recebe e quantas minutas são montadas, sem cookies e sem nada do que você escreve. Na construção, usamos o Claude (Anthropic) para desenhar, programar e redigir, e o Codex (OpenAI) em tarefas mecânicas e como testador independente. A concepção, o acervo, o quadro teórico e as decisões são de Itamar Freitas.</p>
    </div>${botoes("inicio", null)}`;

  /* ---------- exportação para Word ---------- */
  function exportar() {
    conta("word");
    const bytes = window.Docx.gerar(blocosDoc());
    const blob = new Blob([bytes], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "minuta-mary.docx";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 60000);
  }
  window.__blocosDoc = () => blocosDoc();
  /* Conteúdo do arquivo Word: a minuta, a ficha de tipificação, o quadro dos públicos, a conformidade e a nota justificativa. */
  function blocosDoc() {
    const { minuta: m, problemas } = M.revisar(E);
    const B = [], p = (t, o) => B.push(Object.assign({ p: t }, o || {}));
    const nomeTipo = t => (D.tipos[t] || {}).nome || t;
    p(m.epigrafe, { centro: true, negrito: true });
    if (m.ementa) p(m.ementa, { recuoCm: 8 });
    if (m.preambulo) p(m.preambulo);
    for (const b of M.blocos(m)) {
      p(b.rotulo, { centro: true, negrito: true, titulo: true });
      for (const a of b.artigos) {
        p(a.rotulo + " " + a.caput);
        a.incisos.forEach((t, i) => p(M.romano(i + 1) + " – " + t));
        a.paragrafos.forEach((t, i) => p(M.rotuloPar(i + 1, a.paragrafos.length) + " " + t));
      }
    }
    p("");
    p(E.signatario || "[Nome e cargo da autoridade signatária]", { centro: true });
    p("Ficha de tipificação", { negrito: true, tam: 14, quebraAntes: true, titulo: true });
    B.push({ cabecalho: true, tam: 8, tabela: [["Artigo", "Tipo", "Conteúdo", "Condição", "Destinatário", "Ocasião", "Meio", "De onde veio"]].concat(
      m.artigos.map(a => [a.rotulo, nomeTipo(a.tipo), a.ficha.conteudo, a.ficha.condicao, a.ficha.destinatario, a.ficha.ocasiao, a.ficha.meio,
        a.origem + ((a.casos || []).length ? "; casos " + a.casos.join(", ") : "")])) });
    const rp = M.publicosDaMinuta(m);
    p("O que esta norma pede de cada um", { negrito: true, tam: 14, titulo: true });
    B.push({ tam: 10, tabela: D.publicos.map(pb => [pb.nome, rp[pb.id].length ? rp[pb.id].map(a => a.rotulo + " (" + nomeTipo(a.tipo) + ")").join("; ") : "nenhum artigo"]) });
    p("Ficha de conformidade com a Resolução CNE/CP nº 1/2026", { negrito: true, tam: 14, titulo: true });
    if (problemas.length) problemas.forEach(x => p("• " + x.nivel + (x.art ? " (" + x.art + ")" : "") + ": " + x.msg + " — " + x.fonte));
    else p("Nenhum problema encontrado pela revisão automática.");
    p("Nota justificativa", { negrito: true, tam: 14, titulo: true });
    const dg = D.diagnostico.filter(q => (E.diagnostico[q.id] || "").trim());
    if (dg.length) dg.forEach(q => { p(q.p, { negrito: true }); p(E.diagnostico[q.id]); });
    else p("[Diagnóstico não preenchido.]");
    p("Gerado pelo Minuta, Mary! (IAEduca). Minuta de apoio, sem valor jurídico.", { tam: 9, cinza: true });
    return B;
  }

  /* ---------- demonstração ---------- */
  function demo() {
    if (TX("demo", null)) {
      E = Object.assign(novo(), { modo: "regular", revisaoAnos: 2, vigenciaDias: 0 }, JSON.parse(JSON.stringify(TX("demo"))), { demoAviso: true, tela: "quem",
        diagnostico: Object.fromEntries(D.diagnostico.map(q => [q.id, q.ex])) });
      salvar(); render(); window.scrollTo(0, 0); return;
    }
    E = Object.assign(novo(), { demoAviso: true,
      tela: "quem", instancia: "ppg", esfera: "federal",
      orgao: "Colegiado do Programa de Pós-Graduação em História", instituicao: "Universidade Federal de Exemplo",
      chefia: "a Coordenação do Programa", fundamento: "o art. 12, inciso II, do Regimento Interno do Programa",
      normaSuperior: "Resolução CONSEPE nº 00/2026, que estabelece as normas gerais da pós-graduação",
      signatario: "Fulana de Tal — Presidente do Colegiado",
      diagnostico: Object.fromEntries(D.diagnostico.map(q => [q.id, q.ex])),
      modo: "regular", revisaoAnos: 2, vigenciaDias: 0,
      selecoes: { usos_apoio: 0, usos_reservados: 0, declaracao: 0, responsabilidade: 0, plano_ensino: 0, correcao: 0,
                  detector: 1, bancas: 0, dados_sensiveis: 0, treinamento: 0, formacao: 0, acompanhamento: 0, revisao_humana: 0, consequencias: 0,
                  orientador: 0, docente_uso: 0, tecnicos: 0, apuracao: 0, duvidas: 0, publicacoes: 0, selecao: 0 }
    });
    if (PREF.alcance === "aula") {
      Object.assign(E, { instancia: "docente", orgao: "Disciplina Teoria da História I", chefia: "o docente responsável",
        signatario: "Fulana de Tal — Professora responsável pela disciplina" });
      D.dispositivos.forEach(d => { if (E.selecoes[d.id] >= 0 && !M.aplicavel(d, E)) delete E.selecoes[d.id]; });
    }
    salvar(); render(); window.scrollTo(0, 0);
  }

  /* ---------- eventos ---------- */
  function render() {
    nav();
    const f = T[E.tela] || T.inicio;
    const barra = E.veioDaRev && ["quem", "diag", "modo", "piso", "disp", "final"].includes(E.tela)
      ? `<div class="cartao" style="position:sticky;top:var(--trilha-h,0px);z-index:5;border-color:var(--acento);display:flex;justify-content:space-between;align-items:center;gap:10px">
           <span>Você veio da revisão. Corrija o ponto marcado em laranja e depois volte.</span><button class="prim" data-ir="rev">Voltar à revisão</button></div>` : "";
    const avisoDemo = E.demoAviso && ["quem", "diag", "modo", "piso", "disp", "final"].includes(E.tela) && !E.veioDaRev
      ? `<div class="cartao aviso-exemplo" style="border-color:var(--laranja)"><b>Você está no exemplo.</b> Ele tem um erro de propósito: no passo 5, o tema "${esc(TX("demoTema", "Detectores de texto gerado por IA"))}" está com a opção "Nota zero se o detector acusar". Avance até o passo 7 e veja a revisão apontar e consertar.
          <div class="botoes-exemplo"><button class="sec" id="comecarZero">Começar a minha do zero</button></div></div>` : "";
    const tela = $("#tela");
    tela.innerHTML = barra + avisoDemo + f();
    /* Transição curta só quando a tela muda (não a cada clique numa opção). */
    if (render.ultima !== E.tela) { tela.classList.remove("entra"); void tela.offsetWidth; tela.classList.add("entra"); render.ultima = E.tela; }
    /* Centraliza o passo atual na trilha só na horizontal (sem mexer na rolagem da página). */
    const atual = document.querySelector("nav.trilha .atual"), lista = atual && atual.closest("ol");
    if (lista && lista.scrollWidth > lista.clientWidth) lista.scrollLeft = atual.offsetLeft - (lista.clientWidth - atual.offsetWidth) / 2;
  }
  document.addEventListener("click", ev => {
    const t = ev.target.closest("[data-ir],[data-caso],[data-conserto],[data-nivel],[data-alcance],#instalar,#instalarAgora,#instalarDepois,#comecarZero,#recomendadas,#demo,#zerar,#baixar,#copiar,#exLivre,#exLivreRuim,#limpaLivre");
    if (!t) return;
    if (t.id === "instalarAgora" && pedidoInstalar) { const p = pedidoInstalar; pedidoInstalar = null; p.prompt(); p.userChoice.finally(() => render()); return; }
    if (t.id === "comecarZero") {
      if (E.demoAviso || confirm("Apagar a norma que está preenchida e começar uma nova?")) { E = novo(); E.tela = "quem"; salvar(); render(); window.scrollTo(0, 0); conta("comeco"); }
      return; }
    if (t.id === "instalarDepois") { try { localStorage.setItem(ADIA, String(Date.now())); } catch (e) {} forcarInstalar = false; render(); return; }
    if (t.id === "instalar") { ev.preventDefault(); try { localStorage.removeItem(ADIA); } catch (e) {} forcarInstalar = true; ir("inicio");
      const cx = document.getElementById("caixa-instalar"); if (cx) cx.scrollIntoView({ block: "center" });
      else { const m = document.createElement("div"); m.className = "cartao"; m.textContent = "O Mary já está instalado neste aparelho."; document.querySelector("main").prepend(m); }
      return; }
    if (t.dataset.nivel) { escolherTrilha("nivel", t.dataset.nivel); return; }
    if (t.dataset.alcance) { escolherTrilha("alcance", t.dataset.alcance); return; }
    if (t.dataset.conserto !== undefined) {
      const ord = { erro: 0, aviso: 1, dica: 2 };
      const ps = M.revisar(E).problemas.sort((a, b) => ord[a.nivel] - ord[b.nivel]);
      const c = conserto(ps[Number(t.dataset.conserto)]); const o = c && c.opcoes[Number(t.dataset.opcao || 0)];
      const alvo = ps[Number(t.dataset.conserto)];
      if (o && o.acao) { o.acao(); salvar(); render();
        const ainda = M.revisar(E).problemas.some(x => x.codigo === alvo.codigo && x.art === alvo.art);
        const msg = document.createElement("div"); msg.className = "cartao"; msg.style.borderColor = ainda ? "var(--laranja)" : "var(--verde)";
        msg.textContent = ainda ? "A troca foi feita, mas o alerta continua. Use \"Corrigir eu mesmo\" neste cartão." : "Consertado. A lista abaixo foi atualizada.";
        const h = document.querySelector("main h2"); h && h.after(msg); }
      return;
    }
    if (t.id === "exLivre" && TX("exLivre", null)) { E.livre = Object.assign({}, TX("exLivre")); salvar(); render(); return; }
    if (t.id === "exLivreRuim" && TX("exLivreRuim", null)) { E.livre = Object.assign({}, TX("exLivreRuim")); salvar(); render(); return; }
    if (t.id === "exLivre") { E.livre = { texto: "O orientador registrará, no relatório anual de acompanhamento do orientando, os usos de inteligência artificial declarados nos trabalhos entregues no período.",
      tipo: "obrigacao", cap: "transparencia", destinatario: "orientador", ocasiao: "no relatório anual de acompanhamento" }; salvar(); render(); return; }
    if (t.id === "exLivreRuim") { E.livre = { texto: "Deverá ser evitado o uso inadequado de inteligência artificial, sempre que possível.",
      tipo: "obrigacao", cap: "usos", destinatario: "", ocasiao: "" }; salvar(); render(); return; }
    if (t.id === "limpaLivre") { E.livre = { texto: "" }; salvar(); render(); return; }
    if (t.dataset.caso) { ev.preventDefault(); if (!["casos", "caso"].includes(E.tela)) E.voltarPara = E.tela; E.casoAtual = t.dataset.caso; ir("caso"); return; }
    if (t.dataset.ir) { ev.preventDefault(); if (t.dataset.ir === "casos" && E.tela === "inicio") E.voltarPara = null;
      const destino = t.dataset.ir;
      if (["rev", "minuta", "inicio"].includes(destino)) E.veioDaRev = false;
      else if (E.tela === "rev") E.veioDaRev = true;
      const alvo = t.dataset.alvo; ir(t.dataset.ir);
      if (alvo) { const el = document.getElementById("d-" + alvo); if (el) { el.scrollIntoView({ block: "center" }); el.style.outline = "3px solid var(--laranja)"; } }
      return; }
    if (t.id === "demo") { const temDados = E.orgao || E.instituicao || Object.keys(E.selecoes || {}).length;
      if (!temDados || confirm("O exemplo substitui o que você já preencheu. Continuar?")) demo(); }
    if (t.id === "recomendadas") { D.dispositivos.filter(d => M.aplicavel(d, E)).forEach(d => { if (E.selecoes[d.id] === undefined) { const i = d.variantes.findIndex(v => !v.risco); if (i >= 0) E.selecoes[d.id] = i; } }); salvar(); render(); return; }
    if (t.id === "zerar") { ev.preventDefault(); if (confirm("Apagar tudo o que foi preenchido?")) { E = novo(); salvar(); render(); } }
    if (t.id === "baixar") { exportar(); t.textContent = "Baixado: minuta-mary.docx (veja os downloads do navegador)"; }
    if (t.id === "copiar") { const { minuta } = M.revisar(E); const txt = M.textoMinuta(minuta, E);
      const falhou = () => { t.textContent = "Não consegui copiar: selecione o texto da minuta e use Ctrl+C"; };
      if (navigator.clipboard) navigator.clipboard.writeText(txt).then(() => { t.textContent = "Copiado (só o texto da minuta)"; }, falhou); else falhou(); }
  });
  document.addEventListener("change", ev => {
    const t = ev.target;
    if (t.name === "inst") { E.instancia = t.value; const tirados = [];
      D.dispositivos.forEach(d => { if (E.selecoes[d.id] >= 0 && !M.aplicavel(d, E)) { tirados.push(d.titulo); delete E.selecoes[d.id]; } });
      salvar(); render();
      if (tirados.length) { const m = document.createElement("div"); m.className = "cartao"; m.style.borderColor = "var(--laranja)";
        m.textContent = "Ao trocar de instância, tirei da norma o que ela não pode tratar: " + tirados.join("; ") + "."; document.querySelector("main h2").after(m); }
      return; }
    if (t.name === "modo") { E.modo = t.value; salvar(); render(); return; }
    if (t.dataset.pub) { E.publicos = (E.publicos || []).filter(x => x !== t.dataset.pub); if (t.checked) E.publicos.push(t.dataset.pub); salvar(); return; }
    if (t.dataset.disp) { const v = Number(t.value); E.selecoes[t.dataset.disp] = v; salvar(); render(); return; }
    if (t.id === "verTipos") { E.verTipos = t.checked; salvar(); render(); return; }
    if (t.dataset.c === "etapa") { E.etapa = t.value; D.dispositivos.forEach(d => { if (E.selecoes[d.id] !== undefined && !M.aplicavel(d, E)) delete E.selecoes[d.id]; }); salvar(); render(); return; }
    if (t.dataset.c) { E[t.dataset.c] = t.type === "checkbox" ? t.checked : t.value; salvar(); if (t.tagName === "SELECT" || t.type === "checkbox") render(); return; }
    if (t.dataset.l) { E.livre[t.dataset.l] = t.value; salvar(); return; }
  });
  document.addEventListener("input", ev => {
    const t = ev.target;
    if (t.dataset.c && t.type === "text") { E[t.dataset.c] = t.value; salvar(); }
    if (t.dataset.d) { E.diagnostico[t.dataset.d] = t.value; salvar(); }
    if (t.dataset.l) { E.livre[t.dataset.l] = t.value; salvar(); }
  });
  render();
  conta("visita");
  contaPrimeiraAbertura();
  if (location.protocol !== "file:") fetch("conta.php", { cache: "no-store" }).then(r => r.ok ? r.text() : "").then(t => {
    const n = parseInt(t, 10), alvo = document.getElementById("visitas");
    if (!alvo || !(n > 0)) return;
    alvo.textContent = " · " + n.toLocaleString("pt-BR") + (n === 1 ? " visita" : " visitas"); alvo.hidden = false;
  }).catch(() => {});
})();
