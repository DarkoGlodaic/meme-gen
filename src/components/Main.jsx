import { useState, useEffect } from 'react'

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "Road work ahead?",
        bottomText: "I sure hope it does",
        imageUrl: "https://i.imgflip.com/7bv2j9.jpg?a483036"
    })

    const [memeList, setMemeList] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setMemeList(data.data.memes))
    }, [])

    function handleChange(event) {
        const {value, name} = event.currentTarget
        console.log(value)
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
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
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="I sure hope it does"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
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