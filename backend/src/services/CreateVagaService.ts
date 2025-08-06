import prismaClient from '../prisma';

interface VagaRequest {
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

export class CreateVagaService {
  async execute(data: VagaRequest) {
    const vaga = await prismaClient.vaga.create({
      data,
    });

    return vaga;
  }
}