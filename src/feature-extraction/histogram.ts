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

  // const blue = new cv.Vec3(255, 0, 0)
  // const green = new cv.Vec3(0, 255, 0)
  // const red = new cv.Vec3(0, 0, 255)

  // const plot = new cv.Mat(300, 600, cv.CV_8UC3, [255, 255, 255])

  // cv.plot1DHist(bHist, plot, blue, 1, 2)
  // cv.plot1DHist(gHist, plot, green, 2, 2)
  // cv.plot1DHist(rHist, plot, red, 3, 2)

  // cv.imshow('rgb image', image)
  // cv.imshow('rgb histogram', plot)
  // cv.waitKey()

  // const vect3 = new cv.Vec3(0, 0, 0)
  // const grayimage = image.bgrToGray()
  // const grHist = new cv.HistAxes(getHistAxis(0))
  // const grayHist = cv.calcHist(grayimage, [grHist])
  // const grayHistPlot = new cv.Mat(300, 600, cv.CV_8UC3, [255, 255, 255])
  // cv.plot1DHist(grayHist, grayHistPlot, vect3)

  // cv.imshow('grayscale image', grayimage)
  // cv.imshow('grayscale histogram', grayHistPlot)
  // cv.waitKey()
}