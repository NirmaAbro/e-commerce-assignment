// import React from "react";

// const CancelPage = () => {
//   return (
//     <div>
//       <h2>Your payment was canceled. Please try again.</h2>
//       <Link to="/">Back to Home</Link>
//     </div>
//   );
// };

// export default CancelPage;


import React from "react";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-100 text-center py-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow-lg">
        <h1 className="text-2xl font-semibold text-red-600">Payment Cancelled</h1>
        <p className="mt-4 text-xl text-red-800">
          Your payment was not completed. Please try again.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cancel;
