import React from 'react'
import {createUseStyles} from 'react-jss'
import {Notifications} from './Notifications'
import {Logo} from './Logo'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {AppDispatch, RootState} from '../../../storage/store'
import {setAccountData} from '../../../storage/accountSlice'
import {API_URL} from '../../../API_URL'

export const Header = () => {
  const c = useStyles()
  const userName = 'андрей ✌️'
  const avatar =
    'https://sun9-17.userapi.com/impg/vjuS4Em_u-CdVoiihm050TezVT2A30dvZEusOQ/QBC0hA3IufU.jpg?size=675x745&quality=95&sign=c0ff4788fc6a00b6c03ed83e54b6cab6&type=album'

  const dispatch = useDispatch<AppDispatch>()
  const account = useSelector((state: RootState) => state.account)

  const signIn = async () => {
    // const response = await axios.post('https://api.radium-rtf.ru/v1/auth/signin', {
    const response = await axios.post(API_URL + 'auth/signin', {
      email: 'aristov.vladislav@urfu.me',
      password: '21fF5051337!',
    })

    dispatch(
      setAccountData({
        avatar: response.data.user.avatar ?? '',
        email: response.data.user.email ?? '',
        id: response.data.user.id ?? '',
        name: response.data.user.name ?? '',
      })
    )
  }

  const signIn2 = async () => {
    const response = await axios.post(API_URL + 'auth/signin', {
      email: 'test.test.test@urfu.me',
      password: 'passworD!123',
    })

    dispatch(
      setAccountData({
        avatar: response.data.user.avatar ?? '',
        email: response.data.user.email ?? '',
        id: response.data.user.id ?? '',
        name: response.data.user.name ?? '',
      })
    )
  }

  // const handleUpdateAccount = () => {
  //   dispatch(
  //     setAccountData({
  //       avatar: 'new-avatar-url',
  //       email: 'new-email@example.com',
  //       id: 'new-id',
  //       name: 'New Name',
  //     })
  //   )
  // }

  // const handleClearAccount = () => {
  //   dispatch(clearAccountData())
  // }

  return (
    <header className={c.root}>
      <Link to='/' className={c.logo}>
        <Logo />
        <h1 className={c.title}>Радиум</h1>
      </Link>
      <div className={c.search}></div>
      <div className={c.user}>
        <button className={c.notifications}>
          <Notifications />
        </button>
        <button className={c.userName} onClick={signIn2}>
          {account.name ?? userName}
        </button>
        <button className={c.avatarButton} onClick={signIn}>
          <img className={c.avatar} src={account.avatar ?? avatar} alt='' />
        </button>
      </div>
    </header>
  )
}

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: [14, 28],
    alignItems: 'center',
    backgroundColor: '#1E2021',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    border: 'none',
    padding: 0,
    margin: 0,
    background: 'transparent',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  search: {
    display: 'flex',
    alignItems: 'center',
  },
  user: {
    display: 'flex',
    gap: 16,
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: '100%',
    cursor: 'pointer',
    border: 'none',
    padding: 0,
    margin: 0,
    background: 'transparent',
  },
  avatarButton: {
    border: 'none',
    padding: 0,
    margin: 0,
    background: 'transparent',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    color: '#BFD5FF',
    cursor: 'pointer',
    border: 'none',
    padding: 0,
    margin: 0,
    background: 'transparent',
    fontSize: 13,
  },
  notifications: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    border: 'none',
    padding: 0,
    margin: 0,
    background: 'transparent',
  },
  title: {
    color: '#BFD5FF',
    fontSize: 20,
    fontWeight: 400,
  },
})
