import React, {useState , useEffect} from 'react';
import { CardGroup } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
      fetch('servicesData.json')
      .then(res => res.json())
      .then(data=>setServices(data))
    }, [])
    
    return (
        <div>
            <CardGroup >
                {
                    services.map(service=><Service service={service} key={service.id}></Service>)
                }
            </CardGroup>
        </div>
    );
};

export default Services;