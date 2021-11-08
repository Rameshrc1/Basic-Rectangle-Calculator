"use strict";
exports.__esModule = true;
exports.Rectangle = void 0;
var Rectangle = /** @class */ (function () {
    function Rectangle(w, h) {
        this.width = w;
        this.hight = h;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.hight;
    };
    Rectangle.prototype.getPerameter = function () {
        return 2 * (this.width + this.hight);
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
