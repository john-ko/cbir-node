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
    // const blue = new cv.Vec3(255, 0, 0)
    // const green = new cv.Vec3(0, 255, 0)
    // const red = new cv.Vec3(0, 0, 255)
    // const plot = new cv.Mat(300, 600, cv.CV_8UC3, [255, 255, 255])
    // cv.plot1DHist(bHist, plot, blue, 1, 2)
    // cv.plot1DHist(gHist, plot, green, 2, 2)
    // cv.plot1DHist(rHist, plot, red, 3, 2)
    // cv.imshow('rgb image', image)
    // cv.imshow('rgb histogram', plot)
    // cv.waitKey()
    // const vect3 = new cv.Vec3(0, 0, 0)
    // const grayimage = image.bgrToGray()
    // const grHist = new cv.HistAxes(getHistAxis(0))
    // const grayHist = cv.calcHist(grayimage, [grHist])
    // const grayHistPlot = new cv.Mat(300, 600, cv.CV_8UC3, [255, 255, 255])
    // cv.plot1DHist(grayHist, grayHistPlot, vect3)
    // cv.imshow('grayscale image', grayimage)
    // cv.imshow('grayscale histogram', grayHistPlot)
    // cv.waitKey()
}
exports.default = histogram;
