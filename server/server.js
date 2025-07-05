// server.js
import express from "express";
import Stripe from "stripe";
import cors from "cors";

const app = express();

// Replace with your own Stripe secret key
const stripe = new Stripe("sk_test_51RcDRFDFwupjLMTzcnU7UBm1f8mUMkMNGD3ZENkECfCBB4rdLdaxu95W0YEJcjc3PkWQm7W165WktDdRCQGEdLLB00WbxbbaM1", {
  apiVersion: "2023-10-16",
});

app.use(cors());
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  const { amount, email, name, note } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      currency: "eur",
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Wedding Gift",
              description: `Gift from ${name || "Anonymous"}: ${note || "No note"}`,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      success_url: `http://localhost:8080/success?amount=${amount / 100}&name=${encodeURIComponent(name || "Anonymous")}`,
      cancel_url: "http://localhost:8080/cancel",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Stripe session creation error:", error);
    res.status(500).json({ error: "Stripe session creation failed" });
  }
});

app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
