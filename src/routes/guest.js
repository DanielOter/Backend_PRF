const express = require("express");
const {
    createGuestController,
    addRegGuestController,
    deleteGuestControlller,
    getAllGuestsController,
    getGuestByIdController,
    upload,
} = require("../controllers/user/guestController");

const router = express.Router();

router.post("/create", upload.single("image"), createGuestController);
router.post("/addReg", addRegGuestController);
router.get("/", getAllGuestsController);
router.get("/:id", getGuestByIdController);
router.delete("/delete/:id", deleteGuestControlller);

module.exports = router;
