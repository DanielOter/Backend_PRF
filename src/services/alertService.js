const errors = require("../../constants/errors");
const {
    createAlert,
    getAllAlerts,
    getUserByEmail,
    turnOffAlert,
} = require("../database/repository");
const { createError } = require("../utilities/createError");

exports.createAlertService = async (newAlert) => {
    try {
        const user = await getUserByEmail(newAlert.email);
        if (!user) throw createError(errors.EXISTS);

        newAlert.usrName = user.usr_name;
        newAlert.userId = user.usr_id;
        await createAlert(newAlert);
    } catch (error) {
        throw error;
    }
};

exports.getAllAlertsService = async () => {
    try {
        const all = await getAllAlerts();
        const response = all.filter((alert) => alert.alert_isOn);
        return response;
    } catch (error) {
        throw error;
    }
};

exports.turnOffAlertService = async (id) => {
    try {
        await turnOffAlert(id);
    } catch (error) {
        throw error;
    }
};
