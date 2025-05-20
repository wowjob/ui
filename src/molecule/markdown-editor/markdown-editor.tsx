'use client'

import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import { useState } from 'react'
import { Flex, Input } from '../..'
import MDEditor from '@uiw/react-md-editor'

export const MarkdownEditor = ({
  initialValue,
  name,
  readOnly,
  height,
  onChange,
}: {
  initialValue: string
  name: string
  readOnly?: boolean
  height?: string
  onChange?: (markdonValue: string) => void
}) => {
  const [value, setValue] = useState<string>(initialValue)

  const handleChange = (v = '') => {
    setValue(v)
    if (typeof onChange === 'function') {
      onChange(v)
    }
  }

  return (
    <Flex>
      <Input name={name} type="hidden" value={value} />

      <MDEditor value={value} onChange={handleChange} data-color-mode="light" />
    </Flex>
  )
}
