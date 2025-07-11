import prismaClient from '../prisma';
import bcrypt from 'bcrypt';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  id: string;
  name: string;
  email: string;
}

class LoginService {
  async execute({ email, password }: LoginRequest): Promise<LoginResponse> {
    if (!email || !password) {
      throw new Error('E-mail e senha obrigatórios');
    }

    const user = await prismaClient.user.findUnique({ where: { email } });

    if (!user) {
      throw new Error('E-mail não encontrado');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Senha incorreta');
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}

export { LoginService };