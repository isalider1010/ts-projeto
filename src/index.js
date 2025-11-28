"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ContaBancaria_1 = require("./classes/ContaBancaria");
const Livro_1 = require("./classes/Livro");
const Produto_1 = require("./classes/Produto");
const Temperatura_1 = require("./classes/Temperatura");
const Agenda_1 = require("./classes/Agenda");
// Testando ContaBancaria
const conta = new ContaBancaria_1.ContaBancaria("Maria", 100);
conta.depositar(50);
conta.sacar(30);
console.log(conta);
// Testando Livro
const livro = new Livro_1.Livro("TS Básico", "Ana", 200);
livro.marcarComoLido();
console.log(livro);
// Testando Produto
const prod = new Produto_1.Produto("Teclado", 150, 3);
console.log(prod.valorTotalEstoque());
// Testando Temperatura
const temp = new Temperatura_1.Temperatura(25);
console.log(temp.paraFahrenheit());
console.log(temp.paraKelvin());
// Testando Agenda
const agenda = new Agenda_1.Agenda();
agenda.adicionar("Estudar TypeScript");
agenda.listar();