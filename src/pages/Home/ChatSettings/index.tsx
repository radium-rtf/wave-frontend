import React, {FC, ReactElement} from 'react'
import {createUseStyles} from 'react-jss'
import {Block} from './Icons/Block'
import cn from 'classnames'
import {Bean, Notifications, Pictures, Search} from './Icons'

type ButtonProps = {
  text: string
  isRed?: boolean
  children: ReactElement
}

type ChatSettingsProps = {
  isSettingsActive: boolean
  setSettingsActive: (isSettingsActive: boolean) => void
}

const Button: FC<ButtonProps> = ({children, text, isRed}) => {
  const c = useButtonStyles()

  return (
    <button className={cn(c.root, isRed && c.redRoot)}>
      <div className={c.icon}>{children}</div>
      <p className={c.text}>{text}</p>
    </button>
  )
}

export const ChatSettings: FC<ChatSettingsProps> = ({isSettingsActive, setSettingsActive}) => {
  const c = useStyles()

  return (
    <div className={c.root}>
      <div className={c.header}>
        <button className={c.tripleDot} onClick={() => setSettingsActive(!isSettingsActive)}>
          ...
        </button>
        <h3 className={c.headerText}>Настройки</h3>
      </div>
      <div className={c.buttons}>
        <Button text='Поиск'>
          <Search />
        </Button>
        <Button text='Вложения'>
          <Pictures />
        </Button>
        <Button text='Уведомления'>
          <Notifications />
        </Button>
        <Button text='Удалить'>
          <Bean />
        </Button>
        <Button text='Заблокировать' isRed>
          <Block />
        </Button>
      </div>
    </div>
  )
}

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#2E3233',
    border: '1px solid rgba(242, 242, 242, 0.1)',
    borderRadius: 10,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: [16, 18],
    border: '1px solid rgba(242, 242, 242, 0.1)',
    borderRadius: 10,
    gap: 21,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    padding: 18,
  },
  tripleDot: {
    margin: 0,
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: 5,
    padding: [0, 6, 7],
    background: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    textAlign: 'center',
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 700,
    color: '#BFD5FF',
  },
})

const useButtonStyles = createUseStyles({
  root: {
    display: 'flex',
    background: '#2E3233',
    border: '1px solid rgba(242, 242, 242, 0.1)',
    borderRadius: 10,
    padding: 17,
    gap: 20,
    cursor: 'pointer',
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    color: '#B3B3B3',
    fontSize: 16,
  },
  redRoot: {
    backgroundColor: '#402626',
    borderRadius: '1px solid rgba(242, 242, 242, 0.1)',
  },
})
