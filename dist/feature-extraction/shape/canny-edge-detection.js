"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var opencv4nodejs_1 = __importDefault(require("opencv4nodejs"));
var show_image_1 = __importDefault(require("../../dev/show-image"));
var highThreshold = 0;
var lowThreshold = 0;
var sigmaX = 0;
function cannyEdgeDetection(image) {
    var grayscale = image.cvtColor(opencv4nodejs_1.default.COLOR_BGR2GRAY);
    // const blurred = grayscale.gaussianBlur(new Size(5, 5), sigmaX)
    // https://github.com/opencv/opencv/blob/master/modules/imgproc/src/canny.cpp#L939
    // convert Mat to cv.CV_16SC1 || cv.CV_16SC3
    var converted16SC3 = grayscale.convertTo(opencv4nodejs_1.default.CV_16SC3);
    var cannyImage = opencv4nodejs_1.default.canny(converted16SC3, converted16SC3, lowThreshold, highThreshold);
    show_image_1.default(cannyImage);
    return cannyImage;
}
exports.default = cannyEdgeDetection;
