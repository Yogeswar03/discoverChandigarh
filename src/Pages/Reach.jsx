import React from 'react';
import Card from '../components/Card';
import SmCard from '../components/SmCard';
import { motion } from 'framer-motion';

function Reach() {
  const travelModes = [
    {
      title: 'By Airlines',
      image: '/images/air.jpg',
      text: 'Chandigarh International Airport connects the city to major destinations like Delhi, Mumbai, and Bangalore. With regular domestic and a few international flights, flying in is swift and convenient.',
      link: 'https://www.google.com/travel/flights?tfs=CBwQARoXagwIAhIIL20vMDljNndyBwgBEgNJWEMaF2oHCAESA0lYQ3IMCAISCC9tLzA5YzZ3QAFIAXABggELCP___________wGYAQE&tfu=KgIIAw',
    },
    {
      title: 'By Railway',
      image: '/images/rail.png',
      text: 'The Chandigarh Railway Station is well-linked with key cities such as Delhi, Amritsar, and Jaipur. Superfast and express trains make rail travel smooth and affordable.',
      link: 'https://www.irctc.co.in/nget/train-search',
    },
    {
      title: 'By Road',
      image: '/images/road.png',
      text: 'Chandigarh is easily accessible by road, thanks to a well-maintained network of highways. Luxury buses, cabs, and private vehicles regularly operate from cities like Delhi, Shimla, and Manali.',
      link: 'https://www.makemytrip.com/bus-tickets/chandigarh-city-online-booking.html',
    },
  ];

  return (
    <div id="reach" className="relative w-full min-h-screen px-6 py-20 bg-white font-['Neue_Montreal']">
      
      <motion.div
        className="max-w-4xl mx-auto mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card
          heading="How to Reach Chandigarh"
          description="Chandigarh is well-connected by air, rail, and road. The Chandigarh International Airport offers flights from major cities like Delhi and Mumbai. Trains from Delhi, Amritsar, and other key locations stop at Chandigarh Railway Station. By road, the city is easily accessible via national highways, with frequent bus services and smooth routes for private vehicles."
        />
      </motion.div>

     
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {travelModes.map((mode, index) => (
          <SmCard
            key={index}
            title={mode.title}
            texts="Click on image for booking"
            text={mode.text}
            image={mode.image}
            link={mode.link}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Reach;
