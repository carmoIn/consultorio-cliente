import { AbstractEntity } from 'src/models/abstract-entity';
import { Sexo } from '@/models/sexo';

export class Pessoa extends AbstractEntity {
    nome!: string;
    telefone!: string;
    nacionalidade!: string;
    cpf!: string;
    rg!: string;
    email!: string;
    login!: string;
    senha!: string;
    sexo!: Sexo;
}
