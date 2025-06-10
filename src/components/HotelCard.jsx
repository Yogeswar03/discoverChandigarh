import React from 'react'
import { motion } from 'framer-motion'

function HotelCard({ image, title, link, description }) {
  return (
    <motion.div
      className='w-full max-w-sm rounded-xl overflow-hidden shadow-md bg-white hover:shadow-xl transition duration-300'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <img src={image} alt={title} className='w-full h-56 object-cover' />
      </a>
      <div className='p-4 font-[Neue_Montreal]'>
        <h2 className='font-semibold text-lg text-blue-600'>{title}</h2>
        <div className='text-yellow-500 mb-1'>⭐⭐⭐⭐⭐</div>
        <p className='text-xs text-zinc-500 uppercase mb-2'>
          Click on image for booking
        </p>
        <p className='text-sm text-gray-600'>{description}</p>
      </div>
    </motion.div>
  )
}

export default HotelCard
