"use strict";
// src/exercicios.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agenda = exports.Temperatura = exports.Produto = exports.Livro = exports.ContaBancaria = void 0;
// Exercício 1 — Classe ContaBancaria
class ContaBancaria {
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    sacar(valor) {
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente.");
        }
        this.saldo -= valor;
    }
}
exports.ContaBancaria = ContaBancaria;
// Exercício 2 — Classe Livro
class Livro {
    constructor(titulo, autor, paginas) {
        this.lido = false;
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }
    marcarComoLido() {
        this.lido = true;
    }
}
exports.Livro = Livro;
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
// Exercício 4 — Classe Temperatura
class Temperatura {
    constructor(valor) {
        this.valor = valor;
    }
    paraFahrenheit() {
        return (this.valor * 9 / 5) + 32;
    }
    paraKelvin() {
        return this.valor + 273.15;
    }
}
exports.Temperatura = Temperatura;
// Exercício 5 — Classe Agenda
class Agenda {
    constructor() {
        this.compromissos = [];
    }
    adicionar(compromisso) {
        this.compromissos.push(compromisso);
    }
    listar() {
        return [...this.compromissos];
    }
}
exports.Agenda = Agenda;
