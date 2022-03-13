import React from 'react'

import { Admin, Miner } from 'etherdata-react-ui'

const App = () => {
  return (
    <div style={{ padding: 10, margin: 10 }}>
      <Admin host='http://192.168.31.249' port='8547' />

      <Miner host='http://192.168.31.249' port='8547' />
    </div>
  )
}

export default App
