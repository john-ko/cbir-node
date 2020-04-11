import cv, { Mat, Size } from 'opencv4nodejs'
import showImage from '../../dev/show-image'

const highThreshold = 0
const lowThreshold = 0
const sigmaX = 0

export default function cannyEdgeDetection (image: Mat): Mat {
  const grayscale = image.cvtColor(cv.COLOR_BGR2GRAY)
  const blurred = grayscale.gaussianBlur(new Size(5, 5), sigmaX)

  // https://github.com/opencv/opencv/blob/master/modules/imgproc/src/canny.cpp#L939
  // convert Mat to cv.CV_16SC1 || cv.CV_16SC3
  const converted16SC3 = blurred.convertTo(cv.CV_16SC3)

  const cannyImage = cv.canny(converted16SC3, converted16SC3, lowThreshold, highThreshold)

  return cannyImage
}
