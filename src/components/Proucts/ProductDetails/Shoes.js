import React from "react";
import "./ProductDetails.css";
import ImageSlider from "./ImageSlider";
import img1 from '../../../Assets/shoes/-original-imagmdbv2pyuh6tx.webp';
import img2 from '../../../Assets/shoes/-original-imagmdbvktr8czzy.webp';
import img3 from '../../../Assets/shoes/-original-imagmdbvug23eung.webp';
import img4 from '../../../Assets/shoes/-original-imagqyxefggmghgj.webp';

const Shoes = () => {
    const images = [img1, img2, img3, img4];
    const reviews = [
        {
            id: 1,
            author: "Kavita Sharma",
            review: "These Adidas shoes are very comfortable and perfect for my daily workouts.",
            rating: 4.1,
        },
        {
            id: 2,
            author: "Rahul Kapoor",
            review: "I've been using these shoes for running, and they provide excellent cushioning and support.",
            rating: 4.2,
        },
        {
            id: 3,
            author: "Aarti Desai",
            review: "The quality of these Adidas shoes is top-notch. They are durable and stylish.",
            rating: 4.3,
        },
        {
            id: 4,
            author: "Prakash Joshi",
            review: "I'm impressed with the fit and grip of these shoes. They are perfect for outdoor activities.",
            rating: 4.4,
        },
        {
            id: 5,
            author: "Pooja Singhania",
            review: "These Adidas shoes are lightweight and breathable. I can wear them all day without any discomfort.",
            rating: 4.5,
        },
    ];
    return (
        <div className="product-container">
            <div className="product-header">
                <h2>Adidas Running Shoe</h2>
                </div>
    <div className="product-content">
      <div className="product-image">
        <ImageSlider images={images} />
      </div>
      <div className="product-details">
          <h3>Product Details</h3>
          <ul>
              <li>Size: 10</li>
              <li>Color: Black/White</li>
              <li>Material: Synthetic upper with rubber sole</li>
              <li>Closure: Lace-up</li>
              <li>Features: Breathable and lightweight design</li>
            </ul>
            <h4>
              Price : 1599 Rs/-
            </h4>
        </div>
        </div>
      <div className="product-info">
        <div className="product-review">
          <h3>Reviews</h3>
          {reviews.map((review) => (
            <div key={review.id} className="product-review-item">
              <p>
                <b>{review.author}</b> - {review.rating} stars
              </p>
              <p>{review.review}</p>
            </div>
          ))}
        </div>
        
      </div>
    
  </div>
);
};
export default Shoes;