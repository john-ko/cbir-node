import cv, { Mat, termCriteria, Point2 } from 'opencv4nodejs'

export default function dominantColor (image: Mat) {
  const p = new Point2(1, 2)
  const termCriteria = new cv.TermCriteria(1,2,3)
  console.log(cv.kmeans([p], 1, termCriteria, 10, 1))
}

