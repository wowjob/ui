'use client'

import { Button, Flex } from '@/atom'
import type { TJSONForm } from './json-form.type'
import { generateZodSchema } from '@/util'
import {
  createFormHook,
  createFormHookContexts,
  useForm,
} from '@tanstack/react-form'
import { InputField, TextareaField } from '@/molecule'
import type { TTextarea } from '@/atom/textarea/textarea.type'
import type { TInput } from '@/atom/input/input.type'

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
  info,
}: TJSONForm) => {
  const { list } = formStructure
  const schema = generateZodSchema(formStructure)
  const form = useAppForm({
    defaultValues: getValueMap({ list, valueMap }),
    validators: {
      onChange: schema,
    },
    onSubmit: async (all) => {
      console.log(all)
      console.log('all')
    },
  })

  const infoMessageList = Array.isArray(info?.message)
    ? info.message
    : [info?.message]

  const showInfoMessage = info?.message && infoMessageList.length > 0
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
            {formStructure.list.map((inputName) => (
              <form.AppField
                key={inputName}
                name={inputName}
                // biome-ignore lint: lint/correctness/noChildrenProp
                children={(field) => {
                  const fieldData = formStructure.data[inputName]
                  const errorList = field.state.meta.errors.map((error) => {
                    const message = error?.message || 'Unknown error'
                    const path = (error?.path || []) as string[]

                    return { message, path }
                  })

                  if (fieldData.type === 'textarea') {
                    return (
                      <field.TextareaField
                        {...(fieldData as TTextarea)}
                        onChange={(e) => field.handleChange(e.target.value)}
                        errorList={errorList}
                      />
                    )
                  }

                  return (
                    <field.InputField
                      {...(fieldData as TInput)}
                      onChange={(e) => field.handleChange(e.target.value)}
                      errorList={errorList}
                    />
                  )
                }}
              />
            ))}
          </Flex>

          <Flex mobile={{ flexDirection: 'row' }}>
            {footer.list.map((inputName) => (
              <Flex key={inputName}>
                <form.Button
                  theme={footer.data[inputName]?.theme}
                  type={footer.data[inputName]?.type}
                >
                  {footer.data[inputName]?.label}
                </form.Button>
              </Flex>
            ))}
          </Flex>

          <Flex>{children}</Flex>
        </Flex>
      </form>
    </form.AppForm>
  )
}
