import { ImageProps } from '@PTypes'
import { memo } from 'react'
import Image from 'next/image'
const ImageAsset: React.FC<ImageProps> = ({ imgSource, imgAlt, classes }) => {
  return <Image src={imgSource} alt={imgAlt} className={classes} width="272px" height="192px" />
}
export default memo(ImageAsset)
