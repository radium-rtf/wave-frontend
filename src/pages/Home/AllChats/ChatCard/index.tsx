import React, {FC} from 'react'
import {createUseStyles} from 'react-jss'
import {AppDispatch} from '../../../../storage/store'
import {useDispatch} from 'react-redux'
import {setChatWithData} from '../../../../storage/chatWithSlice'

type ChatCardProps = {
  avatar?: string
  email?: string
  id?: string
  name?: string
}

export const ChatCard: FC<ChatCardProps> = ({id, name, avatar}) => {
  const c = useStyles()
  // const avatar = user.avatar ?? ''
  // const fullName = user.fullName ?? ''
  const countOfNewMessages = 0
  const dispatch = useDispatch<AppDispatch>()

  const setChat = () => {
    dispatch(
      setChatWithData({
        avatar: avatar ?? '',
        email: '',
        id: id ?? '',
        name: name ?? '',
      })
    )
  }

  return (
    <button className={c.root} onClick={setChat}>
      <div className={c.leftSide}>
        <img className={c.avatar} src={avatar ?? ''} alt='' />
        <p className={c.fullName}>{name ?? ''}</p>
      </div>
      {countOfNewMessages > 0 && <div className={c.newMessages}>{countOfNewMessages}</div>}
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
