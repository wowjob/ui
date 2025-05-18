import { Picture } from '../..'
import type { TFigure } from './type'

export const Figure = ({
  mobile,
  tablet,
  desktop,
  theme,
  alt,
  src,
  srcTablet,
  srcDesktop,
  height,
  width,
  figcaption,
}: TFigure) => (
  <figure>
    <Picture
      alt={alt}
      src={src}
      srcTablet={srcTablet}
      srcDesktop={srcDesktop}
      mobile={mobile}
      tablet={tablet}
      desktop={desktop}
      width={width}
      height={height}
      theme={theme}
    />

    <figcaption>{figcaption}</figcaption>
  </figure>
)
