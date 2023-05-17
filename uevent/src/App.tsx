import Lottie from 'lottie-react'
import UBIRB_ANIMATION_DATA from './assets/ubirb_animation.json'

import Login from './components/Login'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>uevent</h1>
      <Login/>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
      </div>
      
        <Lottie className='ubirb' animationData={UBIRB_ANIMATION_DATA} />

    </>
  )
}

export default App
