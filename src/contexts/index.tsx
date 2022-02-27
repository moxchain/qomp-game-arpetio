import React from 'react'
import { AddressContextProvider } from './address'
import { MoxContextProvider } from './mox'

const GlobalContext: React.FC = ({ children }) => {
  return <MoxContextProvider>
    <AddressContextProvider>
      {children}
      </AddressContextProvider>
    </MoxContextProvider>
}

export default GlobalContext