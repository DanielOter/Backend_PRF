const {
    createGuest,
    addRegGuest,
    getGuestById,
    getAllGuest,
    deleteGuest,
    getUserById,
} = require("../database/repository");
const { createError } = require("../utilities/createError");
const errors = require("../../constants/errors");

exports.createGuestService = async (newGuest, imgPath) => {
    try {
        const response = await createGuest(newGuest, imgPath);
        return response;
    } catch (error) {
        throw error;
    }
};

exports.addRegGuestService = async (newReg) => {
    try {
        if (!(await getGuestById(newReg.guestId)))
            throw createError(errors.GUEST_ERROR);
        if (!(await getUserById(newReg.ownerId)))
            throw createError(errors.OWNER_ERROR);
        const response = await addRegGuest(newReg);
        return response;
    } catch (error) {
        throw error;
    }
};

exports.getGuestByIdService = async (userId) => {
    try {
        const respose = getGuestById(userId);
        if (!respose) throw createError(errors.GUEST_ERROR);
        return respose;
    } catch (error) {
        throw error;
    }
};

exports.getGuestsService = async () => {
    try {
        return await getAllGuest();
    } catch (error) {
        throw error;
    }
};

exports.deleteGuestService = async (userId) => {
    try {
        if (!(await getUserById(userId))) throw createError(errors.OWNER_ERROR);

        return await deleteGuest(userId);
    } catch (error) {
        throw error;
    }
};
