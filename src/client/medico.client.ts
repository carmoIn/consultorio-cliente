import { BaseClient } from "@/client/base-client";
import { Medico } from "@/models/medico";
import { PageRequest } from "@/models/page/page-request";
import { PageResponse } from "@/models/page/page-response";

export class MedicoClient extends BaseClient<Medico> {
  constructor() {
    super("medicos");
  }

  public async findMedicoById(id: number): Promise<Medico> {
    return this.findById(id);
  }

  public async findMedicoPaginado(
    pageRequest: PageRequest
  ): Promise<PageResponse<Medico>> {
    return this.findByFiltrosPaginado(pageRequest);
  }

  public async editarMedico(medico: Medico): Promise<void> {
    return this.editar(medico.id, medico);
  }

  public async desativarMedico(medico: Medico): Promise<void> {
    return this.desativar(medico.id, medico);
  }
}
