import prismaClient from '../prisma';

interface DeleteUserProps {
    id: string;
}

class DeleteUserService{
	async execute({ id }: DeleteUserProps){
		if(!id) {
			throw new Error("ID do usuário não informado!!");
		}

		const findUser = await prismaClient.user.findUnique({
			where: {
				id: id
			}
		})

		if(!findUser) {
			throw new Error("Usuário não encontrado!");
		}

		await prismaClient.user.delete({
			where: {
				id: findUser.id
			}
		})

		return { message: "Usuário deletado com sucesso!" };
	}
}

export { DeleteUserService };