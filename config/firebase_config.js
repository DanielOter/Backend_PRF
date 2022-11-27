const admin = require("firebase-admin");
const { applicationDefault } = require("firebase-admin/app");
require("dotenv").config();

admin.initializeApp({
    credential: applicationDefault(),
});

module.exports = admin;
