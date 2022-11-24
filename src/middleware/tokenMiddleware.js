const admin = require("../../config/firebase_config");

class TokenMiddleware {
    async decodeToken(req, res, next) {
        console.log("🚀 ~ file: tokenMiddleware.js ~ line 5 ~ TokenMiddleware ~ decodeToken ~ req", req)
        try {
            const token = req.headers?.authorization.replace("Bearer ", "");
            const { email } = await admin.auth().verifyIdToken(token);
            req.email = email;
            return next();
        } catch (e) {
            console.log(e)
            return res.status(401).json({ message: "Unauthorized" });
        }
    }
}

module.exports = new TokenMiddleware();
