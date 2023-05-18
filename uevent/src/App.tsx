import Header from './components/Header'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import MapScreen from './screens/MapScreen'
import ProfileScreen from './screens/ProfileScreen'

import './App.css'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Router>
        <Header/>
        <Routes>
          <Route path='/' element={< LoginScreen />} />
          <Route path='/login' element={< LoginScreen />} />
          <Route path='/signup' element={< SignupScreen />} />
          <Route path='/map' element={< MapScreen />} />
          <Route path='/profile' element={< ProfileScreen />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
