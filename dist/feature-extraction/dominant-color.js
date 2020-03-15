"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var opencv4nodejs_1 = __importStar(require("opencv4nodejs"));
function dominantColor(image) {
    var p = new opencv4nodejs_1.Point2(1, 2);
    var termCriteria = new opencv4nodejs_1.default.TermCriteria(1, 2, 3);
    console.log(opencv4nodejs_1.default.kmeans([p], 1, termCriteria, 10, 1));
}
exports.default = dominantColor;
