import type { TInputField } from './type'
import { Flex, Input, Link, Text } from '../../atom'

export const InputField = ({
  mobile,
  tablet,
  desktop,
  theme,
  label,
  help,
  name,
  errorList = [],
  link,
  valueList,
  ...rest
}: TInputField) => {
  const showErrorList = errorList.length > 0

  if (rest.type === 'hidden') {
    return <Input id={name} name={name} {...rest} />
  }

  if (
    Array.isArray(valueList) &&
    ['checkbox', 'radio'].includes(rest.type || 'text')
  ) {
    return (
      <Flex
        mobile={{ display: 'grid' }}
        tablet={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
        desktop={{ gridTemplateColumns: 'repeat(6, 1fr)' }}
      >
        {valueList.map((valueData, index) => (
          <Flex
            mobile={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gridTemplateRows: 'min-content auto',
              gap: [4, 12],
            }}
            key={index}
          >
            <Input
              id={`${name}-${index}`}
              name={name}
              {...rest}
              {...valueData}
              mobile={{ width: 40 }}
              defaultChecked={
                ((valueData?.defaultValue as unknown) === true ||
                (valueData?.defaultValue as unknown) === false
                  ? valueData?.defaultValue
                  : valueData?.defaultChecked) as boolean
              }
            />

            <Text
              as="label"
              htmlFor={rest.type === 'radio' ? `${name}-${index}` : name}
              mobile={{ cursor: 'pointer', alignSelf: 'center' }}
            >
              {valueData.label}
            </Text>

            {valueData?.help ? (
              <Flex
                mobile={{
                  font: {
                    family: 'sans-serif',
                    style: 'italic',
                    size: 16,
                  },
                  flexDirection: 'row',
                  gridColumn: '1/-1',
                }}
              >
                {valueData.help}
              </Flex>
            ) : null}
          </Flex>
        ))}
      </Flex>
    )
  }

  return (
    <Flex mobile={{ gap: 4, width: '100%' }}>
      {label && !['checkbox', 'radio'].includes(rest.type || 'text') ? (
        <Text
          as="label"
          htmlFor={name}
          mobile={{ fontStyle: 'italic', cursor: 'pointer' }}
        >
          {label}
        </Text>
      ) : null}

      {['checkbox', 'radio'].includes(rest.type || 'text') && (
        <Flex mobile={{ flexDirection: 'row', alignItems: 'center' }}>
          <Input
            id={name}
            name={name}
            {...rest}
            mobile={{ width: 40 }}
            defaultChecked={
              ((rest.defaultValue as unknown) === true ||
              (rest.defaultValue as unknown) === false
                ? rest.defaultValue
                : rest.defaultChecked) as boolean
            }
          />

          <Text
            as="label"
            htmlFor={
              rest.type === 'radio'
                ? `${name}-${rest.defaultValue || rest.value}`
                : name
            }
            mobile={{ cursor: 'pointer' }}
          >
            {label}
          </Text>
        </Flex>
      )}

      {!['checkbox', 'radio', 'password'].includes(rest.type || 'text') && (
        <Input id={name} name={name} {...rest} mobile={{ width: 'auto' }} />
      )}

      {help ? (
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
          {help}
        </Flex>
      ) : null}

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

      {showErrorList
        ? errorList.map(({ message }, key) => (
            <Flex
              key={String(key)}
              theme="error"
              mobile={{ padding: [4, 8], borderRadius: 8 }}
            >
              {message}
            </Flex>
          ))
        : null}
    </Flex>
  )
}
