import React, { useEffect } from 'react'
import { Row } from 'react-bootstrap'
import {
  Button
} from '../atoms'
import { Header } from '../organisms/header'
import MyActor from '../organisms/myActor'
import Items from '../organisms/items'
import QompGame from '../game'
import { useState } from 'react'

const HomePage = () => {

  const [speed, setSpeed] = useState<number | null>(null)
  const [gameStart, setGameStart] = useState(false)
  const [actor, setActor] = useState<{
    id: string
    common_type: number
    owner: string
    speed: number
  } | null>()

  useEffect(()=>{
    setSpeed(actor?.speed ?? 300)
  }, [actor, gameStart])

  const endGame = () => {
    setGameStart(false)
  }

  if (gameStart) {
    return <QompGame speed={speed ?? 300} endGame={endGame}/>
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
        <MyActor actor={actor} setActor={setActor} setSpeed={setSpeed}/>
      </Row>
      <Row>
        <Items actor={actor} setActor={setActor}/>
      </Row>
      <Row>
        {gameStart === false && <Button disabled={!speed} onClick={()=>setGameStart(true)}>Start Game</Button>}
      </Row>
  </div>
}

export default HomePage