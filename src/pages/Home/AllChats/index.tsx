import React from 'react'
import {ChatCard} from './ChatCard'
import {createUseStyles} from 'react-jss'
// import {useSelector} from 'react-redux'
// import {RootState} from '../../../storage/store'

export const AllChats = () => {
  const c = useStyles()
  // const account = useSelector((state: RootState) => state.account)

  const id = '11af02da-bf9e-4769-aa07-36903517733c'
  const name = 'test'
  const avatar = ''

  const account = [{id, name, avatar}]

  // avatar?: string
  // email?: string
  // id?: string
  // name?: string

  // {
  //   "user": {
  //       "id": "11af02da-bf9e-4769-aa07-36903517733c",
  //       "email": "test.test.test@urfu.me",
  //       "name": "test",
  //       "avatar": "",
  //       "roles": {
  //           "isAuthor": true,
  //           "isTeacher": true,
  //           "isCoauthor": true
  //       }

  return (
    <div className={c.root}>
      {[account].map((_el, i) => (
        <ChatCard key={i} id={id} name={name} avatar={avatar} />
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
