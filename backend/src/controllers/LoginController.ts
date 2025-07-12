import { FastifyRequest, FastifyReply } from 'fastify';
import prismaClient from '../prisma';
import bcrypt from 'bcrypt';

class LoginController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { email, password } = request.body as {
      email: string;
      password: string;
    };

    if (!email || !password) {
      return reply.status(400).send({ error: 'E-mail e senha obrigatórios' });
    }
    // Verifica se o usuário existe
    const user = await prismaClient.user.findUnique({ where: { email } });

    // Se o usuário não existir, retorna erro
    if (!user) {
      return reply.status(401).send({ error: 'E-mail não encontrado' });
    }

    // Verifica se a senha está correta
    // O bcrypt.compare compara a senha fornecida com o hash armazenado no banco de dados
    // Se a senha não corresponder, retorna erro
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return reply.status(401).send({ error: 'Senha incorreta' });
    }

    // Se a senha estiver correta, gera o token JWT
    // O jwtSign cria um token com o ID e o e-mail do usuário, que expira em 1 dia
    // O token é enviado na resposta junto com os dados do usuário
    const token = await reply.jwtSign(
      { id: user.id, email: user.email },
      { expiresIn: '1d' }
    );

    // Retorna o token e os dados do usuário
    // O usuário é retornado com ID, nome e e-mail, sem a senha
    return reply.send({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  }
}

export { LoginController };