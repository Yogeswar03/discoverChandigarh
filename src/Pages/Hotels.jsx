import React from 'react';
import HotelCard from '../components/HotelCard';
import { motion } from 'framer-motion';

function Hotels() {
  const luxuryHotels = [
    {
      title: 'The Lalit Chandigarh',
      image: 'images/lalit.png',
      link: 'https://www.thelalit.com/the-lalit-chandigarh/suites-and-rooms/?srsltid=AfmBOooxT5JKYPBTTHP6P1NJSk5_nnc7dXOMlUtXMxvKwGCVjaiN3Dfh',
      description: 'The Lalit Chandigarh is a contemporary luxury hotel that brings elegance and comfort to the heart of the City Beautiful. Known for its warm hospitality and refined design, this upscale property offers spacious, well-appointed rooms and suites with modern amenities.',
    },
    {
      title: 'JW Mariott Hotel Chandigarh',
      image: 'images/marriot.jpg',
      link: 'https://www.marriott.com/en-us/hotels/ixcjw-jw-marriott-hotel-chandigarh/overview/',
      description: 'JW Marriott is a contemporary 5-star hotel located in Sector 35’s business district, just minutes from the airport and Rock Garden.',
    },
    {
      title: 'Hyatt Regency Chandigarh',
      image: 'images/hyatt.png',
      link: 'https://www.hyatt.com/hyatt-regency/en-US/ixchr-hyatt-regency-chandigarh',
      description: 'Hyatt Regency is situated next to Elante Mall, offering excellent connectivity to shopping, dining, and major city attractions.',
    },
    {
      title: 'Taj Chandigarh',
      image: 'images/taj.png',
      link: 'https://www.tajhotels.com/en-in/hotels/taj-chandigarh',
      description: 'Taj Chandigarh encapsulates modern elegance and heartfelt hospitality in the heart of the city’s vibrant business and shopping district.',
    },
    {
      title: 'Novotel Chandigarh ',
      image: 'images/novotel.jpg',
      link: 'https://all.accor.com/hotel/B7I3/index.en.shtml',
      description: 'Located at Chandigarh’s industrial hub, Novotel offers a modern stay with 120 well-appointed rooms, spacious banquet spaces.',
    },
    {
      title: 'Raddison Hotel',
      image: 'images/raddison.png',
      link: 'https://www.radissonhotels.com/en-us/hotels/radisson-chandigarh-zirakpur',
      description: 'Located just outside Chandigarh in Zirakpur, the Radisson provides easy access to the airport and local attractions.',
    },
    {
      title: 'The Oberoi Sukhvilas Spa Resort',
      image: 'images/oberoi.png',
      link: 'https://www.oberoihotels.com/hotels-in-chandigarh-sukhvilas-resort/',
      description: 'Just outside the main city, this luxury resort is set amid scenic landscape. While not in Chandigarh proper, it receives glowing reviews for its exceptional dining and upscale spa treatments.',
    },
  ];

  return (
    <div id='hotels' className='w-full min-h-screen mt-[10vw] px-4 sm:px-6 md:px-10 font-[Neue_Montreal]'>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='text-center'
      >
        <h1 className='font-bold text-4xl sm:text-5xl uppercase'>Luxurious Hotels of Chandigarh</h1>
        <p className='font-light text-lg sm:text-xl text-zinc-400 mt-6'>
          Chandigarh boasts a range of luxurious hotels that blend elegance with top-notch hospitality. From five-star properties like JW Marriott, Hyatt Regency, and Taj Chandigarh to premium boutique stays, these hotels offer world-class amenities, fine dining, and serene ambiance—perfect for travelers seeking comfort, style, and convenience in the City Beautiful.
        </p>
      </motion.div>

      <motion.div
        className='mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3'
        initial='hidden'
        whileInView='visible'
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        {luxuryHotels.map((hotel, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HotelCard
              title={hotel.title}
              image={hotel.image}
              description={hotel.description}
              link={hotel.link}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Hotels;
