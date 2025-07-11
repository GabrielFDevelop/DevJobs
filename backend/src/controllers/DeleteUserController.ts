import { FastifyRequest, FastifyReply } from 'fastify';
import { DeleteUserService } from '../services/DeleteUserService';

class DeleteUserController{
	async handle(request: FastifyRequest, reply: FastifyReply) {
		const { id } = request.query as { id: string };

		try {
			const service = new DeleteUserService();
			const result = await service.execute({ id });
			return reply.status(200).send(result);
		} catch (error: any) {
			return reply.status(400).send({ error: error.message });
		}
	}
}

export { DeleteUserController };