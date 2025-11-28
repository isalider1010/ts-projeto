// Exercício 1 — Veículos
class Veiculo {
    mover(): void {
        console.log("O veículo está se movendo");
    }
}

class Carro extends Veiculo {
    mover(): void {
        console.log("O carro está dirigindo");
    }
}

class Bicicleta extends Veiculo {
    mover(): void {
        console.log("A bicicleta está pedalando");
    }
}

const carro = new Carro();
const bike = new Bicicleta();
carro.mover();
bike.mover();

// Exercício 2 — Figuras Geométricas
abstract class FiguraGeometrica {
    abstract calcularArea(): number;
}

class Circulo extends FiguraGeometrica {
    constructor(private raio: number) { super(); }
    calcularArea(): number {
        return Math.PI * this.raio * this.raio;
    }
}

class Quadrado extends FiguraGeometrica {
    constructor(private lado: number) { super(); }
    calcularArea(): number {
        return this.lado * this.lado;
    }
}

class Triangulo extends FiguraGeometrica {
    constructor(private base: number, private altura: number) { super(); }
    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}

function imprimirAreas(figuras: FiguraGeometrica[]): void {
    figuras.forEach(f => console.log(f.calcularArea()));
}

imprimirAreas([
    new Circulo(5),
    new Quadrado(4),
    new Triangulo(6, 3)
]);

// Exercício 3 — Pagamentos
class Pagamento {
    processar(): void {}
}

class PagamentoCartao extends Pagamento {
    constructor(private numeroCartao: string) { super(); }
    processar(): void {
        console.log("Validando cartão:", this.numeroCartao);
        console.log("Pagamento no cartão processado!");
    }
}

class PagamentoBoleto extends Pagamento {
    processar(): void {
        console.log("Gerando boleto...");
        console.log("Boleto emitido com sucesso!");
    }
}

function processarPagamentos(pagamentos: Pagamento[]): void {
    pagamentos.forEach(p => p.processar());
}

processarPagamentos([
    new PagamentoCartao("1234-5678-9000"),
    new PagamentoBoleto()
]);

// Exercício 4 — Animais
class Animal {
    private energia: number = 50;

    protected aumentarEnergia(qtd: number): void { this.energia += qtd; }
    protected gastarEnergia(qtd: number): void { this.energia -= qtd; }

    statusEnergia(): void { console.log("Energia:", this.energia); }
    comer(): void { this.aumentarEnergia(10); }
}

class Leao extends Animal {
    comer(): void {
        this.gastarEnergia(5);
        this.aumentarEnergia(15);
    }
}

class Passaro extends Animal {
    comer(): void {
        this.aumentarEnergia(5);
    }
}

const leao = new Leao();
const passaro = new Passaro();
leao.comer();
passaro.comer();
leao.statusEnergia();
passaro.statusEnergia();

// Exercício 5 — Funcionários
abstract class Funcionario {
    constructor(private nome: string, private salario: number) {}
    public getSalario(): number { return this.salario; }
    abstract calcularBonus(): number;
}

class Gerente extends Funcionario {
    calcularBonus(): number { return this.getSalario() * 0.10; }
}

class Operario extends Funcionario {
    calcularBonus(): number { return this.getSalario() * 0.05; }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach(f => {
        const total = f.getSalario() + f.calcularBonus();
        console.log("Salário total:", total);
    });
}

calcularSalarioComBonus([
    new Gerente("Carlos", 5000),
    new Operario("Ana", 2000)
]);