import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; // Alias react-scroll's Link to avoid conflict
import Profileimg from '../assets/images/profileimg.png';

const Navbar = () => {
    return (
        <div className='navbar'>
            <img className='profileimg' src={Profileimg} alt='Profile' />
            <img 
                src="data:image/svg+xml,%3csvg%20width='36'%20height='29'%20viewBox='0%200%2036%2029'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='35.9988'%20height='4'%20rx='2'%20fill='white'/%3e%3crect%20x='13.0898'%20y='12.5'%20width='22.9083'%20height='4'%20rx='2'%20fill='white'/%3e%3crect%20x='4.91016'%20y='25'%20width='31.0899'%20height='4'%20rx='2'%20fill='white'/%3e%3c/svg%3e" 
                alt="Mobile Menu Icon" 
                className="nav-mob-open" 
            />
            <ul className='nav-menu'>
                <li>
                    <ScrollLink to="home" smooth={true} duration={500}>
                        Home
                    </ScrollLink>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to="/project">Project</Link>
                </li>
                <li>
                    <Link to="/service">Service</Link>
                </li>
                <li>
                    <Link to="/work">My Work</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>

            <div className='nav-connect'>
                <a href="https://wa.me/9820821050" target="_blank" rel="noopener noreferrer">
                    Let's Talk <i className="ri-arrow-right-up-line"></i>
                </a>
            </div>
            <div className='nav-connect1'>
                <ScrollLink to="contact" smooth={true} duration={500}>
                    Hire Me <i className="ri-corner-down-left-line"></i>
                </ScrollLink>
            </div>
        </div>
    );
};

export default Navbar;
