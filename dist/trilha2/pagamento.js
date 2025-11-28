"use strict";
// Exercicio 3: Polimorfismo em Pagamentos
class Pagamento {
    processar() {
        console.log("Processamento de pagamento genérico...");
    }
}
class PagamentoCartao extends Pagamento {
    constructor(numeroCartao) {
        super();
        this.numeroCartao = numeroCartao;
    }
    processar() {
        // Lógica para validar o cartão
        if (this.numeroCartao.length === 16 && /^\d+$/.test(this.numeroCartao)) {
            const ultimosQuatro = this.numeroCartao.slice(-4);
            console.log(`Pagamento com Cartão: Cartão **** **** **** ${ultimosQuatro} validado e processado com sucesso.`);
        }
        else {
            console.log("Pagamento com Cartão: Falha na validação. Número de cartão inválido.");
        }
    }
}
class PagamentoBoleto extends Pagamento {
    processar() {
        // Lógica para gerar código de boleto (simulada)
        const codigoBoleto = Math.floor(Math.random() * 100000000000000000).toString().padStart(30, '0');
        console.log(`Pagamento com Boleto: Boleto gerado. Código de barras: ${codigoBoleto.substring(0, 10)}...`);
    }
}
// Função polimórfica para processar pagamentos
function processarTransacoes(pagamentos) {
    console.log("\n--- Ex. 3: Processamento de Pagamentos ---");
    for (const pagamento of pagamentos) {
        pagamento.processar(); // Polimorfismo
    }
}
// Instanciando objetos
const pagtoCartao = new PagamentoCartao("1234567890123456");
const pagtoBoleto = new PagamentoBoleto();
const pagtoCartaoInvalido = new PagamentoCartao("123");
const listaPagamentos = [pagtoCartao, pagtoBoleto, pagtoCartaoInvalido];
// Chamando a função polimórfica
