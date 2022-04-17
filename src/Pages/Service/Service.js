import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = ({service}) => {
    const {id, title, image, paragraph, price} = service
    return (
        <div className='m-2'>
            <Card style={{ width: '18rem', height:'100%'}}>
                    <Card.Img variant="top" src={image} alt="image"/>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                           {paragraph}
                        </Card.Text>
                        <Card.Text>
                           PRICE: ${price}
                        </Card.Text>
                        <Button variant="primary">Schedule Now!</Button>
                    </Card.Body>
                </Card>
        </div>
    );
};

export default Service;