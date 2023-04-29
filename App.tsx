import React from 'react'
import Navigator from './src/navigator'
import {ModalHandlerProvider} from '@context/ModalHandler';
import APIInterceptor from './src/api/APIInterceptor';
const App = () => {
  return (
    <ModalHandlerProvider>
      <APIInterceptor>
        <Navigator/>
      </APIInterceptor>
    </ModalHandlerProvider>
  )
}

export default App