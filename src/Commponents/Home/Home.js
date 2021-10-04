import React from 'react';
import Header from '../Header/Header';
import Herosection from '../Herosection/Herosection';
import Footer from '../Footer/Footer';
import Courses from '../Courses/Courses';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Herosection></Herosection>
            <Courses></Courses>
            <Footer></Footer>
        </div>
    );
};

export default Home;