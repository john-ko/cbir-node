import path from 'path';
import readFile from './read'
import cv from 'opencv4nodejs'
const imagePath = path.resolve('tests/fixtures/Lenna.png');

type histogramAxis = {
  channel: number,
  bins: number,
  ranges: [number, number]
};

(async () => {
  const img = await readFile(imagePath)

  if (!img) {
    return console.log('image was empty')
  }

  const getHistAxis = (channel: number): histogramAxis => {
    return {
      channel,
      bins: 256,
      ranges: [0, 256]
    }
  }

  const histogramAxis = new cv.HistAxes(getHistAxis(0))

  const a = cv.calcHist(img, [histogramAxis])


  console.log(a)
})()
