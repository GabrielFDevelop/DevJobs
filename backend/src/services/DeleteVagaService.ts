import prismaClient from '../prisma';

interface DeleteVagaProps {
    id: string;
}

class DeleteVagaService{
    async execute({ id }: DeleteVagaProps){
        if(!id) {
            throw new Error("Solicitação inválida!");
        }

        const findVaga = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        })

        if(!findVaga) {
            throw new Error("Vaga não encontrada!");
        }

        await prismaClient.customer.delete({
            where: {
                id: findVaga.id
            }
        })

        return { message: "Vaga deletada com sucesso!" };
    }
}

export { DeleteVagaService };