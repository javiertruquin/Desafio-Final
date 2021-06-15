import slideNote1 from "../assets/img/slidenote1.png"
import slideNote2 from "../assets/img/slidenote2.png"
import slideNote3 from "../assets/img/slidenote3.png"

import { Carousel } from "react-bootstrap";

export default function SlideAccesorios() {
    return (
        <Carousel fade>
            <Carousel.Item interval={2500}>
                <img src={slideNote1} alt="" className="img-fluid" style={{}} />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <img src={slideNote2} alt="" className="img-fluid" />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <img src={slideNote3} alt="" className="img-fluid" />
            </Carousel.Item>
        </Carousel>
    );
}
