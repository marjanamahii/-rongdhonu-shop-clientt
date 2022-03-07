import React from 'react';
import Rating from 'react-rating';
import './Review.css'
const Review = ({ review }) => {
    const { name, photo, reviews, rating, } = review;
    return (
        <div>
            <div className="col border p-3">
                <div className=" d-flex align-items-center h-100">
                    <img className='review-photo' src={photo} alt="..." />
                    <div className=" ms-2">
                        <Rating
                            className='text-warning rating-size'
                            initialRating={rating}
                            emptySymbol="fa fa-star-o fa-2x"
                            fullSymbol="fa fa-star fa-2x"
                            readonly
                        />
                        <div className="m-0 p-0">
                            <span className="fw-lighter r-title">By {name}</span>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <em className="fw-lighter">{reviews}</em>
                </div>
            </div>
        </div>
    );
};

export default Review;