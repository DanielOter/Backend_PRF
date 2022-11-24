module.exports = Object.freeze({
    REQ_ERROR: {
        status: 400,
        msg: "Missing the required data for the request",
    },
    GUEST_ERROR: {
        status: 400,
        msg: "The Guest ID does not exist in the database",
    },
    EXISTS: {
        status: 400,
        msg: "The ID already exists in the database",
    },
    USER_ERROR: {
        status: 400,
        msg: "The User ID does not exist in the database",
    },
    ROLE_ERROR: {
        status: 400,
        msg: "The selected role does not exist in the database",
    },
    QR_ERROR: {
        status: 500,
        msg: "Internal Server Error",
    },
    REG_ERROR: {
        status: 400,
        msg: "There is no register for this guest",
    },
    NOTIFICATION_ERROR: {
        status: 400,
        msg: "The notification ID does not exist in the database",
    },
    GUEST_EXISTS: {
        status: 400,
        msg: "The guest already exists in the database",
    },
});
