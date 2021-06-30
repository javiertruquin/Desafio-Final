import { Carousel } from "react-bootstrap";
import slide1 from "../assets/img/slideofertas-01.jpg";
import slide2 from "../assets/img/slideofertas-02.jpg";

export default function SlideOfertas() {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item interval={2500}>
                    <img
                        draggable="false"
                        className="d-block"
                        src={slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img
                        className="d-block"
                        draggable="false"
                        src={slide2}
                        alt="First slide"
                    />
                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
