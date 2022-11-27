const express = require("express");
const {
    createGuestController,
    addRegGuestController,
    deleteGuestControlller,
    getAllGuestsController,
    getGuestByIdController,
    getRegByguestIdController,
    upload,
} = require("../controllers/app/guestController");

const router = express.Router();

router.post("/create", upload.single("file"), createGuestController);
router.post("/addReg", addRegGuestController);
router.get("/getReg/:id", getRegByguestIdController);
router.get("/", getAllGuestsController);
router.get("/:id", getGuestByIdController);
router.delete("/delete/:id", deleteGuestControlller);

module.exports = router;
