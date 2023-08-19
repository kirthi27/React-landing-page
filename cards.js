import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Img3 from './images/redskoda.jpg';
import Img4 from './images/yellow.jpg';
import Img5 from './images/download.jpg';
import Img6 from './images/maruti.webp';
import Img7 from './images/kia.webp';
import Img8 from './images/tata.webp';
import Img9 from './images/toyota.webp';


function Cards() {
  return (
    <div>
      <div>
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src= {Img3} rounded />
        </Col> 
        <Col xs={6} md={4}>
          <Image src= {Img4} roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src={Img5} thumbnail />
        </Col>
      </Row>
    </Container>
    </div>
    <br></br>
    <div>
    <Card className="text-center">
      <Card.Header><h2>Škoda Connect packages</h2></Card.Header>
      <Card.Body>
        <Card.Title><h2>Check out the services in detail</h2></Card.Title>
        <Card.Text>
        <p>Services are divided into logical theme-based packages. Whether you want to expand the capabilities of the 
        infotainment system,<br></br>make it easier to take care of your car’s technical condition, or gain access to your Škoda vehicle remotely.
        </p>
        </Card.Text>
              </Card.Body>
      
    </Card>
    <br></br>
  </div>
    <div>
    <Card className="text-center">
      <Card.Header><h2>Featured </h2></Card.Header>
      <Card.Body>
               <Card.Text>
        <p>Everything you need to find your way to car parks, check if you forgot to lock the car, 
        or summon quick help if your car breaks down. <br></br>Watch videos to see how these services can make your life easier.
        </p></Card.Text>
        <Button variant="primary">Go</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>

  </div>
  <br></br>
  <div>
    <h3><c>OUR BRAND</c>S</h3>
  <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1}).map((_, idx) => (<Col key={0}>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Img6} text="MARUTI"/>
      </Card>
     </Col>
     
     ))}
        <Col key={1}>
      <Card style={{width: '18rem' }}>
        <Card.Img variant="top" src={Img7}/>
        </Card>
        </Col>
        <Col key={2}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Img8}/>
      </Card>
        </Col>
      <Col key={3}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Img9}/>
    </Card>
    </Col>
    </Row>
    
     
  
  </div>  
    </div>

  
  );
}

export default Cards;