import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';
import { CreateVagaController } from './controllers/CreateVagaController';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
    
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok:true }
    })

    fastify.post("/vaga", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateVagaController().handle(request, reply)
    })
}