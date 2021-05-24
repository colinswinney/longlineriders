import React from "react"
import { useLocation } from "react-router-dom"
import routeArray from "../../constants/data"
import AlbumLink from "../../components/AlbumLink"

import Border from "../../images/border-line.png"
import Wave from "../../components/Wave"
import Note from "../../images/music-note.png"

export default function SelfTitled({...restProps}) {

    const location = useLocation();

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
                September 21, 201
            </p>

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