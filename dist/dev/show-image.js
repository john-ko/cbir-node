"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var opencv4nodejs_1 = __importDefault(require("opencv4nodejs"));
function showImage(image) {
    opencv4nodejs_1.default.imshow('image', image);
    opencv4nodejs_1.default.waitKey();
}
exports.default = showImage;
