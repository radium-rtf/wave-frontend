import React from 'react'
import {createUseStyles} from 'react-jss'
import {Chat} from '../../common/Chat'
import {createChat} from '../../api'

export const Home: React.FC = () => {
  const styles = useStyles()
  const onCLick = () => {
    try {
      createChat()
    } catch {
      
    }
  }
  return (
    <div className={styles.root}>
      <button onClick={onCLick}></button>

      <Chat />
    </div>
  )
}

const useStyles = createUseStyles({
  root: {},
})
