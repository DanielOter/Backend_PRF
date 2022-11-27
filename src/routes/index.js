const signInRouter = require("./signIn");
const notFoundRouter = require("./notFound");
const healthRouter = require("./health");
const userRouter = require("./user");
const notificationRouter = require("./notificacion");
const guestRouter = require("./guest");

const bindRoutes = (app) => {
    app.use("/api/health", healthRouter);
    app.use("/api/signin", signInRouter);
    app.use("/api/user", userRouter);
    app.use("/api/guest", guestRouter);
    app.use("/api/notification", notificationRouter);
    app.use("*", notFoundRouter);
};

module.exports = { bindRoutes };
