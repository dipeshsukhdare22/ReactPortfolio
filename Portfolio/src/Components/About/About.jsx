import React from "react";
import './About.css'; // Ensure that your styles are correctly applied
import profile from '../../assets/images/profile.png'; // Correct path to the image



const AboutComponent = () => {
    return (
        <div id="about" className="about">
            <div className="title-box">
                <h1>About me</h1>
            </div>

            <div className="about-sections">
                <div className="about-left">
                    <img src={profile} alt="Profile" className="profile-img" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                        <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                    </div>
                    <div className='about-skills'>
                        <div className='about-skill'><p>HTML5 & CSS </p> <hr style={{ width: "100%" }} /> 100%</div>
                        <div className='about-skill'><p>JavaScript</p> <hr style={{ width: "60%" }} /> 60%</div>
                        <div className='about-skill'><p>Bootstrap</p> <hr style={{ width: "70%" }} /> 70%</div>
                        <div className='about-skill'><p>ReactJs</p> <hr style={{ width: "70%" }} /> 70%</div>
                        <div className='about-skill'><p>MERN Stack</p> <hr style={{ width: "70%" }} /> 70%</div>
                        <div className='about-skill'><p>API Integration</p> <hr style={{ width: "60%" }} /> 60%</div>
                        <div className='about-skill'><p>PHP & MySQL</p> <hr style={{ width: "40%" }} /> 40%</div>
                    </div>
                </div>
            </div>
            <div className='about-achievements'>
                <div className='about-achievement'>
                    <h1>7-8+</h1>
                    <p>Years of Experience</p>
                </div>
                <hr />
                <div className='about-achievement'>
                    <h1>30+</h1>
                    <p>Projects Completed</p>
                </div>
                <hr />
                <div className='about-achievement'>
                    <h1>1+</h1>
                    <p>Happy Clients</p>
                </div>
            </div>

            
        </div>
    );
};

export default AboutComponent;
