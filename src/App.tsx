import React, { useState } from 'react'
import QompGame from './game'

function App() {
  const [gameStart, setGameStart] = useState(false);
  const [velocity, setVelocity] = useState(0);

  const endGame = () => {
    setGameStart(false)
    window.location.reload();
  }

  const start = () => {
    if (velocity > 0) setGameStart(true)
  }

  if (!gameStart) {
    return <div>
      <input type='number' value={velocity} onChange={(e)=>setVelocity(e.target.value as any)}/>
      <button
      onClick={start}
      >START THE GAME</button>
    </div>
  } else {
    return (
      <QompGame speed={velocity} endGame={endGame}/>
  )
  }

}

export default App
