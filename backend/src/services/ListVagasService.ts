import prismaClient from '../prisma';

class ListVagasService{
    async execute(){
        
        const vagas = await prismaClient.customer.findMany()
        return vagas;
    }
}

export { ListVagasService };