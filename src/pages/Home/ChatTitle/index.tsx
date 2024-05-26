import React from 'react'
import {Arrow} from './Arrow'
import {createUseStyles} from 'react-jss'

export const ChatTitle = () => {
  const c = useStyles()
  const title = 'Чат'
  return (
    <div className={c.root}>
      <button className={c.arrow}>
        <Arrow />
      </button>
      <h1 className={c.title}>{title}</h1>
    </div>
  )
}

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    gap: 24,
  },
  arrow: {
    margin: 0,
    padding: 0,
    background: 'rgba(255, 255, 255, 0.1)',
    cursor: 'pointer',
    width: 51,
    height: 51,
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
  },
  title: {
    fontSize: 48,
    color: '#BFD5FF',
  },
})
