import React from 'react';
import Slider from "react-slick";
import {GrNext} from 'react-icons/gr'
import {GrPrevious} from 'react-icons/gr'
import './Review.css'
const Review = () => {
    
    return (
        <section>
           <div class="cards">
                <div>
                    <a href="" class="card">
                    <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
                    <div class="card__overlay">
                        <div class="card__header">
                        <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                        <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                        <div class="card__header-text">
                            <h3 class="card__title">Jessica Parker</h3>
                            <span class="card__tagline">Lorem ipsum dolor sit amet consectetur</span>            
                            <span class="card__status">1 hour ago</span>
                        </div>
                        </div>
                        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                    </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Review;
