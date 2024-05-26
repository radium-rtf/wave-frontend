import React, {useState} from 'react'
import {createUseStyles} from 'react-jss'
import {Chat} from '../../common/Chat'
import {createChat} from '../../api'
import {AllChats} from './AllChats'
import {ChatTitle} from './ChatTitle'
import cn from 'classnames'
import {ChatSettings} from './ChatSettings'

export const Home: React.FC = () => {
  const c = useStyles()
  const [isSettingsActive, setSettingsActive] = useState(false)
  const onCLick = () => {
    createChat()
  }
  return (
    <div>
      <button onClick={onCLick}></button>

      <div className={cn(c.root, c.margin)}>
        <div className={c.chatTitle}>
          <ChatTitle />
        </div>
      </div>
      <div className={c.root}>
        <div>
          <AllChats />
        </div>
        <div>
          <Chat isSettingsActive={isSettingsActive} setSettingsActive={setSettingsActive} />
        </div>
        <div>
          {isSettingsActive && (
            <ChatSettings isSettingsActive={isSettingsActive} setSettingsActive={setSettingsActive} />
          )}
        </div>
      </div>
    </div>
  )
}

const useStyles = createUseStyles({
  root: {
    padding: [0, 48],
    display: 'grid',
    gridTemplateColumns: '1fr 2.5fr 1fr',
    gridTemplateRows: '1fr',
    gridColumnGap: 19,
    gridRowGap: 0,
  },
  margin: {
    marginBottom: 20,
  },
  chatTitle: {
    gridArea: '1 / 2 / 2 / 3',
  },
})

// .div1 { grid-area: 1 / 1 / 2 / 2; }
// .div2 { grid-area: 1 / 2 / 2 / 3; }
// .div3 { grid-area: 1 / 3 / 2 / 4; }
