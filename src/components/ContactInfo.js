import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import medium from '../images/medium_b.png';
import linkedin from '../images/linkedin 2.png';
import gmail from '../images/gmail.png';
import logo from '../images/logo1.png';


import '../css/ContactInfo.css';

function ContactInfo() {
  return (
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="black" fill-opacity="1" d="M0,256L80,261.3C160,267,320,277,480,250.7C640,224,800,160,960,149.3C1120,139,1280,181,1360,202.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </svg>

    <div className="ContactInfo container-fluid text-center" >

  <Container>
  <Row className="" >
  <Col xs={12} lg={12}  className="text-center">
  <h2>Let's connect</h2>
  <p className='d-none d-lg-block'>If you need to talk about a web series on Netflix or talk random philosophy, my inbox is always open.</p>

  </Col>
  </Row>

  <Row className="footer-bottom" >

  <Col xs={12} lg={3}  className="footer-logo text-center">
  <img src={logo} height='70px' width='100px'  className='DK mx-1'  alt='loading..' />

  </Col>
    <Col xs={12} lg={6}  className="footer-icons text-center ">
    <a href="https://www.linkedin.com/in/divitkarmiani/"><img src={linkedin}  className='icon-footer mx-1 rounded-circle'   alt='loading..' /></a>
    <a href="mailto:divitkarmiani1998@gmail.com"><img src={gmail}  className='icon-footer mx-1 rounded-circle '  alt='loading..' /></a>
    <a href="https://medium.com/@divitkarmiani1998"><img src={medium}  className='icon-footer mx-1 rounded-circle'  alt='loading..' /></a>

    </Col>
    <Col xs={12} lg={3}   className="Name text-center">
    <h1>Divit Karmiani</h1>
    </Col>


  </Row>
    </Container>
    </div>
    </div>
  );
}

export default ContactInfo;
