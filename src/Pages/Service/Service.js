import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const navigate = useNavigate();
    const {title, image, paragraph, price} = service
    const handleServiceDetail = ()=>{
        navigate(`/servicedetail`)
    }
    return (
        <div className='m-2 mt-5'>
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
                        <Button onClick={()=>handleServiceDetail()} variant="primary">Schedule Now!</Button>
                    </Card.Body>
                </Card>
        </div>
    );
};

export default Service;