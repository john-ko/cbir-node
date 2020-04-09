import path from 'path';
import readFile from './read'
const imagePath = path.resolve('tests/fixtures/Lenna.png')
import showImage from './dev/show-image'
import RGBAverage from './feature-extraction/rgb-average'

(async () => {
  const image = await readFile(imagePath)

  if (!image) {
    return console.log('image was empty')
  }

  console.log(RGBAverage(image))

  // showImage(image)

  // const t = image.resize(25, 25)

  // showImage(t)
})()
