"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
// Exercício 2 — Classe Livro
class Livro {
    constructor(titulo, autor, paginas) {
        this.lido = false;
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }
    marcarComoLido() {
        this.lido = true;
    }
}
exports.Livro = Livro;
