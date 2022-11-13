exports.createError = (error) => {
    const newError = new Error();
    newError.message = error.msg;
    newError.status = error.status;
    return newError;
};
