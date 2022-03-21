
import React from 'react'
import { Navbar,Nav,Button, DropdownButton, Dropdown } from 'react-bootstrap';


class NavBar extends React.Component{
    componentDidMount(){
      document.body.style.backgroundColor="whitesmoke";
    }

    handleLogOut=()=>{
        localStorage.removeItem('userData');
        window.location.reload();
    }

    render() {
      
        return(
            <div style={{marginBottom: '10px'}}>
                <Navbar bg="dark" variant="dark" >
 
    <Navbar.Brand href="/">
        <img
          alt=""
          src={require("./assets/logo.png")}
          width="60"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      SPORTSPRISM
      </Navbar.Brand>
      <Nav className="me-auto">
      <Nav.Link href="/sports/football">Football</Nav.Link>
      <Nav.Link href="/sports/cricket">Cricket</Nav.Link>
      <Nav.Link href="/sports/basketball">Basketball</Nav.Link>
      <Nav.Link href="/sports/tennis">Tennis</Nav.Link>
      <Nav.Link href="/sports/hockey">Hockey</Nav.Link>
    
    </Nav>
    <Nav>
     {console.log(JSON.parse(localStorage.getItem('userData')))}
     {localStorage.getItem('userData') 
     ?<DropdownButton className='px-3' align="end" title={JSON.parse(localStorage.getItem('userData')).username}>
       <Dropdown.Item onClick={this.handleLogOut}>Log out</Dropdown.Item>
       </DropdownButton>
     :<div>
     <Button style={{marginRight: "10px"}} href="/signin">Sign in</Button>
     <Button style={{marginRight: "10px"}} href="/signup">Sign up</Button>
     </div>}
 
    </Nav>
  </Navbar>
            </div>
        );
    }
}

export default NavBar