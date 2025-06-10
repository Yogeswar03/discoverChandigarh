import React from 'react';

function Gallery({ setCurrentPage }) {
  const goBack = () => {
    setCurrentPage('home');
  
  };

  return (
    <div className="min-h-screen bg-black text-white p-10 font-[Neue_Montreal]">
      <button
        onClick={goBack}
        className="mb-8 px-4 py-2  text-white border-1  rounded-full hover:bg-gray-600 transition"
      >
        ← Back to Home
      </button>
     <div className='font-bold flex items-center justify-center mb-7 uppercase'>
      <h1 className="text-5xl mb-6 ">Visual Dairies</h1>
     </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <img src="gallery/chandigarh.jpg" alt="..." className="w-full h-auto" />
        <img src="gallery/img8.jpg" alt="..." className="w-full h-auto" />
        <img src="gallery/img3.jpg" alt="..." className="w-full h-auto" />
        <img src="gallery/img4.jpg" alt="..." className="w-full h-auto" />
        <img src="gallery/img5.jpg" alt="..." className="w-full h-auto" />
        <img src="gallery/img6.jpg" alt="..." className="w-full h-auto" />
        <img src="gallery/img7.jpg" alt="..." className="w-full h-auto" />
        <img src="gallery/img9.jpg" alt="..." className="w-full h-auto" />
        <img src="gallery/img2.jpg" alt="..." className="w-full h-auto" />
        

       
      </div>
    </div>
  );
}

export default Gallery;
