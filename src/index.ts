import path from 'path';
import readFile from './read'
import cv, { Mat } from 'opencv4nodejs'
const imagePath = path.resolve('tests/fixtures/Lenna.png')
import histogram from './feature-extraction/histogram'
import dominantColor from './feature-extraction/dominant-color'

(async () => {
  const img = await readFile(imagePath)

  if (!img) {
    return console.log('image was empty')
  }

  // console.log(img.getDataAsArray())
  const histograms: [Mat, Mat, Mat] = histogram(img)
  console.log(histograms)
  dominantColor(img)
})()
