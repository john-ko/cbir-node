import { Mat } from 'opencv4nodejs'

const cv = require('opencv4nodejs')

export default async function readFile (path = ''): Promise<Mat | undefined> {
  return await cv.imreadAsync(path).catch((e: any) => console.error(e, 'error'))
}