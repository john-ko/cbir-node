"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function RGBAverage(image) {
    var resized = image.resize(1, 512 * 512);
    var imageBuffer = resized.getData();
    var ui8 = new Uint8Array(imageBuffer);
    var iRed = 2;
    var iGreen = 1;
    var iBlue = 0;
    var totalRed = 0;
    var totalGreen = 0;
    var totalBlue = 0;
    for (var i = 0; i < ui8.length; i += 3) {
        totalRed += ui8[i + iRed];
        totalGreen += ui8[i + iGreen];
        totalBlue = ui8[i + iBlue];
    }
    var avgRed = totalRed / ui8.length;
    var avgGreen = totalGreen / ui8.length;
    var avgBlue = totalBlue / ui8.length;
    return [
        Number(avgRed.toFixed(4)),
        Number(avgGreen.toFixed(4)),
        Number(avgBlue.toFixed(4))
    ];
}
exports.default = RGBAverage;
