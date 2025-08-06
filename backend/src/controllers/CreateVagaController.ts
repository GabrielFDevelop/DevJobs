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
      tituloVaga,
      descricaoVaga,
      cargoVaga,
      experienciaVaga,
      modalidadeVaga,
      empresaVaga,
      cnpjVaga,
      localizacaoVaga,
      salarioVaga,
      beneficiosVaga,
    } = request.body as any;

    const service = new CreateVagaService();

    const vaga = await service.execute({
      titulo: tituloVaga,
      descricao: descricaoVaga,
      cargo: cargoVaga,
      experiencia: experienciaVaga,
      modalidade: modalidadeVaga,
      empresa: empresaVaga,
      cnpj: cnpjVaga,
      localizacao: localizacaoVaga,
      salario: salarioVaga,
      beneficios: beneficiosVaga,
    });

      return reply.status(201).send(vaga);
    } catch (error) {
      console.error(error);
      return reply.status(500).send({ error: 'Erro ao registrar vaga' });
    }
  }
}