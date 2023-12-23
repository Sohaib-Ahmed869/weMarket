import React, { useEffect, useState, useRef } from 'react'
import {
    Navbar,
    Nav,
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import Image
import logoLight from "../assets/images/logo.png";
import logoDark from "../assets/images/logo.png";

const Navbar1 = () => {

    const [activeItem, setActiveItem] = useState('Home');

    const [navClass, setnavClass] = useState("");


    // navbar Scroll

    useEffect(() => {
        window.addEventListener("scroll", scrollNavigation, true);
    });

    function scrollNavigation() {
        var scrollup = document.documentElement.scrollTop;
        if (scrollup > 50) {
            setnavClass("nav-sticky");
        } else {
            setnavClass("");
        }
    }

    // toggle

    const navMenuRef = useRef(null);

    const toggleNavMenu = () => {
        navMenuRef.current.classList.toggle('collapse');
    };


    return (
        <React.Fragment>
            <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="61" data-bs-smooth-scroll="true" className="scrollspy-example-2">
                <nav className={`navbar navbar-expand-lg fixed-top navbar-custom ${navClass}`}
                    
                    id="navbar">
                    <Container fluid>
                        <Navbar.Brand href="index-1.html" className="logo text-uppercase">
                            <img src={logoLight} className="logo-light" alt="" height="80" />
                            <img src={logoDark} className="logo-dark" alt="" height="80" />
                        </Navbar.Brand>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleNavMenu}>
                            <span className="mdi mdi-menu"></span>
                        </button>

                        <div ref={navMenuRef} className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ms-auto" id="navbar-navlist" style={{marginRight:'0px', textAlign:'right' }}>
                                <li className={activeItem === 'Home' ? 'active' : 'nav-item'} onClick={() => setActiveItem('Home')} >
                                    <Nav.Link href="/weMarket/">Home</Nav.Link>
                                </li>
                                <li className={activeItem === 'About Us' ? 'active' : 'nav-item'} onClick={() => setActiveItem('About Us')}>
                                    <Nav.Link href="/weMarket#pricing">About Us</Nav.Link>
                                </li>
                                <li className={activeItem === 'Contact' ? 'active' : 'nav-item'} onClick={() => setActiveItem('Contact')}>
                                    <Nav.Link href="/weMarket#contact">Contact</Nav.Link>
                                </li>
                                <li className={activeItem === 'Privacy Policy' ? 'active' : 'nav-item'} onClick={() => setActiveItem('Privacy Policy')}>
                                    <Nav.Link href='/weMarket/privacy-policy'>Privacy Policy</Nav.Link>
                                </li>
                            </ul>

                                <Link to="#"style={{ marginLeft:'40px' }} className="btn bg-gradiant">Contact Us</Link>
                      
                        </div>
                    </Container>
                </nav>
            </div>
        </React.Fragment>
    )
}

export default Navbar1;

