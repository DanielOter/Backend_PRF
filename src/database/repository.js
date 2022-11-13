const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Methods to create, get, update and delete users in the prisma database

exports.createUser = async (newUser, role) => {
    const result = await prisma.user.create({
        data: {
            usr_name: newUser.name,
            usr_lastName: newUser.lastName,
            usr_mail: newUser.mail,
            usr_phone: newUser.phone,
            usr_rol: {
                connect: { rol_id: role.rol_id },
            },
            usr_allowed: true,
            usr_idNum: newUser.idNum,
            usr_idType: newUser.idType,
            usr_unit: newUser.unit,
        },
    });
    return result;
};

exports.getUserById = async (userId) => {
    const result = await prisma.user.findFirst({
        where: { usr_id: Number(userId) },
    });
    console.log(result);
    return result;
};

exports.getAllUsers = async () => {
    const result = await prisma.user.findMany();
    return result;
};

exports.deleteUser = async (userId) => {
    await prisma.user.delete({
        where: { user_id: Number(userId) },
    });
    return "Deleted";
};

// Methods to create, get, update and delete guests in the prisma database

exports.createGuest = async (newGuest, imagePath) => {
    const result = await prisma.guest.create({
        data: {
            gue_name: newGuest.name,
            gue_lastName: newGuest.lastName,
            gue_dniType: newGuest.idType,
            gue_dni: newGuest.idNum,
            gue_image: imagePath,
        },
    });
    return result;
};

exports.addRegGuest = async (newReg) => {
    const response = await prisma.register.create({
        data: {
            reg_usrId: newReg.ownerId,
            reg_guestId: newReg.guestId,
            reg_entryTime: newReg.entry,
            reg_exitTime: newReg.exit,
        },
    });
    return response;
};

exports.getGuestById = async (guestId) => {
    console.log(guestId);
    const result = await prisma.guest.findFirst({
        where: { gue_id: Number(guestId) },
    });
    return result;
};

exports.getAllGuest = async () => {
    return await prisma.guest.findMany();
};

exports.deleteGuest = async (id) => {
    await prisma.guest.delete({
        where: { gue_id: Number(id) },
    });
    return "Deleted";
};

// Methods to get Roles from the prisma database

exports.getRoleByName = async (roleName) => {
    const result = await prisma.role.findFirst({
        where: { rol_name: String(roleName) },
    });
    return result;
};

exports.getAllRoles = async () => {
    return await prisma.role.findMany();
};

// Methods to create, get, update and delete Notifications in the prisma database

exports.createNotification = async (newNot) => {
    const result = await prisma.notification.create({
        data: {
            not_title: newNot.title,
            not_descrption: newNot.description,
            not_date: new Date(),
        },
    });
    return result;
};

exports.getNotificationById = async (notId) => {
    const result = await prisma.notification.findFirst({
        where: { not_id: Number(notId) },
    });
    return result;
};

exports.getAllNotifications = async () => {
    return await prisma.notification.findMany();
};

exports.deleteNotification = async (id) => {
    await prisma.notification.delete({
        where: { id: Number(id) },
    });
    return "Deleted";
};
