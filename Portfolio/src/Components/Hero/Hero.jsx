import React from "react";
import './Hero.css'
import Profile from "../../assets/images/profile.png"
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div id="home" className="hero">
            <img src={Profile} alt=""/>
            <h1>
                <span>I'm Dipesh Sukhdare,</span> MERN developer based in MUMBAI.
            </h1>
            <p>
                I am a full-stack developer from Mumbai, Maharashtra, India with an 
                understanding and hands-on experience in building projects and working 
                with technologies like React, Node.js, and MongoDB.
            </p>
            <div className="hero-action">
                <div className="hero-connect">
                <Link className="anchor-link" to="https://www.linkedin.com/in/dipeshsukhdare/" target="_blank">
                     Connect with me
                </Link>
                </div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}

export default Hero;

