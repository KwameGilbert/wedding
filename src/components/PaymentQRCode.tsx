import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { motion } from 'framer-motion';

interface PaymentQRCodeProps {
  paymentLink?: string;
  title?: string;
  description?: string;
}

const PaymentQRCode: React.FC<PaymentQRCodeProps> = ({
  paymentLink = "https://buy.stripe.com/00g5lL0Wd0Hl2CQ144",
  title = "Scan to Make Payment",
  description = "Scan this QR code with your phone's camera to make a secure payment"
}) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Direct payment link that will work reliably
  const directPaymentLink = "https://buy.stripe.com/00g5lL0Wd0Hl2CQ144";
  
  // Use the provided link or fallback to the direct link if there's an error
  const finalPaymentLink = isError ? directPaymentLink : paymentLink;
  
  // Handle QR code loading and errors
  const handleQRCodeLoad = () => {
    setIsLoading(false);
  };
  
  const handlePaymentClick = () => {
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
        {isLoading && <div className="h-[200px] w-[200px] flex items-center justify-center bg-gray-100">Loading...</div>}
        <QRCode 
          value={finalPaymentLink}
          size={200}
          style={{ height: "auto", maxWidth: "100%", width: "100%", display: isLoading ? 'none' : 'block' }}
          viewBox={`0 0 256 256`}
          fgColor="#9D4E3C" // Wedding terracotta color for QR code
          onError={() => setIsError(true)}
          onLoad={handleQRCodeLoad}
        />
      </div>
      
      <div className="mt-4 text-center space-y-3">
        <button 
          onClick={handlePaymentClick}
          className="inline-block w-full px-4 py-2 bg-wedding-terracotta-500 text-white rounded-md hover:bg-wedding-terracotta-600 transition-colors text-sm"
        >
          Click here to make payment
        </button>
        
        <div className="border-t border-gray-300 pt-3">
          <h4 className="font-medium text-wedding-terracotta-800 mb-1">Bank Transfer Option</h4>
          <div className="bg-gray-100 p-3 rounded text-left">
            <p className="text-sm mb-1"><span className="font-semibold">Bank:</span> Barclays</p>
            <p className="text-sm mb-1"><span className="font-semibold">Account Name:</span> Wedding Fund</p>
            <p className="text-sm mb-1"><span className="font-semibold">Account Number:</span> 12345678</p>
            <p className="text-sm"><span className="font-semibold">Sort Code:</span> 12-34-56</p>
          </div>
        </div>
      </div>
      
      <p className="text-gray-600 text-sm mt-3">
        If you have any issues with payment, please contact us directly.
      </p>
    </motion.div>
  );
};

export default PaymentQRCode;