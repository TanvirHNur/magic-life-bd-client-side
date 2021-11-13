import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Features from '../Features/Features';
import HomeBanner from '../HomeBanner/HomeBanner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Features/>
            <Products/>
            <Reviews/>
            <Footer/>
        </div>
    );
};

export default Home;