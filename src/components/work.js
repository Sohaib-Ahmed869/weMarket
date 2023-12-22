import React from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

// import images
import home1 from "../assets/images/home/home1-2.png"
import elipse from "../assets/images/home/Ellipse.png"
const section = () => {

  return (
    <React.Fragment>
      <div className="section home-3" id="home" style = {{background:"#FFFFF"}}>
      
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col md={6}>
              <div className="home-heading">
                <img src={elipse} alt="" className="img-fluid" />
                <h4 className="home-title">We deliver a customized experience that elevates your business</h4>
                <p className="text-muted">Our ready to enroll lead generation process begins with a meticulous understanding of the dynamic landscapes within the realms of Obamacare, Medicare, and Final Expense planning. We employ cutting-edge market analysis tools and industry insights to pinpoint high-potential demographics, ensuring our leads are finely tuned and tailored to the specific needs of insurance agents.</p>
              </div>
            </Col>
            <div className="col-md-6">
              <img src={home1} alt="" className="img-fluid" />
            </div>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default section;
