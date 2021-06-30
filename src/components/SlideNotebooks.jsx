import slideNote1 from "../assets/img/slidenote1.png"
import slideNote2 from "../assets/img/slidenote2.png"
import slideNote3 from "../assets/img/slidenote3.png"

import { Carousel } from "react-bootstrap";

export default function SlideAccesorios() {
    return (
        <Carousel fade>
            <Carousel.Item interval={2500}>
                <img draggable="false" src={slideNote1} alt="" className="" />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <img draggable="false" src={slideNote2} alt="" className="" />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <img draggable="false" src={slideNote3} alt="" className="" />
            </Carousel.Item>
        </Carousel>
    );
}
