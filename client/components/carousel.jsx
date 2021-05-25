import React, { useState } from 'react';
import { carouselData } from './carousel-img-data';

const Carousel = ({ datas }) => {
  const [current, setCurrent] = useState(0);
  const length = datas.length;

  const nextImg = () => {
    setCurrent(current === length - 1 ? 0 : current++);
  };

  const prevImg = () => {
    setCurrent(current === 0 ? length - 1 : current--);
  };
  console.log(current);
  return (
    <>
    asdf
    <i className="fas fa-chevron-left left-arrow" onClick={prevImg}></i>
    <i className="fas fa-chevron-right right-arrow" onClick={nextImg}></i>

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
