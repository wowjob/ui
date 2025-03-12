import { Button, Flex, Input, Textarea } from '@/atom'
import type { TJSONForm } from './json-form.type'

export const JSONForm = ({
  children,
  action,
  formStructure,
  back,
  height,
  info,
}: TJSONForm) => {
  const infoMessageList = Array.isArray(info?.message)
    ? info.message
    : [info?.message]

  const showInfoMessage = info?.message && infoMessageList.length > 0
  const { footer } = formStructure.form

  return (
    <form>
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
                  name={inputName}
                  placeholder={formStructure.data[inputName]?.placeholder}
                  mobile={{ fieldSizing: 'content' }}
                />
              </Flex>
            ) : (
              <Flex key={inputName}>
                <Input
                  name={inputName}
                  placeholder={formStructure.data[inputName]?.placeholder}
                />
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
    </form>
  )
}
