import prismaClient from '../prisma';

class ListUsersService{
    async execute(){
        
        const users = await prismaClient.customer.findMany()
        return users;
    }
}

export { ListUsersService };