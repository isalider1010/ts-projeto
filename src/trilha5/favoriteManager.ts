

abstract class FavoriteManager {
    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
    private favorites: string[] = [];

    addFavorite(item: string): void {
        if (!this.favorites.includes(item)) {
            this.favorites.push(item);
            this.favorites.sort(); 
        }
    }

    getFavorites(): string[] {
        return [...this.favorites];
    }
}

class BooksFavoriteManager extends FavoriteManager {
    private favorites: string[] = [];

    addFavorite(item: string): void {
     
        this.favorites.unshift(item);
    }

    getFavorites(): string[] {
        return [...this.favorites];
    }
}


const moviesManager = new MoviesFavoriteManager();
moviesManager.addFavorite("Matrix");
moviesManager.addFavorite("Inception");
moviesManager.addFavorite("Matrix");
console.log(moviesManager.getFavorites()); 

const booksManager = new BooksFavoriteManager();
booksManager.addFavorite("1984");
booksManager.addFavorite("O Senhor dos Anéis");
console.log(booksManager.getFavorites()); 