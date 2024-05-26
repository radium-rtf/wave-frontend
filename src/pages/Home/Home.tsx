import React from 'react'
import {createUseStyles} from 'react-jss'
import {Chat} from '../../common/Chat'
import {useEnv} from '../../common/ENVprovider'
import {api} from '../../api'

export const Home: React.FC = () => {
  const styles = useStyles()
  const env = useEnv()
  const onCLick = async () => {
    try {
      const res = await api.createChat('vlabl')
      debugger
    } catch (err) {
      env.logger.error(err)
    }
  }
  return (
    <div className={styles.root}>
      <button onClick={onCLick}>sss</button>

      <Chat />
    </div>
  )
}

const useStyles = createUseStyles({
  root: {},
})
