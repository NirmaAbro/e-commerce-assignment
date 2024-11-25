// import React, { useState } from 'react';
// import image1 from '../images/bg6.jpg';
// import image2 from '../images/bg6.jpg';
// import image3 from '../images/bg4.jpg';

// const ImageSlider = () => {
//   const images = [image1, image2, image3];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((currentIndex === 0 ? images.length - 1 : currentIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((currentIndex === images.length - 1 ? 0 : currentIndex + 1));
//   };

//   return (
//     <div className="relative w-full max-w-lg mx-auto overflow-hidden">
//       {/* Slider Image */}
//       <div className="w-full">
//         <img
//           src={images[currentIndex]}
//           alt={`Slide ${currentIndex}`}
//           className="w-full h-64 object-cover rounded-lg shadow-lg"
//         />
//       </div>

//       {/* Previous Button */}
//       <button
//         onClick={handlePrev}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 focus:outline-none"
//       >
//         &#8592;
//       </button>

//       {/* Next Button */}
//       <button
//         onClick={handleNext}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 focus:outline-none"
//       >
//         &#8594;
//       </button>
//     </div>
//   );
// };

// export default ImageSlider;


import React from 'react'

function ImageSlider() {
  return (
    <div className=' border-4 border-black '>
      <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      {/* Vision Section */}
      
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-blue-600">Our Vision</h2>
        <p className="mt-2 text-gray-700">
          To be a global leader in providing innovative solutions that transform industries and improve lives.
        </p>
      </div>

      {/* Mission Section */}
      <div>
        <h2 className="text-2xl font-bold text-blue-600">Our Mission</h2>
        <p className="mt-2 text-gray-700">
          To deliver exceptional value to our customers through cutting-edge technology, commitment to quality, and dedication to service.
        </p>
      </div>
    </div>


    </div>
  )
}

export default ImageSlider

