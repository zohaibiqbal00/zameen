"use client"


import React, { useState } from 'react';

const Page: React.FC = () => {
  const [slide, setSlide] = useState<number>(0);

  return (
    <div className='bg-red-400'>
      <div className="slider-container">
        <div className="slider flex" style={{ transform: `translateX(${slide * 100}%)` }}>
          <div className="card p-4 mx-2 bg-white shadow-lg text-black">
            {/* <p>Card 1 Content</p> */}

            <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
      <img className="w-full h-48 object-cover" src="https://zameen-strapi-live.s3.eu-west-1.amazonaws.com/0_51d598366d.jpg" alt="" />
       <div className="p-4">
         <h2 className="text-xl font-semibold mb-2">PKR 1.05 Crore to 2.6 Crore Prime City Homes, Faisalabad</h2>
         <p className="text-gray-600">Faisalabad,Satiana Road</p>
         <p>House</p>
         <p>675 sqft to 1600 sqft</p>
       </div>
     </div>

          </div>

          <div className="card p-4 mx-2 bg-white shadow-lg text-black">
            {/* <p>Card 2 Content</p> */}
            <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
      <img className="w-full h-48 object-cover" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSepngnnNrz1vBSERwttBVSx9nzgPZ1jqd_uBYLxtz59jnITLgk" alt="" />
       <div className="p-4">
         <h2 className="text-xl font-semibold mb-2">PKR 1.05 Crore to 2.6 Crore Prime City Homes, Faisalabad</h2>
         <p className="text-gray-600">Faisalabad,Satiana Road</p>
         <p>House</p>
         <p>675 sqft to 1600 sqft</p>
       </div>
     </div>
          </div>

          <div className="card p-4 mx-2 bg-white shadow-lg text-black">
            {/* <p>Card 1 Content</p> */}

            <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
      <img className="w-full h-48 object-cover" src="https://images.zameen.com/w1600_h900/7/1969/business_hub_35085.jpg" alt="" />
       <div className="p-4">
         <h2 className="text-xl font-semibold mb-2">PKR 1.05 Crore to 2.6 Crore Prime City Homes, Faisalabad</h2>
         <p className="text-gray-600">Faisalabad,Satiana Road</p>
         <p>House</p>
         <p>675 sqft to 1600 sqft</p>
       </div>
     </div>
          </div>

          <div className="card p-4 mx-2 bg-white shadow-lg text-black">
            {/* <p>Card 1 Content</p> */}
            <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
      <img className="w-full h-48 object-cover" src="https://images.zameen.com/w1600_h900/7/2173/platinum_homes_dham_38695.jpg" alt="" />
       <div className="p-4">
         <h2 className="text-xl font-semibold mb-2">PKR 1.05 Crore to 2.6 Crore Prime City Homes, Faisalabad</h2>
         <p className="text-gray-600">Faisalabad,Satiana Road</p>
         <p>House</p>
         <p>675 sqft to 1600 sqft</p>
       </div>
     </div>
          </div>

          {/* <div className="card p-4 mx-2 bg-white shadow-lg text-black">
            <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
      <img className="w-full h-48 object-cover" src="https://images.zameen.com/w1600_h900/7/2360/prime_city_45115.jpg" alt="" />
       <div className="p-4">
         <h2 className="text-xl font-semibold mb-2">PKR 1.05 Crore to 2.6 Crore Prime City Homes, Faisalabad</h2>
         <p className="text-gray-600">Faisalabad,Satiana Road</p>
         <p>House</p>
         <p>675 sqft to 1600 sqft</p>
       </div>
     </div>
          </div> */}
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <button onClick={() => setSlide((prevSlide) => (prevSlide - 1 + 2) % 2)} className="px-4 py-2 bg-blue-500 text-white rounded">
          Previous
        </button>
        <button onClick={() => setSlide((prevSlide) => (prevSlide + 1) % 2)} className="px-4 py-2 bg-blue-500 text-white rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default Page;


