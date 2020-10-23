import React from 'react'
import Hero from './Hero'
import {homeobj} from '../data'
import Navbar from '../Navbar'


function Home() {
    return (
        <>
        <div class='' id='home'>
            
        <Hero {...homeobj}/>
        </div>
        </>
    )
}

export default Home
