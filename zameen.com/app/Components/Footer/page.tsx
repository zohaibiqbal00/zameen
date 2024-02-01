// components/Footer.js

import React from 'react';
import {BiLocationPlus, BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter, BiLogoYoutube, BiMailSend, BiPhone} from 'react-icons/bi'

const page = () => {
    return (
        <>
    <div className='bg-[rgb(240,240,240)] text-black w-[100%]'>
        <div className='px-20 py-10'>

        <h2 className='text-xl font-bold'>Our Home Partners</h2>
        <img className='mt-3' src="https://www.zameen.com/assets/iconHbfcBank_noinline.e38973a19243c9020ae8b0970c382322.svg" alt="" />
        </div>
    <footer  className="bg-[rgb(31,31,31)] text-[rgb(189,189,189)] w-[100%] p-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-4">Company</h2>
          <ul>
            <li className="hover:text-white cursor-pointer mt-2 ">About Us</li>
            <li className="hover:text-white cursor-pointer mt-2">Contact Us</li>
            <li className="hover:text-white cursor-pointer mt-2">Jobs</li>
            <li className="hover:text-white cursor-pointer mt-2">Help & Support</li>
            <li className="hover:text-white cursor-pointer mt-2">Advertise On Zameen</li>
            <li className="hover:text-white cursor-pointer mt-2">Terms Of Use</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-4">Connect</h2>
          
            <p className="hover:text-white cursor-pointer mt-2">Blog</p>
            <p className="hover:text-white cursor-pointer mt-2">News</p>
            <p className="hover:text-white cursor-pointer mt-2">Forum</p>
            <p className="hover:text-white cursor-pointer mt-2">Expo</p>
            <p className="hover:text-white cursor-pointer mt-2">Real Estate Agents</p>
            <p className="hover:text-white cursor-pointer mt-2">Add Property</p>

          
        </div>

        {/* Column 3 */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-4">Head Office</h2>
            <div className="hover:text-white mt-2 flex gap-2"><BiLocationPlus className="text-3xl"/>Pearl One, 94-B/I, MM Alam Road,Gulberg III, Lahore, Pakistan</div>
            <div className="hover:text-white mt-2 gap-2 flex"><BiPhone className="text-3xl"/>0800-ZAMEEN (92633) Monday To Sunday 9AM To 6PM</div>
            <div className="hover:text-white mt-2 flex gap-2"><BiMailSend className="text-xl"/>Email Us</div>
            
        </div>

        {/* Column 4 */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-4">Roshan Digital Account</h2>
          <div className='flex gap-3'><img src="https://www.zameen.com/assets/roshanDigitalAccount_noinline.c8687f407684f582de7829168747c163.svg" alt="" />
          <p className='text-xs'>ROSHAN <br/> DIGITAL <br/> ACCOUNT</p></div>
          <h2 className="text-lg font-semibold mb-4 mt-2">Get Connected</h2>

          <div className="flex space-x-4">
              <BiLogoFacebook className="text-blue-600 hover:text-blue-800 text-2xl"/>
            
              <BiLogoInstagram className="text-pink-600 hover:text-pink-800 text-2xl"/>

              <BiLogoLinkedin className="text-blue-600 hover:text-blue-800 text-2xl"/>

              <BiLogoYoutube className="text-red-600 hover:text-red-800 text-2xl"/>
              <BiLogoTwitter className="text-blue-600 hover:text-blue-800 text-2xl"/>
            
            {/* Add more social media icons as needed */}
          </div>
        </div>
      </div>

      {/* Company Mission */}
      {/* <div className="mt-8 text-center">
        <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
    </div> */}

      {/* Copyright */}
      <div className="mt-8 text-grey-700">
        <p>&copy; Copyright 2007 - 2024 Zameen.com. All Rights Reserved
</p>
      </div>
    </footer>
    </div>
    </>
  );
};

export default page;
