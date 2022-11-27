const express = require("express");
const {
    createUserController,
    deleteUserControlller,
    getAllUsersController,
    getUserByIdController,
    getUserByEmailController,
} = require("../controllers/app/userController");

const router = express.Router();

router.post("/create", createUserController);
router.get("/", getAllUsersController);
router.get("/id/:id", getUserByIdController);
router.get("/email/:email", getUserByEmailController);
router.delete("/delete/:id", deleteUserControlller);

module.exports = router;
