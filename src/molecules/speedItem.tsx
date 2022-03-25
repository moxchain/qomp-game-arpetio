import React, { useContext, useEffect, useState } from 'react'
import { Card, Button } from '../atoms'
import { Image, Row } from 'react-bootstrap'
import MoxContext from '../contexts/mox'
import AddressContext from '../contexts/address'


const SpeedItem = (params: {
  actor: {
    id: string;
    common_type: number;
    owner: string;
    speed: number;
  },
  itemId: string,
  itemName: string,
  itemAsset: string,
  setActor: React.Dispatch<React.SetStateAction<{
    id: string;
    common_type: number;
    owner: string;
    speed: number;
} | null | undefined>>
}) => {
  const {modules} = useContext(MoxContext)
  const {address} = useContext(AddressContext)
  if (address.length === 0) throw new Error('Account not set')
  if (!modules) throw new Error('Mox not initialize')

  const [itemBalance, setItemBalance] = useState(0)
  const [itemProperties, setItemProperties] = useState({
    value: 0,
    operation: false
  })

  const getItem = async () => {
    const item = await modules.storage.getItemActions(params.itemId)
    if (item.length > 0) setItemProperties({
      operation: item[0].operation,
      value: item[0].amount
    })
  }

  const getItemBalance = async () => {
    try {
      const balance = await modules.storage.getItemBalances(params.itemId, params.actor.id)
      if (balance) setItemBalance(balance.amount)
    } catch (error) {
      console.log('No item balance')
    }

  }

  const consumeItem = async () => {
    if (itemBalance === 0) return
    const transaction = await modules.item.consumeItem({
      actorId: params.actor.id,
      itemId: params.itemId
    }, 64)
    const txhash = await modules.transaction.signAndSendTransaction(transaction)
    console.log('Tx hash', txhash)
    setItemBalance(itemBalance - 1)
    params.setActor({
      ...params.actor,
      speed: params.actor.speed + (itemProperties.operation ? itemProperties.value : - itemProperties.value)
    })
  }

  useEffect(()=>{
    getItem()
    getItemBalance()
  }, [])

  return <Card>
    <Row>
      <Image src={params.itemAsset} width='50vh' height='50vh'/>
    </Row>
    <Row>
      {itemProperties.operation ? <p> Increase your speed by {itemProperties.value} </p> : <p> Decrease your speed by {itemProperties.value} </p>}
    </Row>
    <Row>
      <Button disabled={itemBalance === 0} onClick={consumeItem}> Consume {params.itemName} (Available {itemBalance}) </Button>
    </Row>
  </Card>
}

export default SpeedItem