import path from 'path';
import readFile from './read'
import cv, { Mat } from 'opencv4nodejs'
const imagePath = path.resolve('tests/fixtures/Lenna.png')
import showImage from './dev/show-image'

(async () => {
  const image = await readFile(imagePath)

  if (!image) {
    return console.log('image was empty')
  }

  showImage(image)

  const t = image.resize(25, 25)

  showImage(t)
})()
