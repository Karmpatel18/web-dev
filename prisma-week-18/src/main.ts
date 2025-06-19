import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

async function createUser() {
    await client.user.create({
        data: {
            username: "karmpatel",
            password: "2332",
            age: 12,
            city: "ahmedabad"
        }
    })
}

createUser();