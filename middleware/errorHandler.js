const {constants} = require("../constant")
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch(statusCode){
        case constants.NOT_FOUND:
        res.json({title: "Not found",
                    message: err.message,
                    stackTrace: err.stack });
        break;
        case  constants.VALIDATION_ERROR:
        res.json({title: "Validation Stage",
                    message: err.message,
                    stackTrace: err.stack, });
        case constants.UNAUTHORIZED:
        res.json({title: "unauthorized",
                    message: err.message,
                    stackTrace: err.stack });
        case  constants.FORBIDDEN:
        res.json({title: "forbidden",
                    message: err.message,
                    stackTrace: err.stack, });
        case  constants.FORBIDDEN:
        res.json({title: "server Error",
                    message: err.message,
                    stackTrace: err.stack, });
        default:
            console.log("no error found")
        break;
}};

module.exports = errorHandler;