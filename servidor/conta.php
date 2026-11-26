<?php
// Minuta, Mary! Contador de usos.
// Grava só: dia e tipo de evento (visita, começo, minuta pronta, Word baixado).
// Não grava IP, navegador, hora, cookie nem nada do que a pessoa escreve.
// Os totais ficam em contagem/AAAA-MM.json.
header('Cache-Control: no-store');
header('Content-Type: text/plain; charset=utf-8');
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  $total = 0;
  foreach (glob(__DIR__ . '/contagem/*.json') ?: [] as $arq) {
    $d = json_decode((string) @file_get_contents($arq), true);
    if (is_array($d)) foreach ($d as $chaves) $total += (int) ($chaves['visita'] ?? 0);
  }
  echo $total;
  exit;
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); exit; }
$eventos = ['visita', 'comeco', 'minuta', 'word'];
$e = $_POST['e'] ?? '';
if (!in_array($e, $eventos, true)) { http_response_code(400); exit; }
date_default_timezone_set('America/Sao_Paulo');
$dia = date('Y-m-d');
$arquivo = __DIR__ . '/contagem/' . date('Y-m') . '.json';
$h = @fopen($arquivo, 'c+');
if (!$h) { http_response_code(500); exit; }
if (flock($h, LOCK_EX)) {
  $dados = json_decode(stream_get_contents($h), true);
  if (!is_array($dados)) $dados = [];
  if (!isset($dados[$dia])) $dados[$dia] = [];
  $dados[$dia][$e] = ($dados[$dia][$e] ?? 0) + 1;
  ftruncate($h, 0);
  rewind($h);
  fwrite($h, json_encode($dados, JSON_PRETTY_PRINT));
  fflush($h);
  flock($h, LOCK_UN);
}
fclose($h);
http_response_code(204);
