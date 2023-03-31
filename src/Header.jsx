import React from "react";

export default function Header(){
    return(
        <header>
            <div>
                <img className="header-troll" src="troll-face.png" alt="troll face icon" />
                <h3 className="header-title">Meme Generator</h3>
            </div>
            <p className="header-text">React Course - Project 3</p>
        </header>
    )
}