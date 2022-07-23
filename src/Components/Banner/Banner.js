import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <section className='banner'>
            <div className='container text-center'>
                <h4>MID SEASON'S SALE</h4>
                <h1 className='fw-bold text-white my-4'>Autumn Collection <br/> Up TO 50% OFF</h1>
                <button className='text-uppercase main__btn'>Shop Now</button>
            </div>
        </section>
    );
};

export default Banner;