import { FastifyRequest, FastifyReply } from 'fastify';
import { ListVagasService } from '../services/ListVagasService';

class ListVagasController {
    async handle(request : FastifyRequest, resply: FastifyReply) {
        const listVagasService = new ListVagasService();
        const vagas = await listVagasService.execute();
        
        resply.send(vagas);
    }
}

export { ListVagasController };