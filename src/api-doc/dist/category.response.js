"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CategoryResponse = void 0;
var swagger_1 = require("@nestjs/swagger");
var CategoryResponse = /** @class */ (function () {
    function CategoryResponse() {
    }
    __decorate([
        swagger_1.ApiProperty()
    ], CategoryResponse.prototype, "id");
    __decorate([
        swagger_1.ApiProperty({
            type: String,
            description: 'name of category'
        })
    ], CategoryResponse.prototype, "name");
    __decorate([
        swagger_1.ApiProperty()
    ], CategoryResponse.prototype, "type");
    __decorate([
        swagger_1.ApiProperty()
    ], CategoryResponse.prototype, "created_at");
    __decorate([
        swagger_1.ApiProperty()
    ], CategoryResponse.prototype, "uptated_at");
    return CategoryResponse;
}());
exports.CategoryResponse = CategoryResponse;
