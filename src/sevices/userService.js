const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createUser = async (
  usr_name,
  usr_lastName,
  usr_mail,
  usr_phone,
  usr_rolId,
  usr_allowed,
  usr_dni,
  usr_dniType,
  usr_unitId,
  usr_registersId
) => {
  const result = await prisma.postUser.create({
    data: {
      usr_name,
      usr_lastName,
      usr_mail,
      usr_phone,
      usr_rolId,
      usr_allowed,
      usr_dni,
      usr_dniType,
      usr_unitId,
      usr_registersId,
    },
  });
  return result;
};

const getUsers = async () => {
  const result = await prisma.postUser.findMany();
  return result;
};

const editUser = async (
  usr_id,
  usr_name,
  usr_lastName,
  usr_mail,
  usr_phone,
  usr_rolId,
  usr_allowed,
  usr_dni,
  usr_dniType,
  usr_unitId,
  usr_registersId
) => {
  const result = await prisma.postUser.update({
    where: { usr_id: Number(usr_id) },
    data: {
      usr_name: usr_name,
      usr_lastName: usr_lastName,
      usr_mail: usr_mail,
      usr_phone: usr_phone,
      usr_rolId: usr_rolId,
      usr_allowed: usr_allowed,
      usr_dni: usr_dni,
      usr_dniType: usr_dniType,
      usr_unitId: usr_unitId,
      usr_registersId: usr_registersId,
    },
  });
  return result;
};

const deleteUser = async (id) => {
  const post = await prisma.postUser.delete({
    where: { id: Number(id) },
  });
  return "Deleted";
};

module.exports = {
  createUser,
  getUsers,
  editUser,
  deleteUser,
};
