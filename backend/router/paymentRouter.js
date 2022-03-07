const express = require("express");
const router = express.Router();

const stripe = require("stripe")('sk_test_51KWKj9KgipzK7IngcIb74upTrZCuBISbDI0He9islvIjlJfzblO1FdEFm8kFgyHsgsgdSqK16bVIbYWkwQY5uk8600cvt7rbaj');

const calculateOrderAmount = (items) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 10000;
  };
  
  router.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;
    console.log(items)
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items)*100,
      currency: "dkk",
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  });

  

  module.exports = router;