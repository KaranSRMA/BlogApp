import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../../components/Hero';
import Features from '../../components/Features';
import Blogs from '../../components/Blogs';
import Resources from '../../components/Resources';

const Homepage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth' });
                }, 100); // small delay to allow render
            }
        }
    }, [location]);

    return (
        <div>
            <section id='hero'><Hero /></section>
            <section id='features'><Features /></section>
            <section id='blogs'><Blogs /></section>
            <section id='resources'><Resources /></section>
        </div>
    )
}

export default Homepage
