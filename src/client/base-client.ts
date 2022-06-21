import { Especialidade } from "@/models/especialidade";
import { PageRequest } from "@/models/page/page-request";
import { PageResponse } from "@/models/page/page-response";
import axios, { AxiosInstance } from "axios";

/**
 * @author Helcio Laurentino do Carmo Junior
 *
 * @since 1.0.0, 21/06/2022
 * @version 1.0.0
 */
export class BaseClient<T> {
  private axiosClient: AxiosInstance;

  constructor(endpoint: string) {
    this.axiosClient = axios.create({
      baseURL: `http://localhost:8080/api/${endpoint}`,
      headers: { "Content-type": "application/json" },
    });
  }

  public async findById(id: number): Promise<T> {
    try {
      return (await this.axiosClient.get<T>(`/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async findByFiltrosPaginado(
    pageRequest: PageRequest
  ): Promise<PageResponse<T>> {
    try {
      let requestPath = "";

      requestPath += `?page=${pageRequest.currentPage}`;
      requestPath += `&size=${pageRequest.pageSize}`;
      requestPath += `&sort=${
        pageRequest.sortField === undefined ? "" : pageRequest.sortField
      },${pageRequest.direction}`;

      return (
        await this.axiosClient.get<PageResponse<T>>(requestPath, {
          params: { filtros: pageRequest.filter },
        })
      ).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async cadastrar(especialidade: T): Promise<void> {
    try {
      return await this.axiosClient.post("/", especialidade);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async editar(id: number, data: T): Promise<void> {
    try {
      return (await this.axiosClient.put(`/${id}`, data)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async desativar(id: number, data: T): Promise<void> {
    try {
      return (await this.axiosClient.put(`/desativar/${id}`, data)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}
