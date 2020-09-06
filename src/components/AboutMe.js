
import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Chart from "../components/chart.js";
import Image from 'react-bootstrap/Image';
import macaque from '../images/macaques.png';
import Card from 'react-bootstrap/Card';

import '../css/AboutMe.css';


class Skills extends React.Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    };
  }



 render() {

   return (
     <div className="" id='skills'>

     <Container fluid>
         <Row>
            <Col xs={12}  sm={5} className='about'>
            <div id="text-main">
            <Container  style={{padding:'0px', margin:'0px'}}>
                <Row style={{padding:'0px', margin:'0px'}}>
                   <Col xs={4}  className='macaqueImg'>
                   <Image className='macaque img-fluid' src={macaque}  alt='loading..' />
                       </Col>
                  <Col xs={8}  className='text-left' style={{padding:'0px', margin:'0px'}}>
                  <h1>  What my Spirit animal says about me</h1>
                  </Col>
                </Row>
              </Container>


<Card className="aboutpara" height=''>
  <Card.Body>

      <div className=''>
    <p>If you ask his friends, they will say he is the one to keep close and that they wouldn’t change a thing about him. His goal in life is to fulfill the meaning of his name – “Immortal”. And Product management can help him achieve that. The impact of products can reach a wide array of audience and can make a small yet significant difference to someone’s life. Even though he has just started the race, he is on the right track and he aspires to win it too someday with his determination.</p>

                </div>
                </Card.Body>

  </Card>

            </div>
            </Col>
           <Col xs={12}  sm={7} className=''>
           <div className='Skills'>
            <h1 className='text-center'>Skills</h1>
          <Chart chartData={this.state.chartData}  lavel="HTML" LegendPosition="bottom" />
</div>
           </Col>


         </Row>
       </Container>

     </div>
   );
 }
}

export default Skills;
