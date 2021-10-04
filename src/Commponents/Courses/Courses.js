import React, { useEffect } from 'react';
import './Courses.css';
import { Row, Col, Card, Button , Container } from 'react-bootstrap';
import { useState } from 'react';

const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('./fakedb.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    const shortServices = courses.slice(0,4);

    return (
        <div className="mb-5">
            <Container>
                <div className="text-center">
                    <h1 className="text-center my-5 title">Courses</h1>
                </div>
                <Row xs={1} md={3} className="g-5 mx-3">
                    {shortServices.map( course => (
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
    );
};

export default Courses;