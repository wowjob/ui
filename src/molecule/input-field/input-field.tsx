import { Flex, Input, LinkBlock, Text, Textarea } from '@/atom'
import type { TTextarea } from '@/util'
import type { TInputField } from './type'
import { PasswordInput } from './password-input'

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

      {rest.type === 'textarea' && (
        <Textarea
          mobile={{ fieldSizing: 'content', maxWidth: '100%', maxHeight: 320 }}
          key={name}
          link={link}
          {...(rest as TTextarea)}
          name={name}
        />
      )}

      {!['textarea', 'markdown'].includes(rest.type || '') &&
        (rest.type === 'password' ? (
          <PasswordInput
            id={name}
            name={name}
            {...rest}
            mobile={{ width: 'auto' }}
          />
        ) : ['checkbox', 'radio'].includes(rest.type || 'text') ? (
          <Flex mobile={{ flexDirection: 'row', alignItems: 'center' }}>
            <Input id={name} name={name} {...rest} mobile={{ width: 40 }} />

            <label
              htmlFor={
                rest.type === 'radio'
                  ? `${name}-${rest.defaultValue || rest.value}`
                  : name
              }
            >
              {label}
            </label>
          </Flex>
        ) : (
          <Input id={name} name={name} {...rest} mobile={{ width: 'auto' }} />
        ))}

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
            <LinkBlock
              mobile={{}}
              title={link.title}
              target={link.target || '_blank'}
              href={link.href}
            >
              {link.label}
            </LinkBlock>
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
