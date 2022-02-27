import React, { useState, useContext } from 'react'
import MoxContext from '../contexts/mox'
import AddressContext from '../contexts/address'
import {
  Button,
  Input,
  Title,
  Text,
  Card
} from '../atoms'

export const SetSeed = () => {
  const {modules} = useContext(MoxContext)
  if (!modules) throw new Error('Mox modules not initialized')
  const {setAddress} = useContext(AddressContext)
 
  const [seed, setSeed] = useState("")
  const [err, setErr] = useState("")

  const createSeed = () => {
    setErr("")
    modules.account.createMnemonic()
    const seed = modules.account.mnemonicToSeed()
    setSeed(seed)
  }

  const enableSeed = async () => {
    setErr("")
    if (seed.length < 1) {
      return setErr("Invalid seed: empty")
    }
    try {
      modules.account.setSeed(seed)
      modules.account.enableAccountBySeed()
      const publicKey = modules.account.publicKey()
      setAddress(publicKey)
    } catch (error: any) {
      setErr(error.message)
    }
  }

  return <Card>
        <Title>Enter with your seed:</Title>
        <Text style={{
          color: 'red'
        }}>
          {err}
        </Text>
        <Input value={seed} onChange={
          (e: any) => setSeed(e.target.value) 
        }/>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Button
            style={{
              width: '40%'
            }}
            onClick={enableSeed}
          > Enter </Button>
          <Button
            style={{
              width: '40%'
            }}
            onClick={createSeed}
          > Create seed </Button>
        </div>
      </Card>
}