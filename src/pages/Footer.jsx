import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { LuShirt } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const Footer = () => {
  // Define URLs for each social media platform
  const facebookUrl = "https://www.facebook.com/profile.php?id=100075848754894";
  const instagramUrl = "https://www.instagram.com/nirma_abro143/?hl=en";
  const linkedinUrl = "https://www.linkedin.com/in/nirma-abro-85a885230/";
  const twitterUrl = "https://www.twitter.com/yourprofile";

  return (
    <footer className="bg-yellow-500 text-black py-5 pb-0 pt-5 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <LuShirt className="text-6xl lg:text-8xl  rounded-full p-1" />
            <h2 className="text-lg font-bold mt-4">Connect With Us</h2>
            <div className="flex mt-2 space-x-4">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="bg-yellow-600 text-2xl"
                />
              </a>
              <a
                href={facebookUrl}
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="bg-yellow-500 text-2xl"
                />
              </a>
              <a
                href={linkedinUrl}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="bg-yellow-500 text-2xl"
                />
              </a>
              <a
                href={twitterUrl}
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="bg-yellow-500 text-2xl"
                />
              </a>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h2 className="text-lg font-bold">Services</h2>
            <ul className="mt-4 space-y-2">
              <li>Shipping Information</li>
              <li>Returns & Refunds</li>
              <li>FAQs</li>
              <li>Track Your Order</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 cursor-pointer ">
            <h2 className="text-lg font-bold">Pages</h2>
            <NavLink to="/" className="text-base font-sans block mt-4 ">
              Home
            </NavLink>
            <NavLink to="/aboutus" className="text-base font-sans block mt-2 ">
              About Us
            </NavLink>
            <NavLink to="/feedback" className="text-base font-sans block mt-2 ">
              Feedback
            </NavLink>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h2 className="text-lg font-bold">Contact Information</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-2 bg-yellow-500  text-xl"
                />
                nirmaabro143@gmail.com
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mr-2 bg-yellow-500  text-xl"
                />
                +1234567890
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mr-2 bg-yellow-500 text-xl"
                />
                Hyderabad,Pakistan
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-white text-sm bg-black w-full py-5">
        Copyright © 2024 Your Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
