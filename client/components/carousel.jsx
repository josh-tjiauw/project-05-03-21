import React, { useState } from 'react';
import { carouselData } from './carousel-img-data';

const Carousel = ({ datas }) => {
  let [current, setCurrent] = useState(0);
  const length = datas.length;

  const nextImg = () => {
    setCurrent(current === length - 1 ? 0 : current++);
  };

  const prevImg = () => {
    setCurrent(current === 0 ? length - 1 : current--);
  };

  const selectImage = () => {
    setCurrent(parseInt(event.target.id));
  };

  if (!Array.isArray(datas) || datas.length <= 0) {
    return null;
  }

  const dots = document.querySelectorAll('.dots-nav');
  dots.forEach(dot => {
    if (parseInt(dot.id) === current) {
      dot.className = 'fas fa-circle dots-nav';
    } else {
      dot.className = 'far fa-circle dots-nav';
    }
  });

  return (
    <>
    <i className="fas fa-chevron-left left-arrow" onClick={prevImg}></i>
    <i className="fas fa-chevron-right right-arrow" onClick={nextImg}></i>
    <div className="carousel-nav">
      <i id="0" className="fas fa-circle dots-nav" onClick={selectImage}></i>
      <i id="1" className="far fa-circle dots-nav" onClick={selectImage}></i>
      <i id="2" className="far fa-circle dots-nav" onClick={selectImage}></i>
      <i id="3" className="far fa-circle dots-nav" onClick={selectImage}></i>
      <i id="4" className="far fa-circle dots-nav" onClick={selectImage}></i>
    </div>

    { carouselData.map((data, index) => {
      return (
        <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={data.image} alt='travel image' className='image' />
            )}
          </div>
      );
    })}
    </>
  );
};

export default Carousel;
