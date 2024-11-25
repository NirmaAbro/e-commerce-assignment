import React from "react";
// import img from "../images/cover.jpg";
import img from "../../images/bg3.jpg";

function Feedback() {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-white text-3xl lg:text-5xl font-bold mb-4">
          We Value Your Feedback
        </h1>
        <h6 className="text-white text-lg lg:text-2xl font-semibold">
          We'd love to hear from you! Share your feedback on how our AI-powered
          Diet Plan Recommendation Engine has helped you.
        </h6>
      </div>
    </div>
  );
}

export default Feedback;
