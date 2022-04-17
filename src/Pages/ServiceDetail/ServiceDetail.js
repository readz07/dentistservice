import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const ServiceDetail = () => {



    const [displayName, setDisplayName] = useState('');
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    let errorMsg;
    if (error) {
        errorMsg =
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>

    }
    if (updating) {
        return <p>Updating...</p>;
      }

    return (
        <div className='container mt-5 mb-5 col-md-6'>
            <h2 className='text-center bg-primary p-5 text-white'>Please fill out the form detail</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control placeholder="Enter Full Name" type="displayName"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter Phone Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Age" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicGender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Gender" />
                </Form.Group>

                <Form.Text className="text-muted">
                    We'll never share your detail with anyone else.
                </Form.Text>
                <p>{errorMsg}</p>
                <Button onClick={async () => {
                    await updateProfile({ displayName });
                    alert('Updated profile');
                }} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default ServiceDetail;