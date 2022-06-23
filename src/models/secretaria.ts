import { Pessoa } from '@/models/pessoa';

export class Secretaria extends Pessoa {
    salario!: number;
    dataContratacao!: Date;
    pis!: string;
}
