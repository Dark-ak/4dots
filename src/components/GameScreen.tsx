import { useContext, useEffect, useState } from 'react'
import Logo from './Logo'
import PLayer1 from "../assets/player-1.png"
import Player2 from "../assets/player-2.png"
import Board from './Board'
import Pause from './popups/Pause'
import {useLocation} from "react-router-dom"
import { GameContext } from '../utils/Context'

const GameScreen = () => {
    const context = useContext(GameContext)
    const location = useLocation();
    const [isPaused, setIspaused] = useState(false)
    const [board, setBoard] = useState(Array.from({ length: 7 }, () => Array(6).fill(0)));


    const {winner, scores, player, setScores,setWinner, setPlayer} = context!
    // console.log(scores)

    const basic = Array.from({ length: 7 }, () => Array(6).fill(0))

    const handleMenu = () => {
        setIspaused(!isPaused)
    }

    const handleRestart = () => {
        setWinner(0)
        setScores([0,0])
        setBoard(basic)
    }

    useEffect(() => {
        handleRestart()
        console.log("location changed", location.pathname)
    },[location])


    return (
        <div className='bg-primary h-screen w-screen relative overflow-hidden'>
            <div className={`${isPaused ? "flex" : "hidden"}`}>
                <Pause setPause={setIspaused} restart={handleRestart} />
            </div>
            <div className='flex flex-col items-center gap-10 py-5 h-screen z-10'>
                <div className='flex justify-evenly md:justify-center md:gap-32 w-screen'>
                    <button className='text-white font-mono px-4 py-1 rounded-3xl bg-priDark font-medium text-lg focus:outline-none' onClick={handleMenu}>Menu</button>
                    <Logo />
                    <button className='text-white font-mono px-4 py-1 focus:outline-none rounded-3xl bg-priDark font-medium text-lg' onClick={handleRestart}>Restart</button>
                </div>
                <div className='flex  flex-col md:flex-row md:gap-10 items-center gap-5'>
                    <div className='flex md:hidden justify-center gap-5 w-screen'>
                        <div className='relative bg-white px-8 rounded-2xl shadow-4xl border-2 border-black py-2'>
                            <img src={PLayer1} alt="" className='absolute w-12 -left-6' />
                            <p className='text-black text-center font-mono font-semibold'>PLAYER 1</p>
                            <p className='text-center font-mono text-black text-2xl font-semibold'>{scores[0]}</p>
                        </div>
                        <div className='relative bg-white px-8 rounded-2xl shadow-4xl border-2 border-black py-2'>
                            <img src={Player2} alt="" className='absolute w-12 -right-6' />
                            <p className='text-black text-center font-mono font-semibold'>PLAYER 2</p>
                            <p className='text-center font-mono text-black text-2xl font-semibold'>{scores[1]}</p>
                        </div>
                    </div>
                    <div className='hidden md:relative md:block bg-white px-8 rounded-2xl shadow-4xl border-2 border-black py-2'>
                        <img src={PLayer1} alt="" className='absolute w-12 -left-6' />
                        <p className='text-black text-center font-mono font-semibold'>PLAYER 1</p>
                        <p className='text-center font-mono text-black text-2xl font-semibold'>{scores[0]}</p>
                    </div>
                    <Board board={board} setBoard={setBoard}/>
                    <div className='hidden md:relative md:block bg-white px-8 rounded-2xl shadow-4xl border-2 border-black py-2'>
                        <img src={Player2} alt="" className='absolute w-12 -right-6' />
                        <p className='text-black text-center font-mono font-semibold'>PLAYER 2</p>
                        <p className='text-center font-mono text-black text-2xl font-semibold'>{scores[1]}</p>
                    </div>
                </div>
            </div>
            <div className={`absolute w-screen h-[350px] rounded-t-[150px] z-20 -bottom-20 ${winner == 1 ? "bg-pin" : winner == 2 ? "bg-ye" : "bg-priDark"}`}>
            </div>
        </div>
    )
}

export default GameScreen