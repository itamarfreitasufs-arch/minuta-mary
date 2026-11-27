/* Minuta, Mary! — gerador de .docx (Word) sem bibliotecas externas.
   Recebe uma lista de blocos e devolve os bytes de um arquivo .docx de verdade (Office Open XML, zip sem compressão).
   Bloco de parágrafo: { p: "texto", centro, negrito, italico, recuoCm, tam (pt), cinza, quebraAntes, titulo }
   Bloco de tabela:   { tabela: [["c1", "c2"], ...], cabecalho: true, tam (pt) }  */
(function (G) {
  const enc = new TextEncoder();
  const limpa = s => String(s == null ? "" : s).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "");
  const x = s => limpa(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  function runs(texto, o) {
    const rpr = (o.negrito ? "<w:b/>" : "") + (o.italico ? "<w:i/>" : "") + (o.cinza ? '<w:color w:val="666666"/>' : "") +
      (o.tam ? `<w:sz w:val="${Math.round(o.tam * 2)}"/><w:szCs w:val="${Math.round(o.tam * 2)}"/>` : "");
    return String(texto == null ? "" : texto).split("\n").map((linha, i) =>
      `<w:r>${rpr ? "<w:rPr>" + rpr + "</w:rPr>" : ""}${i ? "<w:br/>" : ""}<w:t xml:space="preserve">${x(linha)}</w:t></w:r>`).join("");
  }
  function par(o) {
    const ppr = (o.quebraAntes ? "<w:pageBreakBefore/>" : "") + (o.titulo ? '<w:keepNext/><w:spacing w:before="240" w:after="120"/>' : '<w:spacing w:after="120"/>') +
      (o.recuoCm ? `<w:ind w:left="${Math.round(o.recuoCm * 567)}"/>` : "") + `<w:jc w:val="${o.centro ? "center" : "both"}"/>`;
    return `<w:p><w:pPr>${ppr}</w:pPr>${runs(o.p, o)}</w:p>`;
  }
  const LARGURA = 9638; // A4 (11906) menos margens de 2 cm (1134 de cada lado), em vigésimos de ponto
  function tabela(o) {
    const n = Math.max(...o.tabela.map(l => l.length)), w = Math.floor(LARGURA / n), tam = o.tam || 9;
    const borda = t => `<w:${t} w:val="single" w:sz="4" w:space="0" w:color="999999"/>`;
    return `<w:tbl><w:tblPr><w:tblW w:w="${LARGURA}" w:type="dxa"/><w:tblBorders>${["top", "left", "bottom", "right", "insideH", "insideV"].map(borda).join("")}</w:tblBorders>
      <w:tblLayout w:type="fixed"/><w:tblCellMar><w:left w:w="70" w:type="dxa"/><w:right w:w="70" w:type="dxa"/></w:tblCellMar></w:tblPr>
      <w:tblGrid>${Array.from({ length: n }, () => `<w:gridCol w:w="${w}"/>`).join("")}</w:tblGrid>` +
      o.tabela.map((linha, i) => `<w:tr>${i === 0 && o.cabecalho ? "<w:trPr><w:tblHeader/></w:trPr>" : ""}` +
        Array.from({ length: n }, (_, k) => `<w:tc><w:tcPr><w:tcW w:w="${w}" w:type="dxa"/></w:tcPr><w:p><w:pPr><w:spacing w:after="0"/></w:pPr>${runs(linha[k] == null ? "" : linha[k], { tam, negrito: i === 0 && o.cabecalho })}</w:p></w:tc>`).join("") +
        `</w:tr>`).join("") + `</w:tbl><w:p/>`;
  }

  function arquivos(blocos) {
    const corpo = blocos.map(b => b.tabela ? tabela(b) : par(b)).join("");
    return {
      "[Content_Types].xml": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/></Types>`,
      "_rels/.rels": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/></Relationships>`,
      "docProps/core.xml": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:title>Minuta</dc:title><dc:creator>Minuta, Mary! (IAEduca)</dc:creator><dcterms:created xsi:type="dcterms:W3CDTF">${new Date().toISOString().slice(0, 19)}Z</dcterms:created></cp:coreProperties>`,
      "word/_rels/document.xml.rels": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`,
      "word/styles.xml": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:eastAsia="Times New Roman" w:cs="Times New Roman"/><w:sz w:val="24"/><w:szCs w:val="24"/><w:lang w:val="pt-BR"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after="120" w:line="276" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/></w:style></w:styles>`,
      "word/document.xml": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>${corpo}<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1134" w:right="1134" w:bottom="1134" w:left="1134" w:header="709" w:footer="709" w:gutter="0"/></w:sectPr></w:body></w:document>`
    };
  }

  /* zip sem compressão (método 0), com CRC-32 e nomes em UTF-8 */
  const TAB = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
  const crc32 = b => { let c = 0xFFFFFFFF; for (let i = 0; i < b.length; i++) c = TAB[(c ^ b[i]) & 255] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; };
  function zip(arqs) {
    const partes = [], central = []; let pos = 0;
    const u16 = n => [n & 255, (n >>> 8) & 255], u32 = n => [n & 255, (n >>> 8) & 255, (n >>> 16) & 255, (n >>> 24) & 255];
    for (const [nome, texto] of Object.entries(arqs)) {
      const nb = enc.encode(nome), dados = enc.encode(texto), crc = crc32(dados);
      const comum = [...u16(20), ...u16(0x0800), ...u16(0), ...u16(0), ...u16(0x21), ...u32(crc), ...u32(dados.length), ...u32(dados.length), ...u16(nb.length), ...u16(0)];
      const local = new Uint8Array([...u32(0x04034b50), ...comum]);
      partes.push(local, nb, dados);
      central.push(new Uint8Array([...u32(0x02014b50), ...u16(20), ...comum, ...u16(0), ...u16(0), ...u16(0), ...u32(0), ...u32(pos)]), nb);
      pos += local.length + nb.length + dados.length;
    }
    const tamCentral = central.reduce((s, p) => s + p.length, 0), n = Object.keys(arqs).length;
    const fim = new Uint8Array([...u32(0x06054b50), ...u16(0), ...u16(0), ...u16(n), ...u16(n), ...u32(tamCentral), ...u32(pos), ...u16(0)]);
    const tudo = [...partes, ...central, fim], out = new Uint8Array(tudo.reduce((s, p) => s + p.length, 0));
    let o = 0; for (const p of tudo) { out.set(p, o); o += p.length; }
    return out;
  }
  G.Docx = { gerar: blocos => zip(arquivos(blocos)), _arquivos: arquivos };
})(typeof window !== "undefined" ? window : globalThis);
