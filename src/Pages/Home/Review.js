import React from 'react';
import { FaStar } from 'react-icons/fa'
import Rating from 'react-rating';
const Review = ({reviews}) => {
    const {name, img, review, rating} = reviews;
    return (
        <div class="py-8 px-8 my-10 flex-col justify-center items w-1/3 mx-auto bg-primary">
            <img class=" mx-auto h-16 w-16 rounded-full -mt-16 " src={img || 'https://api.lorem.space/image/face?hash=92310'} alt="Customer" />
            <div class="text-center">
                <div>
                    <p class="text-lg text-black font-semibold my-2">
                        {name}
                    </p>
                    <div className='flex justify-between my-3'>
                        <p>Rating: <small>{rating}</small></p>
                        <Rating
                            initialRating={rating}
                            emptySymbol={<FaStar></FaStar>}
                            fullSymbol={<FaStar style={{ color: '#facc15' }} />}
                            readonly
                        ></Rating>
                    </div>
                    <p class="font-medium ">
                       {review}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Review;