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

