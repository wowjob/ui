'use client'

import { Button, Flex } from '../../atom'
import type { TJSONForm } from './json-form.type'
import { generateZodSchema } from '../../util'
import { createFormHook, createFormHookContexts } from '@tanstack/react-form'
import { InputField, TextareaField, PasswordField } from '../../molecule'
import type { TTextarea } from '../../atom/textarea/textarea.type'
import type { TInput } from '../../atom/input/input.type'
import type { TActionFormReturn } from '../../type'
import type { ChangeEvent } from 'react'

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

  const form = useAppForm({
    defaultValues,
    validators: {
      onChange: schema,
    },
    onSubmit: async ({ value }) => {
      if (typeof submit === 'function') {
        submit(value as TActionFormReturn['data'])
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
          {info?.message && (
            <Flex
              mobile={{ padding: [8, 16], borderRadius: 8 }}
              theme={info.theme}
            >
              {info.message}
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
                        field.handleChange((e.target as HTMLInputElement).value)
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
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              // biome-ignore lint: lint/correctness/noChildrenProp
              children={([canSubmit, isSubmitting]) =>
                footer.list.map((inputName) => (
                  <Flex key={inputName}>
                    <form.Button
                      theme={footer.data[inputName]?.theme}
                      type={footer.data[inputName]?.type}
                      aria-disabled={!canSubmit}
                    >
                      {footer.data[inputName]?.label}
                      {isSubmitting ? ' ...' : ''}
                    </form.Button>
                  </Flex>
                ))
              }
            />
          </Flex>

          <Flex>{children}</Flex>
        </Flex>
      </form>
    </form.AppForm>
  )
}
