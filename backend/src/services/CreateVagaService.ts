import prismaClient from "../prisma";

interface CreateVagaProps{
    name: string;
    email: string;
}

class CreateVagaService {
    async execute({ name, email }: CreateVagaProps) {

        if(!name || !email) {
            throw new Error("Nome e email são obrigatórios!");
        }

        const vaga = await prismaClient.customer.create({
            data:{
                name,
                email,
                status: true
            }
        })
        
        return vaga;
    }
}

export { CreateVagaService };