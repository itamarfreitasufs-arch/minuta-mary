# Contador anônimo (opcional)

Para publicar o contador junto com o app, copie `conta.php`, `painel.php` e a pasta `contagem/` para a mesma pasta do `index.html` no servidor (PHP 8).

- `conta.php` grava só o dia e o tipo de evento (visita, começo, minuta, word) em `contagem/AAAA-MM.json`. Não grava IP, cookie, navegador nem nada do que a pessoa escreve.
- `painel.php?k=CHAVE` mostra os totais. Crie `contagem/chave.txt` com uma chave longa e aleatória. Essa chave nunca deve ir para o repositório.
- `contagem/.htaccess` impede abrir a pasta pelo navegador.

Sem PHP, o app funciona normalmente e apenas não mostra o número de visitas.
