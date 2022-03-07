import React, { useState } from 'react'
import memesData from '../memesData.js'


function Meme() {


    const [memeImage, setMemeImage] = useState('')



    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)

    }



    return (
        <main>
            <div className="form">
                <input className="input" placeholder="Top text" type="text" />
                <input className="input" placeholder="Bottom text" type="text" />
                <button onClick={getMemeImage} className='button'>Get a new image 🖼️</button>
            </div>
            <img src={memeImage} alt={""} />
        </main>
    )
}

export default Meme