import React, {useState} from 'react'
import HomeHero from '../heroHome'
import Navbar from '../navbar'
import Sidebar from '../sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
<>
<Sidebar isOpen={isOpen} toggle={toggle}/>
<Navbar toggle={toggle}/>
<HomeHero/>
</>
    )
}

export default Home
