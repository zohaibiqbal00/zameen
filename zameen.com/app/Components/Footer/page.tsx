// components/Footer.js

import React from 'react';
import {BiLocationPlus, BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter, BiLogoYoutube, BiMailSend, BiPhone} from 'react-icons/bi'

const page = () => {
  return (
    <>
    <div>
        <h3>Our Home Partners</h3>
        <img src="https://www.zameen.com/assets/iconHbfcBank_noinline.e38973a19243c9020ae8b0970c382322.svg" alt="" />

    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-4">Company</h2>
          <ul>
            <li><a href="#" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
            <li><a href="#" className="hover:text-gray-300">Jobs</a></li>
            <li><a href="#" className="hover:text-gray-300">Help & Support</a></li>
            <li><a href="#" className="hover:text-gray-300">Advertise On Zameen</a></li>
            <li><a href="#" className="hover:text-gray-300">Terms Of Use</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-4">Connect</h2>
          <ul>
            <li><a href="#" className="hover:text-gray-300">Blog</a></li>
            <li><a href="#" className="hover:text-gray-300">News</a></li>
            <li><a href="#" className="hover:text-gray-300">Forum</a></li>
            <li><a href="#" className="hover:text-gray-300">Expo</a></li>
            <li><a href="#" className="hover:text-gray-300">Real Estate Agents</a></li>
            <li><a href="#" className="hover:text-gray-300">Add Property</a></li>

          </ul>
        </div>

        {/* Column 3 */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-4">Head Office</h2>
          <ul>
            <li className="hover:text-gray-300"><BiLocationPlus/>Pearl One, 94-B/I, MM Alam Road,
            Gulberg III, Lahore, Pakistan</li>
            <li className="hover:text-gray-300"><BiPhone/>0800-ZAMEEN (92633) Monday To Sunday 9AM To 6PM</li>
            <li className="hover:text-gray-300"><BiMailSend/>Email Us</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-4">Roshan Digital Account</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <BiLogoFacebook/>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <BiLogoInstagram/>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <BiLogoYoutube/>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <BiLogoTwitter/>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <BiLogoLinkedin/>
            </a>
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
      <div className="mt-8 text-center">
        <p>&copy; © Copyright 2007 - 2024 Zameen.com. All Rights Reserved
</p>
      </div>
    </footer>
    </div>
    </>
  );
};

export default page;
