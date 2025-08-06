import { FastifyRequest, FastifyReply } from 'fastify';
import { ListVagasService } from '../services/ListVagasService';

class ListVagasController {
	//Aqui estamos instanciando o serviço de listagem de usuários para que possamos reutilizar a mesma instância em diferentes chamadas, se necessário.
	private listVagasService = new ListVagasService();

	async handle(request : FastifyRequest, reply: FastifyReply) {
		try {
			const vagas = await this.listVagasService.execute();
			return reply.status(200).send(vagas);
		} catch (error) {
			// Se ocorrer um erro, retornamos uma resposta de erro com o status 500 e a mensagem do erro.
			return reply.status(500).send({ error: 'Erro ao listar vagas' });
		}
	}
}

export { ListVagasController };