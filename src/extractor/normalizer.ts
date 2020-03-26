import { Mat } from 'opencv4nodejs'

export default function normalizer (image: Mat): Mat {
  return image.resize(500, 500)
}