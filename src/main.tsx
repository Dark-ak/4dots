import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import GameScreen from "./components/GameScreen.jsx"
import { GameProvider } from './utils/Context.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: "/play",
    element: <GameScreen />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GameProvider>
      <RouterProvider router={router} />
    </GameProvider>
  </React.StrictMode>,
)
