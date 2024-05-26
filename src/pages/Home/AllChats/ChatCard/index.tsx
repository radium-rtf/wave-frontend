import React from 'react'
import {createUseStyles} from 'react-jss'

export const ChatCard = () => {
  const c = useStyles()
  const avatar =
    'https://sun9-17.userapi.com/impg/vjuS4Em_u-CdVoiihm050TezVT2A30dvZEusOQ/QBC0hA3IufU.jpg?size=675x745&quality=95&sign=c0ff4788fc6a00b6c03ed83e54b6cab6&type=album'
  const fullName = 'Иван Молодцов'
  const countOfNewMessages = 5

  return (
    <button className={c.root}>
      <div className={c.leftSide}>
        <img className={c.avatar} src={avatar} alt='' />
        <p className={c.fullName}>{fullName}</p>
      </div>
      <div className={c.newMessages}>{countOfNewMessages}</div>
    </button>
  )
}

const useStyles = createUseStyles({
  root: {
    border: '1px solid rgba(242, 242, 242, 0.1)',
    borderRadius: 10,
    backgroundColor: '#2E3233',
    padding: [13, 19],
    margin: 0,
    cursor: 'pointer',
    justifyContent: 'space-between',
    display: 'flex',
    minWidth: 396,
  },
  leftSide: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: '100%',
  },
  fullName: {
    fontWeight: 700,
    fontSize: 16,
    color: '#BFD5FF',
  },
  newMessages: {
    flexShrink: 0,
    backgroundColor: '#F65050',
    borderRadius: 7,
    fontFamily: 'Inter',
    fontWeight: 700,
    fontSize: 13,
    color: '#FFFFFF',
    padding: [6, 9],
  },
})
