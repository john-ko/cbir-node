"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var opencv4nodejs_1 = __importDefault(require("opencv4nodejs"));
/**
 * returns an array of the 8 most dominant colors
 *
 * @param {Mat} image
 * @returns array of numbers: [number, number, number][]
 */
function dominantColor(image) {
    var resized = image.resize(1, 512 * 512);
    var data = resized.getDataAsArray();
    var termCriteria = new opencv4nodejs_1.default.TermCriteria(1, 10, 3);
    // @ts-ignore
    var points = data[0].map(function (_a) {
        var b = _a[0], g = _a[1], r = _a[2];
        return new opencv4nodejs_1.default.Point3(r, g, b);
    });
    // @ts-ignore
    var results = opencv4nodejs_1.default.kmeans(points, 8, termCriteria, 1, 1);
    var centers = results.centers;
    return centers;
}
exports.default = dominantColor;
