interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
}

class Biblioteca {
    livros: Livro[];

    constructor() {
        this.livros = [];
    }

    
    adicionarLivro(livro: Livro) {
        this.livros.push(livro);
    }

    
    buscarLivrosDisponiveis(): Livro[] {
        return this.livros.filter(livro => livro.disponivel);
    }
}


const biblioteca = new Biblioteca();
biblioteca.adicionarLivro({ titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", disponivel: true });
biblioteca.adicionarLivro({ titulo: "1984", autor: "George Orwell", disponivel: false });
biblioteca.adicionarLivro({ titulo: "Dom Quixote", autor: "Miguel de Cervantes", disponivel: true });

console.log(biblioteca.buscarLivrosDisponiveis());