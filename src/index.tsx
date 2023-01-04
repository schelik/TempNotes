import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './index.css'
import App from './App'
import LoginPage from './LoginPage'
import NotFound from './NotFound'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const token = localStorage.getItem('jwtToken')

const router = createBrowserRouter([
  {
    path: '/',
    element: token != null ? <App /> : <Navigate to='/login' />
  },
  {
    path: '/login',
    element: <LoginPage />
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

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
