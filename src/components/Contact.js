import React from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import AOS from 'aos';
import 'aos/dist/aos.css';

// import images
import home1 from "../assets/images/home/home1-2.png"
import elipse from "../assets/images/home/Ellipse.png"
import b from "../assets/images/b.png";

AOS.init({
  duration: 1800,
});

const section = () => {

  return (

    <div className="section home-3" id="contact" style={{ background: "#ECFDFF", padding: '0px' }}>

      <Container>
        <Row className="align-items-center justify-content-between">
          <Col md={6}>
            <div className="home-heading">
              <img src={elipse} alt="" className="img-fluid" />
              <h4 className="home-title">Contact Us</h4>
              <div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <div className="features-icon float-start">
                    <i className="uil uil-phone"
                    style={{fontSize: '20px', background: '#060640', color: 'white', padding: '20px', borderRadius: '60%'}}
                    ></i>
                  </div>
                  <div style={{ background: '#ffffff', color:'#00D8CF', fontSize: '20px', fontWeight: 'bold', padding: '5px', borderRadius: '20px', width:'300px'}}>
                  <p className='mt-3'
                  
                  >954-931-8289</p>
                  </div>
                </div>
              </div>
              <div>
                <div className=" mt-5" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <div className="features-icon float-start">
                    <i className="uil uil-envelope-minus"
                    style={{fontSize: '20px', background: '#060640', color: 'white', padding: '20px', borderRadius: '60%'}}
                    ></i>
                  </div>
                  <div style={{ background: '#ffffff', color:'#00D8CF', fontSize: '20px', fontWeight: 'bold', padding: '5px', borderRadius: '20px', width:'300px'}}>
                  <p className='mt-3'>
                    Admin@wemarketyousell.com</p>
                  </div>
                </div>
              </div>
            </div>

        </Col>
        <div className="col-md-6" style={{ padding: '0px', height: '100%', margin: '0px' }}>
          <img src={b} alt="" style={{ height: '100%', width: '100%' }} />
        </div>
      </Row>
    </Container>
        </div >


  )
}

export default section;
