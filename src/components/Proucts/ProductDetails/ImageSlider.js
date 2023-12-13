import React,{useState} from "react"; 
import './ImageSlider.css'

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    };
  
    return (
      <div className="image-slider">
        <button
          className="slider-btn"
          disabled={currentIndex === 0}
          onClick={handlePrev}
        >
          {'<'}
        </button>
        <img
          className="slider-image"
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
        />
        <button
          className="slider-btn"
          disabled={currentIndex === images.length - 1}
          onClick={handleNext}
        >
          {'>'}
        </button>
      </div>
    );
  };

  export default ImageSlider;