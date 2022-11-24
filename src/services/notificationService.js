const errors = require("../../constants/errors");
const {
    createNotification,
    getAllNotificationsc,
    getNotificationById,
    deleteNotification,
} = require("../database/repository");
const { createError } = require("../utilities/createError");


exports.createNotService = async (newNot) => {
    try {
        return await createNotification(newNot);
    } catch (error) {
        throw error;
    }
};

exports.getNotByIdService = async (notId) => {
    try {
        const response = getNotificationById(notId);
        if (!response) throw createError(errors.NOTIFICATION_ERROR);
        return response;
    } catch (error) {
        throw error;
    }
};

exports.getAllNotsService = async () => {
    try {
        return await getAllNotificationsc();
    } catch (error) {
        throw error;
    }
};

exports.deleteNotService = async (id) => {
    try {
        this.getNotByIdService(id);
        return await deleteNotification(id);
    } catch (error) {
        throw error;
    }
};
