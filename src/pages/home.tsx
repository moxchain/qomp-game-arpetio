import React from 'react'
import { Row } from 'react-bootstrap'
import {
  Button,
  Title
} from '../atoms'
import { Header } from '../organisms/header'
import MyActor from '../organisms/myActor'
import QompGame from '../game/qomp'
import { useState } from 'react'

const HomePage = () => {

  const [speed, setSpeed] = useState<number | null>(null)
  const [gameStart, setGameStart] = useState(false)

  const endGame = () => {
    window.location.reload();
    setGameStart(false)
  }

  if (gameStart) {
    QompGame({endGame, speed: speed ?? 300})
    return <></>
  }

  return <div style={{
    display: 'flex',
    height: '100vh',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center'
  }}>
      <Row>
        <Header />
      </Row>

      <Row>
        <MyActor setSpeed={setSpeed}/>
      </Row>
      <Row>
        <Title>
          Consume Speed potion, Slow potion
        </Title>
      </Row>
      <Row>
        {gameStart === false && <Button disabled={!speed} onClick={()=>setGameStart(true)}>Start Game</Button>}
      </Row>
  </div>
}

export default HomePage