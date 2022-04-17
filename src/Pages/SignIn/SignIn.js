import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';

import SocialLogin from '../SocialLogin/SocialLogin';
const SignIn = () => {
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    const SendPasswordReset = async () => {
        if (email) {
            await sendPasswordResetEmail(email)
            alert('Email Sent')
        }
    }

    const handleEmailOnBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordOnBlur = event => {
        setPassword(event.target.value)
    }

    const handleSignIn = (event) => {
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

        navigate(from, { replace: true });

    }
    return (
        <div className='container col-md-6 mt-5'>
            <h3>Almost Done! Sign In Here</h3>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailOnBlur} type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordOnBlur} type="password" placeholder="Password" />
                </Form.Group>
               
                <p>{errorMsg}</p>
                <Button variant="primary" type="submit">
                    Sign In
                </Button>
                <Form.Group className="mt-3" controlId="formBasicText">
                    <Form.Text className="text-primary">
                        Forget Password <Button onClick={SendPasswordReset}>Click Here</Button>
                    </Form.Text>
                    <Form.Text className="text-primary ms-3">
                        Didn't Sign Up <Link to='/signup'>Click Here</Link>
                    </Form.Text>
                </Form.Group>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignIn;