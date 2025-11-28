"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agenda = void 0;
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
