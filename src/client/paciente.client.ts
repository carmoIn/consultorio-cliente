import { BaseClient } from '@/client/base.client';
import { Paciente } from '@/models/paciente';
import { PageRequest } from '@/models/page/page-request';
import { PageResponse } from '@/models/page/page-response';

export class PacienteClient extends BaseClient<Paciente> {
    constructor() {
        super('pacientes');
    }

    public async findPacienteById(id: number): Promise<Paciente> {
        return this.findById(id);
    }

    public async findPacientePaginado(
        pageRequest: PageRequest
    ): Promise<PageResponse<Paciente>> {
        return this.findByFiltrosPaginado(pageRequest);
    }

    public async editarPaciente(paciente: Paciente): Promise<void> {
        return this.editar(paciente.id, paciente);
    }

    public async desativarPaciente(paciente: Paciente): Promise<void> {
        return this.desativar(paciente.id, paciente);
    }
}
