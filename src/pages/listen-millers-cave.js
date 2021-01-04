import React from "react"
import Border from "../images/border-line.png"
import { Link } from "react-router-dom"
import * as ROUTES from "../constants/routes"
import Milwaukee from "../images/milwaukee-here-i-come-single-res.jpg"
import LLR from "../images/long-line-riders-single.jpg"
import Wave from "../components/Wave"
import Note from "../images/music-note.png"

export default function Millers({...restProps}) {
    return (
        <main {...restProps}>
            <Wave />

            <h1>Miller's Cave</h1>
            <img src={Border} className="border-line" alt="Borderline" />
            <img src={Note} className="music-note left" alt="Music Note" />
            <img src={Note} className="music-note right" alt="Music Note" />
            <iframe title="Miller's Cave" className="millers-cave" src="https://bandcamp.com/EmbeddedPlayer/album=1300252218/size=large/bgcol=fffdfb/linkcol=0F7FA9/transparent=true/" seamless><a href="https://longlineriders.bandcamp.com/album/millers-cave">Miller&#39;s Cave by Long Line Riders</a></iframe>

            
            <p className="release--date"><em>Released December 12, 2020</em></p>
            <p className="release--meta">Recorded by Kyle Motor<br />
                MotorCo Recording, Madison, WI<br />
                March 15, 2020</p>
            <div className="release--link">
                <Link to={ROUTES.MILWAUKEE}><img src={Milwaukee} width="100" alt="Milwaukee, Here I Come single cover"/></Link>
                <br/>
                <Link to={ROUTES.MILWAUKEE}>Milwaukee, Here I Come</Link>
            </div>

            <div className="release--link">
                <Link to={ROUTES.SELFTITLED}><img src={LLR} width="100" alt="Long Line Riders S/T single cover"/></Link>
                <br/>
                <Link to={ROUTES.SELFTITLED}>Long Line Riders S/T</Link>
            </div>
            
        </main>
    )
}