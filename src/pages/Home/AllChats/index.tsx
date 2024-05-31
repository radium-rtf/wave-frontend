import React from 'react'
import {ChatCard} from './ChatCard'
import {createUseStyles} from 'react-jss'

const mockAllChats = [
  {
    name: 'Иван Молодцов',
    unread: 5,
    messages: [],
  },
  {
    name: 'Павел Ожгибесов',
    unread: 1,
    messages: [],
  },
  {
    name: 'Никита Агарков',
    unread: 7,
    messages: [],
  },
]

export const AllChats = () => {
  const c = useStyles()
  return (
    <div className={c.root}>
      {mockAllChats.map((_el, i) => (
        <ChatCard name={_el.name} unreaded={_el.unread} key={i} />
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
