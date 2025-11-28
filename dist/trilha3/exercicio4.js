"use strict";
// Exercício 4
class Animal {
    constructor() {
        this.energia = 50;
    }
    alterarEnergia(valor) {
        this.energia += valor;
    }
    comer() {
        this.alterarEnergia(10);
    }
    statusEnergia() {
        console.log("Energia atual:", this.energia);
    }
}
class Leao extends Animal {
    comer() {
        this.alterarEnergia(-20);
        console.log("O leão caçou...");
        super.comer();
    }
}
class Passaro extends Animal {
    comer() {
        console.log("O pássaro está bicando sementes...");
        super.comer();
    }
}
// Teste
const leao = new Leao();
const passaro = new Passaro();
leao.comer();
leao.statusEnergia();
passaro.comer();
passaro.statusEnergia();
