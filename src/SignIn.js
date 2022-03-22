import React from 'react'
import { Button, Col, Container, Form, FormGroup, Row } from 'react-bootstrap';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import './auth.css'

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
           
               localStorage.setItem('userData',JSON.stringify({username: res.data.message.name,token: res.data.token}));
               this.setState({...this.state,validated: true})
            })
            .catch((error)=> {  
                this.setState({...this.state,errors: {...error.response.data.errors}});
            })  
       
    }

    
    render(){
        return (
          <Container fluid className='h-100 row m-0 p-0'> 
          {this.state.validated && <Navigate to="/"/>}
          <Row className=' my-auto g-0'>
<Col className='col-md-4 mx-auto bg-light border rounded p-3' >
              <Form noValidate validated={this.state.validated} >
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
                  <div className='text-center'>
                  <Button variant='primary' className='mt-3' onClick={this.handleSubmit}>
                 
                      Sign In
                  </Button>
                  </div>
                 
              </Form>
              </Col>
              </Row>
          </Container>
        );
    }
}

export default SignIn