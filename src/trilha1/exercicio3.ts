// Exercício 3 — Classe Produto
export class Produto {
    nome: string;
    preco: number;
    quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    valorEmEstoque() {
        return this.preco * this.quantidade;
    }
}

