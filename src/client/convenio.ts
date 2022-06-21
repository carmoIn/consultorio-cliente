import { Convenio } from "@/models/convenio";
import { BaseClient } from "@/client/base-client";

/**
 * @author Helcio Laurentino do Carmo Junior
 *
 * @since 1.0.0, 21/06/2022
 * @version 1.0.0
 */
export class ConvenioClient extends BaseClient<Convenio> {
  constructor() {
    super("convenios");
  }

  public async editarConvenio(convenio: Convenio): Promise<void> {
    return this.editar(convenio.id, convenio);
  }

  public async desativarConvenio(convenio: Convenio): Promise<void> {
    return this.desativar(convenio.id, convenio);
  }
}
