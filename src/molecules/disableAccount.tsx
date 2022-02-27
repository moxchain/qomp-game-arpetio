import React, {useContext} from 'react'
import {
  Button
} from '../atoms'
import MoxContext from '../contexts/mox'
import AddressContext from '../contexts/address'

export const DisableAccount = () => {
  const {modules} = useContext(MoxContext)
  const {address, setAddress} = useContext(AddressContext)
  if (address.length === 0) throw new Error('Account not set')
  if (!modules) throw new Error('Mox not initialize')
  
  const disableAccount = () => {
    modules.account.disableAccount()
    setAddress("")
  }

  return <Button onClick={disableAccount}>
    Disable Account
  </Button>
}