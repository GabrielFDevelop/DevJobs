import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateVagaService } from '../services/CreateVagaService';

class CreateVagaController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const{ name, email } = request.body as { name: string, email: string };

        const vagaService = new CreateVagaService()
        const vaga = await vagaService.execute({ name, email });

        reply.send(vaga);
    }
}

export { CreateVagaController };