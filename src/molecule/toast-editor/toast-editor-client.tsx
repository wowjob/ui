'use client'

import { type ChangeEvent, useEffect, useRef, useState } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css'
import { Flex, Input } from '../..'
import dynamic from 'next/dynamic'
import type { EditorProps } from '@toast-ui/react-editor'

// Dynamically load Toast UI editor without SSR
const ToastEditor = dynamic(
  () => import('@toast-ui/react-editor').then((mod) => mod.Editor),
  { ssr: false }
)

const Viewer = dynamic(
  () => import('@toast-ui/react-editor').then((mod) => mod.Viewer),
  { ssr: false }
)

export const ToastEditorClient = ({
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
  const editorRef = useRef<EditorProps>(null)
  const [markdownValue, setMarkdownValue] = useState(initialValue)
  const handleChange = () => {
    const currentMarkdownValue =
      (editorRef.current as any).editorInst.getMarkdown() || ''
    setMarkdownValue(currentMarkdownValue)
    if (onChange) {
      onChange(currentMarkdownValue)
    }
  }

  // biome-ignore lint: lint/correctness/useExhaustiveDependencies
  useEffect(() => {
    // Sync editor content if the parent prop changes
    if (editorRef.current && initialValue !== markdownValue) {
      ;(editorRef.current as any).getInstance().setMarkdown(initialValue)
      setMarkdownValue(initialValue)
    }
  }, [initialValue])

  return (
    <Flex
      mobile={{ height: height || 480, maxWidth: '100%' }}
      data-name="toast-editor-wrapper"
    >
      <Input type="hidden" name={name} defaultValue={markdownValue} />

      {!readOnly && (
        <ToastEditor
          initialValue={initialValue}
          previewStyle="vertical"
          height="100%"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          // @ts-expect-error: ref
          ref={editorRef}
          onChange={handleChange}
        />
      )}

      {readOnly && (
        <Viewer
          initialValue={initialValue}
          // @ts-expect-error: ref
          previewStyle="vertical"
          height="100%"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          onChange={handleChange}
        />
      )}
    </Flex>
  )
}
