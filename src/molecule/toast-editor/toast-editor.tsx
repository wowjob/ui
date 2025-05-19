'use client'

import { type ChangeEvent, useEffect, useRef, useState } from 'react'
import { Flex, Input } from '../..'
// import dynamic from 'next/dynamic'
import '@toast-ui/editor/dist/toastui-editor.css'
// import type { EditorProps } from '@toast-ui/react-editor'
// import type { TStyle } from '@wowjob/ui'
import {
  Editor as ToastUIEditor,
  // Viewer as ToastUIViewer,
} from '@toast-ui/react-editor'
type ToastUIEditorInstance = InstanceType<typeof ToastUIEditor>

// Dynamically load Toast UI editor without SSR
// const ToastEditor = dynamic(
//   () => import('@toast-ui/react-editor').then((mod) => mod.Editor),
//   { ssr: false }
// )

// const Viewer = dynamic(
//   () => import('@toast-ui/react-editor').then((mod) => mod.Viewer),
//   { ssr: false }
// )

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
  height?: string | number
  onChange?: (markdonValue: string) => void
}) => {
  console.log(initialValue)
  console.log('initialValue')
  console.log('initialValue')
  // const editorRef = useRef<EditorProps>(null)
  const editorRef = useRef<ToastUIEditorInstance | null>(null)
  const [markdownValue, setMarkdownValue] = useState(initialValue)
  const handleChange = () => {
    // thisIsIt prints 'wysiwyg'
    const currentMarkdownValue = editorRef.current?.getInstance().getMarkdown()
    if (onChange) {
      onChange(currentMarkdownValue || '')
    }
    // setMarkdownValue(editorRef.current?.editorInst.getMarkdown() || '')
  }

  // biome-ignore lint: lint/correctness/useExhaustiveDependencies
  useEffect(() => {
    // Sync editor content if the parent prop changes
    if (editorRef.current && initialValue !== markdownValue) {
      editorRef.current.getInstance().setMarkdown(initialValue)
      setMarkdownValue(initialValue)
    }
  }, [initialValue])

  return (
    <Flex
      mobile={{ height: height || 420, maxWidth: '100%' }}
      data-name="toast-editor-wrapper"
    >
      <Input type="hidden" name={name} defaultValue={markdownValue} />

      {!readOnly && (
        <ToastUIEditor
          initialValue={initialValue}
          previewStyle="vertical"
          height="100%"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          ref={editorRef}
          onChange={handleChange}
        />
      )}

      {/* {readOnly && (
        <Viewer
          initialValue={initialValue}
          previewStyle="vertical"
          height="100%"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
        />
      )} */}
    </Flex>
  )
}
