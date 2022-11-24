const errors = require("../../../constants/errors");
const {
    createUserService,
    deleteUserService,
    getAllUsersService,
    getUserByIdService,
    getUserByEmailService,
} = require("../../services/userService");
const { tryCatch } = require("../../utilities/tryCatch");

exports.createUserController = tryCatch(async (req, res) => {
    const user = req.body.newUser;
    if (!user) throw createError(errors.REQ_ERROR);
    const response = await createUserService(user);
    res.status(200).json(response);
});

exports.getUserByIdController = tryCatch(async (req, res) => {
    const { id } = req.params;
    if (!id) throw createError(errors.REQ_ERROR);
    const response = await getUserByIdService(id);
    res.status(200).json(response);
});

exports.getUserByEmailController = tryCatch(async (req, res) => {
    const { email } = req.params;
    if (!email) throw createError(errors.REQ_ERROR);
    const response = await getUserByEmailService(email);
    res.status(200).json(response);
});

exports.getAllUsersController = tryCatch(async (req, res) => {
    const response = await getAllUsersService();
    res.status(200).json(response);
});

exports.deleteUserControlller = tryCatch(async (req, res) => {
    const { id } = req.params;
    if (!id) throw createError(errors.REQ_ERROR);
    const response = await deleteUserService(id);
    res.status(200).json(response);
});
