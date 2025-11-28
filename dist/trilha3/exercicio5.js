"use strict";
// Exercício 5
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    getSalario() {
        return this.salario;
    }
    getNome() {
        return this.nome;
    }
}
class Gerente extends Funcionario {
    calcularBonus() {
        return this.getSalario() * 0.10;
    }
}
class Operario extends Funcionario {
    calcularBonus() {
        return this.getSalario() * 0.05;
    }
}
function calcularSalarioComBonus(funcionarios) {
    funcionarios.forEach(f => {
        const bonus = f.calcularBonus();
        const total = f.getSalario() + bonus;
        console.log(`${f.getNome()} - Salário Final: R$${total}`);
    });
}
// Teste
calcularSalarioComBonus([
    new Gerente("Ana", 5000),
    new Operario("João", 3000)
]);
