import React from "react"
import { useLocation } from "react-router-dom"
import routeArray from "../../constants/data"
import AlbumLink from "../../components/AlbumLink"

import Border from "../../images/border-line.png"
import Note from "../../images/music-note.png"
import Wave from "../../components/Wave"

export default function Millers({...restProps}) {

    const location = useLocation();

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

            <div className="releases--wrapper">
                {routeArray.filter(item => item.contentClass === 'listen').reverse().map( (item, i) => (
                    item.title && item.path !== location.pathname ? 
                        
                            <AlbumLink {...item} key={i}/>
                            
                        : ''
                    
                ))}
            </div>
            
        </main>
    )
}