const {
    createGuest,
    addRegGuest,
    getGuestById,
    getAllGuest,
    deleteGuest,
    getUserById,
    getUserByIdNum,
    getGuestByIdNum,
    getLastReg,
    getUserByEmail,
} = require("../database/repository");
const { createError } = require("../utilities/createError");
const errors = require("../../constants/errors");

exports.createGuestService = async (newGuest, imgPath) => {
    imgPath = "imgPath"; // De momento se deja así para poder continuar el proceso mientras se soluciona problema con carga de fotos
    try {
        const host = await getUserByEmail(newGuest.host);
        if (!host) throw createError(errors.USER_ERROR);
        const guest = await getGuestByIdNum(newGuest.idNum);
        if (guest) throw createError(errors.GUEST_EXISTS);
        const response = await createGuest(newGuest, imgPath, host.usr_id);
        return response;
    } catch (error) {
        throw error;
    }
};

exports.addRegGuestService = async (newReg) => {
    try {
        const host = await getUserByIdNum(newReg.ownerId);
        if (!guest) throw createError(errors.GUEST_ERROR);
        const guest = await getGuestByIdNum(newReg.guestId);
        if (!host) throw createError(errors.USER_ERROR);

        newReg.ownerId = host.usr_id;
        newReg.guestId = guest.gue_id;
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
        if (!(await getUserById(userId))) throw createError(errors.USER_ERROR);

        return await deleteGuest(userId);
    } catch (error) {
        throw error;
    }
};

exports.getLastRegService = async (guestId) => {
    try {
        const guest = await getGuestById(guestId);
        if (!guest) throw createError(errors.GUEST_ERROR);
        const lastReg = await getLastReg(guest.gue_id);
        if (!lastReg) throw createError(errors.REG_ERROR);

        const response = {
            guest_name: guest.gue_name,
            guest_idType: guest.gue_idType,
            guest_id: guest.gue_idNum,
            image_path: guest.gue_image,
            entry: lastReg[0].reg_entryTime.toUTCString(),
            exit: lastReg[0].reg_exitTime.toUTCString(),
        };

        return response;
    } catch (error) {
        throw error;
    }
};
