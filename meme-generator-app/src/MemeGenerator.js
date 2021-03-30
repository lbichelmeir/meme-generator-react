import React, {useState, useEffect} from 'react'

function MemeGenerator() {
    const [topText, setTopText] = useState("")
    const [bottomText, setBottomText] = useState("")
    const [randomImg, setRandomImg] = useState("http://i.imgflip.com/1bij.jpg")
    const [allMemeImgs, setAllMemeImgs] = useState([])


    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                setAllMemeImgs(memes)
            })

    }, [randomImg])

    
    function handleSubmit(e) {
        e.preventDefault()
        const randNum = Math.floor(Math.random() * allMemeImgs.length)
        const randMemeImg = allMemeImgs[randNum].url
        setRandomImg(randMemeImg)
    
    }




    return (
        <div>
            <form className="meme-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="topText"
                    placeholder="Top Text"
                    value={topText}
                    onChange={e=> {
                        setTopText(e.target.value)
                    }}
                />
                <input
                    type="text"
                    name="bottomText"
                    placeholder="Bottom Text"
                    value={bottomText}
                    onChange={e=> {
                        setBottomText(e.target.value)
                    }}
                />
                <button> Generate </button>
            </form>
            <div className="meme">
                <img src={randomImg} alt=""/>
                <h2 className="top"> {topText} </h2>
                <h2 className="bottom"> {bottomText}</h2>
            </div>
            
        </div>
    )
}

export default MemeGenerator
