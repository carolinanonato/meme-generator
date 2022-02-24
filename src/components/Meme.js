import React from 'react'

function Meme() {
    return (
        <main>
            <form className="form">
                <input className="input" placeholder="Top text" type="text" />
                <input className="input" placeholder="Bottom text" type="text" />
                <button className='button'>Get a new image 🖼️</button>
            </form>
        </main>
    )
}

export default Meme