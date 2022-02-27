import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Actor from '../molecules/actor'
import { GetActor } from '../molecules/getActor'

const MyActor = (params: {
  setSpeed: React.Dispatch<React.SetStateAction<number | null>>
}) => {

  const [actor, setActor] = useState<{
    id: string
    common_type: number
    owner: string
    speed: number
  } | null>()

  useEffect(()=>{
    if (actor) params.setSpeed(actor.speed)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actor])

  if (!actor) {
    return <GetActor setActor={setActor}/>
  }

  return <Actor actor={actor}/>

}

export default MyActor