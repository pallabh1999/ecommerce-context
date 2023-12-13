import React from "react";
import "./ProductDetails.css";
import ImageSlider from "./ImageSlider";
import img1 from '../../../Assets/tv/-original-imagg6gfu2mtszex.webp';
import img2 from '../../../Assets/tv/-original-imaggsnkne4n5mvh.webp';
import img3 from '../../../Assets/tv/-original-imaghngsfgf3jjhy.webp';
import img4 from '../../../Assets/tv/-original-imaghngsgtkpnazq.webp';

const TVSet = () => {
   const images = [img1 , img2 ,img3 , img4];
  const reviews = [
    {
      id: 1,
      author: "Rajiv Mehta",
      review: "The picture quality of this TV set is amazing. I feel like I'm in a movie theater!",
      rating: 4,
    },
    {
      id: 2,
      author: "Neha Gupta",
      review: "I love the sleek design and the vibrant colors of this TV. It adds elegance to my living room.",
      rating: 4.3,
    },
    {
      id: 3,
      author: "Ananya Singh",
      review: "The sound quality is impressive, and the built-in smart features make it easy to access my favorite shows and movies.",
      rating: 4.1,
    },
    {
      id: 4,
      author: "Vikram Patel",
      review: "This TV has a wide viewing angle, and the picture remains sharp and clear from any position.",
      rating: 4.5,
    },
    {
      id: 5,
      author: "Preeti Sharma",
      review: "The installation process was smooth, and the TV works flawlessly. I am very satisfied with my purchase.",
      rating: 4.4,
    },
  ];
  return (
    <div className="product-container">
    <div className="header">
       <h2>MI Tv </h2>
       </div> <div className="product-content">
      <div className="product-image">
        <ImageSlider images={images} />
      </div>
      <div className="product-details">
          <h3>Product Details</h3>
          <ul>
          <li>Screen Size: 55 inches</li>
          <li>Resolution: 4K Ultra HD</li>
          <li>Display Technology: LED</li>
          <li>Operating System: Android TV</li>
          <li>Smart Features: Built-in Chromecast, Voice Remote</li>
          <li>Connectivity: Wi-Fi, Bluetooth, HDMI, USB</li>
        </ul>
        <h4>
          PRice : 22,199 Rs /-
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
export default TVSet;