'use client'

import { Button, Flex, Text } from '../../atom'
import type { TJSONForm, TJSONFormStructure } from './json-form.type'
import { generateZodSchema } from '../../util'
import { createFormHook, createFormHookContexts } from '@tanstack/react-form'
import {
  InputField,
  TextareaField,
  PasswordField,
  MarkdownEditor,
} from '../../molecule'
import type { TTextarea } from '../../atom/textarea/textarea.type'
import type { TInput } from '../../atom/input/input.type'
import type { TActionFormReturn } from '../../type'
import { useState, type ChangeEvent } from 'react'
import './json-form.css'
import { useRouter } from 'next/navigation'

const getValueMap = ({ list, data }: TJSONFormStructure) => {
  const map: NonNullable<TJSONForm['valueMap']> = {}

  for (const key of list) {
    if (
      data[key]?.type === 'checkbox' &&
      !(data[key]?.defaultValue || data[key]?.value)
    ) {
      map[key] = false
    } else {
      map[key] = data[key]?.defaultValue || data[key]?.value || ''
    }
  }

  return map
}

const { fieldContext, formContext, useFieldContext } = createFormHookContexts()

const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    InputField,
    TextareaField,
    MarkdownEditor,
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
}: TJSONForm) => {
  const { list } = formStructure
  const schema = generateZodSchema(formStructure)
  const defaultValues = getValueMap(formStructure)
  const [header, setHeader] = useState<TActionFormReturn>()
  const router = useRouter()

  const form = useAppForm({
    defaultValues,
    validators: {
      onChange: schema,
    },
    onSubmit: async ({ value }) => {
      if (typeof submit === 'function') {
        const result = await submit(value)

        if ('message' in result && result?.message) {
          setHeader(result)
        }

        if (result?.redirect) {
          setTimeout(() => {
            router.push(result?.redirect || '/')
          }, 2000)
        }
      }
    },
  })

  const { footer } = formStructure.form

  const messageList = Array.isArray(header?.message)
    ? header.message
    : [header?.message]

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
                {messageList.map((message, index) => (
                  <Text key={index}>{message}</Text>
                ))}
              </Flex>
            </Flex>
          )}

          <Flex>
            {list.map((inputName) => (
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

                  if (fieldData.type === 'markdown') {
                    return (
                      <field.MarkdownEditor
                        {...(fieldData as TTextarea)}
                        initialValue={String(fieldData.defaultValue) || ''}
                        onChange={(currentMarkdownValue: string) =>
                          field.handleChange(currentMarkdownValue)
                        }
                        // errorList={isDirty ? errorList : []}
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

          <Flex>{children}</Flex>

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
        </Flex>
      </form>
    </form.AppForm>
  )
}
