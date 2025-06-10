import React, { useState } from 'react';
import PlaceCard from '../components/PlaceCard';
import place from '../data/placesData';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Historical Places', 'Parks & Lakes', 'Malls', 'Day Trips', 'Street Shopping'];

function Places() {
  const [SelectedCategory, setSelectedCategory] = useState('All');

  const filteredPlaces =
    SelectedCategory === 'All' ? place : place.filter((p) => p.category === SelectedCategory);

  return (
    <div id='places' className='min-h-screen w-full text-black pt-[10vh] font-["Neue_Montreal"] bg-white'>
      <div className='text-center mt-12 px-4'>
        <motion.h1
          className='font-semibold text-[5vh]'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get Ready, to fall in love with Chandigarh
        </motion.h1>
        <motion.p
          className='font-light text-xl mt-2'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Explore The City Beautiful
        </motion.p>
      </div>

      {/* Category Tabs */}
      <div className='flex flex-wrap justify-center gap-4 mt-10 px-4'>
        {categories.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => setSelectedCategory(item)}
            className={`cursor-pointer px-4 py-2 rounded-full border text-sm md:text-base ${
              SelectedCategory === item
                ? 'bg-[#457b9d] text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            whileTap={{ scale: 0.95 }}
          >
            {item}
          </motion.div>
        ))}
      </div>

      {/* Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8'>
        <AnimatePresence mode='wait'>
          {filteredPlaces.map((place) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <PlaceCard
                name={place.name}
                image={place.image}
                category={place.category}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </div>
  );
}

export default Places;
