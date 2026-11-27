<?php
// Minuta, Mary! Painel do contador. Abre só com a chave guardada em contagem/chave.txt:
// painel.php?k=CHAVE
header('Cache-Control: no-store');
header('X-Robots-Tag: noindex, nofollow');
header('Content-Type: text/html; charset=utf-8');
$chave = @trim((string) file_get_contents(__DIR__ . '/contagem/chave.txt'));
if (strlen($chave) < 12 || !hash_equals($chave, (string) ($_GET['k'] ?? ''))) { http_response_code(404); echo 'Não encontrado.'; exit; }
$dias = [];
foreach (glob(__DIR__ . '/contagem/*.json') ?: [] as $arq) {
  $d = json_decode((string) file_get_contents($arq), true);
  if (is_array($d)) $dias += $d;
}
krsort($dias);
$nomes = ['visita' => 'Visitas', 'comeco' => 'Começaram uma norma', 'minuta' => 'Chegaram à minuta', 'word' => 'Baixaram em Word'];
$tot = array_fill_keys(array_keys($nomes), 0);
foreach ($dias as $c) foreach ($nomes as $k => $_) $tot[$k] += (int) ($c[$k] ?? 0);
$n = fn($x) => number_format($x, 0, ',', '.');
?><!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow"><title>Contador do Minuta, Mary!</title>
<style>body{font:15px/1.5 system-ui,sans-serif;max-width:760px;margin:24px auto;padding:0 16px;color:#222}table{border-collapse:collapse;width:100%}td,th{border-bottom:1px solid #ddd;padding:6px;text-align:right}td:first-child,th:first-child{text-align:left}</style></head><body>
<h1>Contador do Minuta, Mary!</h1>
<p>Sem cookies e sem nada do que a pessoa escreve: só o dia e o tipo de evento.</p>
<table><tr><?php foreach ($nomes as $k => $r) echo '<th>' . $r . '</th>'; ?></tr><tr><?php foreach ($nomes as $k => $r) echo '<td>' . $n($tot[$k]) . '</td>'; ?></tr></table>
<h2>Por dia</h2>
<table><tr><th>Dia</th><?php foreach ($nomes as $r) echo '<th>' . $r . '</th>'; ?></tr>
<?php foreach ($dias as $dia => $c) { echo '<tr><td>' . htmlspecialchars($dia) . '</td>'; foreach ($nomes as $k => $_) echo '<td>' . $n((int) ($c[$k] ?? 0)) . '</td>'; echo '</tr>'; } ?>
</table>
<?php $inst = ['inst_android' => 'Instalaram pelo botão (Android)', 'app_android' => 'Abriram como app pela 1ª vez (Android)', 'app_iphone' => 'Abriram como app pela 1ª vez (iPhone)'];
$ti = array_fill_keys(array_keys($inst), 0); foreach ($dias as $c) foreach ($inst as $k => $_) $ti[$k] += (int) ($c[$k] ?? 0); ?>
<h2>Instalações no celular (aproximado)</h2>
<p>O iPhone não avisa quando alguém instala: lá se conta a primeira vez que o app é aberto pelo ícone, uma vez por aparelho. No Android contam-se as duas coisas, e a primeira abertura serve de conferência. Quem apaga os dados do navegador pode ser contado de novo; quem instala e nunca abre não é contado no iPhone.</p>
<table><tr><?php foreach ($inst as $r) echo '<th>' . $r . '</th>'; ?></tr><tr><?php foreach ($inst as $k => $_) echo '<td>' . $n($ti[$k]) . '</td>'; ?></tr></table>
</body></html>
