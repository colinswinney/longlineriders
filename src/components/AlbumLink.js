import React from "react"
import { Link } from "react-router-dom"

export default function AlbumLink({...item}) {
    return (
        <Link to={item.path} className="releases--single">
            <div className="releases--cover">
                <img src={item.img} alt={`${item.title} single cover`}/>
            </div>
            <div className="releases--title">
                {item.title}
            </div>
        </Link>
    )
}