"""Confere os arquivos do pacote contra SHA256SUMS.txt (Python 3)."""
from pathlib import Path
import hashlib
import sys


def main():
    raiz = Path(__file__).resolve().parent
    manifesto = raiz / "SHA256SUMS.txt"
    erros = []
    listados = set()
    try:
        linhas = manifesto.read_text(encoding="utf-8").splitlines()
        for numero, linha in enumerate(linhas, 1):
            esperado, nome = linha.split("  ", 1)
            caminho = (raiz / nome).resolve()
            if (len(esperado) != 64 or any(c not in "0123456789abcdef" for c in esperado)
                    or not caminho.is_relative_to(raiz) or nome in listados
                    or nome == "SHA256SUMS.txt"):
                raise ValueError(f"linha inválida: {numero}")
            listados.add(nome)
            if not caminho.is_file():
                erros.append(f"Ausente: {nome}")
            elif hashlib.sha256(caminho.read_bytes()).hexdigest() != esperado:
                erros.append(f"Divergente: {nome}")
        existentes = {p.relative_to(raiz).as_posix() for p in raiz.rglob("*") if p.is_file()
                      and p != manifesto and ".git" not in p.relative_to(raiz).parts}
        erros.extend(f"Não listado: {nome}" for nome in sorted(existentes - listados))
        if not listados:
            erros.append("Manifesto vazio")
    except (OSError, ValueError) as exc:
        erros.append(f"Falha ao ler manifesto: {exc}")
    if erros:
        print("\n".join(erros))
        return 1
    print(f"Integridade OK: {len(listados)} arquivos conferidos.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
