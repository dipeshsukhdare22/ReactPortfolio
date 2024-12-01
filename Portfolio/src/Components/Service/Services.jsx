import React from 'react'
import Services_Data from '../../assets/service_data'
import './Services.css';

const Services = () => {
    return (
        <div id='services' className='services'>
            <div className='services-title'>
                <h1>My Services </h1>
            </div>
            <div className='services-container'>
                {Services_Data.map((service, index) => (
                    <div key={index} className='services-format'>
                        <h3><service.icon /></h3>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                        <div className='services-readmore'>
                        <p>Read More <i className="ri-arrow-right-s-line" style={{ marginLeft: '8px' }}></i></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services