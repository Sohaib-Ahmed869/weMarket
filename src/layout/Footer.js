import React, { useEffect, useState } from 'react';
import {
    Container,
    Row,
    Col,
    Navbar,
    Nav
} from 'react-bootstrap';

// import Image
import logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';


const Footer = () => {

    // light-dark mode button 


    // Color Switcher

    const setColor = (theme) => {
        const colorOpt = document.getElementById('color-opt');
        colorOpt.href = `/appspery/react/css/colors/${theme}.css`;
    };

    // Switcher

    const [leftPosition, setLeftPosition] = useState('-189px');

    const toggleSwitcher = () => {
        if (leftPosition === '-189px') {
            setLeftPosition('-0px');
        } else {
            setLeftPosition('-189px');
        }
    };


    return (
        <React.Fragment>
            <section className="footer overflow-hidden" id="footer" style={{ background: "#060640" }}>
                <Container>
                    <Row className="justify-content-center">
                        <Row style={{ paddingTop: "40px" }}>
                            <Col lg={5}>
                                <img src={logo} alt="" className="img-fluid" />
                                <p className="mt-4 text-muted">This is a big one and i consider it one of the most important things for a business.</p>

                            </Col>
                            <Col lg={7}>
                                <Container>
                                    <Row>
                                        <Col lg={4}>
                                            <h4 className="text-white">Quick Links</h4>
                                            <ul className="list-unstyled footer-list mt-4">
                                                <li><Link to="#" className="text-muted">Home</Link></li>
                                                <li><Link to="#" className="text-muted">About</Link></li>
                                                <li><Link to="#" className="text-muted">Forms</Link></li>
                                            </ul>
                                        </Col>
                                        <Col lg={4}>
                                            <h4 className="text-white">Company</h4>
                                            <ul className="list-unstyled footer-list mt-4">
                                                <li><Link to="#" className="text-muted">About</Link></li>
                                                <li><Link to="#" className="text-muted">Contact</Link></li>
                                            </ul>
                                        </Col>
                                        <Col lg={4}>
                                            <h4 className="text-white">Information</h4>
                                            <ul className="list-unstyled footer-list mt-4">
                                                <li><Link to="#" className="text-muted">Privacy Policy</Link></li>
                                            </ul>
                                        </Col>


                                    </Row>
                                </Container>
                            </Col>
                        </Row>


                    </Row>
                </Container>
            </section>
            <section className="footer overflow-hidden" id="footer" style={{ background: "#000020", padding: '20px' }}>
                <Container>
                    <Row className="justify-content-center">
                        <Row style={{ background: "#000020" }}>
                            <Col lg={10}>
                                <p className="copy-rights text-white mb-0">© 2023 WeMarketYouSellLLC</p>
                            </Col>
                            <Col lg={2}>
                                <p className="copy-rights text-white">All Rights Reserved</p>
                            </Col>
                        </Row>


                    </Row>
                </Container>
            </section>

            <hr />



            {/* color changer */}
            <div className="style-switcher" id="style-switcher" style={{ left: leftPosition }}>
                <div>
                    <h6>Select your color</h6>
                    <ul className="pattern list-unstyled mb-0">
                        <li>
                            <Link className="color1" to="#" onClick={() => { setColor('blue'); }}></Link>
                        </li>
                        <li>
                            <Link className="color2" to="#" onClick={() => { setColor('blue'); }}></Link>
                        </li>
                        <li>
                            <Link className="color3" to="#" onClick={() => { setColor('blue'); }}></Link>
                        </li>
                        <li>
                            <Link className="color4" to="#" onClick={() => { setColor('blue'); }}></Link>
                        </li>
                        <li>
                            <Link className="color5" to="#" onClick={() => { setColor('blue'); }}></Link>
                        </li>
                        <li>
                            <Link className="color6" to="#" onClick={() => { setColor('blue'); }}></Link>
                        </li>
                    </ul>
                </div>

            </div>

        </React.Fragment>
    )
}

export default Footer;