import { FastifyRequest, FastifyReply } from 'fastify';
import { DeleteVagaService } from '../services/DeleteVagaService';

class DeleteVagaController{
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const vagaService = new DeleteVagaService();

        const vaga = await vagaService.execute({
            
        })
}

export { DeleteVagaController };