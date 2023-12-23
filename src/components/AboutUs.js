import React from 'react'
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';


const AboutUs = () => {
  const styleText = {
    color: '#060640',
    fontSize: '19px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '40px'
  }
  
  return (
    <React.Fragment>
      <section className="section about" id="about" style={{ background: "#ECF9FF"}}>
        <Container>
          <Row className="text-center">
            <Col lg={12}>
              <div className="text-center" data-aos="fade-up" >
                <p className="mb-1 font-weight-bold" style={styleText}>By identifying and targeting individuals actively seeking insurance coverage or final expense plans, we can guarantee a pool of ready-to-enroll clients. At We Market You Sell our focus is on proactive engagement and personalized connection.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default AboutUs;