import React, { useState } from "react";
import { useCartActions } from "../../store/Store";
import { useCart } from "../../store/Store";
import "./UserInfo.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

function UserInfo() {
  return (
    <div className="user-info_container">
      <ContactInformation />
      <ShippingAddress />
    </div>
  );
}

function ContactInformation() {
  return (
    <div className="contact-info_container">
      <h3>Contact Information</h3>
      <input type="email" placeholder="Email" />
    </div>
  );
}

function ShippingAddress() {
  const { emptyCart } = useCartActions();
  const cart = useCart();
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Added loading state

  const makePayment = async () => {
    if (cart.length < 1) {
      toast.error("Your shopping list is empty.");
      return;
    }

    const stripe = await loadStripe(
      "pk_test_51QQRpIIiPqdCTgr1gAS1AbJdb7UAkRSmYXP9HTjDdFuWmXCjiFpbrP551jZ51Y59zgRrZ0wfvXXiEgHj1846vfvE000Piq6PYq"
    );

    const body = {
      products: cart, // Send cart items to the server
    };

    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const response = await fetch(
        "http://localhost:8080/api/create-checkout-session",
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify(body),
        }
      );

      if (!response.ok) {
        toast.error("Failed to initiate checkout.");
        return;
      }

      const session = await response.json();
      console.log("session", session);
      const result = await stripe.redirectToCheckout({

        sessionId: session.id, // Use session ID returned by the server
      });

      if (result.error) {
        toast.error(result.error.message);
      }
    } catch (error) {
      console.error("Error during payment processing:", error);
      toast.error("Payment processing failed.");
    }
  };

  return (
    <div className="shipping-address_container">
      <h3>Shipping Address</h3>
      <div className="shipping-address_wrapper">
        <input type="name" placeholder="First name" id="firstname" />
        <input type="name" placeholder="Last name" id="lastname" />
        <input type="name" placeholder="Address" id="address" />
        <input type="name" placeholder="City" id="city" />
        <button
          className="checkout-btn"
          onClick={makePayment}
          disabled={loading} // Disable button while loading
        >
          {loading ? "Processing..." : "Checkout"} {/* Show loading state */}
        </button>
      </div>
    </div>
  );
}

export default UserInfo;



