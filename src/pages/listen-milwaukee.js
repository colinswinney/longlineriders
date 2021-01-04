import React from "react"
import Border from "../images/border-line.png"
import { Link } from "react-router-dom"
import * as ROUTES from "../constants/routes"
import LLR from "../images/long-line-riders-single.jpg"
import Millers from "../images/millers-cave-single.jpg"
import Wave from "../components/Wave"
import Note from "../images/music-note.png"

export default function Milwaukee({...restProps}) {
    return (
        <main {...restProps}>
            <Wave />

            <h1>Milwaukee, Here I Come</h1>
            <img src={Border} className="border-line" alt="Borderline" />
            <img src={Note} className="music-note left" alt="Music Note" />
            <img src={Note} className="music-note right" alt="Music Note" />
            <iframe title="Milwaukee Here I Come" className="milwaukee" src="https://bandcamp.com/EmbeddedPlayer/album=3528832570/size=large/bgcol=fffdfb/linkcol=0F7FA9/transparent=true/" seamless><a href="http://longlineriders.bandcamp.com/album/milwaukee-here-i-come">Milwaukee, Here I Come by Long Line Riders</a></iframe>

            
            <p className="release--date"><em>Released April 14, 2020</em></p>
            <p className="release--meta">Recorded by Kyle Motor<br />
                MotorCo Recording, Madison, WI<br />
                March 15, 2020</p>
            <div className="release--link">
                <Link to={ROUTES.MILLERS}><img src={Millers} width="100" alt="Miller's Cave single cover"/></Link>
                <br/>
                <Link to={ROUTES.MILLERS}>Miller's Cave</Link>
            </div>
            <div className="release--link">
                <Link to={ROUTES.SELFTITLED}><img src={LLR} width="100" alt="Long Line Riders S/T single cover"/></Link>
                <br/>
                <Link to={ROUTES.SELFTITLED}>Long Line Riders S/T</Link>
            </div>
        </main>
    )
}