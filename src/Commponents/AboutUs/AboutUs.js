import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="container-design">
            <Header></Header>
            <Container className="text-center">
                <div className="text-center ">
                    <h1 className="text-center my-5 title">About Us</h1>
                </div>
                <h1 className="details-design my-5">
                    From wanderlusters to <br /> 
                    DIYers and Kpop lovers,<br /> 
                    <span className="color" >Fluent</span>Lang is helping people <br /> 
                    experience the sheer <br /> 
                    pleasure of learning.
                </h1>
                <p className="my-4 fs-4 fw-bold">FluentLang is a language learning app that is the opposite of textbook learning: it’s enjoyable and effective. Founded in 2018, Memrise has quickly grown and now close to 1 million people in 189 countries learn languages with us to better themselves, connect with others and with the world around them.</p>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;