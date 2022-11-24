import { useState } from 'react';
import './ImageSlide.scss';

const ImageSlide = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div className="leftArrowStyles" onClick={goToPrevious}>
        <span class="material-symbols-outlined">chevron_left</span>
      </div>
      <div className="rightArrowStyles" onClick={goToNext}>
        <span class="material-symbols-outlined">chevron_right</span>
      </div>
      <div
        className="sildeItem"
        style={{
          transform: `translateX(calc(-472 * ${currentIndex}px))`,
        }}
      >
        {slides.map(slide => {
          return <img src={slide.url} className="slideImg" />;
        })}
      </div>
    </div>
  );
};

export default ImageSlide;
