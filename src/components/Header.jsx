import memeMan from "/meme_man.png"

export default function Header() {
    return (
        <header className="header">
            <img src={memeMan} alt="Meme Man"
            />
            <h1>Meme Gen</h1>
        </header>
    )
}