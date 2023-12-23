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
      <div style={{textAlign: 'left', padding: '20px' }}>
        <div id='team' style={{ backgroundImage: `url(${frame})`, height: '60vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <img src={elipse} alt="" className="img-fluid" style={{ marginLeft: '10px' }} />
          <h2>Ready to begin your journey to unprecedented success?<br></br>
            Start with our form below.</h2>
          <button className="btn btn-primary" style={{ width: '200px', height: '50px', borderRadius: '10px', fontSize: '20px', fontWeight: 'bold', marginTop: '20px' }}>Go to Form</button>
        </div>
      </div>

    </React.Fragment>
  )
}

export default Team;