import React from 'react'
import 'antd/dist/antd.css'
import { Miner, Admin } from 'etd-react-ui'
import 'semantic-ui-css/semantic.min.css'

const App = () => {
  return (
    <div style={{ padding: 10, margin: 10 }}>
      <Admin host='http://192.168.31.249' port='8547' />

      <Miner host='http://192.168.31.249' port='8547' />
    </div>
  )
}

export default App
