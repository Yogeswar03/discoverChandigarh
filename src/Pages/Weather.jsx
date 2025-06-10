import React from 'react'
import Card from '../components/Card'
import SmCard from '../components/SmCard'

function Weather() {
  const weatheConditions = [
    {
      title: 'Summer',
      image: '/images/summer.jpg',
      text: 'Chandigarh experiences hot summers with temperatures ranging between 25°C to 44°C. May and June are typically the hottest months, with dry winds and clear skies.',
    },
    {
      title: 'Rainy',
      image: '/images/rainy.jpg',
      text: 'The city receives moderate to heavy rainfall during the monsoon season. Temperatures range from 24°C to 35°C, and the humidity levels rise significantly.',
    },
    {
      title: 'Winter',
      image: '/images/winter.png',
      text: 'Chandigarh has cold winters with temperatures dipping as low as 5°C to 20°C. December and January are the coldest months, sometimes accompanied by foggy mornings.',
    },
  ]

  return (
    <div id='weather' className='w-full min-h-screen px-4 sm:px-10 mt-[10vh] font-[Neue_Montreal]'>
      <Card 
        heading='Chandigarh Climate in a Nutshell'
        description='Chandigarh basks in a colorful palette of seasons that paint the city’s vibe all year round. Summers turn up the heat with soaring temperatures, inviting you to soak in the sunshine. The monsoon breathes life into the city’s greenery, draping everything in refreshing showers. Winters bring a cool, calm hush, perfect for cozy evenings under clear skies.'
      />

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 place-items-center'>
        {weatheConditions.map((condition, index) => (
          <SmCard  
            key={index}
            title={condition.title}
            image={condition.image}
            text={condition.text}
          />
        ))}
      </div>
    </div>
  )
}

export default Weather
