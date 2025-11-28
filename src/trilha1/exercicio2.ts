// Exercício 2 — Classe Livro
export class Livro {
    titulo: string;
    autor: string;
    paginas: number;
    lido: boolean = false;

    constructor(titulo: string, autor: string, paginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }

    marcarComoLido() {
        this.lido = true;
    }
}

