import { FastifyRequest, FastifyReply } from 'fastify';
import { DeleteVagaService } from '../services/DeleteVagaService';

class DeleteVagaController{
	async handle(request: FastifyRequest, reply: FastifyReply) {
		const { id } = request.query as { id: string };

		try {
			const service = new DeleteVagaService();
			const result = await service.execute({ id });
			return reply.status(200).send(result);
		} catch (error: any) {
			return reply.status(400).send({ error: error.message });
		}
	}
}

export { DeleteVagaController };