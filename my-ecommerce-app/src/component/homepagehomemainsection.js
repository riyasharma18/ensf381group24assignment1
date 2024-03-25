import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import reviews from '../data/reviews';

function HomeMainSection(){
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const randomReviews = getRandomReviews(2);
        setReviews(randomReviews);
    }, []);

    function getRandomReviews(count){
        const shuffled = reviews.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    return (
        <div className="home-main-section">
            <section>
                <h2>About Us</h2>
                <p>Welcome to our online store! We are passionate about providing high-quality products and exceptional customer service. Learn more about our story and commitment to your satisfaction.</p>
                <Link to = "/products">
                    <button>Shop Now</button>
                </Link>
            </section>
            <section>
                <h2>Customer Reviews</h2>
                {reviews.map((review, index) => (
                    <div key={index}>
                        <p>{review.customerName}</p>
                        <p>{review.reviewContent}</p>
                        <div>{"★".repeat(review.stars)}</div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default HomeMainSection;
