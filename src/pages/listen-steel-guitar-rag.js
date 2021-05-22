import React from "react"
import Border from "../images/border-line.png"
import { Link } from "react-router-dom"
import * as ROUTES from "../constants/routes"
import Milwaukee from "../images/milwaukee-here-i-come-single-res.jpg"
import LLR from "../images/long-line-riders-single.jpg"
import Millers from "../images/millers-cave-single.jpg"
import Drinkin from "../images/dont-come-home-a-drinkin-single.jpeg"
import Wave from "../components/Wave"
import Note from "../images/music-note.png"

export default function SteelGuitarRag({...restProps}) {
    return (
        <main {...restProps}>
            <Wave />

            <h1>Steel Guitar Rag</h1>
            <img src={Border} className="border-line" alt="Borderline" />
            <img src={Note} className="music-note left" alt="Music Note" />
            <img src={Note} className="music-note right" alt="Music Note" />
            <iframe title="Steel Guitar Rag" className="steel-guitar-rag" src="https://bandcamp.com/EmbeddedPlayer/album=348546898/size=large/bgcol=fffdfb/linkcol=0F7FA9/transparent=true/" seamless><a href="https://longlineriders.bandcamp.com/album/steel-guitar-rag">Steel Guitar Rag by Long Line Riders</a></iframe>

            
            <p className="release--date"><em>Released March 5, 2021</em></p>
            <p className="release--meta">Recorded by Kyle Motor<br />
                MotorCo Recording, Madison, WI<br />
                March 15, 2020</p>

            <div className="release--link">
                <Link to={ROUTES.DRINKIN}><img src={Drinkin} width="100" alt="Don't Come Home a Drinkin' single cover"/></Link>
                <br/>
                <Link to={ROUTES.DRINKIN}>Don't Come Home a Drinkin'</Link>
            </div>

            <div className="release--link">
                <Link to={ROUTES.MILLERS}><img src={Millers} width="100" alt="Miller's Cave single cover"/></Link>
                <br/>
                <Link to={ROUTES.MILLERS}>Miller's Cave</Link>
            </div>

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