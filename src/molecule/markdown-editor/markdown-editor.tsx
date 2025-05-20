'use client'

import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { Flex, Input } from '../..'

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false })

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
