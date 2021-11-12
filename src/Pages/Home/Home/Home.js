import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Products/>
            <Reviews/>
        </div>
    );
};

export default Home;