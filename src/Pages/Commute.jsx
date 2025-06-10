import React from 'react';
import Card from '../components/Card';
import { motion } from 'framer-motion';

const transportModes = [
  {
    title: 'Public Buses',
    image: '/images/ctu.jpg',
    link: 'https://chdctu.gov.in/time-table',
    description:
      'CTU (Chandigarh Transport Undertaking) runs city buses that connect major sectors and surrounding areas. AC and non-AC options are available. Economical and frequent.',
  },
  {
    title: 'Taxi & Autorickshaws',
    image: '/images/ola.png',
    link: 'https://www.uber.com/in/en/r/cities/taxi/chandigarh-chandigarh-in/',
    description:
      'Readily available for short distances. Ola, Uber, and Rapido services operate widely in the city. Fares are usually meter-based or negotiated.',
  },
  {
    title: 'Bikes & Bicycles',
    image: '/images/smartbike.png',
    link: 'https://smartbikemobility.com/chandigarh/',
    description:
      'Public bike-sharing systems like SmartBike are available at multiple docking stations. Great for short commutes and eco-friendly travel.',
  },
  {
    title: 'Walkable Sectors',
    image: '/images/wlak.png',
    link: 'https://www.google.com/maps',
    description:
      'Chandigarh’s planned layout makes it easy to walk between parks, shops, and landmarks. Wide footpaths and green belts enhance pedestrian experience.',
  },
];

function Commute() {
  return (
    <div
      id='commute'
      className='w-full min-h-screen pt-[8vh] px-4 sm:px-10 font-[Neue_Montreal]'
    >
      <Card
        heading='Local Commute in Chandigarh'
        description='The primary mode of public transport in Chandigarh is the CTU, which operates urban and suburban routes. They offer a convenient and affordable way to travel within the city and its surrounding areas. Besides buses, auto-rickshaws, cycle rickshaws, and taxis are available for local transportation.'
      />

      {/* Cards Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-[-8vw] mb-16'>
        {transportModes.map((mode, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center'
          >
            <a href={mode.link} target='_blank' rel='noopener noreferrer'>
              <img
                src={mode.image}
                alt={mode.title}
                className='h-[10vw] w-[10vw] object-contain rounded-xl mb-2'
              />
            </a>
            <h3 className='font-semibold text-lg uppercase mb-1'>{mode.title}</h3>
            <p className='text-xs text-zinc-400 uppercase mb-2'>
              Click on image for routes
            </p>
            <p className='text-xs text-zinc-500'>{mode.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Commute;
