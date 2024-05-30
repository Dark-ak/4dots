import React, { createContext, ReactNode, useState } from "react";

interface GameContextProps {
    winner: number,
    scores: number[],
    player: number,
    isPc: boolean
    setWinner: React.Dispatch<React.SetStateAction<number>>
    setScores: React.Dispatch<React.SetStateAction<number[]>>
    setPlayer: React.Dispatch<React.SetStateAction<number>>
    setIsPc: React.Dispatch<React.SetStateAction<boolean>>

}

interface GameProviderProps {
    children: ReactNode
}

export const GameContext = createContext<GameContextProps | undefined>(undefined)

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
    const [winner, setWinner] = useState<number>(0)
    const [scores, setScores] = useState([0, 0])
    const [player, setPlayer] = useState(1)
    const [isPc, setIsPc] = useState(false)


    return (
        <GameContext.Provider value={{ winner, setWinner, scores, setScores, player, setPlayer, isPc, setIsPc }}>
            {children}
        </GameContext.Provider>
    )
}