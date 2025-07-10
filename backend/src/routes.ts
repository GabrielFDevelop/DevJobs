import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';
import { CreateUserController } from './controllers/CreateUserController';
import { ListUsersController } from './controllers/ListUsersController';
import { DeleteUserController } from './controllers/DeleteUserController';
import { LoginController } from './controllers/LoginController';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
    
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok:true }
    });

    //aqui definimos a rota de registro de usuário e vinculamos o método register do CreateUserController para lidar com a lógica de criação de usuário
    fastify.post("/register", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUserController().register(request, reply)
    });

    fastify.post("/login", async (request: FastifyRequest, reply: FastifyReply) => {
        return new LoginController().handle(request, reply)
    });

    fastify.get("/users", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListUsersController().handle(request, reply)
    });

    fastify.delete("/deleteUser", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteUserController().handle(request, reply)
    });
}