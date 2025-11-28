// src/exercicios.ts

// Exercício 1 — Classe ContaBancaria
export class ContaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string, saldo: number = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }

    sacar(valor: number) {
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente.");
        }
        this.saldo -= valor;
    }
}

// Exercício 2 — Classe Livro
export class Livro {
    titulo: string;
    autor: string;
    paginas: number;
    lido: boolean = false;

    constructor(titulo: string, autor: string, paginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }

    marcarComoLido() {
        this.lido = true;
    }
}

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

// Exercício 4 — Classe Temperatura
export class Temperatura {
    valor: number; 

    constructor(valor: number) {
        this.valor = valor;
    }

    paraFahrenheit() {
        return (this.valor * 9/5) + 32;
    }

    paraKelvin() {
        return this.valor + 273.15;
    }
}

// Exercício 5 — Classe Agenda
export class Agenda {
    compromissos: string[] = [];

    adicionar(compromisso: string) {
        this.compromissos.push(compromisso);
    }

    listar() {
        return [...this.compromissos];
    }
}
