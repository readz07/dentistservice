import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const navigate = useNavigate();
    const {id, title, image, paragraph, price} = service
    const handleServiceDetail = (id)=>{
        navigate(`/service/${id}`)
    }
    return (     
            
             <Card>
                    <Card.Img variant="top" src={image} alt="image" width={50}/>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                           {paragraph}
                        </Card.Text>
                        <Card.Text>
                           PRICE: ${price}
                        </Card.Text>
                        <Button onClick={()=>handleServiceDetail(id)} variant="primary">Schedule Now!</Button>
                    </Card.Body>
                </Card> 
                
                
        
    );
};

export default Service;