const {
    createGuestService,
    addRegGuestService,
    getGuestByIdService,
    getGuestsService,
    deleteGuestService,
} = require("../../services/guestService");
const multer = require("multer");
const { createError } = require("../../utilities/createError");
const { tryCatch } = require("../../utilities/tryCatch");

const errors = require("../../../constants/errors");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

exports.upload = multer({ storage: storage });

exports.createGuestController = tryCatch(async (req, res) => {
    const guest = req.body.guest;
    const imgPath = req.file.path;
    if (!guest || !imgPath) throw createError(errors.REQ_ERROR);
    const response = await createGuestService(guest, imgPath);
    res.status(200).json(response);
});

exports.addRegGuestController = tryCatch(async (req, res) => {
    const newReg = req.body.reg;
    if (!newReg) throw createError(errors.REQ_ERROR);
    const response = await addRegGuestService(newReg);
    res.status(200).json(response);
});

exports.getGuestByIdController = tryCatch(async (req, res) => {
    const id = req.body.guestId;
    if (!id) throw createError(errors.REQ_ERROR);
    const response = await getGuestByIdService(id);
    res.status(200).json(response);
});

exports.getAllGuestsController = tryCatch(async (req, res) => {
    const response = await getGuestsService();
    res.status(200).json(response);
});

exports.deleteGuestControlller = tryCatch(async (req, res) => {
    const { id } = req.params;
    if (!id) throw createError(errors.REQ_ERROR);
    const response = await deleteGuestService(id);
    res.status(200).json(response);
});
