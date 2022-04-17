
import React from 'react';
import { Carousel } from 'react-bootstrap';
import myDentistImg1 from '../../../images/sliders-img/my-dentist-img-1.png'
import myDentistImg2 from '../../../images/sliders-img/my-dentist-img-2.png'
import myDentistImg3 from '../../../images/sliders-img/my-dentist-img-3.png'

const Banner = () => {
    return (
        <div>
            <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={myDentistImg1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>My First Client!</h5>
      <p>Natalie Portman was my first customer</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={myDentistImg2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>I am in Action!</h5>
      <p>I am serious when comes to client functions</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={myDentistImg3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>My Dream Chamber</h5>
      <p>This took years after years build my chamber</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;