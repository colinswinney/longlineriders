import React from "react"
import Horseshoe from "../images/horseshoe.png"
import Border from "../images/border-line.png"
import Chopper from "../images/band/chopper.jpg"
import Colin from "../images/band/colin.jpg"
import Katie from "../images/band/katie.jpg"
import Kav from "../images/band/kav.jpg"
import Jordan from "../images/band/jordan.jpg"
import Steve from "../images/band/steve.jpg"

export default function About({...restProps}) {
    return (
        <main {...restProps}>
            <img src={Horseshoe} className="horseshoe left" alt="Horseshoe" />
            <img src={Horseshoe} className="horseshoe right" alt="Horseshoe" />
            <h1>About</h1>
            <img src={Border} className="border-line" alt="Borderline" />
            <p className="dropcap">Honest, familiar songs about unrequited love, loss, life and the open road thawed out and interpreted through a Midwestern lens. A goodly portion of classics and lesser known country, western and honky tonk numbers.</p>
            <p>Born in the winter of 2018 during a miserably cold polar vortex, Long Line Riders set out to play the music of the generation before them. True classic country songs, bouncing bass, wiry pedal steel guitar and guitar pickin' shape the sound of this Milwaukee combo.</p>
            <div className="image-row">
                <a href={Jordan}><img src={Jordan} alt="Jordan" /></a>
                <a href={Steve}><img src={Steve} alt="Steve" /></a>
                <a href={Kav}><img src={Kav} alt="Kav" /></a>
                <a href={Colin}><img src={Colin} alt="Colin" /></a>
                <a href={Katie}><img src={Katie} alt="Katie" /></a>
                <a href={Chopper}><img src={Chopper} alt="Chopper" /></a>
            </div>
        </main>
    )
}