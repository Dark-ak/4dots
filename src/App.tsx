import { useState } from 'react'
import smile from "../src/assets/smile.png"
import robot from "../src/assets/robot.png"
import { Link } from 'react-router-dom'
import Logo from "./components/Logo.jsx"

function App() {



  return (
    <div className='flex items-center justify-center bg-primary h-screen w-screen'>
      <div className='flex flex-col items-center gap-5'>
        <Logo />
        <div className='flex flex-col gap-4 '>
          <Link to={"/play"} className='flex  items-center cursor-pointer gap-10 relative justify-between shadow-4xl border-[3px] active:translate-y-2 hover:bg-opacity-75 bg-pin px-5 py-3 border-black rounded-xl'>
            <p className='text-2xl text-white font-quick font-bold'>PLAY VS Player</p>
            <div className='relative flex'>
              <img src={smile} alt="" className='w-9' />  
            </div>
          </Link>
          <div className='flex items-center cursor-pointer gap-5 relative justify-between shadow-4xl border-[3px] active:translate-y-2 hover:bg-opacity-75 bg-ye px-5 py-3 border-black rounded-xl'>
            <p className='text-2xl text-white font-quick font-bold'>PLAY VS Cpu</p>
            <div className='relative flex'>
              <img src={robot} alt="" className='w-10' />
            </div>
          </div>

          <div className='flex items-center gap-5 cursor-pointer relative justify-between shadow-4xl hover:bg-opacity-75 active:translate-y-2 border-[3px] bg-white px-5 py-3 border-black rounded-xl'>
            <p className='text-3xl font-quick font-bold'>Rules</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
