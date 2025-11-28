"use strict";
// Exercício 2
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
