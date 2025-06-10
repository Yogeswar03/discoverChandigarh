import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-[10vw] font-[Neue_Montreal]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
    
        <div>
            <img src='chandigarh_logo.png' className='h-[10vw] w-[10vw]'/>
          <h2 className="text-2xl font-bold mb-4">Discover Chandigarh</h2>
          <p className="text-sm text-gray-400">
            Explore the beauty, culture, and charm of Chandigarh — the City Beautiful.
          </p>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#hotels" className="hover:text-white transition">Hotels</a></li>
            <li><a href="#places" className="hover:text-white transition">Places</a></li>
            <li><a href="#reach" className="hover:text-white transition">How to Reach</a></li>
            <li><a href="#food" className="hover:text-white transition">Food</a></li>
            <li><a href="#gallery" target='_blank' className="hover:text-white transition">Gallery</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
          <div className="flex gap-4">
            <a href="https://instagram.com/yogeswar_reddy_25" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400"><FaInstagram size={20} /></a>
            <a href="https://facebook.com/yogeswar_reddy_25" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaFacebookF size={20} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400"><FaTwitter size={20} /></a>
            <a href="https://linkedin.com/in/yogeswar-reddy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300"><FaLinkedinIn size={20} /></a>
          </div>
        </div>
         <div>
          <h3 className="text-lg font-semibold mb-4">Join Our Newsletter</h3>
          <p className="text-sm text-gray-400 mb-2">Stay updated with the latest from Chandigarh.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-md text-black w-full sm:w-auto text-white"
            />
            <button
              type="submit"
              className="bg-[#457b9d] hover:bg-[#356d8c] text-white px-4 py-2 rounded-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}. All rights reserved. This website is developed by <span className=' text-md text-white'>Yogeswar</span>.
      </div>
    </footer>
  );
}

export default Footer;
