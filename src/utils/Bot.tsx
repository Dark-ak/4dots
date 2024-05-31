
export const Bot = (board : Array<Array<number>>) => {

    const emptyCols = board.map((col, index) => (col.includes(0) ? index : null)).filter((index) => index !== null)

    const randomCol = emptyCols[Math.floor(Math.random()* emptyCols.length)]

    return randomCol
}