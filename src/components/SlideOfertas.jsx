import { Carousel } from "react-bootstrap";
import slide1 from "../assets/img/slideofertas-01.jpg"
import slide2 from "../assets/img/slideofertas-02.jpg"


export default function SlideOfertas() {
  return (
      <div className="container">
    <Carousel>
  <Carousel.Item interval={2500}>
    <img
      className="d-block w-100"
      src={slide1}
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2500}>
    <img
      className="d-block w-100"
      src={slide2}
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
  );
}
