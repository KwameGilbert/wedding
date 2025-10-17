import React from 'react';
import QRCode from 'react-qr-code';
import { motion } from 'framer-motion';

interface PaymentQRCodeProps {
  paymentLink?: string;
  title?: string;
  description?: string;
}

const PaymentQRCode: React.FC<PaymentQRCodeProps> = ({
  paymentLink = "https://checkout.stripe.com/c/pay/cs_test_a1VnLzVT0OQ0xFHzrBqgUxiVo9AxGHoJ5e0GQqgQkYQGcVTNUVXS9wQTp9#fidkdWxOYHwnPyd1blpxYHZxWjA0TjE0PW1PTVdTPXZ1YzVUbTJNf3ZXTEI1SH9pcmRTfGo1aEtofWNJSX8zQGRVYTN9cXVpNTV%2FNTVgVWpkRmFXNTV1MUBgUTVhM39gYmRBPWNifXZJNTVgYGZ8NWJ9MycpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl",
  title = "Scan to Make Payment",
  description = "Scan this QR code with your phone's camera to make a secure payment"
}) => {
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
          value={paymentLink}
          size={200}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          viewBox={`0 0 256 256`}
          fgColor="#9D4E3C" // Wedding terracotta color for QR code
        />
      </div>
      
      <div className="mt-4 text-center">
        <a 
          href={paymentLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-wedding-terracotta-500 text-white rounded-md hover:bg-wedding-terracotta-600 transition-colors text-sm mt-2"
        >
          Open payment page
        </a>
      </div>
    </motion.div>
  );
};

export default PaymentQRCode;