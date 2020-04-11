"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var opencv4nodejs_1 = __importDefault(require("opencv4nodejs"));
function getHistAxis(channel) {
    return {
        channel: channel,
        bins: 256,
        ranges: [0, 256]
    };
}
function histogram(image) {
    var blueHistAxes = new opencv4nodejs_1.default.HistAxes(getHistAxis(0));
    var greenHistAxes = new opencv4nodejs_1.default.HistAxes(getHistAxis(1));
    var redHistAxes = new opencv4nodejs_1.default.HistAxes(getHistAxis(2));
    var redHist = opencv4nodejs_1.default.calcHist(image, [redHistAxes]);
    var greenHist = opencv4nodejs_1.default.calcHist(image, [greenHistAxes]);
    var blueHist = opencv4nodejs_1.default.calcHist(image, [blueHistAxes]);
    return [
        redHist,
        greenHist,
        blueHist,
    ];
}
exports.default = histogram;
