import React, { createContext, useState } from 'react'

type PropsAddressContext = {
  address: string
  setAddress: React.Dispatch<React.SetStateAction<string>>
}

const DEFAULT_VALUE: PropsAddressContext = {
  address: "",
  setAddress: () => {}
}

const AddressContext = createContext<PropsAddressContext>(DEFAULT_VALUE)

const AddressContextProvider: React.FC = ({ children }) => {
  const [ address, setAddress ] = useState<string>(DEFAULT_VALUE.address)
  return (
    <AddressContext.Provider
      value = {{
        address,
        setAddress
      }}
    >
      {children}
      </AddressContext.Provider>
  )
}

export { AddressContextProvider }
export default AddressContext