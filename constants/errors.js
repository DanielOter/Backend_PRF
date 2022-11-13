module.exports = Object.freeze({
    REQ_ERROR: {
        status: 400,
        msg: "Missing the required data for the request",
    },
    GUEST_ERROR: {
        status: 400,
        msg: "The Guest ID does not exist in the database",
    },
    OWNER_ERROR: {
        status: 400,
        msg: "The owner ID does not exist in the database",
    },
    ROLE_ERROR: {
        status: 400,
        msg: "The selected role does not exist in the database",
    },

});
