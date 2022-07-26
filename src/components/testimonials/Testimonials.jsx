import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const Testimonials = () => {
  return (
   <section id="testimonials">
    <h5>Review From Clients</h5>
    <h2>Testimonials</h2>
    <Swiper className="container testimonials__container"
     modules={[Pagination]}
     spaceBetween={40}
     slidesPerView={1}
     pagination={{ clickable: true }}
    >
      <SwiperSlide className="testimonial">
        <div className="client__avatar">
          <img src={AVTR1} alt='AVATAR ONE'/>
        </div>
        <h5 className='client__name'>Moses kimanzi</h5>
          <small className="client__review">
            Great work!
          </small>
      </SwiperSlide>
      <SwiperSlide className="testimonial">
        <div className="client__avatar">
          <img src={AVTR2} alt='AVATAR TWO'/>  
        </div>
        <h5 className='client__name'>Dan Muremi</h5>
          <small className="client__review">
            Quality servises
          </small>
      </SwiperSlide>
      <SwiperSlide className="testimonial">
        <div className="client__avatar">
          <img src={AVTR3} alt='AVATAR THREE'/>    
        </div>
        <h5 className='client__name'>Allan Michael</h5>
          <small className="client__review">
            Good team player in pair programming
          </small>
      </SwiperSlide>
      <SwiperSlide className="testimonial">
        <div className="client__avatar">
          <img src={AVTR4} alt='AVATAR FOUR'/>  
        </div>
        <h5 className='client__name'>Steve Klein</h5>
          <small className="client__review">
            Real time projects!
          </small>
      </SwiperSlide>
    </Swiper>
   </section>
  )
}

export default Testimonials