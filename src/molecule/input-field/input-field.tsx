import type { TInputField } from './type'
// import { PasswordInput } from './password-input'
import { Flex, Input, Link, Text } from '@/atom'

export const InputField = ({
  mobile,
  tablet,
  desktop,
  theme,
  label,
  info,
  name,
  error,
  link,
  ...rest
}: TInputField) => {
  const errorList = Array.isArray(error) ? error : [error]

  return (
    <Flex mobile={{ gap: 4, width: '100%' }}>
      {label && !['checkbox', 'radio'].includes(rest.type || 'text') ? (
        <Text as="label" htmlFor={name} mobile={{ fontStyle: 'italic' }}>
          {label}
        </Text>
      ) : null}

      {/* {rest.type === 'password' && (
        <PasswordInput
          id={name}
          name={name}
          {...rest}
          mobile={{ width: 'auto' }}
        />
      )} */}

      {['checkbox', 'radio'].includes(rest.type || 'text') && (
        <Flex mobile={{ flexDirection: 'row', alignItems: 'center' }}>
          <Input id={name} name={name} {...rest} mobile={{ width: 40 }} />

          <Text
            as="label"
            htmlFor={
              rest.type === 'radio'
                ? `${name}-${rest.defaultValue || rest.value}`
                : name
            }
          >
            {label}
          </Text>
        </Flex>
      )}

      {!['checkbox', 'radio', 'password'].includes(rest.type || 'text') && (
        <Input id={name} name={name} {...rest} mobile={{ width: 'auto' }} />
      )}

      {info ? (
        <Flex
          mobile={{
            font: {
              family: 'sans-serif',
              style: 'italic',
              size: 16,
            },
            flexDirection: 'row',
          }}
        >
          {info}

          {link ? (
            <Link
              title={link.title}
              target={link.target || '_blank'}
              href={link.href}
              type="block"
            >
              {link.label}
            </Link>
          ) : null}
        </Flex>
      ) : null}

      {error
        ? errorList.map((err, key) => (
            <Flex
              key={String(key)}
              theme="error"
              mobile={{ padding: [4, 8], borderRadius: 8 }}
            >
              {err}
            </Flex>
          ))
        : null}
    </Flex>
  )
}
