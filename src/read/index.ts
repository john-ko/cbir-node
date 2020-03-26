import cv, { Mat } from 'opencv4nodejs'

export default async function readFile (path = ''): Promise<Mat | undefined | void> {
  return await cv.imreadAsync(path)
    .catch((e: any) => console.error('error: ', e))
}