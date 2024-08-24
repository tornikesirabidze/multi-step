
import { createContext, useState } from 'react'
import './App.css'
import Info from './components/Info'
import Navbar from './components/Navbar'
import Select from './components/Select'
import Dns from './components/Dns'
import Summary from './components/Summary'
import NavBtn from './components/NavBtn'
import { selectText } from './constants'
export const IndexContext = createContext()


function App() {


    const [mainObj, setMainObj] = useState([
        {
            id: 0,
            name: true,
            isanimation: true,
            title: "Arcade",
            money: "$9/mo",

        },
        {
            id: 0,
            onlineService: null,
            largerStorage: null,
            custumPro: null,
            arr:[]

        }

    ]

    )



    const [move, setMove] = useState(2)
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




    return (

        <IndexContext.Provider value={[move, setMove, mainObj, setMainObj]}>

            <div className='flex justify-center items-center h-[100vh] flex-col bg-gre'>
                <div className='nav-main flex '>
                    <Navbar />
                    {movepage}
                </div>

                <div className='absolute mt-[30rem] ml-[14.5rem]'>

                    <NavBtn />
                </div>


            </div>

        </IndexContext.Provider>


    )
}

export default App
