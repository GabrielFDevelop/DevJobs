import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateVagaService } from '../services/CreateVagaService';

interface CreateVagaBody {
  titulo: string;
  descricao: string;
  cargo: string;
  senioridade: string;
  modalidade: string;
  empresa: string;
  cnpj: string;
  localizacao: string;
  salario: string;
  beneficios: string;
}

export class CreateVagaController {
  async register(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    try {
    const {
      titulo,
      descricao,
      cargo,
      senioridade,
      modalidade,
      empresa,
      cnpj,
      localizacao,
      salario,
      beneficios,
    } = request.body as any;

    const service = new CreateVagaService();

    const vaga = await service.execute({
      titulo: titulo,
      descricao: descricao,
      cargo: cargo,
      senioridade: senioridade,
      modalidade: modalidade,
      empresa: empresa,
      cnpj: cnpj,
      localizacao: localizacao,
      salario: salario,
      beneficios: beneficios,
    });

      return reply.status(201).send(vaga);
    } catch (error) {
      console.error(error);
      return reply.status(500).send({ error: 'Erro ao registrar vaga' });
    }
  }
}