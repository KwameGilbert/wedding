import { motion } from "framer-motion";
import React, { useState } from "react";
import { PaystackButton } from "react-paystack";

const presetAmounts = [25, 50, 75, 100, 150, 200];

const WeddingGiftPage = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [note, setNote] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const amountToPay = selectedAmount || Number(customAmount);
  const publicKey = "pk_test_7dcfa1a16fcfa999ea385bcc0a84925ebe2c3db7"; // Live key

  const paystackConfig = {
    reference: new Date().getTime().toString(),
    email,
    amount: amountToPay * 100, // Paystack uses the lowest denomination (kobo/pesewa)
    publicKey,
    metadata: {
      custom_fields: [
        {
          display_name: "Name",
          variable_name: "name",
          value: name || "Anonymous",
        },
        {
          display_name: "Message",
          variable_name: "message",
          value: note,
        },
      ],
    },
    onSuccess: (reference: any) => {
      alert("🎉 Thank you! Payment was successful.\nReference: " + reference.reference);
    },
    onClose: () => {
      alert("❌ Payment was cancelled.");
    },
  };

  return (
    <div className=" bg-gradient-to-br from-wedding-cream-200 via-wedding-cream-100 to-wedding-cream-50 flex flex-col items-center justify-start py-12 px-4">
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
                selectedAmount === amt ? "bg-gray-200 border-gray-400" : "bg-white border-gray-300"
              }`}
            >
              €{amt}
            </button>
          ))}
        </div>

        {/* Custom Amount */}
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
          required
        />
        <textarea
          placeholder="Leave us a note (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full border border-gray-300 rounded-md py-3 px-4 mb-6 h-24 resize-none placeholder-gray-500"
        />

        {/* Paystack Button */}
        {amountToPay > 0 && email.includes("@") && (
          <PaystackButton
            {...paystackConfig}
            className="w-full py-3 rounded-md text-white font-semibold transition-all text-base bg-[#4a4a4a] hover:bg-[#3c3c3c]"
          >
            Continue to Payment
          </PaystackButton>
        )}

        <p className="text-sm text-[#7c7c7c] mt-3">
          You’ll be able to pay securely using your card or mobile wallet.
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
