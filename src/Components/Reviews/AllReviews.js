import React from 'react';
import Data from './Data';
import Review from './Review';

const AllReviews = () => {
    const reviews = Data;
    console.log(reviews)
    return (
        <div className='all__reviews'>
            <div className='container'>
              <h1 className='fw-bold text-center title'>Our Reviews</h1>
                <div className='items-section row my-4'>
                    {
                        reviews.map(review => <Review key={review.id} review={review}></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllReviews;