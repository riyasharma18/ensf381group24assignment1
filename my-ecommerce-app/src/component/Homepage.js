import React from 'react';
import Header from './homepageheader';
import HomeMainSection from './homepagehomemainsection';
import Footer from './homepagefooter';

function Homepage(){
    return (
        <div>
            <Header />
            <HomeMainSection />
            <Footer />
        </div>
    );
};

export default Homepage;