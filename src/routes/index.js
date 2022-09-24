const signInRouter = require("./signIn");
const notFoundRouter = require("./notFound");
const healthRouter = require("./health");

const bindRoutes = (app) => {
    app.use("/api/health", healthRouter);
    app.use("/api/signin", signInRouter);
    app.use("*", notFoundRouter);
};

module.exports = { bindRoutes };
