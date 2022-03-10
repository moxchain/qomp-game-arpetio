import React, { useEffect, useContext } from 'react';
import mox from '@moxchain/sdk'
import LoginPage from './pages/login';
import HomePage from './pages/home';
import MoxContext from './contexts/mox'
import AddressContext from './contexts/address'

function Router() {

  const {modules, setModules} = useContext(MoxContext)
  const { address } = useContext(AddressContext)

  useEffect(()=>{
    mox({
      network: 'apertio',
      serviceUrl: 'https://arpetio.moxchain.com'
    }).then(modules => {
      setModules(modules)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (modules == null) {
    return (
      <div>
        <h1> Loading Mox SDK </h1>
        </div>
    )
  }

  if (address.length === 0) {
    return (
        <LoginPage/>
    )
  }
  return (
      <HomePage/>
  );
}

export default Router;
