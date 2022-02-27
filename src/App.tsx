import React from 'react'
import GlobalContext from './contexts';
import Router from './Router';

function App() {

  // GAME HASH: 0xa6e7847f64d25001866ef595daa342d5d6e765d6372ae0decb6e6a3b321f1050

  // Actor HASH: 0x31cd186276e591c7ebb9db98f63d0ecb0ad028c8627cc7786671406188575748

  // Speed attribute: 0xa1e1b6b685242328176b47164e4710a9d7cc4909d4929234e50e9d97a9735764

  return (
    <GlobalContext>
      <Router/>
    </GlobalContext>
  )
}

export default App
