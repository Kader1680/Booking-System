// frontend/src/pages/Payment.jsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";


// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);


function CheckoutForm({ amount }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Create payment intent from backend
    const res = await fetch("http://localhost:5000/api/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amount * 100 }), // convert to cents
    });

    const { clientSecret } = await res.json();

    // Confirm payment
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (error) {
      alert(error.message);
    } else if (paymentIntent.status === "succeeded") {
      alert("Payment successful!");
      window.location.href = "/profile"; // Redirect to profile or success page
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Pay ${amount}</h2>
      <CardElement className="p-3 border rounded mb-4" />
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        {loading ? "Processing..." : `Pay $${amount}`}
      </button>
    </form>
  );
}

export default function PaymentPage() {
  const location = useLocation();
  const amount = location.state?.amount || 0;

  if (!amount) {
    return <div className="p-10 text-red-500">No payment amount provided.</div>;
  }

  return (
    <Elements stripe={stripePromise}>
    
      <CheckoutForm amount={amount} />
    </Elements>
  );
}
