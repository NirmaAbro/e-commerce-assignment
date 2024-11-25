import React, { useState, useEffect } from "react";
import img2 from "../../images/bg5.jpg";
import img3 from "../../images/bg6.jpg";
// import img4 from "../images/bg6.jpg";
import img4 from "../../images/bg7.jpg";
import "./HomeInfo.css";
import { Link } from "react-router-dom";

function HeroSection() {
  // Array of background images
  const images = [img2, img3, img4];

  // State to keep track of the current background image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Function to cycle through images
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      {/* <div className=" bg-black bg-opacity-50 rounded-lg  p-8 ">
        <h1 className="text-2xl md:text-4xl m-auto text-white  justify-center items-center text-center my-3 font-bold  font-sans">
          Your one-stop shop for everything you love,
          <span className="text-yellow-800"> just a click away!</span>
        </h1>
        <p className=" text-base md:text-2xl m-auto text-white justify-center items-center text-center font-bold  font-sans">
          Find everything you love, all in one place with fast, secure shopping
        </p>
      </div> */}

      <div className="info-txt  w-1/2 p-2 m-4 justify-center items-center text-center ">
        <h2>
          Experience the height of fashion with our exquisite designer pieces.
        </h2>
        <p>
          Where style, sophistication, exclusivity is the forefront of our
          collection. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellat quaerat nostrum quia nam earum, libero, expedita impedit
          delectus provident quo eveniet.
        </p>
      </div>
      <button className="explore-clothing_btn">
        <Link to="explore/all">Discover Our Products</Link>
      </button>


    </div>
  );
}

export default HeroSection;
