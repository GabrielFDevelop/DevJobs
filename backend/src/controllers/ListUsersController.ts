import { FastifyRequest, FastifyReply } from 'fastify';
import { ListUsersService } from '../services/ListUsersService';

class ListUsersController {
	//Aqui estamos instanciando o serviço de listagem de usuários para que possamos reutilizar a mesma instância em diferentes chamadas, se necessário.
	private listUsersService = new ListUsersService();

	async handle(request : FastifyRequest, reply: FastifyReply) {
		try {
			const users = await this.listUsersService.execute();
			return reply.status(200).send(users);
		} catch (error) {
			// Se ocorrer um erro, retornamos uma resposta de erro com o status 500 e a mensagem do erro.
			return reply.status(500).send({ error: 'Erro ao listar usuários' });
		}
	}
}

export { ListUsersController };