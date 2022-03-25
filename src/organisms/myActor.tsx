import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Actor from '../molecules/actor'
import { GetActor } from '../molecules/getActor'

const MyActor = (params: {
  setSpeed: React.Dispatch<React.SetStateAction<number | null>>,
  setActor: React.Dispatch<React.SetStateAction<{
    id: string;
    common_type: number;
    owner: string;
    speed: number;
} | null | undefined>>,
actor: {
  id: string;
  common_type: number;
  owner: string;
  speed: number;
} | null | undefined
}) => {



  useEffect(()=>{
    if (params.actor) params.setSpeed(params.actor.speed)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.actor])

  if (!params.actor) {
    return <GetActor setActor={params.setActor}/>
  }

  return <Actor actor={params.actor}/>

}

export default MyActor