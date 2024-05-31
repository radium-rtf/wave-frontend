import React, {FC, useEffect, useRef, useState} from 'react'
import {createUseStyles} from 'react-jss'
import {Theme} from '../../types'
import classNames from 'classnames'
import {VideoChat} from './VideoChat'
import {Smile} from './Smile'
import {Send} from './Send'

const mock: {
  isOwner: boolean
  content: string
  time: string
}[] = [
  // {
  //   isOwner: true,
  //   content: 'хочу самсунг',
  //   time: '18:00',
  // },
  // {
  //   isOwner: false,
  //   content:
  //     'Привет! Меня зовут Любовь. Я здесь, чтобы помочь вам с любыми вопросами или проблемами, с которыми вы столкнулись. Я очень люблю общаться с людьми и делать все возможное, чтобы помочь им. Не стесняйтесь обращаться ко мне за помощью или просто для общения!',
  //   time: '18:01',
  // },
  // {
  //   isOwner: true,
  //   content:
  //     'Привет! Хочу поблагодарить тебя за помощь. Ты очень отзывчивый и понимающий. Мне так приятно общаться с тобой. Спасибо за поддержку!',
  //   time: '18:01',
  // },
]

const SkrepkaSVG: React.FC = () => {
  return (
    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M13.5 4.5V13C13.5 15.4853 11.4853 17.5 9 17.5V17.5C6.51472 17.5 4.5 15.4853 4.5 13V3.5C4.5 1.84315 5.84315 0.5 7.5 0.5V0.5C9.15685 0.5 10.5 1.84315 10.5 3.5V13C10.5 13.8284 9.82843 14.5 9 14.5V14.5C8.17157 14.5 7.5 13.8284 7.5 13V4.5'
        stroke='#E6E6E6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <mask id='mask0_6755_3001' maskUnits='userSpaceOnUse' x='0' y='0' width='18' height='18'>
        <path
          d='M13.5 4.5V13C13.5 15.4853 11.4853 17.5 9 17.5V17.5C6.51472 17.5 4.5 15.4853 4.5 13V3.5C4.5 1.84315 5.84315 0.5 7.5 0.5V0.5C9.15685 0.5 10.5 1.84315 10.5 3.5V13C10.5 13.8284 9.82843 14.5 9 14.5V14.5C8.17157 14.5 7.5 13.8284 7.5 13V4.5'
          stroke='#E6E6E6'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </mask>
      <g mask='url(#mask0_6755_3001)'>
        <rect width='18' height='18' fill='#E6E6E6' />
      </g>
    </svg>
  )
}

const TailSVG: React.FC = () => {
  return (
    <svg width='9' height='20' className='svg-appendix'>
      <defs>
        <filter x='-50%' y='-14.7%' width='200%' height='141.2%' filterUnits='objectBoundingBox' id='messageAppendix'>
          <feOffset dy='1' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset>
          <feColorMatrix
            values='0 0 0 0 0.0621962482 0 0 0 0 0.138574144 0 0 0 0 0.185037364 0 0 0 0.15 0'
            in='shadowBlurOuter1'
          ></feColorMatrix>
        </filter>
      </defs>
      <g fill='none' fillRule='evenodd'>
        <path
          d='M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z'
          fill='#393E40'
          className='corner'
        ></path>
      </g>
    </svg>
  )
}

type ChatInputType = {
  sendMessage: (message: string) => void
  setSendActive: (isActive: boolean) => void
}

const ChatInput: React.FC<ChatInputType> = ({sendMessage, setSendActive}) => {
  const c = useStyles()
  const [message, setMessage] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [message])

  useEffect(() => {
    if (message.length !== 0) {
      setSendActive(true)
    } else {
      setSendActive(false)
    }
  }, [message])

  return (
    <div className={c.inputContainer}>
      <textarea
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            sendMessage(message)
            event.preventDefault()
            setMessage('')
          }
        }}
        rows={1}
        placeholder='Напишите сообщение...'
        className={classNames(c.input, c.inputTextArea)}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        ref={textareaRef}
      />
    </div>
  )
}

type ChatProps = {
  setSettingsActive: (isSettingsActive: boolean) => void
  isSettingsActive: boolean
}

