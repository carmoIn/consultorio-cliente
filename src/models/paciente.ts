import { Pessoa } from "@/models/pessoa";
import { TipoAtendimento } from "@/models/tipo-atendimento";
import { Convenio } from "@/models/convenio";

export class Paciente extends Pessoa {
  tipoAtendimento!: TipoAtendimento;
  convenio!: Convenio;
  numeroCartaoConvenio!: number;
  dataVencimento!: Date;
}
