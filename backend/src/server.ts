//Neste bloco, importamos o fastify-cors para permitir requisições de outros domínios (CORS) e o Fastify para criar o servidor.
//Importamos também as rotas definidas no arquivo routes.ts, que contêm as definições de rotas e controladores.
import { fastifyCors } from '@fastify/cors';
import Fastify from 'fastify';
import { routes } from './routes';
import fastifyJwt from '@fastify/jwt';

//Criamos uma instância do Fastify e habilitamos o logger para registrar as requisições e respostas no console.
export const app = Fastify({ logger: true })

//Neste bloco, definimos um manipulador de erros global para o Fastify.
//Se ocorrer um erro, ele será capturado e uma resposta com status 400 e uma mensagem de erro será enviada.
app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message })
})

//Aqui, definimos a função start que registra o plugin CORS e as rotas no aplicativo Fastify.
// Registra o JWT com uma chave secreta (use variável de ambiente em produção!)
//Em seguida, tentamos iniciar o servidor na porta 3001.
//Se ocorrer um erro ao iniciar o servidor, ele será capturado e uma mensagem de erro será exibida no console, e o processo será encerrado com um código de saída 1.
//Por fim, verificamos se o arquivo está sendo executado diretamente (não importado como um módulo) e, se for o caso, chamamos a função start para iniciar o servidor.
const start = async () => {
  
  await app.register(fastifyCors, {
    origin: true,
  });
  await app.register(routes);
  await app.register(fastifyJwt, {
    secret: '123'// coloque isso em .env depois!
  });

  try{
    await app.listen({ port: 3001 })
    console.log('Server is running on http://localhost:3001');
      
  }catch (err) {
    console.error('Error starting server:', err);
    process.exit(1)
  }
}

if(require.main === module) {
  start();
}

export default { app };