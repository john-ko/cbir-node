import cv, { Mat, Point3, TermCriteria } from 'opencv4nodejs'

/**
 * returns an array of the 8 most dominant colors
 *
 * @param {Mat} image
 * @returns array of numbers: [number, number, number][]
 */
export default function dominantColor (image: Mat): [number, number, number][] {
  const resized = image.resize(1, 512 * 512)
  const data = resized.getDataAsArray()
  const termCriteria: TermCriteria = new cv.TermCriteria(1,10,3)

  // @ts-ignore
  const points: Point3[] = data[0].map(([b, g, r]) => {
    return new cv.Point3(r, g, b)
  })

  // @ts-ignore
  const results = cv.kmeans(points, 8, termCriteria, 1, 1)
  const centers = results.centers

  return centers
}

