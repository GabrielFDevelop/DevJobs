import prismaClient from '../prisma';

class CreateVagaService {
    async execute(){
        console.log('Rota foi chamada!');
        
        return {
            ok: true,
        }
    }
}

export { CreateVagaService };