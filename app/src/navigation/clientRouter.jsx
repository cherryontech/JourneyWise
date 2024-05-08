import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
import App from '../App'
import Index from './Index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        children: [{ index: true, element: <Index /> }],
      },
    ],
  },
])

export default router
