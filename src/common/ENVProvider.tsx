import React from 'react'
import {useContext} from 'react'

const logger = {
  info(message: unknown) {
    // eslint-disable-next-line no-console
    console.log(message)
  },
  error(message: unknown) {
    // eslint-disable-next-line no-console
    console.error(message)
  },
}

const ENV = {
  logger: logger,
}
const EnvProvider = React.createContext(ENV)

export const useEnv = () => {
  const env = useContext(EnvProvider)
  return env
}
type ENVProviderType = {
  children: React.ReactNode
}
export const ENVProvider: React.FC<ENVProviderType> = ({children}) => {
  return <EnvProvider.Provider value={ENV}>{children}</EnvProvider.Provider>
}
