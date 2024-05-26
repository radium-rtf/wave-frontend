import React from 'react'
import {createUseStyles} from 'react-jss'
import {Notifications} from './Notifications'
import {Logo} from './Logo'
import {Link} from 'react-router-dom'

export const Header = () => {
  const c = useStyles()
  const userName = 'андрей ✌️'
  const avatar =
    'https://sun9-17.userapi.com/impg/vjuS4Em_u-CdVoiihm050TezVT2A30dvZEusOQ/QBC0hA3IufU.jpg?size=675x745&quality=95&sign=c0ff4788fc6a00b6c03ed83e54b6cab6&type=album'

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
        <button className={c.userName}>{userName}</button>
        <button className={c.avatarButton}>
          <img className={c.avatar} src={avatar} alt='' />
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
