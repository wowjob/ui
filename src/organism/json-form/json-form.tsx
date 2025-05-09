'use client'

import { Button, Flex, Text } from '../../atom'
import type { TJSONForm } from './json-form.type'
import { generateZodSchema } from '../../util'
import { createFormHook, createFormHookContexts } from '@tanstack/react-form'
import { InputField, TextareaField, PasswordField } from '../../molecule'
import type { TTextarea } from '../../atom/textarea/textarea.type'
import type { TInput } from '../../atom/input/input.type'
import type { TActionFormReturn } from '../../type'
import { useState, type ChangeEvent } from 'react'
import './json-form.css'

const getValueMap = ({
  list,
  valueMap = {},
}: {
  list: string[]
  valueMap?: TJSONForm['valueMap']
}) => {
  const map: NonNullable<TJSONForm['valueMap']> = {}

  for (const key of list) {
    map[key] = '' // Ensure this matches TValue (string | number | boolean)
  }

  return { ...map, ...valueMap }
}

const { fieldContext, formContext, useFieldContext } = createFormHookContexts()

const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    InputField,
    TextareaField,
    PasswordField,
  },
  formComponents: {
    Button,
  },
})

export const JSONForm = ({
  children,
  formStructure,
  valueMap,
  back,
  height,
  submit,
  info,
}: TJSONForm) => {
  const { list } = formStructure
  const schema = generateZodSchema(formStructure)
  const defaultValues = getValueMap({ list, valueMap })
  const [header, setHeader] = useState<TActionFormReturn>()

  const form = useAppForm({
    defaultValues,
    validators: {
      onChange: schema,
    },
    onSubmit: async ({ value }) => {
      if (typeof submit === 'function') {
        const result = await submit(value as TActionFormReturn['data'])

        if (result?.message) {
          setHeader(result)
        }
      }
    },
  })

  const { footer } = formStructure.form

  return (
    <form.AppForm>
      <form
        onSubmit={(e) => {
          e.stopPropagation()
          e.preventDefault()
          form.handleSubmit()
        }}
      >
        <Flex mobile={{ gap: 16 }}>
          {formStructure.form.header && (
            <Flex mobile={{ gap: 0 }}>
              <Text as="h3">{formStructure.form.header.title}</Text>

              {formStructure.form.header.description && (
                <Text>{formStructure.form.header.description}</Text>
              )}
            </Flex>
          )}

          {header?.message && (
            <Flex
              mobile={{
                borderRadius: 8,
                overflow: 'hidden',
                alignSelf: 'center',
                gap: 0,
              }}
              theme={header.theme}
            >
              <Text as="h3" mobile={{ padding: [8, 16] }} theme={header.theme}>
                {header.title}
              </Text>

              <Flex
                mobile={{ padding: [8, 16], borderRadius: 8 }}
                theme={header.theme}
              >
                {header.message.map((message, index) => (
                  <Text key={index}>{message}</Text>
                ))}
              </Flex>
            </Flex>
          )}

          <Flex>
            {formStructure.list.map((inputName) => (
              <form.AppField
                key={inputName}
                name={inputName}
                // biome-ignore lint: lint/correctness/noChildrenProp
                children={(field) => {
                  const fieldData = formStructure.data[inputName]
                  const { isDirty, isPristine, isTouched, errors } =
                    field.state.meta
                  const errorList = errors.map((error) => {
                    const message = error?.message || 'Unknown error'
                    const path = (error?.path || []) as string[]

                    return { message, path }
                  })

                  if (fieldData.type === 'textarea') {
                    return (
                      <field.TextareaField
                        {...(fieldData as TTextarea)}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                          field.handleChange(
                            (e.target as HTMLTextAreaElement).value
                          )
                        }
                        errorList={isDirty ? errorList : []}
                      />
                    )
                  }

                  if (fieldData.type === 'password') {
                    return (
                      <field.PasswordField
                        {...(fieldData as TInput)}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          field.handleChange(
                            (e.target as HTMLInputElement).value
                          )
                        }
                        errorList={isDirty ? errorList : []}
                      />
                    )
                  }

                  return (
                    <field.InputField
                      {...(fieldData as TInput)}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        field.handleChange(
                          fieldData.type === 'checkbox'
                            ? (e.target as HTMLInputElement).checked
                            : (e.target as HTMLInputElement).value
                        )
                      }
                      errorList={isDirty ? errorList : []}
                    />
                  )
                }}
              />
            ))}
          </Flex>

          <Flex mobile={{ flexDirection: 'row' }}>
            <form.Subscribe
              selector={(state) => [
                state.isValid,
                state.isDirty,
                state.isSubmitting,
              ]}
              // biome-ignore lint: lint/correctness/noChildrenProp
              children={([isValid, isDirty, isSubmitting]) => {
                return footer.list.map((inputName) => (
                  <Flex key={inputName}>
                    <form.Button
                      theme={footer.data[inputName]?.theme}
                      type={footer.data[inputName]?.type}
                      aria-disabled={!(isValid && isDirty)}
                    >
                      {footer.data[inputName]?.label}
                      {isSubmitting ? ' ...' : ''}
                    </form.Button>
                  </Flex>
                ))
              }}
            />
          </Flex>

          <Flex>{children}</Flex>
        </Flex>
      </form>
    </form.AppForm>
  )
}
