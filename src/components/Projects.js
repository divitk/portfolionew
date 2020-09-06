import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'react-tabs/style/react-tabs.css';

import EToilet from '../images/e-toilet-in-india.jpg';
import MeruVsOla from '../images/MeruVsOla2.jpg';
import Onlinefurniture from '../images/Onlinefurniture.png';
import Flatmate from '../images/Flatmate.png';
import Redbus from '../images/redbus.png';
import Hotstar from '../images/hotstar.jpg';
import UserJourneyMap from '../images/userjourneymap.png';
import DoToday from '../images/DoToday.jpg';
import Zivame from '../images/zivame.png';
import Musicstreaming from '../images/musicstreaming.png';
import Zomato from '../images/Zomato.jpeg';
import Lyft from '../images/Lyft.jpg';
import HeadOut from '../images/headout.png';


import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';


import '../css/Projects.css';
import "react-multi-carousel/lib/styles.css";

import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
const Button = require('@material-ui/core/Button').default;




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div

      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Projects () {

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const style ={
    color: '#007bff',
    visibility: 'visible',

  }
  const [isActive, setActive] = useState(false);

const toggleClass = () => {
  setActive(!isActive);
};
return (
  <div className='Projects'>
  <h1 className='text-center'>Projects</h1>
 <div className={classes.root}>
   <Paper  className='bar'>
     <Tabs
        className='Tabs-sm d-lg-none'
        value={value}
           onChange={handleChange}
           indicatorColor="primary"
           textColor="primary"
           variant="scrollable"
           scrollButtons="auto"
           aria-label="scrollable auto tabs example"

     >
       <Tab className='t' label="Engineering Final year project" {...a11yProps(0)} />
       <Tab label="Product Management Coursework" {...a11yProps(1)} />
       <Tab label="Product Design and Research Coursework" {...a11yProps(2)} />
     </Tabs>
     <Tabs
        className='Tabs-lg d-none d-lg-block'
        value={value}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      variant="fullWidth"
      aria-label="full width tabs example"
      centered

     >
       <Tab label="Engineering Final year project" {...a11yProps(0)} />
       <Tab  label="Product Management Coursework" {...a11yProps(1)} />
       <Tab label="Product Design and Research Coursework" {...a11yProps(2)} />
     </Tabs>
   </Paper>
   <SwipeableViews
     axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
     index={value}
     onChangeIndex={handleChangeIndex}
   >
     <TabPanel value={value} index={0} dir={theme.direction}>
     <CardDeck className='CardDeck-big mx-auto'>


       <Card className=''>
         <Card.Img onClick={style} variant="top" className='im' src={EToilet} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
           <Card.Title className=''>Final year project</Card.Title>

          </div>
         </Card.ImgOverlay>
         <Card.Body >
<Container fluid style={{padding:'0px'}}>
    <Row>
       <Col xs={9}  className=''>
       <span >Solar Powered Self-Cleaning Toilet</span>

           </Col>
      <Col xs={3}  className='text-right'>
      <Button className=''  variant="contained" color="secondary" onClick={(e)=>{window.location.href='https://drive.google.com/file/d/1t5vnrZOHB14cP8t4_MIgorqegzzUKA6M/view?usp=sharing'}}>
     Details
     </Button>
     </Col>
    </Row>
  </Container>
</Card.Body>
       </Card>


     </CardDeck>

     </TabPanel>
     <TabPanel value={value} index={1} dir={theme.direction}>
     <CardDeck className='CardDeck-lg'>


       <Card>
         <Card.Img className={isActive ? 'asd': null}
      onClick={toggleClass} variant="top"  src={MeruVsOla} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
         <Card.Title className=''>Competitor Analysis</Card.Title>

          </div>
         </Card.ImgOverlay>

 <Card.Body >
<span >Meru v/s Ola</span> <Button className=''  variant="contained" color="secondary" onClick={(e)=>{window.location.href='https://drive.google.com/file/d/1eQc4nyGDbB0FP7GL2Vf0q_ThWdNasWi2/view?usp=sharing'}}>
Details
</Button>

</Card.Body>
       </Card>
       <Card>
         <Card.Img variant="top" className='im' src={Onlinefurniture} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
         <Card.Title className=''>Case study</Card.Title>

          </div>
         </Card.ImgOverlay>
         <Card.Body >
        <span >Online Furniture rental</span> <Button className=''  variant="contained" color="secondary" onClick={(e)=>{window.location.href='https://drive.google.com/file/d/1hnn7vJPCBUj3J_BzBZ4azyhOsv_aA0UT/view?usp=sharing'}}>
        Details
        </Button>

        </Card.Body>
       </Card>

       <Card>
         <Card.Img variant="top" className='im' src={Flatmate} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
         <Card.Title className=''>Case study</Card.Title>

          </div>
         </Card.ImgOverlay>
         <Card.Body >
        <span >Flatmate.in</span>    <Button variant="contained" color="secondary"  onClick={(e)=>{window.location.href='https://drive.google.com/file/d/1JPPRM_6BzjpVvkf8cFzrLPOJGABB2lCH/view?usp=sharing'}}>
  Details
</Button>

        </Card.Body>
       </Card>

     </CardDeck>

     <CardDeck className='CardDeck-lg'>


       <Card>
         <Card.Img variant="top" className='im' src={Redbus} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
         <Card.Title className=''>Case study</Card.Title>

          </div>
         </Card.ImgOverlay>
         <Card.Body >
        <span >Redbus</span>  <Button variant="contained" color="secondary"  onClick={(e)=>{window.location.href='https://drive.google.com/file/d/1U8cemultFc_BHBmBvdgp1tQRYLS7-opA/view?usp=sharing'}}>
Details
</Button>

        </Card.Body>
       </Card>
       <Card>
         <Card.Img variant="top" className='im' src={Hotstar} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
         <Card.Title className=''>Case study</Card.Title>

          </div>
         </Card.ImgOverlay>
         <Card.Body >
        <span >Hotstar</span>   <Button variant="contained" color="secondary"  onClick={(e)=>{window.location.href='https://drive.google.com/file/d/1XIEgAg0F9osEJ5IC1IFZqxC_E8GWxMP3/view?usp=sharing'}}>
Details
</Button>
        </Card.Body>
       </Card>

       <Card>
         <Card.Img variant="top" className='im' src={UserJourneyMap} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
         <Card.Title className=''>User Journey Maps</Card.Title>

          </div>
         </Card.ImgOverlay>
         <Card.Body >
        <span >Buyonline</span> <Button variant="contained" color="secondary"  onClick={(e)=>{window.location.href='https://drive.google.com/file/d/1399C5N2e5KatjSH8UKNibcCKbnFd62p6/view?usp=sharing'}}>
Details
</Button>
        </Card.Body>
       </Card>

     </CardDeck>

     <CardDeck className='CardDeck-lg'>



       <Card>
         <Card.Img variant="top" className='im' src={DoToday} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
         <Card.Title className=''>Sketch, Wireframes and Prototypes</Card.Title>

          </div>
         </Card.ImgOverlay>
         <Card.Body >
        <span >DoToday</span>   <Button variant="contained" color="secondary"  onClick={(e)=>{window.location.href='https://drive.google.com/file/d/1mQ3iSxNFVbyUj3vMfhuIl3b-6CgeY2nG/view?usp=sharing'}}>
  Details
 </Button>
        </Card.Body>
       </Card>
       <Card>
         <Card.Img variant="top" className='im' src={Zivame} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
         <Card.Title className=''>Industry Project</Card.Title>

          </div>
         </Card.ImgOverlay>
         <Card.Body >
        <span >Zivame</span> <Button variant="contained" color="secondary"  onClick={(e)=>{window.location.href='https://drive.google.com/file/d/1EtWVbQnragHUbCA8yYRDlMRFeyIKm7et/view?usp=sharing'}}>
Details
</Button>
        </Card.Body>

       </Card>
       <Card className='zomato'>
         <Card.Img variant="top" className='im ' src={Zomato} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay animate__fadeInLeft'>
         <Card.Title className='title'>Blogs</Card.Title>


          </div>
         </Card.ImgOverlay>
         <Card.Body >
        <span >Agile Methodology in Zomato</span>   <Button variant="contained" color="secondary"  onClick={(e)=>{window.location.href='https://medium.com/@divitkarmiani1998/example-of-agile-methodology-at-a-company-like-zomato-c33158320f4d'}}>
  Details
</Button>
        </Card.Body>
       </Card>


     </CardDeck>
     <CardDeck className='CardDeck-big2'>


            <Card className='musicCard'>
              <Card.Img variant="top" className='im' src={Musicstreaming} alt='loading..' />

              <Card.ImgOverlay >
              <div className='card-ImgOverlay'>
              <Card.Title className=''>Blogs</Card.Title>

               </div>
              </Card.ImgOverlay>
              <Card.Body >

             <Container fluid style={{padding:'0px'}}>
                 <Row>
                    <Col xs={9}  className=''>
                   <span className=''>Product Adoption lifecycle for Music streaming services</span>

                        </Col>
                   <Col xs={3}  className='text-right'>
                   <Button variant="contained" color="secondary"  onClick={(e)=>{window.location.href='https://medium.com/@divitkarmiani1998/analyse-the-product-adoption-lifecycle-for-music-streaming-services-in-india-6d51815887c4'}}>
                Details
                </Button>
                  </Col>
                 </Row>
               </Container>
               </Card.Body>

            </Card>




     </CardDeck>






     </TabPanel>
     <TabPanel value={value} index={2} dir={theme.direction}>
     <CardDeck className='CardDeck-big3'>


       <Card>
         <Card.Img variant="top" className='im' src={Lyft} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
         <Card.Title className=''>Business Model canvas and Value Proposition canvas</Card.Title>

          </div>
         </Card.ImgOverlay>
         <Card.Body >
        <span >Lyft</span>     <Button variant="contained" color="secondary" onClick={(e)=>{window.location.href='https://drive.google.com/file/d/10KgQKMxkhv1MZq3Y-_ukVbDssdPK5CVN/view?usp=sharing'}}>
    Details
  </Button>
        </Card.Body>
       </Card>
       <Card>
         <Card.Img variant="top" className='im' src={HeadOut} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
         <Card.Title className=''>Product Critique</Card.Title>

          </div>
         </Card.ImgOverlay>
         <Card.Body >
        <span >HeadOut</span>   <Button variant="contained" color="secondary"  onClick={(e)=>{window.location.href='https://drive.google.com/file/d/17VmeXbID4IlNq6PS4Bsa4VkALYaiSCOf/view?usp=sharing'}}>
Details
</Button>
        </Card.Body>
       </Card>



     </CardDeck>
     </TabPanel>
   </SwipeableViews>
   </div>
 </div>
);
}

export default Projects;
