import React from 'react';
import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';

import image1 from '../assets/images/apart/3.png';
import image2 from '../assets/images/apart/2.png';
import image3 from '../assets/images/apart/1.png';
import hero from '../assets/images/apart/main.png';
import elipse from "../assets/images/home/Ellipse.png"

const Pricing = () => {
  return (
    
    <React.Fragment>
      <section className="section pricing" id="pricing">
        <Container>
          <div className="row justify-content-center">
            <div className="col-lg-12" data-aos="fade-up" style={{ marginBottom: '60px' }}>
              <div className="text-center">
                <img src={elipse} alt="" className="img-fluid" style={{ marginLeft: '80px' }} />
                <h2 className="sec-title">What sets us apart?</h2>
              </div>
            </div>
          </div>
          <Row className="justify-content-center">
            <Col lg={4} md={6} mt={4}>
              <div className="pricing-box" style={{boxShadow: '0px 0px 1px 0px #cfd4d0', border: '0px solid #ffffff'}}>
                <div className="px-4 py-5">
                  <div className="text-primary">
                    <img src={image1} alt="" className="img-fluid d-block" />

                  </div>
                  <h5 className="my-4 box-heading">Extraordinary Service</h5>
                  <p className="text-muted">Exceptional customer service is our cornerstone. We are dedicated to providing unparalleled support, ensuring every client receives personalized attention and assistance throughout their insurance journey."</p>

                </div>
              </div>
            </Col>
            <Col lg={4} md={6} mt={4}>
              <div className="pricing-box pricing-active shadow" style={{boxShadow: '0px 0px 0px 0px #cfd4d0', border: '0px solid #ffffff'}} >
                <div className="px-4 py-5">
                  <div className="text-primary">
                    <img src={image2} alt="" className="img-fluid d-block" />
                  </div>
                  <h5 className="my-4 box-heading">Partnership</h5>
                  <p className="text-muted">We prioritize building collaborative and mutually beneficial relationships with insurance agents. By partnering with us, agents benefit from our expertise in digital marketing and client engagement, ensuring a successful partnership that drives growth for both agents and their clients."</p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} mt={4}>
              <div className="pricing-box" style={{boxShadow: '0px 0px 1px 0px #cfd4d0', border: '0px solid #ffffff'}}>
                <div className="px-4 py-5">
                  <div className="text-primary">
                    <img src={image3} alt="" className="img-fluid d-block" />
                  </div>
                  <h5 className="my-4 box-heading">Growth</h5>
                  <p className="text-muted">We're dedicated to amplifying insurance agents' growth in a rapidly changing industry. Our tailored support, diverse product offerings, and innovative marketing strategies aim to propel agents' businesses forward.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Pricing;