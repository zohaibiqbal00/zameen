  "use client"


  import React, { useState } from 'react';
  import {Swiper, SwiperSlide} from "swiper/react"
  import 'swiper/css';

  const Page: React.FC = () => {


    return (
      <div className='bg-white w-full text-black p-8'>
        <h2 className='mb-5 font-semibold text-3xl'>Zameen Project</h2>
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="max-w-sm mx-auto bg-white shadow-md rounded-md overflow-hidden">
  <img className="w-full h-48 object-cover rounded-lg" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSRqRnFOVLUERuPzdhYj0UyZnriodHiaJyxbp-FLzumWtvQIliJ" alt="Card Image"/>
  <div>
  <h2 className="text-lg font-semibold text-gray-800">PKR 44.79 lakh to 1.86 green oaks residencia,Peshawar</h2>
    <p className="text-gray-600 mt-2">Peshawar,Rahatabad</p>
    <p className='font-bold text-md'>Flats,Shops</p>
    <p>163 sqft to 1795 sqft</p>
  </div>
</div>
</SwiperSlide>
        <SwiperSlide>
        <div className="max-w-sm mx-auto bg-white shadow-md rounded-md overflow-hidden">
  <img className="w-full h-48 object-cover rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyKJMcGUoKoFmKwAWKI18kr2fnBbJNwCOdxpKjagMhI978wPVd" alt="Card Image"/>
  <div>
  <h2 className="text-lg font-semibold text-gray-800">PKR 69.18 lakh to 11.11 crore zameen ace mall,Islamabad</h2>
    <p className="text-gray-600 mt-2">Islamabad,DHA Defence Phase2</p>
    <p className='font-bold text-md'>Shops</p>
    <p>60 sqft to 875 sqft</p>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="max-w-sm mx-auto bg-white shadow-md rounded-md overflow-hidden">
  <img className="w-full h-48 object-cover rounded-lg" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR-ZtoawbJ6Cjq1ijHwwgRTYyCQ9ZO0TX9-G_BWHhoS96U-TKjD" alt="Card Image"/>
  <div>
  <h2 className="text-lg font-semibold text-gray-800">PKR 79.79 lakh to 2.4 crore box park 11,Rawalpindi</h2>
    <p className="text-gray-600 mt-2">Rawalpindi,Bahria Town Rawalpindi</p>
    <p className='font-bold text-md'>Shops</p>
    <p>121 sqft to 467 sqft</p>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="max-w-sm mx-auto bg-white shadow-md rounded-md overflow-hidden">
  <img className="w-full h-48 object-cover rounded-lg" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQnYNy4tBg6yYIK8X_M_48o9hM9S5Sr58k-XtQr9dhZlopxh-xF" alt="Card Image"/>
  <div>
    <h2 className="text-lg font-semibold text-gray-800">PKR 79.79 lakh to 2.4 crore box park 11,Rawalpindi</h2>
    <p className="text-gray-600 mt-2">Rawalpindi,Bahria Town Rawalpindi</p>
    <p className='font-bold text-md'>Shops</p>
    <p>121 sqft to 467 sqft</p>
  </div>
</div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="max-w-sm mx-auto bg-white shadow-md rounded-md overflow-hidden">
  <img className="w-full h-48 object-cover rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpt6N3xzmXBcOS_i_pOenN8ijj93VpJ6F8m87wgnoZGuXxB9SV" alt="Card Image"/>
  <div>
    <h2 className="text-lg font-semibold text-gray-800">PKR 79.79 lakh to 2.4 crore box park 11,Rawalpindi</h2>
    <p className="text-gray-600 mt-2">Rawalpindi,Bahria Town Rawalpindi</p>
    <p className='font-bold text-md'>Shops</p>
    <p>121 sqft to 467 sqft</p>
  </div>
</div>
        </SwiperSlide>
      </Swiper>
      </div>
    );
  };

  export default Page;
  