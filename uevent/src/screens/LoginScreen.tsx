import Lottie from 'lottie-react'
import UBIRB_ANIMATION_DATA from '../assets/ubirb_animation.json'
import Login from "../components/Login"

function LoginScreen(): JSX.Element {
  return (
    <>
    <h1>Login</h1>
    <Login />
    <Lottie className='ubirb' animationData={UBIRB_ANIMATION_DATA} />
    </>
  )
}

export default LoginScreen