import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="navBar">
            <ul>
                {/* <li> */}
                    <Link 
                        activeClass="active" 
                        to="Intro" 
                        spy={true} 
                        smooth={true} 
                        duration={500}
                        className="nav-element"
                        >
                        Intro
                    </Link>
                    <Link 
                        activeClass="active" 
                        to="About" 
                        spy={true} 
                        smooth={true} 
                        duration={500}
                        className="nav-element"
                        >
                        About
                    </Link>
                    <Link 
                        activeClass="active" 
                        to="Projects" 
                        spy={true} 
                        smooth={true} 
                        duration={500}
                        className="nav-element"
                        >
                        Projects & Experience
                    </Link>
                    <Link 
                        activeClass="active" 
                        to="Links" 
                        spy={true} 
                        smooth={true} 
                        duration={500}
                        className="nav-element"
                        >
                        Links
                    </Link>
                    <Link 
                        activeClass="active" 
                        to="Contact" 
                        spy={true} 
                        smooth={true} 
                        duration={500}
                        className="nav-element"
                        >
                        Contact
                    </Link>
                 
            </ul>
        </div>
    );
};
export default Navbar;