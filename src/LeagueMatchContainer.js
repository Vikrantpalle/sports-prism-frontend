import React from 'react';
import { Container,Row,Col,Card} from 'react-bootstrap';
import './LeagueMatchContainer.css'


class LeagueMatchContainer extends React.Component{
  
  constructor(props){
      super(props);
      this.state={
          showMatches: true
      }
  }


  render() {
      return (
            <div className='leagueContainer'>
                 <Container fluid className='fw-normal'> 
                 <Row xs="auto" style={{marginTop: '0',marginRight: '0'}}>
                 <Col className='header' onClick={()=> {this.setState({showMatches: !this.state.showMatches})}}>{this.props.header}</Col>
                 </Row>
                 </Container>
                 <Container fluid className='matchContainer fw-bold text-uppercase'>
                 <Row xs={1} md={3} className="g-4" style={{marginTop: '0'}}>
                     {this.state.showMatches && this.props.matches.map((match)=> {
                         if(match.home_team){
                            return(
                                <Col>
                                <Card className='match'> 
                                
                                <Row style={{margin: '0'}}>
                                <Col md={1} className="my-auto">
                                    <div className="live"></div>
                                    </Col>
                                    <Col className='my-auto' md={2} style={{padding: '0',textAlign: 'left'}}>
                                    LIVE
                                    </Col>
                                    <hr/>
                                </Row>
                           
                                <Row>
                                <Col><img className="img" alt="home_team" onError={({currentTarget})=> {
                                    currentTarget.onerror=null;
                                    currentTarget.src=require("./assets/defaultteam.png")
                                }} src={match.home_team.logo}/>
                                {match.home_team.name}</Col>
                                <Col className='my-auto fw-normal' style={{fontSize: '3vh'}}>{match.home_score.current}</Col>
                                <Col className='my-auto' style={{fontSize: '6vh'}}>V</Col>
                                <Col  className='my-auto fw-normal' style={{fontSize: '3vh'}}>{match.away_score.current} </Col>
                                <Col ><img className='img' alt="away_team" onError={({currentTarget})=> {
                                    currentTarget.onerror=null;
                                    currentTarget.src=require("./assets/defaultteam.png")
                                }} src={match.away_team.logo}/>
                                {match.away_team.name}</Col>
                                </Row>  
                             
                                </Card>
                                </Col>
                            );
                         }
                         else{
                             return(
                                 <Col>
                            <Card className='match'> 
                             <Row style={{margin: '0'}}>
                             <Col md={1} className="my-auto">
                                    <div className="live"></div>
                                    </Col>
                                 <Col className='my-auto' md={2} style={{padding: '0',textAlign: 'left'}}>
                                LIVE
                                </Col>
                                <hr/>   
                             </Row>
                           <Row>
                            <Col className='my-auto' >{match.teams[0].team.name}</Col>
                            <Col className='my-auto fw-normal' style={{fontSize: '3vh'}}>{(match.teams[0].score || "yet to bat")}</Col>
                            <Col className='my-auto' style={{fontSize: '6vh'}}>V</Col>
                            <Col className='my-auto fw-normal' style={{fontSize: '3vh'}}>{(match.teams[1].score || "yet to bat")}</Col>
                            <Col className='my-auto'>{match.teams[1].team.name}</Col>
                            </Row>
                           
                        
                           
                         </Card>
                         </Col>
                             );
                         }
                     })}
                     </Row>
                 </Container>
            </div>
      );
  }
}

export default LeagueMatchContainer;