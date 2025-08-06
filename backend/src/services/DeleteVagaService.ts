import prismaClient from '../prisma';

interface DeleteVagaProps {
    id: string;
}

class DeleteVagaService{
	async execute({ id }: DeleteVagaProps){
		if(!id) {
			throw new Error("ID da vaga não informado!!");
		}

		const findVaga = await prismaClient.vaga.findUnique({
			where: {
				id: id
			}
		})

		if(!findVaga) {
			throw new Error("Vaga não encontrada!");
		}

		await prismaClient.vaga.delete({
			where: {
				id: findVaga.id
			}
		})

		return { message: "Vaga deletada com sucesso!" };
	}
}

export { DeleteVagaService };