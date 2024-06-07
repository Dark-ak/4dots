/* eslint-disable react-hooks/exhaustive-deps */
import smile from "../src/assets/smile.png"
import robot from "../src/assets/robot.png"
import { Link } from 'react-router-dom'
import Logo from "./components/Logo.jsx"
import rule from "../src/assets/rules.png"
import { useContext, useEffect, useState } from "react"
import Rules from "./components/Rules.js"
import { GameContext } from "./utils/Context.js"


function App() {

  const [rules, setRules] = useState(false)

  const context = useContext(GameContext)

  const { setIsPc } = context!

  useEffect(() => {
    setIsPc(false)
  },[])


  return (
    <div className='flex items-center justify-center bg-primary h-screen w-screen lg:overflow-hidden '>
      <div className='flex flex-col items-center gap-5'>
        <Logo />
        <div className='flex flex-col gap-4 '>
          <Link to={"/play"} className='flex  items-center cursor-pointer gap-10 relative justify-between shadow-4xl border-[3px] active:translate-y-2 hover:bg-opacity-75 bg-pin px-5 py-3 border-black rounded-xl'>
            <p className='text-2xl text-white font-quick font-bold'>Play VS Player</p>
            <div className='relative flex'>
              <img src={smile} alt="" className='w-9' />
            </div>
          </Link>
          <Link to={'/play'}>
            <div className='flex items-center cursor-pointer gap-5 relative justify-between shadow-4xl border-[3px] active:translate-y-2 hover:bg-opacity-75 bg-ye px-5 py-3 border-black rounded-xl' onClick={() => setIsPc(true)}>
              <p className='text-2xl text-white font-quick font-bold'>Play VS Cpu</p>
              <img src={robot} alt="" className='w-10' />
            </div>
          </Link>

          <div className='flex items-center gap-5 cursor-pointer justify-between shadow-4xl hover:bg-opacity-75 active:translate-y-2 border-[3px] bg-white px-5 py-3 border-black rounded-xl' onClick={() => setRules(true)}>
            <p className='text-3xl font-quick font-bold'>Rules</p>
            <img src={rule} alt="" className='w-10' />
          </div>
        </div>

      </div>
      <Rules rules={rules} setRules={setRules} />
    </div>
  )
}

export default App
