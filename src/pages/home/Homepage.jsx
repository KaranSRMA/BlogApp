import React from 'react';
import Hero from '../../components/Hero';
import Features from '../../components/Features';
import Blogs from '../../components/Blogs';
import Resources from '../../components/Resources';

const Homepage = () => {
    return (
        <div>
            <Hero />
            <Features />
            <Blogs />
            <Resources />
        </div>
    )
}

export default Homepage
