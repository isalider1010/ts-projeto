

export interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}

export class BibliotecaGestao {
    private livros: LivroBiblioteca[];

    constructor() {
        this.livros = [];
    }

    public adicionarLivro(livro: LivroBiblioteca): void {
        this.livros.push(livro);
    }

   
    public filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.genero === genero);
    }

    
    public buscarPorAutor(autor: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.autor === autor);
    }

    
    public obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.livros
            .filter(livro => livro.disponivel)
            .sort((a, b) => a.titulo.localeCompare(b.titulo, 'pt', { sensitivity: 'base' }));
    }
}


const biblioteca = new BibliotecaGestao();
biblioteca.adicionarLivro({ titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', genero: 'Fantasia', disponivel: true });
biblioteca.adicionarLivro({ titulo: '1984', autor: 'George Orwell', genero: 'Distopia', disponivel: false });
biblioteca.adicionarLivro({ titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', genero: 'Fantasia', disponivel: true });

console.log(JSON.stringify(biblioteca.filtrarPorGenero('Fantasia'), null, 2));
console.log(JSON.stringify(biblioteca.buscarPorAutor('George Orwell'), null, 2));
console.log(JSON.stringify(biblioteca.obterLivrosDisponiveisOrdenados(), null, 2));