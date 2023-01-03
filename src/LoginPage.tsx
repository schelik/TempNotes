import React from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage({
  setLoggedIn
}: {
  setLoggedIn: (loggedIn: boolean) => void
}) {
  const navigate = useNavigate()

  const handleOnClick = () => {
    console.log("I'm logged in")
    setLoggedIn(true)
    navigate('/')
  }

  return (
    <div className='hero min-h-screen  '>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>Hello there</h1>
          <p className='py-6'>
            Please sign in to your Google account to continue!
          </p>
          <button className='btn btn-primary' onClick={handleOnClick}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
