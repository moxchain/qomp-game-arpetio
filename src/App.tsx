import React from 'react'
import GlobalContext from './contexts';
import Router from './Router';

function App() {

  // GAME HASH: 0x880597947f754f2467e65c30cbefe841d97099c49a6adaf95dd97421b224bb26

  // Actor HASH: 0xfe54c10c9691f03b432411d26e45bca7500af7184046c4dc1016ef7467d331b7

  // Speed attribute: 0xb8e540f80463545c522611d6a11fd055e901bed49887bbafda7d6dd865b1a650

  return (
    <GlobalContext>
      <Router/>
    </GlobalContext>
  )
}

export default App
