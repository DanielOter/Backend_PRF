const errors = require("../../../constants/errors");
const {
    createUserService,
    deleteUserService,
    getAllUsersService,
    getUserByIdService,
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
    console.log("🚀 ~ file: userController.js ~ line 19 ~ exports.getUserByIdController=tryCatch ~ id", id)
    if (!id) throw createError(errors.REQ_ERROR);
    const response = await getUserByIdService(id);
    res.status(200).json(response);
});

exports.getAllUsersController = tryCatch(async (req, res) => {
    const response = await getAllUsersService();
    console.log("🚀 ~ file: userController.js ~ line 26 ~ exports.getAllUsersController=tryCatch ~ response", response)
    res.status(200).json(response);
});

exports.deleteUserControlller = tryCatch(async (req, res) => {
    const { id } = req.params;
    if (!id) throw createError(errors.REQ_ERROR);
    const response = await deleteUserService(id);
    res.status(200).json(response);
});
