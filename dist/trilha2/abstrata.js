"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operario = exports.Gerente = exports.Funcionario = void 0;
// Exercício 2 – Classes de Funcionário
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
// -------------------------
// Exercício 2 – Figuras
// -------------------------
class FiguraGeometrica {
}
class Circulo extends FiguraGeometrica {
    constructor(raio) {
        super();
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * this.raio * this.raio;
    }
}
class Quadrado extends FiguraGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
}
class Triangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}
function imprimirAreas(figuras) {
    figuras.forEach(f => {
        console.log("Área:", f.calcularArea());
    });
}
// Teste
imprimirAreas([
    new Circulo(5),
    new Quadrado(4),
    new Triangulo(6, 3)
]);
