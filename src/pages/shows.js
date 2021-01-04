import React from "react"
import Border from "../images/border-line.png"
import SadCowboy from "../images/sad-cowboy-400.png"

export default function Shows({...restProps}) {
    return (
        <main {...restProps}>
            <h1>Shows</h1>
            <img src={Border} className="border-line" alt="Borderline" />
            
            <h4>Maybe next year?</h4>
            <br />
            <img src={SadCowboy} width="300" alt="Sad Cowboy emoji"/>
        </main>
    )
}