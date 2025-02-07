export default function Main() {
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="Road work ahead"
                        name="topText"
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
                <img src="https://i.imgflip.com/7bv2j9.jpg?a483036"/>
                <span className="top">Road work ahead</span>
                <span className="bottom">I sure hope it does</span>
            </div>
        </main>
    )
}