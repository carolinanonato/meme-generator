import React from 'react'
import troll from '../images/troll.png'

function Header() {
    return (
        <div className="header">
            <img className="header-img" src={troll} alt="" />
            <h1 className="header-title">Meme Generator</h1>
            <span className="header-info">React Course - Project 3</span>
        </div>
    )
}

export default Header