import { Image, mediaTypeMap, TImageConfig } from '../..'
import type { TPicture } from './type'

export const Picture = ({
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
}: TPicture) => {
  const extension = src.split('.').reverse()[0] as TImageConfig['type']
  const type =
    extension in mediaTypeMap ? mediaTypeMap[extension] : mediaTypeMap['webp']

  return (
    <picture>
      {srcDesktop && (
        <source srcSet={srcDesktop} type={type} media="(min-width: 64rem)" />
      )}

      {srcTablet && (
        <source srcSet={srcTablet} type={type} media="(min-width: 48rem)" />
      )}

      <Image
        src={src}
        alt={alt}
        mobile={mobile}
        tablet={tablet}
        desktop={desktop}
        width={width}
        height={height}
      />
    </picture>
  )
}
