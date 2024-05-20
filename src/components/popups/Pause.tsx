import { Link } from "react-router-dom"

const Pause = ({setPause, restart}) => {

  const handleExit = () => {
    setPause(false)
  }

  return (
    <div className="inset-0 absolute w-screen bg-gray-100 bg-opacity-30 h-screen z-50 flex items-center justify-center">
        <div className="bg-white px-14 flex py-4 gap-4 flex-col items-center border-black border-4 font-mono font-semibol rounded-xl">
            <p className="text-4xl font-medium ">Game Paused</p>
            <div className="flex gap-8">
                <button className={`text-xl p-1 shadow-4xl border-[3px] border-green-500 text-white bg-green-500 active:translate-y-1 focus:outline-none hover:bg-opacity-75 rounded`} onClick={() => setPause(false)}>Continue</button>
                <Link to={"/"} onClick={() => handleExit}>
                <button className="text-xl p-1 shadow-4xl border-[3px] border-red-500 text-white bg-red-500 active:translate-y-2 hover:bg-opacity-75 rounded" onClick={restart}>Exit</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Pause