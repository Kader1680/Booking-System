// // frontend/components/CheckoutButton.js
// import { loadStripe } from '@stripe/stripe-js';
// import React from 'react';

// const stripePromise = loadStripe('YOUR_PUBLISHABLE_KEY'); 

// const CheckoutButton = () => {
//   const handleClick = async () => {
//     const stripe = await stripePromise;
//     const response = await fetch('http://localhost:5000/api/stripe/create-checkout-session', {
//       method: 'POST',
//     });

//     const session = await response.json();
//     const result = await stripe.redirectToCheckout({
//       sessionId: session.id,
//     });

//     if (result.error) {
//       alert(result.error.message);
//     }
//   };

//   return <button onClick={handleClick}>Pay Now</button>;
// };

// export default CheckoutButton;
