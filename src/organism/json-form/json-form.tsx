// 'use client'

import { useActionState, useEffect } from 'react'
import { Button, Flex, Form, LinkButton, Text } from '@/atom'
import type { TInput, TActionFormReturn, TJSONForm } from '@/util'
import { InputField } from '@/molecule'

const initialState: TActionFormReturn = {
  message: '',
  theme: 'success',
  status: 200,
  statusCode: '',
  data: {},
}

export const JSONForm = ({
  children,
  action,
  formLanguageData,
  formStructure,
  info,
  back,
  height,
}: TJSONForm) => {
  const enrichedState = {
    ...initialState,
    translate: formLanguageData?.error || {},
  }
  const [state, formAction, isPending] = useActionState(action, enrichedState)

  useEffect(() => {
    if (state.reload) {
      window.location.reload()
    }
  }, [state.reload])

  if (formStructure?.data) {
    const {
      data = {},
      form: { name, footer },
      list,
    } = formStructure

    const formInputList = list.map((inputName) => ({
      ...data[inputName],
      ...(formLanguageData?.default?.[inputName] || {}),
    }))

    const showHeaderTitle = formLanguageData?.default?.header?.title
    const showHeaderDescription = formLanguageData?.default?.header?.description

    return (
      <Flex
        mobile={{ padding: 8, width: '100%', height }}
        data-name="json-form"
      >
        {formLanguageData && (showHeaderTitle || back?.href) ? (
          <Flex>
            <Flex mobile={{ flexDirection: 'row' }}>
              <Text as="h2" mobile={{ flexGrow: 1 }}>
                {formLanguageData.default.header.title}
              </Text>

              {back?.href && (
                <LinkButton
                  theme="info"
                  href="/ai-prompt"
                  title="Back to AI prompt list"
                >
                  Back
                </LinkButton>
              )}
            </Flex>

            {showHeaderDescription ? (
              <Text>{formLanguageData.default.header.description}</Text>
            ) : null}
          </Flex>
        ) : null}

        {state.message ? (
          <Flex
            theme={state.theme}
            mobile={{
              color: state.theme === 'success' ? 'black' : 'white',
              padding: [8, 16],
              border: {
                width: 2,
                style: 'solid',
              },
              borderRadius: 8,
            }}
          >
            {state.message}
          </Flex>
        ) : null}

        <Form
          name={name}
          action={formAction}
          mobile={{ gap: 24, height: '100%' }}
        >
          {formInputList.map(({ name, link, ...propMap }) => (
            <InputField
              key={name}
              link={link}
              {...(propMap as TInput)}
              name={name}
              defaultValue={state.data?.[name] || propMap.defaultValue}
              error={state.error?.field?.[name]}
            />
          ))}

          {children}

          <Flex mobile={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {footer.list.map((footerItem) => (
              <Button
                aria-disabled={isPending}
                data-in-progress={isPending}
                data-value={footerItem}
                value={footerItem}
                name="action"
                key={footerItem}
                {...footer.data[footerItem]}
                {...formLanguageData?.default?.[footerItem]}
              />
            ))}
          </Flex>
        </Form>
      </Flex>
    )
  }

  return <Form action={formAction}>{children}</Form>
}
