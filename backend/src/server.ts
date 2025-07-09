import { fastifyCors } from '@fastify/cors';
import Fastify from 'fastify';
import { routes } from './routes';

export const app = Fastify({ logger: true })

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message })
})

const start = async () => {
  
  await app.register(fastifyCors);
  await app.register(routes);

  try{
    await app.listen({ port: 3000 })
    console.log('Server is running on http://localhost:3000');
      
  }catch (err) {
    console.error('Error starting server:', err);
    process.exit(1)
  }
}

if(require.main === module) {
  start();
}

export default { app };