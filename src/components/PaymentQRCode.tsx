import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { motion } from 'framer-motion';

interface PaymentQRCodeProps {
  paymentLink?: string;
  title?: string;
  description?: string;
}

const PaymentQRCode: React.FC<PaymentQRCodeProps> = ({
  paymentLink = "https://buy.stripe.com/test_28o5mz0Wd0Hl2CQ000",
  title = "Scan to Make Payment",
  description = "Scan this QR code with your phone's camera to make a secure payment"
}) => {
  const [isError, setIsError] = useState(false);
  
  // Direct payment link that will work reliably
  const directPaymentLink = "https://buy.stripe.com/test_28o5mz0Wd0Hl2CQ000";
  
  // Use the provided link or fallback to the direct link if there's an error
  const finalPaymentLink = isError ? directPaymentLink : paymentLink;
  
  const handlePaymentClick = () => {
    // Open the payment link in a new tab
    window.open(directPaymentLink, '_blank');
  };

  return (
    <motion.div 
      className="flex flex-col items-center justify-center p-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-xl max-w-sm mx-auto my-4 border border-wedding-terracotta-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold text-wedding-terracotta-800 mb-2">{title}</h3>
      <p className="text-gray-700 text-center mb-4">{description}</p>
      
      <div className="bg-white p-3 rounded-lg shadow-inner border-2 border-wedding-terracotta-100">
        <QRCode 
          value={finalPaymentLink}
          size={200}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          viewBox={`0 0 256 256`}
          fgColor="#9D4E3C" // Wedding terracotta color for QR code
          onError={() => setIsError(true)}
        />
      </div>
      
      <div className="mt-4 text-center">
        <button 
          onClick={handlePaymentClick}
          className="inline-block px-4 py-2 bg-wedding-terracotta-500 text-white rounded-md hover:bg-wedding-terracotta-600 transition-colors text-sm mt-2"
        >
          Click here to make payment
        </button>
      </div>
      
      {isError && (
        <p className="text-red-500 text-sm mt-2">
          QR code not working? Use the button above to make your payment.
        </p>
      )}
    </motion.div>
  );
};

export default PaymentQRCode;