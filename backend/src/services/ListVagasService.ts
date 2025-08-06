import prismaClient from '../prisma';

class ListVagasService{
	async execute(){
			
		const vagas = await prismaClient.vaga.findMany()
		return vagas;
	}
}

export { ListVagasService };