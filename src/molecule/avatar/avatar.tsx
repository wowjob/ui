import { Flex, Image, Text } from '@/atom'
import { getStyle, type TEnv, type TStyle } from '@/css'

export const Avatar = async ({
  alt,
  src,
  width = 160,
  name,
  theme,
  mobile,
  tablet,
  desktop,
  poweredBy,
}: {
  src: string
  alt: string
  name: string
  poweredBy?: string
  width?: number
} & TStyle) => {
  const { style, className } = getStyle({
    mobile,
    tablet,
    desktop,
    className: 'wow-ui-button-group',
    theme,
    env: process.env.NEXT_PUBLIC_ENV as TEnv,
  })
  return (
    <Flex
      mobile={{
        ...{
          width: width,
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
          aspectRatio: '1',
          alignSelf: 'start',
        },
        ...mobile,
      }}
      tablet={tablet}
      desktop={desktop}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={width}
        mobile={{ position: 'absolute', maxWidth: '100%', borderRadius: 256 }}
      />

      {poweredBy && (
        <Text
          theme="secondary"
          mobile={{
            position: 'absolute',
            padding: [2, 8],
            borderRadius: 4,
            fontSize: 12,
            top: -4,
            right: '0',
          }}
        >
          {poweredBy}
        </Text>
      )}

      <Text
        theme="dark"
        mobile={{
          position: 'absolute',
          padding: [4, 12],
          borderWidth: 4,
          borderRadius: 32,
          borderStyle: 'solid',
          fontSize: 12,
          bottom: -12,
          left: '0',
        }}
      >
        {name}
      </Text>
    </Flex>
  )
}
