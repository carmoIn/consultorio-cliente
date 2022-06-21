import { Especialidade } from "@/models/especialidade";
import { BaseClient } from "@/client/base-client";

/**
 * @author Helcio Laurentino do Carmo Junior
 *
 * @since 1.0.0, 21/06/2022
 * @version 1.0.0
 */
export class EspecialidadeClient extends BaseClient<Especialidade> {
  constructor() {
    super("especialidades");
  }

  public async editarEspecialidade(
    especialidade: Especialidade
  ): Promise<void> {
    return this.editar(especialidade.id, especialidade);
  }

  public async desativarEspecialidade(
    especialidade: Especialidade
  ): Promise<void> {
    return this.desativar(especialidade.id, especialidade);
  }
}
