"use strict";
exports.__esModule = true;
exports.EntityNotFoundExceptionFilter = void 0;
var EntityNotFoundExceptionFilter = /** @class */ (function () {
    function EntityNotFoundExceptionFilter() {
    }
    EntityNotFoundExceptionFilter.prototype["catch"] = function (exception, host) {
        var ctx = host.switchToHttp();
        var response = ctx.getResponse();
        return response
            .status(404)
            .json({
            message: {
                statusCode: 404,
                error: 'Not Found',
                message: exception.message
            }
        });
    };
    return EntityNotFoundExceptionFilter;
}());
exports.EntityNotFoundExceptionFilter = EntityNotFoundExceptionFilter;
