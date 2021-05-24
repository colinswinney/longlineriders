import React from "react"
import { Link } from "react-router-dom"
import * as ROUTES from "../constants/routes"
import Cowboy from "../images/cowboy-red.png"
import Border from "../images/border-line.png"

export default function NoMatch({...restProps}) {
    return (
        <main {...restProps}>
            <h1>404</h1>
            <img src={Border} className="border-line" alt="Borderline" />
            <p>Perhaps it's time to head on <Link to={ROUTES.HOME}>home</Link>.</p>
            <img className="cowboy" src={Cowboy} alt="Cowboy Riding Horse" />
        </main>
    )
}