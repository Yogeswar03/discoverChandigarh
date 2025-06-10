import React from 'react';

function SmCard({ image, title, text, link, texts }) {
  return (
    <div className='transition-transform duration-500 transform hover:-translate-y-3 bg-white shadow-lg/30 rounded-xl p-4 flex flex-col items-center justify-start w-full h-full '>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <img
          src={image}
          alt={title}
          className='w-full h-40 object-cover rounded-lg mb-4'
        />
      </a>
      <h2 className='font-semibold text-lg text-center uppercase'>{title}</h2>
      <p className='text-sm font-light text-zinc-500 uppercase text-center'>{texts}</p>
      <p className='text-sm font-light text-zinc-600 text-center mt-2'>{text}</p>
    </div>
  );
}

export default SmCard;
