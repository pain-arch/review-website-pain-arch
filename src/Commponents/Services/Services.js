import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Services.css';


const Services = () => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('./fakedb.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])



    return (
        <div>
            <Header>

            </Header>
            <div className="mb-5">
                <Container>
                    <div className="text-center">
                    <h1 className="my-5 page-title">Services</h1>
                    </div>
                    <Row xs={1} md={3} className="g-5 mx-3">
                        {courses.map( course => (
                            <Col key={course.key} >
                                <Card className="card-design">
                                    <Card.Img className="w-50 mx-auto p-3" variant="top" src={course.img} />
                                    <Card.Body>
                                    <Card.Title className="fs-2 title-design">{course.name}</Card.Title>
                                    <Card.Text>
                                        {course.discription}
                                    </Card.Text>
                                    <div className="d-flex mb-3">
                                        <Card.Title >Price: $ {course.price}</Card.Title>
                                        <Card.Title className="mx-5">Students: {course.student}</Card.Title>
                                    </div>
                                    <Button variant="dark">Start Now</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>    
            <Footer>

            </Footer>
        </div>
    );
};

export default Services;