import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from './assets/ImagenesCarousel/book1.jpg';
import slide_image_2 from './assets/ImagenesCarousel/book2.jpg';
import slide_image_3 from './assets/ImagenesCarousel/book3.jpg';
import slide_image_4 from './assets/ImagenesCarousel/book4.jpg';
import slide_image_5 from './assets/ImagenesCarousel/book5.jpg';
import slide_image_6 from './assets/ImagenesCarousel/book6.jpg';
import slide_image_7 from './assets/ImagenesCarousel/book7.jpg';
import slide_image_8 from './assets/ImagenesCarousel/book8.jpg';
import slide_image_9 from './assets/ImagenesCarousel/book9.jpg';
import slide_image_10 from './assets/ImagenesCarousel/book10.jpg';
import slide_image_11 from './assets/ImagenesCarousel/book11.jpg';
import slide_image_12 from './assets/ImagenesCarousel/book12.jpg';


function App() {
  return (
    <div className="container">
      <h1 className="heading">Novedades</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_9} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_10} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_11} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_12} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;
