import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Make sure you have a UI button component or replace with <button>

const StripeGift = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  const amountToPay = selectedAmount || Number(customAmount);

  const handlePayment = async () => {
    if (!amountToPay || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid amount and email.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://stripe-payment-t4f2.onrender.com/api/create-checkout-session/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: amountToPay,
            email,
            note,
          }),
        }
      );

      const data = await response.json();

      if (!data?.data?.url) throw new Error("Missing Stripe redirect URL.");

      window.location.href = data.data.url;
    } catch (err) {
      console.error(err);
      alert("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const presetAmounts = [25, 50, 75, 100, 150, 200];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fffdf8] to-[#f7f5ee] flex items-center justify-center px-4">
      <motion.div
        className="max-w-md w-full text-center relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-center text-2xl font-bold mb-6 text-gray-700">
          Send a Wedding Gift 💝
        </h2>

        <div className="grid grid-cols-3 gap-2 mb-4">
          {presetAmounts.map((amt) => (
            <motion.button
              key={amt}
              onClick={() => {
                setSelectedAmount(amt);
                setCustomAmount("");
              }}
              whileTap={{ scale: 0.95 }}
              className={`py-2 rounded-md text-sm font-medium border ${
                selectedAmount === amt
                  ? "bg-gray-200 border-gray-500"
                  : "bg-white border-gray-300"
              }`}
            >
              £{amt}
            </motion.button>
          ))}
        </div>

        <input
          type="number"
          placeholder="Or enter custom amount"
          value={customAmount}
          onChange={(e) => {
            setCustomAmount(e.target.value);
            setSelectedAmount(null);
          }}
          className="w-full border rounded-md p-2 mb-3"
        />
        <input
          type="email"
          placeholder="Your Email (required)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-md p-2 mb-3"
        />
        <textarea
          placeholder="Leave a message (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full border rounded-md p-2 mb-4 h-24"
        />

        <Button
          disabled={loading}
          onClick={handlePayment}
          className="w-full bg-black text-white font-semibold py-3 rounded-md hover:bg-gray-900 transition"
        >
          {loading ? "Redirecting..." : `Pay £${amountToPay || ""}`}
        </Button>

        <p className="text-center text-xs text-gray-500 mt-3">
          You’ll be redirected to a secure Stripe page.
        </p>

        <p className="text-[#2e2e2e] mt-12 text-sm leading-relaxed text-center">
          Thank you for being part of our celebration. <br />
          We can’t wait to share this new chapter with you!
        </p>

        {/* Floating animation (optional) */}
        {/* <motion.div
          className="absolute top-[-10px] right-[-10px] text-2xl"
          animate={{ rotate: [0, 15, -15, 0], y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          🍃
        </motion.div> */}
          {/* <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(13)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-wedding-olive-400/40"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.7,
          }}
        >
          <span className="text-2xl">🍃</span>
        </motion.div>
      ))}
    </div> */}
      </motion.div>

      
    </div>
  );
};

export default StripeGift;
