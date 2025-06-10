import React from 'react'

function PlaceCard({ name , image , category }) {
  return (
    <div className='p-4 rounded-lg  shadow-sm hover:shadow-lg transition font-[Neue_Montreal] flex items-center justify-center flex-col m-[20px]'>
        <img src={image} alt={name} className='h-48 w-full object-cover rounded ' />
        <h2 className='text-xl font-semibold'>{name}</h2>
        <p className='text-sm text-gray-500 font-light'>{category}</p>

    </div>
  )
}

export default PlaceCard