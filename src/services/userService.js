const errors = require("../../constants/errors");
const admin = require("../../config/firebase_config");

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
        if (user) {
            deleteUserFromFireBase(newUser.uid);
            throw createError(errors.EXISTS);
        }
        const role = await getRoleByName(newUser.role);
        if (!role) {
            deleteUserFromFireBase(newUser.uid);
            throw createError(errors.ROLE_ERROR);
        }
        const userCreated = await createUser(newUser, role);
        const res = {
            name: userCreated.usr_name,
            lastName: userCreated.usr_lastName,
            mail: userCreated.usr_mail,
        };
        return res;
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
        const response = await getUserByEmail(email);
        if (!response) throw createError(errors.USER_ERROR);
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

deleteUserFromFireBase = async (uid) => {
    try {
        admin
            .auth()
            .deleteUser(uid)
            .then(() => {
                console.log("Successfully deleted user");
            })
            .catch((error) => {
                console.log("Error deleting user:", error);
            });
    } catch (error) {
        throw error;
    }
};
