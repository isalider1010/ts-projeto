

abstract class Inventory {
    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
    abstract getInventory(): Record<string, number>;
}

class WarehouseInventory extends Inventory {
    private items: Record<string, number> = {};

    addItem(item: string, quantity: number): void {
        if (this.items[item]) {
            this.items[item] += quantity;
        } else {
            this.items[item] = quantity;
        }
    }

    removeItem(item: string): void {
        delete this.items[item];
    }

    getInventory(): Record<string, number> {
        return { ...this.items };
    }
}

class StoreInventory extends Inventory {
    private items: Record<string, number> = {};
    private readonly maxPerItem = 10;

    addItem(item: string, quantity: number): void {
        const current = this.items[item] || 0;
        const newQuantity = Math.min(current + quantity, this.maxPerItem);
        this.items[item] = newQuantity;
    }

    removeItem(item: string): void {
        delete this.items[item];
    }

    getInventory(): Record<string, number> {
        return { ...this.items };
    }
}


const warehouse = new WarehouseInventory();
warehouse.addItem("Cadeira", 50);
warehouse.addItem("Mesa", 30);
warehouse.addItem("Cadeira", 20);
console.log(warehouse.getInventory());

const store = new StoreInventory();
store.addItem("Cadeira", 5);
store.addItem("Cadeira", 10);
store.addItem("Mesa", 8);
console.log(store.getInventory());