import React from 'react';

function Card({ heading, description }) {
  return (
    <div className='px-4 sm:px-8 md:px-16 py-10 w-full'>
      <div className='w-full bg-zinc-700 rounded-lg shadow-md font-["Neue_Montreal"] text-center p-6 sm:p-10 md:p-16'>
        <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-zinc-100 mb-4'>
          {heading}
        </h1>
        <p className='text-zinc-400 text-base sm:text-lg md:text-xl font-light leading-relaxed'>
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
