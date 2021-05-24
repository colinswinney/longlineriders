import React from "react"
import routeArray from "../constants/data"
import AlbumLink from "../components/AlbumLink"

import Border from "../images/border-line.png"
import Note from "../images/music-note.png"
import Wave from "../components/Wave"

export default function Listen({...restProps}) {
    return (
        <main {...restProps}>
            <Wave />
            <h1>Listen</h1>
            <img src={Border} className="border-line" alt="Borderline" />
            <img src={Note} className="music-note left" alt="Music Note" />
            <img src={Note} className="music-note right" alt="Music Note" />
            
            <div className="releases--wrapper">

                {routeArray.filter(item => item.contentClass === 'listen').reverse().map( (item, i) => (
                    item.title ? 
                        
                            <AlbumLink {...item} key={i}/>
                            
                        : ''
                    
                ))}
                
            </div>
            
        </main>
    )
}