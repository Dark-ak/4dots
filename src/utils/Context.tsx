import React, {createContext,useState} from "react";

interface GameContextProps {
    winner: number,
    scores: number[],
    player: number,
    setWinner: React.Dispatch<React.SetStateAction<number>>
    setScores: React.Dispatch<React.SetStateAction<number[]>>
    setPlayer: React.Dispatch<React.SetStateAction<number>>

}


export const GameContext =  createContext<GameContextProps | undefined>(undefined)

export const GameProvider = ({children}) => {
    const [winner,setWinner] = useState<number>(0)
    const [scores, setScores] = useState([0,0])
    const [player, setPlayer] = useState(1)


    return (
        <GameContext.Provider value={{winner,setWinner, scores,setScores, player,setPlayer}}>
            {children}
        </GameContext.Provider>
    )
}