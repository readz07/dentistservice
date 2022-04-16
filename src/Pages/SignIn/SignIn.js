import React from 'react';
import { Button, Form } from 'react-bootstrap';

const SignIn = () => {
    return (
        <div className='container col-md-6 mt-5'>
            <h4>Almost Done! Sign In Here</h4>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept Terms and Conditions" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Group className="mt-3" controlId="formBasicText">
                <Form.Text className="text-primary">
                        Forget Password Click Here
                </Form.Text>
                <Form.Text className="text-primary mr-3">
                        Didn't Sign Up Click Here
                </Form.Text>
                </Form.Group>
            </Form>
        </div>
    );
};

export default SignIn;