import React, { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
declare let google: any

function LoginPage() {
  const [token, setToken] = useState<string | null>(null)
  const navigate = useNavigate()
  const handleCredentialResponse = (response: any) => {
    if (response.credential) {
      // User successfully signed in.
      const decode: string = JSON.stringify(jwt_decode(response.credential))
      console.log(decode)
      localStorage.setItem('jwtToken', decode)
      setToken(decode)
      navigate('/')
    } else {
      // User closed the popup without signing in.
      console.log('User closed the popup without signing in.')
    }
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        '25497382730-pjd6dad4eik3sigp8299nlbf43unu6h1.apps.googleusercontent.com',
      callback: handleCredentialResponse
    })
    google.accounts.id.renderButton(
      document.getElementById('buttonDiv'),
      { theme: 'outline', size: 'large' } // customization attributes
    )
  }, [])

  return (
    <div className='hero min-h-screen  '>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>Hello there</h1>
          <p className='py-6 text-lg'>
            Please sign in to your Google account to continue!
          </p>
          <div
            id='buttonDiv'
            className='flex items-center justify-center'
          ></div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
