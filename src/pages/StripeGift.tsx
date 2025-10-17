import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SparkleRain from "@/components/SparkleRain";
import { hero3, hero7, hero9 } from "@/assets"; // Importing three hero images

const StripeGift = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [currentBgImage, setCurrentBgImage] = useState(0);
  
  const backgroundImages = [hero3, hero7, hero9];
  
  // Background image carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  const amountToPay = selectedAmount || Number(customAmount);

  const handlePayment = async () => {
    if (!amountToPay || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid amount and email.");
      return;
    }

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
      console.error("Payment error:", err);
      alert("Payment failed. Please try again.");
    }
  };

  const presetAmounts = [25, 50, 75, 100, 150, 200];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Background image carousel */}
      <motion.div 
        key={currentBgImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: `url(${backgroundImages[currentBgImage]})`, 
          filter: 'brightness(0.5)' 
        }}
      />
      
      {/* SparkleRain component for floating particles */}
      <SparkleRain zIndex={5} showBackground={false} />
      
      <motion.div
        className="max-w-md w-full bg-black/30 p-6 rounded-lg backdrop-blur-sm text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-center text-2xl font-bold mb-3 text-white">
          Contribute to Our Wedding Gift 💝
        </h2>
        <p className="text-white mb-6 text-base">
          Your contribution will help us start our new journey together
        </p>

        <div className="grid grid-cols-3 gap-2 mb-4">
          {presetAmounts.map((amt) => (
            <motion.button
              key={amt}
              onClick={() => {
                setSelectedAmount(amt);
                setCustomAmount("");
              }}
              whileTap={{ scale: 0.95 }}
              className={`py-3 rounded-md text-lg font-bold border shadow-lg ${
                selectedAmount === amt
                  ? "bg-wedding-terracotta-500 text-white border-wedding-terracotta-600"
                  : "bg-white text-black border-gray-300 hover:bg-gray-100"
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
          className="w-full border rounded-md p-3 mb-4 text-lg font-medium bg-white shadow-lg"
        />
        <input
          type="email"
          placeholder="Your Email (required)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-md p-3 mb-4 text-lg font-medium bg-white shadow-lg"
        />
        <textarea
          placeholder="Leave a message (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full border rounded-md p-3 mb-5 h-24 text-lg font-medium bg-white shadow-lg resize-none"
        />

        <Button
          onClick={handlePayment}
          className="w-full bg-wedding-terracotta-500 text-white font-bold py-4 px-6 rounded-md hover:bg-wedding-terracotta-600 transition text-lg shadow-lg"
          disabled={!amountToPay || !email}
        >
          Pay £{amountToPay || ""}
        </Button>

        <p className="text-center text-sm text-white font-medium mt-3 p-2 rounded-md">
          You'll be redirected to a secure Stripe page.
        </p>

        <div className="mt-6 bg-black/40 p-4 rounded-lg">
          <h3 className="text-white font-bold text-lg mb-2">Bank Transfer Option</h3>
          <p className="text-white text-sm mb-2">
            You can also make a direct bank transfer to:
          </p>
          <div className="bg-white/10 p-3 rounded text-white text-left">
            <p><span className="font-semibold">Account Name:</span> Rudi & Darlington</p>
            <p><span className="font-semibold">Account Number:</span> 12345678</p>
            <p><span className="font-semibold">Sort Code:</span> 12-34-56</p>
            <p><span className="font-semibold">Bank:</span> Example Bank</p>
            <p className="text-xs mt-2 italic">Please include your name as reference</p>
          </div>
        </div>

        <div className="bg-black/40 mt-8 p-4 rounded-lg">
          <p className="text-white text-base leading-relaxed text-center font-medium">
            Thank you for being part of our celebration. <br />
            We can't wait to share this new chapter with you! <br />
            <span className="text-wedding-terracotta-300 font-bold">Rudi & Darlington</span>
          </p>
        </div>

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
