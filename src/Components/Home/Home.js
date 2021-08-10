import React from 'react'
import './Home.css'
import arrow from './arrow.png'

const Home = () => {
    return (
        <div className = 'home'>
            <span className = 'caption'>Start your own anime journey here</span>
            <img src = {arrow} alt = ''/>
        </div>
    )
}

export default Home
