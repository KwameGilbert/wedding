import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Gift, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import SparkleRain from "@/components/SparkleRain";
import { hero3, hero7, hero9 } from "@/assets";

const StripeGift = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [currentBgImage, setCurrentBgImage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{email?: string; amount?: string}>({});
  const [showSuccess, setShowSuccess] = useState(false);
  
  const backgroundImages = [hero3, hero7, hero9];
  
  // Background image carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const amountToPay = selectedAmount || Number(customAmount);

  const validateForm = () => {
    const newErrors: {email?: string; amount?: string} = {};
    
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!amountToPay || amountToPay <= 0) {
      newErrors.amount = "Please select or enter a valid amount";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = async () => {
    if (!validateForm()) return;
    
    setIsLoading(true);
    
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
      setShowSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  const presetAmounts = [25, 50, 75, 100, 150, 200];

  return (
    <div className="min-h-screen bg-gradient-to-br from-wedding-cream-50 via-wedding-cream-100 to-wedding-terracotta-50 relative overflow-hidden">
      {/* Enhanced Background with Overlay */}
      <div className="fixed inset-0 z-0">
        <motion.div 
          key={currentBgImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: `url(${backgroundImages[currentBgImage]})`, 
            filter: 'brightness(0.3) saturate(1.2)' 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-wedding-terracotta-900/40 via-wedding-olive-900/30 to-wedding-cream-900/20" />
      </div>
      
      {/* Enhanced SparkleRain */}
      <SparkleRain zIndex={5} showBackground={false} />
      
      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-wedding-cream-100/90 backdrop-blur-md border-b border-wedding-terracotta-200/30 sticky top-0 z-40 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  className="text-wedding-terracotta-600 hover:text-wedding-terracotta-700 hover:bg-wedding-cream-200 transition-all duration-300"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Wedding
                </Button>
              </motion.div>
            </Link>

            <motion.div 
              className="text-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "backOut" }}
            >
              <h1 className="text-2xl lg:text-3xl font-rochester text-wedding-terracotta-500">
                Wedding Gift
              </h1>
              <p className="text-sm text-gray-600">Rudolf & Jemima</p>
            </motion.div>

            <motion.div 
              className="text-right"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-sm text-gray-600">Wedding Date</p>
              <p className="font-semibold text-wedding-terracotta-600">
                March 7, 2026
              </p>
            </motion.div>
          </div>
        </div>
      </motion.header>

      <div className="flex flex-col items-center justify-center px-2 sm:px-4 py-8 pb-16 relative z-10 min-h-screen">
        {/* Main Gift Form */}
        <motion.div
          className="w-full max-w-lg my-8 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl border border-wedding-cream-200">
            {/* Header with Icon */}
            <motion.div
              className="text-center mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "backOut" }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-wedding-terracotta-400 to-wedding-olive-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Gift className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-rochester text-wedding-terracotta-600 mb-2">
                Contribute to Our Wedding Gift
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Your contribution will help us start our new journey together
              </p>
            </motion.div>

            {/* Amount Selection */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Amount</h3>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {presetAmounts.map((amt) => (
                  <motion.button
                    key={amt}
                    onClick={() => {
                      setSelectedAmount(amt);
                      setCustomAmount("");
                      setErrors(prev => ({ ...prev, amount: undefined }));
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`py-3 px-4 rounded-xl text-lg font-bold border-2 shadow-md transition-all duration-300 ${
                      selectedAmount === amt
                        ? "bg-wedding-terracotta-500 text-white border-wedding-terracotta-600 shadow-wedding-terracotta-200"
                        : "bg-white text-wedding-terracotta-600 border-wedding-terracotta-200 hover:border-wedding-terracotta-400 hover:shadow-lg"
                    }`}
                  >
                    £{amt}
                  </motion.button>
                ))}
              </div>
              
              <motion.input
                type="number"
                placeholder="Or enter custom amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                  setErrors(prev => ({ ...prev, amount: undefined }));
                }}
                className="w-full border-2 border-wedding-terracotta-200 rounded-xl p-4 text-lg font-medium bg-white shadow-md focus:border-wedding-terracotta-400 focus:outline-none transition-all duration-300"
                whileFocus={{ scale: 1.02 }}
              />
              {errors.amount && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-2 flex items-center"
                >
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.amount}
                </motion.p>
              )}
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Email Address *
              </label>
              <motion.input
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors(prev => ({ ...prev, email: undefined }));
                }}
                className="w-full border-2 border-wedding-terracotta-200 rounded-xl p-4 text-lg font-medium bg-white shadow-md focus:border-wedding-terracotta-400 focus:outline-none transition-all duration-300"
                whileFocus={{ scale: 1.02 }}
              />
              {errors.email && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-2 flex items-center"
                >
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.email}
                </motion.p>
              )}
            </div>

            {/* Message Input */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Personal Message (Optional)
              </label>
              <motion.textarea
                placeholder="Leave a heartfelt message for Rudolf & Jemima..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full border-2 border-wedding-terracotta-200 rounded-xl p-4 h-24 text-lg font-medium bg-white shadow-md focus:border-wedding-terracotta-400 focus:outline-none resize-none transition-all duration-300"
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            {/* Payment Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={handlePayment}
                disabled={isLoading || !amountToPay || !email}
                className="w-full bg-gradient-to-r from-wedding-terracotta-500 to-wedding-terracotta-600 text-white font-bold py-4 px-8 rounded-xl hover:from-wedding-terracotta-600 hover:to-wedding-terracotta-700 transition-all duration-300 text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  `Pay £${amountToPay || ""}`
                )}
              </Button>
            </motion.div>

            <motion.p 
              className="text-center text-sm text-gray-500 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              🔒 Secure payment powered by Stripe
            </motion.p>
          </div>
        </motion.div>

        {/* Bank Transfer Option */}
        <motion.div
          className="w-full max-w-lg mt-6 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-wedding-cream-200">
            <h3 className="text-xl font-rochester text-wedding-terracotta-600 mb-4 text-center">
              Alternative: Bank Transfer
            </h3>
            <p className="text-gray-600 text-sm mb-4 text-center">
              Prefer to transfer directly? Use these details:
            </p>
            <div className="bg-wedding-cream-50 p-4 rounded-xl border border-wedding-terracotta-200">
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold text-wedding-terracotta-600">Account Name:</span> Rudolf & Jemima</p>
                <p><span className="font-semibold text-wedding-terracotta-600">Account Number:</span> 12345678</p>
                <p><span className="font-semibold text-wedding-terracotta-600">Sort Code:</span> 12-34-56</p>
                <p><span className="font-semibold text-wedding-terracotta-600">Bank:</span> Example Bank</p>
                <p className="text-xs text-gray-500 mt-3 italic">Please include your name as reference</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Thank You Section */}
        <motion.div
          className="w-full max-w-lg mt-8 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-br from-wedding-terracotta-50 to-wedding-olive-50 p-8 rounded-2xl shadow-xl border border-wedding-terracotta-200 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1, ease: "backOut" }}
              className="w-16 h-16 bg-gradient-to-br from-wedding-terracotta-400 to-wedding-olive-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
            >
              <Heart className="w-8 h-8 text-white fill-white" />
            </motion.div>
            
            <h3 className="text-2xl font-rochester text-wedding-terracotta-600 mb-4">
              Thank You!
            </h3>
            
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              Thank you for being part of our celebration. <br />
              We can't wait to share this new chapter with you!
            </p>
            
            <motion.div
              className="bg-white/60 p-4 rounded-xl border border-wedding-terracotta-200"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-wedding-terracotta-600 font-bold text-lg">
                With love, Rudolf & Jemima
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StripeGift;