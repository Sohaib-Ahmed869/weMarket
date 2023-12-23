import React from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import images
import features from "../assets/images/features.png";
import img1 from '../assets/images/about/2.png';
import img2 from '../assets/images/about/1.png';
import low from '../assets/images/loe.png';
import './Features.css';
AOS.init({
  duration: 1800,
});





const Features = () => {
  return (
    <div>
      <div id="features" style={{ background: "#060640", color: 'white', padding: '0px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', fontWeight:'bold' }}>
        <div className='col1'>
          <img src={img1} alt='' className='img-fluid' />
        </div>
        <div className='col2 text-center' style={{ padding: '50px' }}>

          <p>
            We utilize a multi-channel outreach strategy, combining digital marketing, targeted advertising, and direct engagement to establish a rapport with potential clients. Through compelling content, educational resources, and one-on-one consultations, we nurture a relationship that builds trust and confidence, ensuring the readiness of these prospective clients to enroll in suitable insurance plans or finalize their end-of-life arrangements.
            <br></br><br></br><br></br>
            Our commitment extends beyond just providing ready to enroll leads. We offer comprehensive support and guidance to insurance agents. Our team of experts provides in-depth training on the latest trends in healthcare and final expense planning, ensuring agents are well-prepared to address client needs effectively. Additionally, we continue to refine our strategies, incorporating feedback and industry updates to continually deliver a stream of highly qualified leads ready for enrollment, ensuring the success of our partner agents in these competitive markets.
          </p>

        </div>
        <div className='col3'>
          <img src={img2} alt='' className='img-fluid' />

        </div>

      </div>
      <div className='text-center' style={{ margin: '-10px' }}>
        <img src={low} alt='' className='img-fluid' style={{ width: '40%' }} />
      </div>
    </div>

  )
}

export default Features;