const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IOvMXBiilgt3voLfUg3Zf2sSB8UXRKxn1rEXfDh3vUOCBpgSscYOC3d0kmJUKkw2XS6tWRKbnuUZwFCDYKa5ZaS00cHgE4KoX"
);

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-4b2b2/us-central1/api
