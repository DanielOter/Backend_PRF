const express = require("express");
const {
    createAlertController,
    getAllAlertsController,
    turnOffAlertController,
} = require("../controllers/app/alertsController");

const router = express.Router();

router.post("/create", createAlertController);
router.get("/", getAllAlertsController);
router.put("/turnOff/:id", turnOffAlertController);

module.exports = router;
