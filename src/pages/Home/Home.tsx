import React from 'react'
import {createUseStyles} from 'react-jss'
import {Chat} from '../../common/Chat'

export const Home: React.FC = () => {
  const styles = useStyles()
  return (
    <div className={styles.root}>
      <Chat />
    </div>
  )
}

const useStyles = createUseStyles({
  root: {},
})
