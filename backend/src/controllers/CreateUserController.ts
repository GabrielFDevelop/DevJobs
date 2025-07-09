import { PrismaClient } from './../generated/prisma/index.d';
import { FastifyRequest, FastifyReply } from 'fastify';
import bcrypt from 'bcrypt';
import prismaClient from '../prisma';

class CreateUserController {
  async register(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { name, email, password } = request.body as {
        name: string;
        email: string;
        password: string;
      };

      //aqui verificamos se o email do User já foi cadastrado.
      const existingUser = await prismaClient.user.findUnique({ where: { email } });
      if (existingUser) {
        return reply.status(400).send({ error: 'E-mail já cadastrado' });
      }

      //aqui criamos o hash da password
      const hashedPassword = await bcrypt.hash(password, 10);

      //aqui criamos o User no banco de dados
      const user = await prismaClient.user.create({
        data: { name, email, password: hashedPassword, status: true },
      });

      //aqui retornamos o User criado, sem a password para não expor informações sensíveis
      return reply.status(201).send({
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
      });
    } catch (error) {
      return reply.status(500).send({ error: 'Erro interno' });
    }
  }
}

export { CreateUserController };