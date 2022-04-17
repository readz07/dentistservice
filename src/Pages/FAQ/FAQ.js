import React from 'react';
import { Accordion, ListGroup } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div className='container mt-5 mb-5 col-md-6'>
            <h2 className='text-center bg-primary p-5 text-white'>YOU WILL FIND ALL FAQ!</h2>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header >Question-1: Do I need to arrive early for my first appointment?
</Accordion.Header>
                    <Accordion.Body>
                    Yes, as I am busy please arrive 10-15 minutes early to fill out any remaining patient forms.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Question-2: What should I do if I require premedication?</Accordion.Header>
                    <Accordion.Body>
                    Please be sure to request a prescription prior to your appointment, or if you are unsure, contact us and we can help.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Question-3: What do I need to bring to my first appointment?</Accordion.Header>
                    <Accordion.Body>
                        Firebase is a full package. It provides complete backend solution according to my opinion. Most useful services are mentioned
                        below: 
                        <ListGroup as="ol" numbered className='mt-2'>
                            <ListGroup.Item as="li">Patient Information Form</ListGroup.Item>
                            <ListGroup.Item as="li">Dental Insurance Card (if applicable)</ListGroup.Item>
                            <ListGroup.Item as="li">Identification such as Driver's License, Military ID or State ID</ListGroup.Item>
                            <ListGroup.Item as="li">Patient Health History Form</ListGroup.Item>
                            <ListGroup.Item as="li">HIPAA Consent Form</ListGroup.Item>
                            <ListGroup.Item as="li">Patient Authorization Form</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Question-3:  How long will my first appointment last?</Accordion.Header>
                    <Accordion.Body>
                    It varies, but please plan on 1 to 1.5 hours for the first visit.
                        
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;