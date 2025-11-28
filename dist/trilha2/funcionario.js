"use strict";
// Exercício 5
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operario = exports.Gerente = exports.Funcionario = void 0;
// Aqui está a única versão válida das classes
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
exports.Funcionario = Funcionario;
class Gerente extends Funcionario {
    calcularBonus() {
        return this.getSalario() * 0.10;
    }
}
exports.Gerente = Gerente;
class Operario extends Funcionario {
    calcularBonus() {
        return this.getSalario() * 0.05;
    }
}
exports.Operario = Operario;
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
