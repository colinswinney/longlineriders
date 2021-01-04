import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom"
import * as ROUTES from "../constants/routes"
import Cowboy from "../images/cowboy-red.png"

function Header({ ...restProps }) {

    useEffect(() => {
        window.addEventListener('scroll', function(e) {
            if (window.scrollY > 0) {
                document.getElementById("header").classList.add('scrolled')
            }
            else {
                document.getElementById("header").classList.remove('scrolled')
            }
            
        })
    }, []);

    

    return (
        <header {...restProps} id="header">
            <nav className="navbar" id="navbar">
                <ul>
                    <li className={`nav-item logo`}>
                        <NavLink className={"nav-link"} exact to={ROUTES.HOME}>
                            <img src={Cowboy} alt="Cowboy Riding Horse" />
                        </NavLink>
                    </li>
                    <li className={`nav-item`}>
                        <NavLink className={"nav-link"} exact to={ROUTES.ABOUT}>About</NavLink>
                    </li>
                    <li className={`nav-item`}>
                        <NavLink className={"nav-link"} exact to={ROUTES.LISTEN}>Listen</NavLink>
                    </li>
                    {/* <li className={`nav-item`}>
                        <NavLink className={"nav-link"} exact to={ROUTES.SHOWS}>Shows</NavLink>
                    </li> */}
                    <li className={`nav-item`}>
                        <NavLink className={"nav-link"} exact to={ROUTES.CONTACT}>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )   
}

export default Header