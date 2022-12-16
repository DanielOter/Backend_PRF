const {
    createNotService,
    getNotByIdService,
    getAllNotsService,
    deleteNotService,
} = require("../../services/notificationService");
const errors = require("../../../constants/errors");
const { tryCatch } = require("../../utilities/tryCatch");

exports.createNotificacionController = tryCatch(async (req, res) => {
    const newNotificacion = req.body.newNot;
    if (!newNotificacion) throw createError(errors.REQ_ERROR);
    const response = await createNotService(newNotificacion);
    res.status(200).json(response);
});

exports.getNotificacionByIdController = tryCatch(async (req, res) => {
    const { id } = req.params;
    if (!id) throw createError(errors.REQ_ERROR);
    const response = await getNotByIdService(id);
    res.status(200).json(response);
});

exports.getAllNotificacionsController = tryCatch(async (req, res) => {
    const response = await getAllNotsService();
    res.status(200).json(response);
});

exports.deleteNotificacionControlller = tryCatch(async (req, res, next) => {
    const { id } = req.params;
    if (!id) throw createError(errors.REQ_ERROR);
    const response = await deleteNotService(id);
    res.status(200).json(response);
});
