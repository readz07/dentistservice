import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';
const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

 
    const navigate = useNavigate();
    
    const handleName = event =>{
        setName(event.target.value)
    }
    const handleEmail = event =>{
        setEmail(event.target.value)
    }
    const handlePassword = event =>{
        setPassword(event.target.value)
    }

    const handleNewUserCreate = (event)=>{
        event.preventDefault();
        createUserWithEmailAndPassword(email, password)        
    }
    let errorMsg;
    if (error) {
        errorMsg =
        <div>
          <p className='text-danger'>Error: {error.message}</p>
        </div>
      
    }
    if (loading) {
      return <p>Loading...</p>;
    }
    if (user) {
      
          navigate('/')
      
    }  
    return (
        
            <div className='container col-md-6 mt-5 mb-5'>
            <h2>Welcome Please Sign Up Here</h2><br/>
            <Form onSubmit={handleNewUserCreate}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onBlur={handleName} type="text" placeholder="Enter Name"  required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email"  required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password"  required/>
                </Form.Group>
                
                {errorMsg}
                <Button variant="primary" type="submit">
                    Sing Up
                </Button>
                <Form.Group className="mt-3" controlId="formBasicText">                
                <Form.Text className="text-primary">
                        Already Registered!  <Link to='/signin'>Sign In Here</Link>
                </Form.Text>
                </Form.Group>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
       
    );
};

export default SignUp;