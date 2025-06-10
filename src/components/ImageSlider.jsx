import React, { useEffect, useState } from 'react';

const images = [
  '/hand_ixc.jpg',
  '/images/rock.jpg',
  '/images/Sukhna-Lake.jpg',
  '/images/japanese.jpg',
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden rounded-xl shadow-lg">
      <img
        src={images[currentIndex]}
        alt="Chandigarh View"
        className="w-full h-full object-cover  duration-700 ease-in-out"
      />
    </div>
  );
}

export default ImageSlider;
