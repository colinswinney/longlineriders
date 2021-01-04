import React from "react"
import { Link } from "react-router-dom"
import Border from "../images/border-line.png"
import Note from "../images/music-note.png"
import Millers from "../images/millers-cave-single.jpg"
import Milwaukee from "../images/milwaukee-here-i-come-single-res.jpg"
import LLR from "../images/long-line-riders-single.jpg"
import * as ROUTES from "../constants/routes"
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
                <div className="releases--single">
                    <div className="releases--cover">
                        <Link to={ROUTES.MILLERS}><img src={Millers} alt="Miller's Cave single cover"/></Link>
                    </div>
                    <div className="releases--title">
                        <Link to={ROUTES.MILLERS}>Miller's Cave</Link>
                    </div>
                </div>
                <div className="releases--single">
                    <div className="releases--cover">
                        <Link to={ROUTES.MILWAUKEE}><img src={Milwaukee} alt="Milwaukee Here I Come single cover"/></Link>
                    </div>
                    <div className="releases--title">
                        <Link to={ROUTES.MILWAUKEE}>Milwaukee Here I Come</Link>
                    </div>
                </div>
                <div className="releases--single">
                    <div className="releases--cover">
                        <Link to={ROUTES.SELFTITLED}><img src={LLR} alt="Long Line Riders single cover"/></Link>
                    </div>
                    <div className="releases--title">
                        <Link to={ROUTES.SELFTITLED}>Long Line Riders S/T</Link>
                    </div>
                </div>
                
            </div>
            
        </main>
    )
}