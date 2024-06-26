import ok from "../assets/ok.png"
import { AnimatePresence, motion } from "framer-motion"

type RuleProps = {
    rules: boolean
    setRules: React.Dispatch<React.SetStateAction<boolean>>
}

const Rules = ({ rules, setRules }: RuleProps) => {

    return (
        <AnimatePresence mode="wait">
            {rules &&
                <motion.div
                    initial={{ y: 10,  opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                className={`inset-0  w-screen bg-gray-100 bg-opacity-30 h-screen z-50 flex items-center justify-center pt-6 mb-10 ${rules ? "absolute" : "hidden"} `}
                >
                    <div className='bg-white relative flex items-center flex-col border-black w-[90%] lg:w-[650px] border-4 rounded-xl shadow-4xl px-2 py-3 md:px-12 md:py-10'>
                        <p className='text-5xl font-quick font-semibold text-center'>RULES</p>
                        <div className='flex flex-col gap-6  mt-5'>
                            <div className='flex flex-col gap-2'>
                                <p className='font-bold text-2xl text-primary font-quick'>Objectives</p>
                                <p className='font-quick text-lg font-semibold'>
                                    Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).
                                </p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='font-bold text-2xl text-primary font-quick'>How to Play</p>
                                <div className='flex flex-col gap-1'>
                                    <p className='font-quick text-lg font-semibold'>
                                        1.  Red goes first in the first game.
                                    </p>
                                    <p className='font-quick text-lg font-semibold'>
                                        2. Players must alternate turns, and only one disc can be dropped in each turn.
                                    </p>
                                    <p className='font-quick text-lg font-semibold'>
                                        3. The game ends when there is a 4-in-a-row or a stalemate.
                                    </p>
                                    <p className='font-quick text-lg font-semibold'>
                                        4. The starter of the previous game goes second on the next game.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <img src={ok} alt="" className='absolute -bottom-12 border-2 shadow-4xl hover:shadow-pink-700 hover:border-pink-700 hover:cursor-pointer  rounded-full border-black w-16 lg:w-24' onClick={() => setRules(!rules)} />
                    </div>
                </motion.div>}
        </AnimatePresence>
    )
}

export default Rules
