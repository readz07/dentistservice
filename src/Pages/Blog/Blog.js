import React from 'react';
import { Accordion, ListGroup } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='container mt-5 mb-5 col-md-6'>
            <h2 className='text-center bg-primary p-5 text-white'>MY ANSWERS</h2>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header >Question-1: Difference between authorization and authentication</Accordion.Header>
                    <Accordion.Body>
                        Though it seems there is no differnce between authorization and authentication. But
                        they are completely differnt thing. Authentication refers a process where we verify
                        whether can register as a user or not. For example any basic signup process is known
                        as authentication. On ther other hand, authorization means will a registered or non
                        registered user can get access for a specific file, differnt role etc. For example
                        Facebook private group moderator is a good example of authorization.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Question-2: Why are you using firebase? What other options do you have to
                        implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        As Firbase authentication is strong enough to protect user data. Though we practice it at initial
                        stage of this course for education purpose. However, they have all the tested method which is time
                        saving and cost effective. Even, Firebase provides full backend support.
                        Beside, Firebase, there are few more options we can use they are: 1. Okta, 2. Auth0, 3. MongoDb 4.KeyCloack.
                        Among them Okta is much popular but they are expensive.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Question-3: What other services does firebase provide other than authentication</Accordion.Header>
                    <Accordion.Body>
                        Firebase is a full package. It provides complete backend solution according to my opinion. Most useful services are mentioned
                        below: 
                        <ListGroup as="ol" numbered className='mt-2'>
                            <ListGroup.Item as="li">Cloud Functions</ListGroup.Item>
                            <ListGroup.Item as="li">Hosting</ListGroup.Item>
                            <ListGroup.Item as="li">Google Analytics</ListGroup.Item>
                            <ListGroup.Item as="li">Cloud Messaging</ListGroup.Item>
                            <ListGroup.Item as="li">Cloud Storage</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;