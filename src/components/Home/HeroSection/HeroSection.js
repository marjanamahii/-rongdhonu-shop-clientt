import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import "./Herosection.css";
import Image1 from "../../../images/Acer-1.jpg";
import Image2 from "../../../images/Hp-1.jpg";
import Image3 from "../../../images/Lenovo-3.jpg";

const HeroSection = () => {
    return (
        <div className="banner-area">
            <Container>
                <Row className="d-flex align-items-center">
                    <Col xs={12} md={12} lg={6}>
                        <h1 style={{ fontFamily: "sans-serif", fontWeight: "bold", color: "#2c3e50" }}>Rongdhonu Shop!</h1>
                        <p style={{ fontSize: "18px", textAlign: "justify", fontFamily: "sans-serif", color: "#7f8c8d" }}>
                            Rongdhonu Shop is all about technology. Technology is something that is gaining
                            increasing importance in the world today. Wherever you look, there
                            is technology. Even the device you are using to read this article
                            uses technology. In simple words, technology is when we use
                            science to apply it for practical purposes.
                        </p>
                        <button className="learnmoreBtn">Learn More</button>
                    </Col>
                    <Col xs={12} md={12} lg={6}>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Image1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Image2}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Image3}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeroSection;