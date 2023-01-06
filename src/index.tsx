import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './index.css'
import App from './App'
import LoginPage from './LoginPage'
import NotFound from './NotFound'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

function Index() {
  const [token, setToken] = useState(localStorage.getItem('jwtToken') ?? '')

  const router = createBrowserRouter([
    {
      path: '/',
      element:
        token !== '' ? (
          <App token={token} setToken={setToken} />
        ) : (
          <Navigate to='/login' />
        )
    },
    {
      path: '/login',
      element:
        token === '' ? <LoginPage setToken={setToken} /> : <Navigate to='/' />
    },
    {
      path: '/404',
      element: <NotFound />
    },
    {
      path: '*',
      element: <Navigate to='/404' />
    }
  ])

  useEffect(() => {
    console.log('late index token = ', token)
  }, [token])

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

root.render(<Index />)
