import React from 'react'
import { Button, Form, FormGroup,Container,Row,Col } from 'react-bootstrap';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import './auth.css'
class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user: {},
            errors: {},
            validated: false
        }
    }

    handleChange=(e)=>{
       this.setState({user: {...this.state.user,[e.target.id]: e.target.value}})
    }

    handleSubmit=()=> {
        axios.post('/signup',this.state.user)
           .then((res)=> {
               this.setState({...this.state,validated: true});
                        })
           .catch((error)=>{ this.setState({...this.state,errors: {...error.response.data.errors}});
           console.log(this.state);})
    }

    render(){
        return (
          <Container fluid className='h-100 row m-0 p-0'>
              {this.state.validated && <Navigate to="/signin"/>}
              <Row className=' my-auto g-0'>
                  <Col className="col-md-4 mx-auto border rounded p-3 bg-light">
              <Form noValidate validated={this.state.validated} >
                  <FormGroup className='mb-3'>
                      <Form.Label>Username</Form.Label>
                      <Form.Control id="name" onChange={this.handleChange} isInvalid={this.state.errors.name}/>
                      <Form.Control.Feedback type="invalid">{this.state.errors.name}</Form.Control.Feedback> 
                  </FormGroup>
                  <FormGroup className='mb-3'>
                      <Form.Label>Email</Form.Label>
                      <Form.Control type='email' id="email" onChange={this.handleChange} isInvalid={this.state.errors.email || this.state.errors.user}/>
                      <Form.Control.Feedback type="invalid">{this.state.errors.email || this.state.errors.user}</Form.Control.Feedback> 
                  </FormGroup>
                  <FormGroup className='mb-3'>
                      <Form.Label>Password</Form.Label>
                      <Form.Control type='password' id="password" onChange={this.handleChange} isInvalid={this.state.errors.password}/>
                      <Form.Control.Feedback type="invalid">{this.state.errors.password}</Form.Control.Feedback> 
                  </FormGroup>
                  <FormGroup className='mb-3'>
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control type='password' id='password_confirmation' onChange={this.handleChange} isInvalid={this.state.errors.password_confirmation || this.state.errors.match}/>
                      <Form.Control.Feedback type="invalid">{this.state.errors.password_confirmation || this.state.errors.match}</Form.Control.Feedback> 
                  </FormGroup>
                  <div className='text-center'>
                  <Button variant='primary' className='mt-3' onClick={this.handleSubmit}>
                      Sign Up
                  </Button>
                  </div>
              </Form>
              </Col>
              </Row>
          </Container>
        );
    }
}

export default SignUp