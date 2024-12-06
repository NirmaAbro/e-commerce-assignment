import React from "react";
import bg2 from "../images/bg1.jpg";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";

function SectionTwo() {
  return (
    <div className="flex justify-center items-center mt-20">
      {/* Image Section */}
      <div className="w-1/2 mt-20">
        <img
          className="justify-center items-center m-auto md:w-1/2 md:h-1/2 w-36 h-36 rounded-xl"
          src={bg2}
          alt="Featured Product"
        />
      </div>

      {/* Content Section */}
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="w-full mt-28">
          <h1 className="md:text-5xl text-2xl font-sans text-left font-bold mb-4">
            Shop Smart,
            <span className="text-yellow-800 justify-start items-start">
              Live Better
            </span>
          </h1>
          <h6 className="md:text-2xl font-semibold mb-2 text-sm">
            Premium Quality ,  Affordable Prices ,  Tailored Just for You
          </h6>
        </div>

        <p className="md:text-xl  text-xs mb-2 ">
          Discover a wide range of products that combine quality and value. 
          Shop from top brands and exclusive collections for all your needs.
        </p>
        <p className="md:text-xl text-xs mb-2 ">
          From everyday essentials to premium items, find everything in one 
          place. Experience hassle-free shopping tailored to your lifestyle.
        </p>
        <div className="flex w-full m-4 ">
          <TiTick className="bg-yellow-500 text-white m-2 text-xl rounded-full" />
          <p className="p-1 text-2xl ">
            <span className="font-bold p-1">50,000+</span> Products Available{" "}
          </p>
        </div>
        <div className="w-full">
        <button className="explore-clothing_btn">
        <Link to="explore/all">Discover Our Products</Link>
      </button>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
