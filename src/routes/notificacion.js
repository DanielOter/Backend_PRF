const express = require("express");
const {
    createNotificacionController,
    getNotificacionByIdController,
    getAllNotificacionsController,
    deleteNotificacionControlller
} = require("../controllers/user/notificationController");

const router = express.Router();

router.post("/create", createNotificacionController);
router.get("/", getAllNotificacionsController);
router.get("/:id", getNotificacionByIdController);
router.delete("/delete/:id", deleteNotificacionControlller);

module.exports = router;
