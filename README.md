# Minuta, Mary! — Writing AI policies | Escola de legisladores

> **Versão em teste (1.1, 26 de novembro de 2026).** Novas versões podem sair a qualquer momento. Avise se algo não servir à sua instituição.

Protocolo de **Itamar Freitas** (Universidade Federal de Sergipe), preparado com assistência de IA.

Uma escola de legisladores para escrever normas sobre uso de IA na educação, com base na Resolução CNE/CP nº 1/2026. Quatro trilhas: educação básica ou superior, para a instituição ou para a sala de aula. O app funciona sem IA, com regras locais: nada do que você escreve sai do aparelho. A minuta é apoio educacional, sem valor jurídico, para revisão pela instância competente.

[App publicado](https://iaeduca.online/mary/).

## Como usar e testar

Abra `app/index.html` no navegador ou sirva a pasta `app/` em qualquer servidor estático. Veja [COMO_USAR.md](COMO_USAR.md).

Baterias congeladas (o hash de cada uma está em `app/testes/HASH*.txt`):

- `app/testes/index.html`: educação superior. Esperado **26/27**; a falha 27 é defeito do próprio teste, conforme [RELATORIO_rodada1.txt](app/testes/RELATORIO_rodada1.txt).
- `app/testes/basica.html`: educação básica, instituição. Esperado **25/27**; as falhas 01 e 23 vêm do mesmo defeito do teste (a busca por "a a " acha "revista a cada").
- `app/testes/basica_aula.html`: educação básica, sala de aula. Esperado **14/14**.

## Estrutura

- `app/`: interface e motor; `dados/conteudo.js` (superior), `dados/basica.js` (escola, rede, secretaria, conselho de educação), `dados/basica_aula.js` (professor da educação básica) e `dados/casos.js`.
- `app/testes/`: baterias congeladas, hashes e relatórios; `cobertura/` (superior) e `cobertura_basica/` (534 dúvidas da educação básica) contêm os resumos.
- `protocolo.md`: fundamentos, método e limites.
- Raiz: documentação, licenças, citação e arquivos de integridade.

## Licença e citação

© 2026 Itamar Freitas. Código sob MIT; textos e dados autorais sob CC BY 4.0. Trechos de terceiros conservam seu regime próprio. Veja [LICENSE.md](LICENSE.md), [AVISOS_DE_TERCEIROS.md](AVISOS_DE_TERCEIROS.md) e [CITATION.cff](CITATION.cff) para citar.

## Limites

Versão em teste. As trilhas da educação básica são as mais novas. A revisão automática detecta defeitos conhecidos e não garante correção jurídica ou integral do texto. Word usa HTML em `.doc`. Firefox, Safari do iPhone e celular físico em rede lenta não foram testados. O acervo completo não integra o pacote.

Confira a integridade com `python verificar_integridade.py`.
