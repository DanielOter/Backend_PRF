const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
    await prisma.role.createMany({
        data: [
            {
                rol_name: "Administrador",
            },
            {
                rol_name: "Seguridad",
            },
            {
                rol_name: "Propietario",
            },
        ],
    });

    await prisma.user.create({
        data: {
            usr_name: "Administrator",
            usr_lastName: "Principal",
            usr_mail: "admin@admin.com",
            usr_phone: "123456789",
            usr_rol: {
                connect: { rol_id: 1 },
            },
            usr_allowed: true,
            usr_idNum: "111111111",
            usr_idType: "dni",
            usr_uid: "lIb2nNbfr0QEbcE9kJImRmh0C2F3"
        },
    });
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
