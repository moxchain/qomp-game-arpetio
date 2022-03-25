import React from 'react'
import {
  Title
} from '../atoms'
import { Row } from 'react-bootstrap'
import SpeedItem from '../molecules/speedItem'
import IncreaseSpeedImg from '../assets/increaseSpeedPotion.png'
import DecreaseSpeedImg from '../assets/decreaseSpeedPotion.png'


const Items = (params: {
  actor?: {
    id: string;
    common_type: number;
    owner: string;
    speed: number;
} | null | undefined,
  setActor: React.Dispatch<React.SetStateAction<{
    id: string;
    common_type: number;
    owner: string;
    speed: number;
} | null | undefined>>
}) => {

  if (!params.actor) {
    return <Title>Load actor to see the available items</Title>
  }

  return <div style={{
    display: 'flex',
    width: '70vh',
    justifyContent: 'space-between'
  }}>
    <SpeedItem 
      actor={params.actor}
      setActor={params.setActor}
      itemAsset={IncreaseSpeedImg}
      itemId='0xda3a1102e7951d1c09edd50605ea5321271b8809d9f523762b8f534d7fb9e98c'
      itemName='Increase speed potion'
    />
    <SpeedItem 
      actor={params.actor}
      setActor={params.setActor}
      itemAsset={DecreaseSpeedImg}
      itemId='0xa57587e2a41d41d88f8157b7b679b11ea33013660e140c880711085585fa51fc'
      itemName='Decrease speed potion'
    />
  </div>
}

export default Items