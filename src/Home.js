
import React from 'react'
import { Container,Card,Col,Row,Button } from 'react-bootstrap';
import Footer from './Footer';
import './Home.css'
import NavBar from './NavBar';

const sportData=[{"src": "football.jpg","title": "Football"},{"src": "cricket.jpg","title": "Cricket"},{"src": "basketball.jpg","title": "Basketball"},{"src": "tennis.jpg","title": "Tennis"},{"src": "hockey.jpg","title": "Hockey"}]

class Home extends React.Component{

    render() {
        return (
            <Container fluid className='p-0'>
                 <NavBar/>
                <Row xs={1} md={2} className="g-4 p-2">
    {sportData.map((sport)=> {return (
      <Col>
      <Card>
        <Card.Img className="card-img"  variant="top" src={require("./assets/"+sport.src)} />
        <Card.Body>
          <Card.Title>{sport.title}</Card.Title>
          <Button href={"/sports/"+sport.src.slice(0,-4)}>LIVE MATCHES</Button>
        </Card.Body>
      </Card>
    </Col>
    );})}
    
   
</Row>
<Footer/>
            </Container>
        );
    }
}

export default Home