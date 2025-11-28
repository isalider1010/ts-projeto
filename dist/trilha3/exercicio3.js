"use strict";
// Código Corrigido e Otimizado para TS (Adicionando 'override')
// --- Funcionario (Exercício 5) ---
class Funcionario {
}
class Gerente extends Funcionario {
    // Adicione 'override'
    calcularBonus() {
        return this.getSalario() * 0.10;
    }
}
class Operario extends Funcionario {
    // Adicione 'override'
    calcularBonus() {
        return this.getSalario() * 0.05;
    }
}
// --- Pagamento (Exercício 3) ---
class Pagamento {
    processar() {
        console.log("Processando pagamento...");
    }
}
class PagamentoCartao extends Pagamento {
    // ... (restante da classe)
    // Adicione 'override'
    processar() {
        if (this.numeroCartao.length === 16) {
            console.log("Pagamento no cartão aprovado!");
        }
        else {
            console.log("Número do cartão inválido!");
        }
    }
}
class PagamentoBoleto extends Pagamento {
    // Adicione 'override'
    processar() {
        const codigo = "BOLETO-" + Math.floor(Math.random() * 100000);
        console.log("Boleto gerado:", codigo);
    }
}
