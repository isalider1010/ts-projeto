"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
// Exercício 3 — Classe Produto
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    valorEmEstoque() {
        return this.preco * this.quantidade;
    }
}
exports.Produto = Produto;
