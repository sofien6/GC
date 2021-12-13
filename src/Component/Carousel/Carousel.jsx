import React from "react";
import './Carousel.css' ;
import Carousel from 'react-bootstrap/Carousel';
import below_header from '../../images/bellow_header_img.png'

class CarouselImage extends React.Component {
    render(){
        return(
            <Carousel style = {{position:'relative',top:'1px'}}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={below_header}
      alt="First slide"
    />
    <Carousel.Caption>
     <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={below_header}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={below_header}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        );
    }
}
export default CarouselImage;