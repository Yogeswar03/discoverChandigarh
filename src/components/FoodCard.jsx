import React from 'react'

function FoodCard({ name , image , speciality ,location, ratings}) {
  return (
    <div>
        <div className=" rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={name} className="w-full h-50 p-3 rounded-[1.5vw] object-cover" />
      <div className="p-4 bg-white">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-gray-600 mb-2">{speciality}</p>
        <p className='text-gray-500 mb-2'>📍 {location}</p>
        <div className="flex items-center">
          <span className="text-yellow-500 mr-2">⭐ {ratings}</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default FoodCard