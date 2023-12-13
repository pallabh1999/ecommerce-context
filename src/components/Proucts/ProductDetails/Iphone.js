import React from "react";
import "./ProductDetails.css";
import ImageSlider from "./ImageSlider";
import img1 from '../../../Assets/mobile phones/-original-imagh7g8k7ttcdkc.webp';
import img2 from '../../../Assets/mobile phones/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.webp';
import img3 from '../../../Assets/mobile phones/iphone-13-mlpf3hn-a-apple-original-imag6vzzemfy9nse.webp';
import img4 from '../../../Assets/mobile phones/iphone-13-mlpf3hn-a-apple-original-imag6vzzfzfrrz4h.webp';


const Iphone = () => {
   const images = [img1 , img2 ,img3 , img4];
  const reviews = [
    {
      id: 1,
      author: "Ankit Gautam",
      review: "I love the iPhone 5! The design and performance are excellent.",
      rating: 4.5,
    },
    {
      id: 2,
      author: "Mayank Shukla",
      review: "The iPhone 4 is a classic. It's compact and still works great!",
      rating: 4.1,    
    },
    {
      id: 3,
      author: "Prakash Chouhan",
      review: "I'm impressed with the camera quality of the iPhone 5.",
      rating: 4,
    },
    {
      id: 4,
      author: "K. Satya Sai",
      review: "The iPhone 4 is easy to use and has a long battery life.",
      rating: 4.4,
    },
    {
      id: 5,
      author: "Arun Singh",
      review: "Both the iPhone 4 and iPhone 5 are solid choices. Great value for the price.",
      rating: 4.2,
    },
  ];
  return ( <div className="product-container">
  <div className="product-header">
      <h2>Iphone 13</h2>
    </div>
    <div className="product-content">
      <div className="product-image">
        <ImageSlider images={images} />
      </div>
      <div className="product-details">
          <h3>Product Details</h3>
          <ul>
              <li>Display: 6.1-inch Super Retina XDR display</li>
              <li>Processor: A15 Bionic chip</li>
              <li>Camera: Dual 12MP Ultra Wide and Wide cameras</li>
              <li>Storage: 128GB/256GB/512GB</li>
              <li>Battery: Built-in rechargeable lithium-ion battery</li>
            </ul>
            <h4>
            price : 57,999 Rs/-
            </h4>
        </div>
        
        </div><div className="product-info">
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
export default Iphone;