
import { createContext, useState } from 'react'
import './App.css'
import Info from './components/Info'
import Navbar from './components/Navbar'
import Select from './components/Select'
import Dns from './components/Dns'
import Summary from './components/Summary'
export const IndexContext = createContext()


function App() {

    
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
    
    

    return (

        <IndexContext.Provider value={[move, setMove]}>

            <div className='flex justify-center items-center h-[100vh] bg-gre'>
                <div className='nav-main '>
                    <Navbar />
                    {movepage}
                    
                </div>

            </div>

        </IndexContext.Provider>


    )
}

export default App
