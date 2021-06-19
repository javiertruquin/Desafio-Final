import slideNote1 from "../assets/img/slideaccesorio1.png";
import slideNote2 from "../assets/img/slideaccesorio2.png";
import slideNote3 from "../assets/img/slideaccesorio3.png";

import { Carousel } from "react-bootstrap";

export default function SlideAccesorios() {
    return (
        <Carousel fade>
            <Carousel.Item interval={2500}>
                <img src={slideNote1} alt="" className="" style={{}} />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <img src={slideNote2} alt="" className="" />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <img src={slideNote3} alt="" className="" />
            </Carousel.Item>
        </Carousel>
    );
}
