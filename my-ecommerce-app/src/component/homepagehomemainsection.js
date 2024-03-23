import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import reviewsData from '../data/reviews';

const HomeMainSection = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const randomReviews = getRandomReviews(2);
        setReviews(randomReviews);
    }, []);

    const getRandomReviews = (count) => {
        const shuffled = reviewsData.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    return (
        <div className="home-main-section">
            <section>
                <h2>About Us</h2>
                <p>At Joya Jewellers, our mission is for each of our customers to experience "The Joya Life" while shopping with us. Each of our products tells a story, enhancing the shopping experience for each of our beloved clients. We take pride in our exquisite collection and exceptional in-house designs and services. Our vision is to expand our mindset to every corner of the globe.</p>
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
