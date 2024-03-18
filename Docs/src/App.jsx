import React from 'react'
import Foreground from './components/Foreground'
import Background from './components/Background'

function App() {
  return (
    <div className='relative w-full h-screen bg-neutral-800'>
      <Background/>
      <Foreground/>
    </div>
  )
}

export default App