import React from 'react'
import {ChatCard} from './ChatCard'
import {createUseStyles} from 'react-jss'

export const AllChats = () => {
  const c = useStyles()
  const chats = [1, 2, 3, 4, 5]
  return (
    <div className={c.root}>
      {chats.map((_el, i) => (
        <ChatCard key={i} />
      ))}
    </div>
  )
}

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
})
