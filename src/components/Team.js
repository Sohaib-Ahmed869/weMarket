import React from 'react'
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';


// import Images
import main from '../assets/images/apart/main.png'
import frame from '../assets/images/fr.png'
import elipse from '../assets/images/home/Ellipse.png'
const Team = () => {
  return (
    <React.Fragment>
      <Container>
      <div className="text-left" style={{textAlign: 'left',marginTop:'70px' }}>
        <div id='team' style={{ backgroundImage: `url(${frame})`, height: '60vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', display: 'flex', flexDirection: 'column',  justifyContent: 'center'}}>
          <img src={elipse} alt="" className="img-fluid" style={{ marginLeft: '40px' , width: '60px', height: '30px'}} />
          <h3 style={{color:'#060640'}}>Ready to begin your journey to unprecedented success?<br></br>
            Start with our form below.</h3>
          <button className="btn btn-primary" style={{width:'200px',borderRadius: '10px', fontSize: '14px', marginTop: '20px' }}>Go to Form</button>
        </div>
      </div>
      </Container>

    </React.Fragment>
  )
}

export default Team;