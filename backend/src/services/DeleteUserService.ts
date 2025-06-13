import prismaClient from '../prisma';

interface DeleteUserProps {
    id: string;
}

class DeleteUserService{
    async execute({ id }: DeleteUserProps){
        if(!id) {
            throw new Error("Solicitação inválida!");
        }

        const findUser = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        })

        if(!findUser) {
            throw new Error("User não encontrada!");
        }

        await prismaClient.customer.delete({
            where: {
                id: findUser.id
            }
        })

        return { message: "User deletado com sucesso!" };
    }
}

export { DeleteUserService };