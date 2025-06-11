import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateVagaService } from '../services/CreateVagaService';

class CreateVagaController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const vagaService = new CreateVagaService()

        const vaga = await vagaService.execute();

        reply.send(vaga);
    }
}

export { CreateVagaController };