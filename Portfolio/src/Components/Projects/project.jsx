import React from 'react';
import myproject_data from '../../assets/myproject_data';
import './project.css'
const Projects = () => {
    return (
        <div id="work" className="mywork">
            <div className="title-box">
                <h1>My latest work</h1>
            </div>

            <div className="mywork-container">
              {myproject_data.map((work, index)=>{
                return <img key={index} src={work.w_img} alt=''/>
              })}
            </div>

            <div className="mywork-showmore">
                <p>Show More</p>
                <i className="ri-arrow-right-line"></i>
            </div>

        </div>
    );
};

export default Projects;
