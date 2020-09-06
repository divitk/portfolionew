import React from 'react';
import mine from '../images/mine.jpg';
import medium from '../images/medium.png';
import linkedin from '../images/linkedin.png';
import gmail from '../images/gmail.png';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typist from 'react-typist';

import '../css/Home.css';

function AboutMe() {

  return (
    <div className="AboutMe container-fluid ">
  <Container fluid>
      <Row>
         <Col xs={12} sm={5} className=' text-center'>
          <Image className='mine img-fluid' src={mine} roundedCircle  alt='loading..' />
        </Col>
        <Col xs={12}  sm={7} className=''>
        <div className='AboutText'>
        <p>WELCOME TO MY WORLD</p>

        <h1 className='mb-1'>Hi, I’m Divit Karmiani,</h1>
        <Typist cursor={{ hideWhenDone: true }}>
        <span className=''>DevOps Engineer</span>
        </Typist>
        <h1 className=''>based in Mumbai.</h1>
        <a className='ml-1' href="https://www.linkedin.com/in/divitkarmiani/"><img src={linkedin} height='40px'  alt='loading..' /></a>
        <a className='ml-1' href="mailto:divitkarmiani1998@gmail.com"><img src={gmail} height='35px'  alt='loading..' /></a>
        <a className='ml-1' href="https://medium.com/@divitkarmiani1998"><img src={medium} height='40px'  alt='loading..' /></a>

        </div>

        </Col>


      </Row>
    </Container>
    </div>
  );
}

export default AboutMe;
