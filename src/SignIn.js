import React from 'react'
import { Alert, Button, Col, Container, Form, FormGroup, Row } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user: {},
            errors: {},
            validated: false,
            showPassword: false
        }
    }

    handleChange=(e)=>{
       this.setState({user: {...this.state.user,[e.target.id]: e.target.value}})
    }

    handleSubmit=()=> {
        axios.post('/signin',this.state.user)
           .then((res)=>{
               this.setState({...this.state,validated: true})
               localStorage.setItem('userData',JSON.stringify({username: res.data.message.name,token: res.data.token}));
               window.location.reload();
            })
            .catch((error)=> {  
                this.setState({...this.state,errors: {...error.response.data.errors}});
            })  
       
    }

    
    render(){
        return (
          <Container fluid> 
          {!localStorage.getItem('userData') && <Row>
<Col className='col-md-4 mx-auto border p-3 bg-light'>
              <Form noValidate validated={this.state.validated} style={{}} className='justify-content-center'>
                  <FormGroup className='mb-3'>
                      <Form.Label>Email</Form.Label>
                      <Form.Control type='email' id="email" onChange={this.handleChange} isInvalid={this.state.errors.email || this.state.errors.user}/>
                      <Form.Control.Feedback type="invalid">{this.state.errors.email || this.state.errors.user}</Form.Control.Feedback> 
                  </FormGroup>
                  <FormGroup className='mb-3'>
                      <Form.Label>Password</Form.Label>
                      <Form.Control type={this.state.showPassword ? "text":"password"} id="password" onChange={this.handleChange} isInvalid={this.state.errors.password}/>
                      <Form.Control.Feedback type="invalid">{this.state.errors.password}</Form.Control.Feedback>
                  </FormGroup>
                  <FormGroup className='mb-3'>
                      <Form.Check type='checkbox' label='Show password' onClick={()=> this.setState({...this.state,showPassword: !this.state.showPassword})}/>
                  </FormGroup>
                  <Button variant='primary' onClick={this.handleSubmit}>
                      Sign In
                  </Button>
                 
              </Form>
              </Col>
              </Row>}
              {localStorage.getItem('userData') && <Row>
                  <Col className='col-md-4 mx-auto m-3 p-0'>
                      <Alert variant='success '>
                          <Alert.Heading>Signed In</Alert.Heading>
                          <hr/>
                          <p>Go to <Link to="/">home</Link></p>
                      </Alert>
                  </Col>
              </Row>}
          </Container>
        );
    }
}

export default SignIn