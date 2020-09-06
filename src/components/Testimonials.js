
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import mine from '../images/mine.jpg';
import quoteicon from '../images/quoteicon.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';



import '../css/Testimonials.css';

function Testimonials() {
  return (
    <div className="Testimonials text-center">
    <span>KIND</span><Image className='quoteicon img-fluid mx-2' src={quoteicon} alt="Avatar"  roundedCircle   />
    <span>WORDS</span>
    <Carousel controls={false} >
      <Carousel.Item className=" text-center">

<div className='testimonial-para text-center'>
          <p>Austin, for being relatively young, exhibits the experience and talent of someone twice his age in yor being relatively young, exhibits the experience and talent of someone
</p>
</div>

<Container className='testimonial' style={{width:'350px'}}>
    <Row >
       <Col xs={3}  className='text-right' style={{padding:'0px'}}>
       <Image className='img-fluid' src={mine} alt="Avatar"  roundedCircle  style={{width:'55px', height:'55px'}} />
           </Col>
      <Col xs={9}  className='text-left px-3'  >
      <p style={{padding:'3px 0px 0px 0px', margin:'0px'}}>Rebecca Flex. CEO at Company.</p>
      <p style={{padding:'0px', margin:'0px'}}>No one is better than John Doe.</p>
      </Col>
    </Row>
  </Container>
      </Carousel.Item>

      <Carousel.Item className=" text-center">

<div className='testimonial-para text-center'>
<p>Austin, for being relatively young, exhibits the experience and talent of someone twice his age in yor being relatively young, exhibits the experience and talent of someone
</p>
</div>

<Container className='testimonial' style={{width:'350px'}}>
    <Row >
       <Col xs={3}  className='text-right' style={{padding:'0px'}}>
       <Image className='img-fluid' src={mine} alt="Avatar"  roundedCircle  style={{width:'55px', height:'55px'}} />
           </Col>
      <Col xs={9}  className='text-left px-3'  >
      <p style={{padding:'3px 0px 0px 0px', margin:'0px'}}>Rebecca Flex. CEO at Company.</p>
      <p style={{padding:'0px', margin:'0px'}}>No one is better than John Doe.</p>
      </Col>
    </Row>
  </Container>
      </Carousel.Item>

    </Carousel>

    </div>
  );
}

export default Testimonials;
