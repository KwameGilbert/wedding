import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const presetAmounts = [25, 50, 75, 100, 150, 200];

const WeddingGiftPage = () => {
  const navigate = useNavigate();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [note, setNote] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
            name,
            note,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        const error = await response.text();
        throw new Error(`Backend error: ${error}`);
      }

      window.location.href = data.data.url;
    } catch (err) {
      console.error(err);
      alert("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-wedding-cream-200 via-wedding-cream-100 to-wedding-cream-50 flex flex-col items-center justify-start px-4 relative">
      <div className="max-w-md w-full text-center">
        {/* Preset Buttons */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {presetAmounts.map((amt) => (
            <button
              key={amt}
              onClick={() => {
                setSelectedAmount(amt);
                setCustomAmount("");
              }}
              className={`py-3 rounded-md border text-[#2e2e2e] text-sm font-medium shadow-sm ${
                selectedAmount === amt
                  ? "bg-gray-200 border-gray-400"
                  : "bg-white border-gray-300"
              }`}
            >
              €{amt}
            </button>
          ))}
        </div>
        <input
          type="number"
          placeholder="Or enter an amount"
          value={customAmount}
          onChange={(e) => {
            setCustomAmount(e.target.value);
            setSelectedAmount(null);
          }}
          className="w-full border border-gray-300 rounded-md py-3 px-4 mb-4 text-center placeholder-gray-500"
        />

        {/* Name, Email & Note */}
        <input
          type="text"
          placeholder="Your Name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-md py-3 px-4 mb-3 placeholder-gray-500"
        />
        <input
          type="email"
          placeholder="Your Email (required)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-md py-3 px-4 mb-3 placeholder-gray-500"
        />
        <textarea
          placeholder="Leave us a note (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full border border-gray-300 rounded-md py-3 px-4 mb-6 h-24 resize-none placeholder-gray-500"
        />

        <Button
          disabled={loading}
          onClick={handlePayment}
          className="w-full bg-black text-white font-semibold py-3 rounded-md hover:bg-gray-900 transition"
        >
          {loading ? "Redirecting..." : `Pay €${amountToPay || ""}`}
        </Button>

        <p className="text-sm text-[#7c7c7c] mt-3">
          You’ll be redirected to a secure Stripe checkout page.
        </p>

        <p className="text-[#2e2e2e] mt-12 text-sm leading-relaxed text-center">
          Thank you for being part of our celebration. <br />
          We can’t wait to share this new chapter with you!
        </p>
      </div>

      {/* Floating Leaves Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
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
      </div>
    </div>
  );
};

export default WeddingGiftPage;
