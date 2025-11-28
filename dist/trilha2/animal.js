"use strict";
// Exercicio 4: Encapsulamento e Polimorfismo em Animais
class Animal {
    constructor(nome, energiaInicial = 10) {
        this.nome = nome;
        this.energia = energiaInicial;
    }
    // Método para acessar energia (getter)
    getEnergia() {
        return this.energia;
    }
    // Método para modificar energia (setter)
    setEnergia(novaEnergia) {
        this.energia = novaEnergia;
    }
    comer(alimento = 5) {
        console.log(`${this.nome} está comendo...`);
        this.setEnergia(this.getEnergia() + alimento);
    }
    statusEnergia() {
        console.log(`${this.nome} - Nível de Energia: ${this.energia}`);
    }
}
class Leao extends Animal {
    comer(alimento = 15) {
        const custoCaca = 5;
        console.log(`O Leão está caçando (-${custoCaca} energia)...`);
        // Gasta energia antes de comer
        this.setEnergia(this.getEnergia() - custoCaca);
        if (this.getEnergia() >= 0) {
            // Chama o método comer da superclasse para recuperar energia
            super.comer(alimento);
            console.log(`Caçada bem-sucedida! Leão recuperou ${alimento} de energia.`);
        }
        else {
            console.log("Caçada falhou por exaustão.");
        }
    }
}
class Passaro extends Animal {
    comer(alimento = 3) {
        // Chama o método comer da superclasse
        super.comer(alimento);
        console.log(`O Pássaro se alimentou e ganhou ${alimento} de energia.`);
    }
}
// Instanciando e testando
console.log("\n--- Ex. 4: Comportamento dos Animais ---");
const leao = new Leao("Simba", 20);
const passaro = new Passaro("Piu", 8);
leao.statusEnergia();
passaro.statusEnergia();
leao.comer();
passaro.comer();
leao.statusEnergia();
