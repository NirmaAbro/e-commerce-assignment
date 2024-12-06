import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Success = () => {
  const [message, setMessage] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Here, we can check if Stripe passed any session information or success data
    const queryParams = new URLSearchParams(location.search);
    const sessionId = queryParams.get("session_id");

    if (sessionId) {
      // If session_id exists, you can call an API to check the payment status (optional)
      fetch(`http://localhost:8080/api/check-payment-status/${sessionId}`)
        .then((response) => response.json())
        .then((data) => {
          setMessage(data.message || "Payment successful!");
        })
        .catch((error) => {
          setMessage("Something went wrong. Please try again.");
        });
    } else {
      setMessage("Payment successful!");
    }
  }, [location]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-beige-100 text-center py-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow-lg">
        <h1 className="text-2xl font-semibold text-yellow-800">Payment Successful!</h1>
        <p className="mt-4 text-xl text-yellow-800">{message}</p>
        <div className="mt-8">
          <a
            href="/"
            className="px-6 py-2 bg-beige-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
          >
            Go to Home Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default Success;
