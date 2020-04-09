import cv from 'opencv4nodejs'
import { Mat } from 'opencv4nodejs'
import HistogramAxis from '../types/HistogramAxis'

function getHistAxis (channel: number): HistogramAxis {
  return {
    channel,
    bins: 256,
    ranges: [0, 256]
  }
}

export default function histogram (image: Mat): [Mat, Mat, Mat] {
  const blueHistAxes = new cv.HistAxes(getHistAxis(0))
  const greenHistAxes = new cv.HistAxes(getHistAxis(1))
  const redHistAxes = new cv.HistAxes(getHistAxis(2))

  const redHist = cv.calcHist(image, [redHistAxes])
  const greenHist = cv.calcHist(image, [greenHistAxes])
  const blueHist = cv.calcHist(image, [blueHistAxes])

  return [
    redHist,
    greenHist,
    blueHist,
  ]
}
