import React from "react"
import FormSpree from "../components/FormSpree"
import Border from "../images/border-line.png"
import Facebook from "../images/svg/facebook.svg"
import Instagram from "../images/svg/instagram.svg"
import YouTube from "../images/svg/youtube.svg"
import Bandcamp from "../images/svg/bandcamp.svg"

export default function Contact({...restProps}) {
    return (
        <main {...restProps}>
            <div id="stars" className="stars"></div>
            <div id="stars2" className="stars"></div>
            <div id="stars3" className="stars"></div>

            <div id="contact-content">
                <h1>Contact</h1>
                <img src={Border} className="border-line" alt="Borderline" />
                
                <a className="contact--email" href="mailto:longlineriders@gmail.com?subject=Long Line Riders Fan/Hate Mail">LongLineRiders<br/>@gmail.com</a>
                <div className="contact--social-wrap">
                    <a href="https://www.facebook.com/longlineriders/" target="_blank" className="contact--social-item" rel="noopener noreferrer"><img src={Facebook} alt="Facebook Icon" /></a>
                    <a href="https://www.instagram.com/long_line_riders/" target="_blank" className="contact--social-item" rel="noopener noreferrer"><img src={Instagram} alt="Instagram Icon" /></a>
                    <a href="https://www.youtube.com/channel/UC92DSnK953WcVohwnQeb41g" target="_blank" className="contact--social-item" rel="noopener noreferrer"><img src={YouTube} alt="YouTube Icon" /></a>
                    <a href="https://longlineriders.bandcamp.com/" target="_blank" className="contact--social-item" rel="noopener noreferrer"><img src={Bandcamp} alt="Bandcamp Icon" /></a>
                </div>
                <h4>Leave us a message!</h4>
                <FormSpree />
            </div>
        </main>
    )
}