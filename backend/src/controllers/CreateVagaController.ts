import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateVagaService } from '../services/CreateVagaService';

interface CreateVagaBody {
  titulo: string;
  descricao: string;
  cargo: string;
  experiencia: string;
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
        experiencia,
        modalidade,
        empresa,
        cnpj,
        localizacao,
        salario,
        beneficios,
      } = request.body as CreateVagaBody;

      const service = new CreateVagaService();

      const vaga = await service.execute({
        titulo,
        descricao,
        cargo,
        experiencia,
        modalidade,
        empresa,
        cnpj,
        localizacao,
        salario,
        beneficios,
      });

      return reply.status(201).send(vaga);
    } catch (error) {
      console.error(error);
      return reply.status(500).send({ error: 'Erro ao registrar vaga' });
    }
  }
}