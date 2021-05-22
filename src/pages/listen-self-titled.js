import React from "react"
import Border from "../images/border-line.png"
import { Link } from "react-router-dom"
import * as ROUTES from "../constants/routes"
import Milwaukee from "../images/milwaukee-here-i-come-single-res.jpg"
import Millers from "../images/millers-cave-single.jpg"
import SteelGuitarRag from "../images/steel-guitar-rag-single.jpeg"
import Drinkin from "../images/dont-come-home-a-drinkin-single.jpeg"
import Wave from "../components/Wave"
import Note from "../images/music-note.png"

export default function SelfTitled({...restProps}) {
    return (
        <main {...restProps}>
            <Wave />
            
            <h1>Long Line Riders S/T</h1>
            <img src={Border} className="border-line" alt="Borderline" />
            <img src={Note} className="music-note left" alt="Music Note" />
            <img src={Note} className="music-note right" alt="Music Note" />
            <iframe title="Long Line Riders Self Titled" className="self-titled" src="https://bandcamp.com/EmbeddedPlayer/album=2767458846/size=large/bgcol=ffffff/linkcol=0F7FA9/transparent=true/" seamless><a href="http://longlineriders.bandcamp.com/album/long-line-riders">Long Line Riders by Long Line Riders</a></iframe>

            <p className="release--date"><em>Released February 18, 2020</em></p>
            <p className="release--meta">Live at Bay View Bash<br />
                Bay View, Milwaukee, WI<br />
                September 21, 2019</p>

            <div className="release--link">
                <Link to={ROUTES.DRINKIN}><img src={Drinkin} width="100" alt="Don't Come Home a Drinkin' single cover"/></Link>
                <br/>
                <Link to={ROUTES.DRINKIN}>Don't Come Home a Drinkin'</Link>
            </div>
            <div className="release--link">
                <Link to={ROUTES.STEELGUITARRAG}><img src={SteelGuitarRag} width="100" alt="Steel Guitar Rag single cover"/></Link>
                <br/>
                <Link to={ROUTES.STEELGUITARRAG}>Steel Guitar Rag</Link>
            </div>
            <div className="release--link">
                <Link to={ROUTES.MILLERS}><img src={Millers} width="100" alt="Miller's Cave single cover"/></Link>
                <br/>
                <Link to={ROUTES.MILLERS}>Miller's Cave</Link>
            </div>
            <div className="release--link">
                <Link to={ROUTES.MILWAUKEE}><img src={Milwaukee} width="100" alt="Milwaukee Here I Come single cover"/></Link>
                <br/>
                <Link to={ROUTES.MILWAUKEE}>Milwaukee, Here I Come</Link>
            </div>
        </main>
    )
}