export const Chat: FC<ChatProps> = ({setSettingsActive, isSettingsActive}) => {
  const c = useStyles()
  const [messages, setMessages] = useState(mock)
  const [sendActive, setSendActive] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)
  const setBottomScroll = () => {
    if (ref.current) {
      ref.current.scrollTop = ref.current?.scrollHeight || 0
    }
  }
  const sendMessage = (message: string) => {
    messages.push({
      content: message,
      time: '18:03',
      isOwner: true,
    })
    setMessages([...messages])
  }
  useEffect(() => {
    setBottomScroll()
  }, [messages])
  return (
    <div className={c.root}>
      <div className={c.header}>
        <div className={c.headerLeft}>
          <img
            style={{
              borderRadius: '50%',
            }}
            width={25}
            height={25}
            src='https://sun9-17.userapi.com/impg/vjuS4Em_u-CdVoiihm050TezVT2A30dvZEusOQ/QBC0hA3IufU.jpg?size=675x745&quality=95&sign=c0ff4788fc6a00b6c03ed83e54b6cab6&type=album'
            alt=''
          />
          <span className={c.avatarName}>Иван Молодцов</span>
        </div>
        <div className={c.headerRightSide}>
          <VideoChat />
          <button className={c.tripleDotButton} onClick={() => setSettingsActive(!isSettingsActive)}>
            <span className={c.tripleDot}>...</span>
          </button>
        </div>
      </div>

      <div ref={ref} className={c.content}>
        {messages.map((message, id) => (
          <div key={id} className={classNames(c.messageContainer, message.isOwner && c.messageContainerOwner)}>
            {!message.isOwner && (
              <div className={c.tail}>
                <TailSVG />
              </div>
            )}
            <div className={classNames(c.message, message.isOwner && c.messageOwner)}>
              <div>{message.content}</div>
              <div className={classNames(c.messageTime, message.isOwner && c.messageTimeOwner)}>{message.time}</div>
            </div>
          </div>
        ))}
      </div>

      <div className={c.footer}>
        <div className={c.footerAttachment}>
          <SkrepkaSVG />
        </div>
        <ChatInput sendMessage={sendMessage} setSendActive={setSendActive} />
        <div className={c.footerRightattachment}>
          <Smile />
          <Send isActive={sendActive} />
        </div>
      </div>
    </div>
  )
}

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.background.card,
    // width: 500,
    borderRadius: 16,
    padding: [0, 0, 24, 0],
  },
  headerRightSide: {
    display: 'flex',
    alignItems: 'center',
    gap: 15,
  },
  tail: {
    height: 24,
  },
  footer: {
    margin: [0, 24],
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    minHeight: 36,
    alignItems: 'center',
  },
  messageTime: {
    color: 'rgba(255, 255, 255, 0.1)',
    transition: '50%',
    marginTop: 2,
    fontSize: 10,
    textAlign: 'end',
  },
  messageTimeOwner: {},
  header: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    height: 50,
    margin: [0, 24],
  },
  content: {
    margin: [10, 24],
    overflowY: 'auto',
    height: 500,
    padding: [0, 12, 0, 0],
  },
  messageContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'end',
  },
  messageContainerOwner: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  message: {
    margin: [8, 0],
    color: '#E6E6E6',
    backgroundColor: '#393E40',
    borderRadius: [18, 18, 18, 0],
    padding: [8, 16, 4, 16],
    maxWidth: '65%',
    fontSize: 13,
    fontWeight: 150,
  },
  messageOwner: {
    backgroundColor: '#BFD5FF',
    color: 'black',
    borderRadius: [18, 18, 0, 18],
  },

  footerAttachment: {
    display: 'flex',
    margin: [0, 15],
    alignItems: 'center',
  },
  footerRightattachment: {
    gap: 10,
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 'auto',
    paddingRight: 10,
  },
  input: {
    background: 'rgba(0,0,0,0)',
    width: '180%',
    resize: 'none',
  },
  inputTextArea: {
    color: 'white',
    border: 'none',
  },
  inputContainer: {
    margin: [12, 0, 8, 0],
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginLeft: 5,
    color: '#BFD5FF',
  },
  tripleDot: {
    color: 'white',
    cursor: 'pointer',
    height: 5,
    display: 'flex',
    transform: 'translateY(-7px)',
  },
  modalContent: {
    position: 'relative',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    minWidth: 75,
    minHeight: 100,
    left: '100%',
    top: '100%',
  },
  avatarName: {
    cursor: 'pointer',
  },
  tripleDotButton: {
    border: 'none',
    background: 'none',
    margin: 0,
    padding: 0,
  },
}))

/* Разделитель */

/* Auto layout */
/* Rectangle 11 */

// width: 1000px;
// height: 1px;

// background: rgba(255, 255, 255, 0.1);
// border-radius: 1px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 1;
