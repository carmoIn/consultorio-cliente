import { AbstractEntity } from '@/models/abstract-entity';
import { Paciente } from '@/models/paciente';
import { Medico } from '@/models/medico';
import { StatusAgendamento } from '@/models/status-agendamento';

export class Agenda extends AbstractEntity {
    paciente!: Paciente;
    medico!: Medico;
    StatusAgendamento!: StatusAgendamento;
    dataDe!: Date;
    dataAte!: Date;
    encaixe!: boolean;
}
