import { Modules } from '@moxchain/sdk'
import React, { createContext, useState } from 'react'

type PropsMoxContext = {
  modules: Modules | undefined
  setModules: React.Dispatch<React.SetStateAction<Modules | undefined>>
}

const DEFAULT_VALUE: PropsMoxContext = {
  modules: undefined,
  setModules: () => {}
}

const MoxContext = createContext<PropsMoxContext>(DEFAULT_VALUE)

const MoxContextProvider: React.FC = ({ children }) => {
  const [ modules, setModules ] = useState<Modules | undefined>(DEFAULT_VALUE.modules)
  return (
    <MoxContext.Provider
      value = {{
        modules,
        setModules
      }}
    >
      {children}
      </MoxContext.Provider>
  )
}

export { MoxContextProvider }
export default MoxContext