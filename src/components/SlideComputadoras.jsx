import slideCompu1 from "../assets/img/slidecompus1.png";
import slideCompu2 from "../assets/img/slidecompus2.png";
import slideCompu3 from "../assets/img/slidecompus3.png";

import { Carousel } from "react-bootstrap";

export default function SlideComputadoras() {
    return (
        <Carousel fade>
            <Carousel.Item interval={2500}>
                <img draggable="false" src={slideCompu1} alt="" className="" />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <img draggable="false" src={slideCompu2} alt="" className="" />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <img draggable="false" src={slideCompu3} alt="" className="" />
            </Carousel.Item>
        </Carousel>
    );
}
