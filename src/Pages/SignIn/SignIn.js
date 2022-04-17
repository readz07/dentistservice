import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleEmailOnBlur = event =>{
        setEmail(event.target.value)
    }
    const handlePasswordOnBlur = event =>{
        setPassword(event.target.value)
    }

    const handleSignIn = (event)=>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password)        
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
      return (
          navigate('/')
      );
    }  
    return (
        <div className='container col-md-6 mt-5'>
            <h4>Almost Done! Sign In Here</h4>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailOnBlur} type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordOnBlur} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept Terms and Conditions" />
                </Form.Group>
                <p>{errorMsg}</p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Group className="mt-3" controlId="formBasicText">
                    <Form.Text className="text-primary">
                        Forget Password <Link to='/signup'>Click Here</Link>
                    </Form.Text>
                    <Form.Text className="text-primary ms-3">
                        Didn't Sign Up <Link to='/signup'>Click Here</Link>
                    </Form.Text>
                </Form.Group>
            </Form>
        </div>
    );
};

export default SignIn;