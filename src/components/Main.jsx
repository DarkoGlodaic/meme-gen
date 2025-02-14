import { useState } from 'react'

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "Road work ahead?",
        bottomText: "I sure hope it does",
        imageUrl: "https://i.imgflip.com/7bv2j9.jpg?a483036"
    })

    function handleChange(event) {
        const {value} = event.currentTarget
        console.log(value)
        setMeme(prevMeme => ({
            ...prevMeme,
            topText: value
            })
        )
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="Road work ahead?"
                        name="topText"
                        onChange={handleChange}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="I sure hope it does"
                        name="bottomText"
                    />
                </label>
                <button>Get a new image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl}/>
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}