import React from 'react'
import memesData from '../memesData.js'

function Meme() {

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
    }

    return (
        <main>
            <div className="form">
                <input className="input" placeholder="Top text" type="text" />
                <input className="input" placeholder="Bottom text" type="text" />
                <button onClick={getMemeImage} className='button'>Get a new image 🖼️</button>
            </div>
        </main>
    )
}

export default Meme