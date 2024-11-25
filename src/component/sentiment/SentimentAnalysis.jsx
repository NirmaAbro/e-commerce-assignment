import React, { useState } from "react";
import Sentiment from "sentiment";
import StarRatings from "react-stars";
import { MdSend } from "react-icons/md";

const sentimentScores = {
  "Very Negative": -5,
  "Extremely Negative": -5,
  Negative: -3,
  Bad: -2,
  "Very Bad": -3,
  Horrible: -5,
  Terrible: -5,
  Awful: -5,
  Badly: -2,
  Terribly: -2,
  Neutral: 0,
  Good: 2,
  "Very Good": 3,
  Okay: 2,
  Positive: 4,
  Excellent: 4,
  Marvelous: 5,
  Awesome: 5,
  "Extremely Positive": 5,
};

const SentimentAnalysis = () => {
  const [feedback, setFeedback] = useState("");
  const [sentimentScore, setSentimentScore] = useState(null);
  const [sentimentLabel, setSentimentLabel] = useState("");
  const [rating, setRating] = useState(0);

  const analyzeSentiment = () => {
    const sentiment = new Sentiment();
    const result = sentiment.analyze(feedback);

    setSentimentScore(result.score);

    let label = "Neutral";
    if (result.score >= 5) {
      label = "Marvelous";
    } else if (result.score >= 4) {
      label = "Excellent";
    } else if (result.score >= 3) {
      label = "Very Good";
    } else if (result.score >= 2) {
      label = "Good";
    } else if (result.score >= 0) {
      label = "Neutral";
    } else if (result.score >= -2) {
      label = "Bad";
    } else {
      label = "Negative";
    }

    setSentimentLabel(label);
    setRating(sentimentScores[label]);
  };

  return (
    <div className=" bg-slate-600">
      <div className="min-h-screen flex items-center w-full justify-center bg-gray-100">
        <div className="bg-white   px-9 py-9  shadow-md rounded-lg p-8  w-1/2 ">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Feedback Sentiment Analysis
          </h2>
          <div className=" ">
            <textarea
              className="w-full  p-9  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Enter your feedback"
              rows="4"
            />
            <button
              onClick={analyzeSentiment}
              className="w-full bg-yellow-700 text-white px-4 py-2 mt-4 rounded-lg hover:bg-black transition-colors flex items-center justify-center"
            >
              <MdSend className="mr-2" /> Analyze
            </button>
          </div>

          {sentimentScore !== null && (
            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold">
                Sentiment Score:{" "}
                <span className="text-black">{sentimentScore}</span>
              </h3>
              <h3 className="text-xl font-semibold">
                Sentiment Label:{" "}
                <span className="text-black">{sentimentLabel}</span>
              </h3>
              <StarRatings
                count={5}
                value={rating}
                size={24}
                edit={false}
                color2={"#ffd700"}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SentimentAnalysis;
