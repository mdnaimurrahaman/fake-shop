import React from 'react';
import Slider from "react-slick";
import {GrNext} from 'react-icons/gr'
import {GrPrevious} from 'react-icons/gr'
import {BsStarFill} from 'react-icons/bs'
import './Review.css'
const Review = ({reviews}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <GrNext/>,
        prevArrow: <GrPrevious/>,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1008,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 800,
              settings: 'unslick',
              dots: true,
              nextArrow: <GrNext/>,
            prevArrow: <GrPrevious/>,
            },

          ],
      };
    
    return (
        <section className='container'>
            <Slider {...settings} className="homeSlide">
            {
                // eslint-disable-next-line array-callback-return
                reviews.map((review,index) => {
                    // const {id, name, cover, rating, time, description} = review
                    return(
                        <div class="cards p-2 2">
                <div  key={index}>
                    <a href="" class="card">
                    <img src={review.cover} class="card__image" alt="" />
                    <div class="card__overlay">
                        <div class="card__header">
                        <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                        <img class="card__thumb" src={review.cover} alt="" />
                        <div class="card__header-text">
                            <h3 class="card__title">{review.name}</h3>
                            <span class="card__tagline">{review.time}</span>            
                            <div className='review'>
                                <span class="card__status">{review.rating}</span>
                                <span><BsStarFill class="star"/></span>
                            </div>
                        </div>
                        </div>
                        <p class="card__description">{review.description}</p>
                    </div>
                    </a>
                </div>
            </div>
            
                    )
           })
            }
            </Slider>
        </section>
    );
};

export default Review;
