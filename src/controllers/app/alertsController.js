const errors = require("../../../constants/errors");
const { tryCatch } = require("../../utilities/tryCatch");
const {
    createAlertService,
    getAllAlertsService,
    turnOffAlertService,
} = require("../../services/alertService");

exports.createAlertController = tryCatch(async (req, res) => {
    const alert = req.body.newAlert;
    if (!alert) throw createError(errors.REQ_ERROR);
    await createAlertService(alert);
    res.status(200).json({ message: "Alert created successfully" });
});

exports.getAllAlertsController = tryCatch(async (req, res) => {
    const response = await getAllAlertsService();
    res.status(200).json(response);
});

exports.turnOffAlertController = tryCatch(async (req, res) => {
    console.log("🚀 ~ file: alertsController.js ~ line 22 ~ exports.turnOffAlertController=tryCatch ~ req", req)
    const id = req.params.id;
    await turnOffAlertService(id);
    res.status(200).json({ message: "Alert turned off successfully" });
});
