import { Pessoa } from "@/models/pessoa";
import { Especialidade } from "@/models/especialidade";

export class Medico extends Pessoa {
  crm!: string;
  porcentagemParticipacao!: number;
  consultorio!: string;
  especialidade!: Especialidade;
}
