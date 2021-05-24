import React from "react"
import { useLocation } from "react-router-dom"
import routeArray from "../../constants/data"
import AlbumLink from "../../components/AlbumLink"

import Border from "../../images/border-line.png"
import Note from "../../images/music-note.png"
import Wave from "../../components/Wave"

export default function Drinkin({...restProps}) {

    const location = useLocation();

    return (
        <main {...restProps}>
            <Wave />

            <h1>Don't Come Home a Drinkin'</h1>
            <img src={Border} className="border-line" alt="Borderline" />
            <img src={Note} className="music-note left" alt="Music Note" />
            <img src={Note} className="music-note right" alt="Music Note" />
            <iframe title="Don't Come Home a Drinkin'" className="steel-guitar-rag" src="https://bandcamp.com/EmbeddedPlayer/album=3949658819/size=large/bgcol=fffdfb/linkcol=0F7FA9/transparent=true/" seamless><a href="https://longlineriders.bandcamp.com/album/dont-come-home-a-drinkin">Don&#39;t Come Home A-Drinkin&#39; by Long Line Riders</a></iframe>

            <p className="release--date"><em>Released March 5, 2021</em></p>
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