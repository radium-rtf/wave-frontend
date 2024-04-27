import React, {useEffect, useRef, useState} from 'react'
import {createUseStyles} from 'react-jss'
import {Theme} from '../../types'

const ChatInput: React.FC = () => {
  const c = useStyles()
  const [message, setMessage] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [message])

  return (
    <div>
      <textarea className={c.input} value={message} onChange={(e) => setMessage(e.target.value)} ref={textareaRef} />
    </div>
  )
}

export const Chat = () => {
  const c = useStyles()
  return (
    <div className={c.root}>
      <div className={c.header}>header</div>
      <div>content</div>
      <div className={c.footer}>
        <div className={c.footerAttachment}>PNG</div>
        <ChatInput />
        <div className={c.footerRightattachment}>
          <div>PNG</div>
          <div>PNG</div>
        </div>
      </div>
    </div>
  )
}

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.background.card,
    width: 500,
    height: 500,
    borderRadius: 16,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: 'auto',
    borderBottom: '1px solid black',
    height: 50,
    margin: [0, 15],
  },
  footer: {
    width: '80%',
    margin: [0, 10],
    border: '1px solid gray',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
  },
  footerAttachment: {
    display: 'block',
    width: 60,
    height: 1,
  },
  footerRightattachment: {
    gap: 10,
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  input: {
    background: 'rgba(0,0,0,0)',
    width: '100%',
    resize: 'none',
    //border: 'none',
  },
}))
