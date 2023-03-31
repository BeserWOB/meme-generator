import React from "react";
import Data from "./Data";

export default function Meme(){
    const memesData =  Data.data.memes
    const [memeUrl, setMemeUrl] = React.useState("https://i.imgflip.com/39t1o.jpg")
    const [topText, setTopText] = React.useState("MEME GENERATOR")
    const [bottomText, setBottomText] = React.useState("IS YOURS")


    function getMemesData()  {
        const randomNumber = Math.ceil(Math.random()*memesData.length);
        setMemeUrl(memesData[randomNumber].url)
    }

    function getTopText(e){
        const textValueTop = e.target.value;
        const textValueTopUppercased = textValueTop.toUpperCase();
        setTopText(textValueTopUppercased);
    }

    function getBottomText(e){
        const textValueBottom = e.target.value;
        const textValueBottomUppercased = textValueBottom.toUpperCase();
        setBottomText(textValueBottomUppercased);
    }

    return(
        <main>
            <div className="form">
                <div className="inputs-container">
                    <input className="meme-input" onChange={getTopText} type="text" placeholder="Top text"/>
                    <input className="meme-input" onChange={getBottomText} type="text" placeholder="Bottom text"/>
                </div>
                <button className="meme-submit" onClick={getMemesData} type="submit">Get a new meme image</button>
            </div>
            <div className="meme-photo-text">
                <img className="meme-image" src={memeUrl} alt="meme image" />
                <p className="text top">{topText}</p>
                <p className="text bottom">{bottomText}</p>
            </div>
        </main>
    )
}