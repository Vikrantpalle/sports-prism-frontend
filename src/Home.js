
import React from 'react'
import { Container,Card,Col,Row,Button } from 'react-bootstrap';
import './Home.css'

const sportData=[{"src": "football.jpg","title": "Football"},{"src": "cricket.jpg","title": "Cricket"},{"src": "basketball.jpg","title": "Basketball"},{"src": "tennis.jpg","title": "Tennis"},{"src": "hockey.jpg","title": "Hockey"}]

class Home extends React.Component{

    render() {
        return (
            <Container fluid>
                <Row xs={1} md={2} className="g-4">
    {sportData.map((sport)=> {return (
      <Col>
      <Card>
        <Card.Img className="card-img"  variant="top" src={require("./assets/"+sport.src)} />
        <Card.Body>
          <Card.Title>{sport.title}</Card.Title>
          <Button href={"/"+sport.src.slice(0,-4)}>LIVE MATCHES</Button>
        </Card.Body>
      </Card>
    </Col>
    );})}
    
   
</Row>
            </Container>
        );
    }
}

export default Home