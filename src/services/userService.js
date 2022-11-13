const errors = require("../../constants/errors");
const {
    getRoleByName,
    createUser,
    getAllUsers,
    deleteUser,
    getUserById,
} = require("../database/repository");
const { createError } = require("../utilities/createError");

exports.createUserService = async (newUser) => {
    try {
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
        const respose = getUserById(userId);
        if (!respose) throw createError(errors.OWNER_ERROR);
        return respose;
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
        if (!(await getUserById(userId))) throw createError(errors.OWNER_ERROR);
        return await deleteUser(userId);
    } catch (error) {
        throw error;
    }
};
