exports.errorHandlerMiddleware = (err, req, res, next) => {
    const error = {
        status: err.status ? err.status : 500,
        message:
            err.message && err.status != 500
                ? err.message
                : "Internal Server Error",
    };

    console.log("🚀 ~ file: errorHandlerMiddleware.js ~ line 11 ~ error", error)
    res.status(error.status).json(error);
};