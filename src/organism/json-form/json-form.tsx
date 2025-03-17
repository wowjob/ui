import { Button, Flex, Input, Textarea } from '@/atom'
import type { TJSONForm } from './json-form.type'

export const JSONForm = ({
  children,
  formStructure,
  back,
  height,
  info,
  register,
  errors,
}: TJSONForm) => {
  if (!register) {
    throw new Error('register is required for JSONForm')
  }

  const infoMessageList = Array.isArray(info?.message)
    ? info.message
    : [info?.message]

  const showInfoMessage = info?.message && infoMessageList.length > 0
  const { footer } = formStructure.form

  return (
    <Flex mobile={{ gap: 16 }}>
      {showInfoMessage && (
        <Flex>
          {infoMessageList.map((infoMessage, index) => (
            <Flex as="span" key={String(index)}>
              {infoMessage}
            </Flex>
          ))}
        </Flex>
      )}

      <Flex>
        {formStructure.list.map((inputName) =>
          formStructure.data[inputName]?.type === 'textarea' ? (
            <Flex key={inputName}>
              <Textarea
                {...register(inputName)}
                name={inputName}
                placeholder={formStructure.data[inputName]?.placeholder}
                mobile={{ fieldSizing: 'content' }}
                type="textarea"
              />

              {errors?.[inputName] && (
                <Flex
                  theme="error"
                  mobile={{
                    padding: [4, 12],
                    borderRadius: 8,
                    width: 'fit-content',
                  }}
                >
                  {String(errors[inputName].message)}
                </Flex>
              )}
            </Flex>
          ) : (
            <Flex key={inputName}>
              <Input
                {...register(inputName)}
                name={inputName}
                placeholder={formStructure.data[inputName]?.placeholder}
              />

              {errors?.[inputName] && (
                <Flex
                  theme="error"
                  mobile={{
                    padding: [4, 12],
                    borderRadius: 8,
                    width: 'fit-content',
                  }}
                >
                  {String(errors[inputName].message)}
                </Flex>
              )}
            </Flex>
          )
        )}
      </Flex>

      <Flex mobile={{ flexDirection: 'row' }}>
        {footer.list.map((inputName) => (
          <Flex key={inputName}>
            <Button
              theme={footer.data[inputName]?.theme}
              type={footer.data[inputName]?.type}
            >
              {footer.data[inputName]?.label}
            </Button>
          </Flex>
        ))}
      </Flex>

      <Flex>{children}</Flex>
    </Flex>
  )
}
