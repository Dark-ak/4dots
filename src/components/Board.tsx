import React, { useContext, useEffect, useRef, useState } from 'react'
import timer from "../assets/timer.png"
import timer2 from "../assets/timer2.png"
import { whoWin } from '../utils/Algo'
import { GameContext } from '../utils/Context'
import { Bot } from '../utils/Bot'

type BoardProps = {
    board: Array<Array<number>>,
    setBoard: React.Dispatch<React.SetStateAction<Array<Array<number>>>>,
    flag: boolean
    paused: boolean
}


const Board: React.FC<BoardProps> = ({ board, flag, setBoard, paused }) => {

    const context = useContext(GameContext)
    const [time, setTime] = useState(30)
    const { winner, player,isPc, setWinner, setScores, setPlayer } = context!
    const pausedRef = useRef(paused)
    const basic = Array.from({ length: 7 }, () => Array(6).fill(0))


    useEffect(() => {
        pausedRef.current = paused
    }, [paused])

    useEffect(() => {
        setTime(30)
        const timer = setInterval(() => {
            setTime((prevTime) => {
                if (winner == 0 && prevTime > 1) {
                    return pausedRef.current ? prevTime : prevTime - 1
                }
                else {
                    clearInterval(timer)
                    console.log("trig")

                    setWinner(player == 1 ? 2 : 1)
                    incScores(winner)
                }
                return 0
            })
        }, 1000)

        return () => clearInterval(timer)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [player, winner, flag])

    useEffect(() => {
        if(player == 2 && isPc == true){
            handleClick(Bot(board))
        }
    })

    const changePlayer = () => {
        setPlayer(player == 1 ? 2 : 1)
    }

    const incScores = (player: number) => {
        setScores(prevScore => {
            const newvalues = [...prevScore]
            newvalues[player - 1] = (newvalues[player - 1] + 1)
            return newvalues
        })
    }

    const handleClick = (colIndex: number) => {
        if (winner != 0) {
            return
        }
        const newBoard = board;
        for (let i = newBoard[colIndex].length - 1; i >= 0; i--) {
            if (!newBoard[colIndex][i]) { // Check if position is empty and flag is false
                newBoard[colIndex][i] = player;
                break;
            }
        }
        setBoard(newBoard)
        changePlayer()
        const check = whoWin(newBoard)
        if (check != null) {
            console.log("trig")

            setWinner(player)
            // incScores(player)
        }
    };

    const checkRow = (colIndex: number) => {
        for (let i = 0; i < 6; i++) {
            if (board[colIndex][i] == 0) {
                return true
            }

            return false
        }
    }

    const handleAgain = () => {
        setWinner(0)
        setBoard(basic)
    }


    return (
        <div className='relative flex my-2 px-1 gap-2 z-40 py-2 pb-6 bg-white rounded-2xl border-black border-4 shadow-4xl'>
            {/* <div className='rounded-full w-11 h-11 md:w-14 md:h-14 lg:w-14 lg:h-14 shadow-[inset_0_10px_0px_rgba(0,0,0,0.6)]  border-4 border-black  bg-primary  shadow-black '></div> */}
            {board.map((col, colIndex: number) => {
                return (
                    <div key={colIndex} className='grid gap-2 hover:cursor-pointer' onClick={() => checkRow(colIndex) ? handleClick(colIndex) : ""}>
                        {col.map((_dot: number, dotIndex: number) => {
                            return (
                                <div key={dotIndex} className={`rounded-full w-11 h-11 md:w-14 md:h-14 lg:w-14 lg:h-14 shadow-[inset_0_10px_0px_rgba(0,0,0,0.6)]  border-4 border-black  shadow-black ${board[colIndex][dotIndex] === 1 ? "bg-pink-500" : board[colIndex][dotIndex] === 2 ? "bg-ye" : "bg-primary"}`}> </div>

                            )
                        })}
                    </div>
                )
            })}
            <div className={`absolute flex  justify-center ${winner == 0 ? "-bottom-36" : "-bottom-32"} w-full`}>
                {winner == 0 ? (
                    <div className='flex justify-center'>
                        <img src={player == 1 ? timer : timer2} alt="" className='w-48' />
                        <div className='absolute top-10 flex items-center flex-col'>
                            <p className=' text-lg text-white font-semibold font-mono'>Player {player}'s Turn</p>
                            <p className={`text-5xl text-white font-semibold font-mono`}>{time}s</p>
                        </div>
                    </div>
                ) :
                    (
                        <div className={`flex flex-col items-center bg-white px-8 gap-2 py-2 border-[3px] shadow-4xl rounded-xl border-black`}>
                            <div >
                                <p className='font-mono text-center'>Player {winner}</p>
                                <p className='text-5xl font-quick font-semibold'>Winner</p>
                            </div>
                            <button className='bg-pin px-4 text-white font-quick rounded text-xl py-1 hover:opacity-60' onClick={handleAgain}>Play Again</button>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Board