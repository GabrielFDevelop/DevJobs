import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';
import { CreateVagaController } from './controllers/CreateVagaController';
import { ListVagasController } from './controllers/ListVagasController';
import { DeleteVagaController } from './controllers/DeleteVagaController';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
    
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok:true }
    });

    //Criamos uma instância do CreateVagaController
    //que será usada para lidar com as requisições relacionadas à criação de vagas
    //Essa instância é criada fora do escopo da rota para evitar a criação de múltiplas instâncias desnecessárias
    //e garantir que o estado do controlador seja mantido entre as requisições.
    const createVagaController = new CreateVagaController();

    //aqui registramos a rota para criar uma vaga
    //o método register do CreateVagaController será chamado quando essa rota for acessada
    fastify.post("/registerVaga", async (request: FastifyRequest, reply: FastifyReply) => {
        return createVagaController.register(request, reply);
    });

    fastify.get("/listVagas", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListVagasController().handle(request, reply)
    });

    fastify.delete("/deleteVaga", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteVagaController().handle(request, reply)
    });
}