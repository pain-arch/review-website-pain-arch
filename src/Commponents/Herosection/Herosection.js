import React from 'react';
import Svg from '../../Assets/images/blue-flash.svg';
import heroimg from '../../Assets/images/hero_image_01.png' ;
import './Herosection.css';
import { Container, Row, Col, Dropdown, Button} from 'react-bootstrap';

const Herosection = () => {
    return (
        <div className="hero-section py-5">
           <Container>
            <Row>
                <Col className="left-side">
                    <div className="left"> 
                        <h1 className="my-2 headline-design">Learn a language<br/> for real life</h1>
                        <img className="my-2" src={Svg} alt="svg" />
                        <h4 className="my-3 fs-5">Phrases useful in everyday life.<br/>Taught with video clips of real locals.</h4>
                        <div className="my-4">
                            <Dropdown>
                                <Dropdown.Toggle className="dropdown-design fw-normal fs-5" id="dropdown-basic">
                                    Select Language
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item className="fw-bold fs-5" href="#/action-1">English</Dropdown.Item>
                                    <Dropdown.Item className="fw-bold fs-5" href="#/action-2">Spanish</Dropdown.Item>
                                    <Dropdown.Item className="fw-bold fs-5" href="#/action-3">Polish</Dropdown.Item>
                                    <Dropdown.Item className="fw-bold fs-5" href="#/action-4">French</Dropdown.Item>
                                    <Dropdown.Item className="fw-bold fs-5" href="#/action-5">Portuguese</Dropdown.Item>
                                    <Dropdown.Item className="fw-bold fs-5" href="#/action-6">Bengali</Dropdown.Item>
                                    <Dropdown.Item className="fw-bold fs-5" href="#/action-7">Arabic</Dropdown.Item>
                                    <Dropdown.Item className="fw-bold fs-5" href="#/action-8">Turkish</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    <Button className="fw-bold fs-5 px-5" variant="dark">Let's Get Started</Button>
                    </div>
                </Col>
                <Col >
                    <div className="text-center">
                        <img className="w-75" src={heroimg} alt="img" />
                    </div>
                </Col>
            </Row>
           </Container>
        </div>
    );
};

export default Herosection;