import { BaseClient } from '@/client/base.client';
import { Secretaria } from '@/models/secretaria';
import { PageRequest } from '@/models/page/page-request';
import { PageResponse } from '@/models/page/page-response';

export class SecretariaClient extends BaseClient<Secretaria> {
    constructor() {
        super('secretarias');
    }

    public async findSecretariaById(id: number): Promise<Secretaria> {
        return this.findById(id);
    }

    public async findSecretariaPaginado(
        pageRequest: PageRequest
    ): Promise<PageResponse<Secretaria>> {
        return this.findByFiltrosPaginado(pageRequest);
    }

    public async editarSecretaria(secretaria: Secretaria): Promise<void> {
        return this.editar(secretaria.id, secretaria);
    }

    public async desativarSecretaria(secretaria: Secretaria): Promise<void> {
        return this.desativar(secretaria.id, secretaria);
    }
}
