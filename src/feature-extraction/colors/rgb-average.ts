import { Mat } from 'opencv4nodejs'

export default function RGBAverage (image: Mat): [number, number, number] {
  const resized: Mat = image.resize(1, 512 * 512)
  const imageBuffer: Buffer = resized.getData()
  const ui8 = new Uint8Array(imageBuffer);

  const iRed = 2
  const iGreen = 1
  const iBlue = 0

  let totalRed = 0
  let totalGreen = 0
  let totalBlue = 0

  for (let i = 0; i < ui8.length; i += 3) {
    totalRed += ui8[i + iRed]
    totalGreen += ui8[i + iGreen]
    totalBlue = ui8[i + iBlue]
  }

  const avgRed = totalRed / ui8.length
  const avgGreen = totalGreen / ui8.length
  const avgBlue = totalBlue / ui8.length

  return [
    Number(avgRed.toFixed(4)),
    Number(avgGreen.toFixed(4)),
    Number(avgBlue.toFixed(4))
  ]
}