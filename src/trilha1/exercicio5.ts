// Exercício 5 — Classe Agenda
export class Agenda {
    compromissos: string[] = [];

    adicionar(compromisso: string) {
        this.compromissos.push(compromisso);
    }

    listar() {
        return [...this.compromissos];
    }
}
