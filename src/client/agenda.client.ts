import { BaseClient } from "@/client/base-client";
import { Agenda } from "@/models/agenda";
import { PageRequest } from "@/models/page/page-request";
import { PageResponse } from "@/models/page/page-response";

export class AgendaClient extends BaseClient<Agenda> {
  constructor() {
    super("agendas");
  }

  public async findAgendaById(id: number): Promise<Agenda> {
    return this.findById(id);
  }

  public async findAgendaPaginado(
    pageRequest: PageRequest
  ): Promise<PageResponse<Agenda>> {
    return this.findByFiltrosPaginado(pageRequest);
  }

  public async editarAgenda(agenda: Agenda): Promise<void> {
    return this.editar(agenda.id, agenda);
  }

  public async desativarAgenda(agenda: Agenda): Promise<void> {
    return this.desativar(agenda.id, agenda);
  }
}
