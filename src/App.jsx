
import { createContext, useState } from 'react'
import './App.css'
import Info from './components/Info'
import Navbar from './components/Navbar'
import Select from './components/Select'
import Dns from './components/Dns'
import Summary from './components/Summary'
import NavBtn from './components/NavBtn'
import { selectText } from './constants'
import Finish from './components/Finish'
export const IndexContext = createContext()


function App() {


    const [mainObj, setMainObj] = useState([
        {
            id: 0,
            name: true,
            isanimation: true,
            title: "Arcade",
            money: "9",

        },
        {
            id: 0,
            onlineService: "0",
            largerStorage: "0",
            custumPro: "0",
            arr: [],



        }
    ]
    
)

console.log(mainObj)


    const [move, setMove] = useState(0)
    let movepage = <Info></Info>
    if (move === 1) {
        movepage = <Select />
    }
    if (move === 2) {
        movepage = <Dns />
    }
    if (move === 3) {
        movepage = <Summary />
    }
    if (move === 4) {
        movepage = <Finish />
        
    }




    return (

        <IndexContext.Provider value={[move, setMove, mainObj, setMainObj]}>
            <div >
                <div className='flex justify-center  relative items-center '>
                    <div className='nav-main  flex sm:flex-row flex-col '>
                        <Navbar />
                        <div className=' mt-[-2rem] max-w-[450px]  right-[120px] '>
                            {movepage}
                            <div className='max-sm:hidden '>
                                {move<4? <NavBtn />:undefined}

                            </div>
                        </div>
                    </div>



                </div>
                <div className='sm:hidden w-full absolute bottom-0 '>


                    {move<4? <NavBtn />:undefined}  
                </div>
            </div>

        </IndexContext.Provider>


    )
}

export default App
