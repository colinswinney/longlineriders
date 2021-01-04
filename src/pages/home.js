import React from "react"
import Logo from '../images/laughing-logo-compress.png';

export default function Home({...restProps}) {
    return (
        <main {...restProps}>
            <img src={Logo} alt="Long Line Riders Laughing Logo"/>
        </main>
    )
}