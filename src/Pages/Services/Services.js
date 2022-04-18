import React, { useState, useEffect } from 'react';
import { CardGroup, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('servicesData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <Container className='my-5'>
                <Row>
                    <CardGroup className='gap-5'>
                        {
                            services.map(service => <Service service={service} key={service.id}></Service>)
                        }
                    </CardGroup>
                </Row>
            </Container>
        </div>
    );
};

export default Services;