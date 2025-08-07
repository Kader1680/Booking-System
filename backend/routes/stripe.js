// const express = require('express');
// const router = express.Router();
// const Stripe = require('stripe');
// const stripe = new Stripe('sk_test_YOUR_SECRET_KEY');  

// router.post('/create-checkout-session', async (req, res) => {
//   const { amount } = req.body;

//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       mode: 'payment',
//       line_items: [
//         {
//           price_data: {
//             currency: 'usd',
//             product_data: {
//               name: 'Room Booking',
//             },
//             unit_amount: amount * 100,  
//           },
//           quantity: 1,
//         },
//       ],
//       success_url: 'http://localhost:5173/payment-success',
//       cancel_url: 'http://localhost:5173/payment-cancel',
//     });

//     res.json({ id: session.id });
//   } catch (err) {
//     console.error("Stripe session error:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;
