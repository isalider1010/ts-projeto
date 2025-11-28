interface ProdutoLoja {
    codigo: number;
    nome: string;
}

class Loja {
    produtos: ProdutoLoja[];

    constructor() {
        this.produtos = [];
    }

   
    adicionarProduto(produto: ProdutoLoja) {
        this.produtos.push(produto);
    }

    
    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        return this.produtos.find(produto => produto.codigo === codigo);
    }
}


const minhaLoja = new Loja();
minhaLoja.adicionarProduto({ codigo: 1, nome: "Bolo de Chocolate" });
minhaLoja.adicionarProduto({ codigo: 2, nome: "Biscoito" });

console.log(minhaLoja.buscarProdutoPorCodigo(1)); 
console.log(minhaLoja.buscarProdutoPorCodigo(3)); 