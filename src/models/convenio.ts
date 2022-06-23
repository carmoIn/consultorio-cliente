import { AbstractEntity } from 'src/models/abstract-entity';

export class Convenio extends AbstractEntity {
    nome!: string;
    valor: number;

    constructor() {
        super();
        this.valor = 0.0;
    }
}
