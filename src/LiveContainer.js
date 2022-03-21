import React from 'react';
import LeagueMatchContainer from './LeagueMatchContainer';
import {Container} from 'react-bootstrap'

class LiveContainer extends React.Component{
     constructor(props){
         super(props);
         var result=this.props.matches.reduce(function(rv,x) {
            
             if(x.league){ 
             (rv[x.league.name]=rv[x.league.name] || []).push(x);}
             else if(x.series){
                if(x.state==="LIVE"){
                (rv[x.series.name]=rv[x.series.name] || []).push(x);
                }
             }
             return rv;
         },{});
         console.log(result);
         this.state={
             leagues: result
         }
     }

     render() {
         const keys=Object.keys(this.state.leagues)
         return (
             <div>
                {
                    keys.map((key)=> { return(
                        <Container fluid>
                        <LeagueMatchContainer header={key} matches={this.state.leagues[key]}/>
                        </Container>
                    )})
                }
             </div>
         )
     }

}

export default LiveContainer;