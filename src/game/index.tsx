import React from 'react'
import Game from './qomp'

const QompGame = (params: {speed: number, endGame: () => void}) => {

  Game(
    params
  ) as any

  return (
    <div />
  )
}

export default QompGame