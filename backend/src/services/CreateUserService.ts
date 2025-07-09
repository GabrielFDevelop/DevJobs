import prismaClient from "../prisma";

interface CreateUserProps{
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({ name, email, password }: CreateUserProps) {

        if(!name || !email || !password ){ 
            throw new Error("Nome, email e senha são obrigatórios!");
        }

        const user = await prismaClient.customer.create({
            data:{
                name,
                email,
                password,
                status: true
            }
        })
    
        return user ;
    }
}

export { CreateUserService };