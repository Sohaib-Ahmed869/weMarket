import React from 'react'
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';


// import Images
import main from '../assets/images/apart/main.png'

const Team = () => {
  return (
    <React.Fragment>
      <section className="section team" id="team">
        <Container>

          <Row className="justify-content-center">

            <Col lg={12}>
              <div className="tab-container effectTab-header" id="style_10">
                <div className="wrapper">
                  <Row>
                    <div className="col-12 tab">
                      <Row>
                        <Col>
                          <div>
                            <img src={main} alt="" className="img-fluid d-block" />
                            <button className="btn btn-primary"><Link to="/contact" style={{ color: '#fff' }}>Go to Form</Link></button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Team;