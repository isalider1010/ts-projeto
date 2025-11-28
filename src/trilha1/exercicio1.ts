

// Exercício 1 — Classe ContaBancaria
export class ContaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string, saldo: number = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }

    sacar(valor: number) {
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente.");
        }
        this.saldo -= valor;
    }
}

