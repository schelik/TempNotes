import React, { useEffect } from 'react'
import './App.css'
import Home from './Home'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import LoginPage from './LoginPage'
import NotFound from './NotFound'

function App() {
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false)
  const router = createBrowserRouter([
    {
      path: '/',
      element: loggedIn ? <Home /> : <Navigate to='/login' />
    },
    {
      path: '/login',
      element: <LoginPage setLoggedIn={setLoggedIn} />
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
  return <RouterProvider router={router} />
}

export default App
