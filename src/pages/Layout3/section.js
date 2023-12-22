import React from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

// import images
import home1 from "../../assets/images/home/home1-1.png"
import elipse from "../../assets/images/home/Ellipse.png"
import Pricing from '../../components/Pricing';
import Work from "../../components/work";
import AboutUs from '../../components/AboutUs';
import Features from '../../components/Features';
import Team from '../../components/Team';
import Contact from '../../components/Contact';
import Footer from '../../layout/Footer';

const section = () => {

  return (
    <React.Fragment>
      <div className="section home-3" id="home" style={{ background: "#ECF9FF" }}>

        <Container>
          <Row className="align-items-center justify-content-between">
            <Col md={7}>
              <div className="home-heading">
                <img src={elipse} alt="" className="img-fluid" />
                <h4 className="home-title">Discover unmatched success in Obamacare, Medicare, and Final Expense markets</h4>
                <p className="text-muted">Looking to expand your book of business? Discover unmatched success in Obamacare, Medicare, and Final Expense markets through We Market You Sell.Redefine what success means to you!</p>
              </div>
            </Col>
            <div className="col-md-5">
              <img src={home1} alt="" className="img-fluid" />
            </div>
          </Row>
        </Container>
      </div>
      <Pricing/>
      <Work />
      <AboutUs />
      <Features />
      <Team />
      <Contact />

      <Footer/>
    </React.Fragment>

  )
}

export default section;
