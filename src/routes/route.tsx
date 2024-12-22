import React from 'react'
import Home from '../pages/Home'

interface Route {
  path: string
  element: React.ReactElement // Ensure this is a React element
  children?: Route[]
}

const routes: Route[] = [
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '*',
    element: <div>404</div>,
  },
]

export default routes
