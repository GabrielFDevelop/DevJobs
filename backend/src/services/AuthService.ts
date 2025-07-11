import prismaClient from '../prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'chave-secreta';

export class AuthService {
  static async signup(name: string, email: string, password: string) {
    const existing = await prismaClient.user.findUnique({ where: { email } });
    if (existing) throw new Error('E-mail já cadastrado');

    const hash = await bcrypt.hash(password, 10);

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: hash,
        status: true,
      },
    });

    return { id: user.id, name: user.name, email: user.email };
  }

  static async login(email: string, password: string) {
    const user = await prismaClient.user.findUnique({ where: { email } });
    if (!user) throw new Error('Usuário não encontrado');

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error('Senha incorreta');

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1d' });

    return { token };
  }
}