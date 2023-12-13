import React from "react";
import "./ProductDetails.css";
import ImageSlider from "./ImageSlider";
import img1 from '../../../Assets/sofas/0-68-6-green-velvet-3-2-170-2-26-0-32-0-127-arra2854-68-6-arra-original-imagjte3aqtzkgqs.webp';
import img2 from '../../../Assets/sofas/0-68-6-green-velvet-3-2-170-2-26-0-32-0-127-arra2854-68-6-arra-original-imagjte3pcucvhwu.webp';
import img3 from '../../../Assets/sofas/symmetrical-green-velvet-arra2603-arra-green-original-imagaa5wengf7jxa.webp';
import img4 from '../../../Assets/sofas/symmetrical-green-velvet-arra2603-arra-green-original-imagaa5wzkztzyys.webp';


const Sofa = () => {
   const images = [img1 , img2 ,img3 , img4];
  const reviews = [
  {
    id: 1,
    author: "Rajesh Kumar",
    review: "The sofa set is comfortable and looks elegant in my living room.",
    rating: 4.2,
  },
  {
    id: 2,
    author: "Priya Sharma",
    review: "I am really impressed with the quality and design of this sofa set.",
    rating: 4.3,
  },
  {
    id: 3,
    author: "Amit Patel",
    review: "The sofa set exceeded my expectations. It's worth every penny.",
    rating: 4.4,
  },
  {
    id: 4,
    author: "Neha Singh",
    review: "I love the color and the material of this sofa set. It adds a touch of luxury to my home.",
    rating: 4.5,
  },
  {
    id: 5,
    author: "Anil Gupta",
    review: "The delivery was prompt, and the sofa set was easy to assemble. Highly recommended!",
    rating: 4,
  },
  ];
  return (
    <div className="product-container">
            <div className="product-header">
      <h2>Iphone 13</h2>
      </div> <div className="product-content">
      <div className="product-image">
        <ImageSlider images={images} />
      </div>
      <div className="product-details">
          <h3>Product Details</h3>
          <ul>
          <li>Color: Blue Velvet</li>
          <li>Design: 3-seater and 2-seater sofas</li>
          <li>Material: Velvet upholstery with wooden frame</li>
          <li>Dimensions: 3-seater - 170cm (L) x 80cm (W) x 80cm (H), 2-seater - 127cm (L) x 80cm (W) x 80cm (H)</li>
          <li>Style: Modern and stylish</li>
          <li>Features: Comfortable seating, sturdy construction</li>
        </ul>
        <h4>
          Price :- 25,999 Rs/-
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


export default Sofa;