const express = require("express");
const {
    createUserController,
    deleteUserControlller,
    getAllUsersController,
    getUserByIdController
} = require("../controllers/user/userController");

const router = express.Router();

router.post("/create", createUserController);
router.get("/:id", getUserByIdController);
router.get("/getAll", getAllUsersController);
router.delete("/delete/:id", deleteUserControlller);

module.exports = router;
