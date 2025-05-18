import { getStyle } from '../../css'
import { getEnv } from '../../util'
import type { TImage } from './type'
import './image.css'

export const Image = ({
  mobile,
  tablet,
  desktop,
  theme,
  alt,
  src,
  height,
  width,
}: TImage) => {
  const env = getEnv()

  const { style, className } = getStyle({
    mobile,
    tablet,
    desktop,
    theme,
    env,
    className: 'wowjob-ui-image',
  })

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={style}
    />
  )
}
