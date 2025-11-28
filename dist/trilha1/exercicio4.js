"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Temperatura = void 0;
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
