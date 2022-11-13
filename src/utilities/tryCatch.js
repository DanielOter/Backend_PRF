exports.tryCatch = (controller) => async (req, res, next) => {
    try {
        await controller(req, res);
    } catch (error) {
        console.log("🚀 ~ file: tryCatch.js ~ line 5 ~ exports.tryCatch= ~ error", error)
        return next(error);
    }
};
