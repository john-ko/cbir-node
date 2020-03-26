import cv, { Mat } from "opencv4nodejs";

export default function showImage (image: Mat): void {
  cv.imshow('image', image)
  cv.waitKey()
}