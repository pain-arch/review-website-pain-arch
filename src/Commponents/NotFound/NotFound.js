import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <Header></Header>
            <h1 className="text-center text-design">404 <br /> not Found</h1>
            <Footer></Footer>   
        </div>
    );
};

export default NotFound;