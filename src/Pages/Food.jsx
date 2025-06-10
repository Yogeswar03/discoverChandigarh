import React, { useState } from 'react';
import FoodCard from '../components/FoodCard';
import food from '../data/FoodData';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Street Food', 'Dhabas', 'Cafes', 'Fine Dine'];

function Food() {
  const [FoodCategory, setFoodCategory] = useState('All');

  const filteredFood =
    FoodCategory === 'All'
      ? food
      : food.filter((Food) => Food.category === FoodCategory);

  return (
    <div
      id='food'
      className='relative w-full min-h-screen pt-[10vh] pb-16 px-4 sm:px-8 font-["Neue_Montreal"]'
    >
      {/* Heading */}
      <div className='flex flex-col items-center text-center mb-10'>
        <h1 className='uppercase text-3xl sm:text-4xl md:text-5xl font-semibold mb-2'>
          From Street to Feast in Chandigarh
        </h1>
        <p className='text-gray-400 uppercase text-lg sm:text-xl'>
          A Foodie's Starter Guide
        </p>
      </div>

      {/* Categories */}
      <div>
        <ul className='flex flex-wrap justify-center gap-4 sm:gap-6 mb-12'>
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => setFoodCategory(cat)}
              className={`cursor-pointer uppercase font-semibold text-sm sm:text-base md:text-lg hover:text-[#457b9d] transition duration-300 ${
                FoodCategory === cat ? 'text-[#457b9d]' : 'text-zinc-600'
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      {/* Cards Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        <AnimatePresence mode='wait'>
          {filteredFood.map(({ id, name, image, location, speciality, ratings }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <FoodCard
                name={name}
                image={image}
                location={location}
                speciality={speciality}
                ratings={ratings}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Food;
