// backend/routes/payment.js
const express = require("express");
const Stripe = require("stripe");
const Payment = require("../models/Payement"); 
const router = express.Router();

// const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

router.post("/", async (req, res) => {
  try {
    const { amount } = req.body; // add any extra data you want to store

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

   

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
