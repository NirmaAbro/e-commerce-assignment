// import React, { useState } from "react";
// import bg3 from "../images/bg3.jpg";
// // import img2 from "../images/bg5.jpg";
// import img3 from "../images/bg6.jpg";  
// import img4 from "../images/bg7.jpg";

// const ImageSlider = () => {
//   console.log("image slider",bg3);
//   const images = [
//    bg3 ,img3,img4
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="relative w-full max-w-lg mx-auto mt-10">

//       {/* Slider Container */}
//       <div className="overflow-hidden rounded-lg w-full ">
//         <img
//           src={images[currentIndex]}
//           alt={`Slide ${currentIndex + 1}`}
//           className=" transition-transform duration-500 w-full h-auto rounded-xl"
//         />
//       </div>

//       {/* Previous Button */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
//       >
//         ❮
//       </button>

//       {/* Next Button */}
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
//       >
//         ❯
//       </button>

//       {/* Dots Navigation */}
//       <div className="flex justify-center mt-4 space-x-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full ${
//               index === currentIndex
//                 ? "bg-gray-800"
//                 : "bg-gray-400 hover:bg-gray-600"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;



import React, { useState } from "react";
import bg3 from "../images/bg3.jpg";
import img2 from "../images/bg5.jpg";
import img3 from "../images/bg6.jpg";
import img4 from "../images/bg7.jpg";

const ImageSlider = () => {
  console.log("image slider", bg3);
  const images = [bg3, img3, img4];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10 px-4">
      {/* Header Section */}
      <div className="text-center mb-8  pt-32 ">
        <h1 className=" md:text-3xl pt-10 mt-5 whitespace-nowrap lg:text-6xl font-bold text-gray-800">Welcome to ShopLux</h1>
        <p className="text-gray-600 mt-2 text-3xl ">
          Discover a wide range of premium products curated just for you. Shop
          the best deals, enjoy seamless browsing, and experience the ultimate
          in online shopping.
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="transition-transform duration-500 w-full h-auto rounded-xl"
          />
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
        >
          ❮
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
        >
          ❯
        </button>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex
                  ? "bg-gray-800"
                  : "bg-gray-400 hover:bg-gray-600"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;

