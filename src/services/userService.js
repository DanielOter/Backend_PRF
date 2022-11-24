const errors = require("../../constants/errors");
const {
    getRoleByName,
    createUser,
    getAllUsers,
    deleteUser,
    getUserById,
    getUserByIdNum,
    getUserByEmail,
    getRoleById,
} = require("../database/repository");
const { createError } = require("../utilities/createError");

exports.createUserService = async (newUser) => {
    try {
        const user = await getUserByIdNum(newUser.idNum);
        if (user) throw createError(errors.EXISTS);
        const role = await getRoleByName(newUser.role);
        if (!role) throw createError(errors.ROLE_ERROR);
        const response = await createUser(newUser, role);
        return response;
    } catch (error) {
        throw error;
    }
};

exports.getUserByIdService = async (userId) => {
    try {
        const respose = await getUserById(userId);
        if (!respose) throw createError(errors.USER_ERROR);
        return respose;
    } catch (error) {
        throw error;
    }
};

exports.getUserByEmailService = async (email) => {
    try {
        const user = await getUserByEmail(email);
        if (!user) throw createError(errors.USER_ERROR);
        const role = await getRoleById(user.usr_rolId);
        const response = {
            email: email,
            role: role.rol_name,
        };
        return response;
    } catch (error) {
        throw error;
    }
};

exports.getAllUsersService = async () => {
    try {
        return await getAllUsers();
    } catch (error) {
        throw error;
    }
};

exports.deleteUserService = async (userId) => {
    try {
        if (!(await getUserById(userId))) throw createError(errors.USER_ERROR);
        return await deleteUser(userId);
    } catch (error) {
        throw error;
    }
};
