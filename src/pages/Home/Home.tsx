import React from 'react'
import {createUseStyles} from 'react-jss'

export const Home: React.FC = () => {
  const styles = useStyles()
  return <div className={styles.root}>HOME</div>
}

const useStyles = createUseStyles({
  root: {
    color: 'green',
  },
})
