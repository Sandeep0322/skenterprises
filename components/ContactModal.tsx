'use client';

import { X, MessageCircle, Mail, Phone } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: string;
}

export default function ContactModal({ isOpen, onClose, service }: ContactModalProps) {
  if (!isOpen) return null;

  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in your ${service} service. Please provide more details.`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmail = () => {
    const subject = `Inquiry about ${service} Service`;
    const body = `Dear SKEnterprises Team,\n\nI am interested in your ${service} service. Please provide me with more details and pricing information.\n\nBest regards`;
    const emailUrl = `mailto:info@skenterprises.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = emailUrl;
  };

  const handleCall = () => {
    window.location.href = 'tel:+919876543210';
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform animate-bounce-in">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="font-montserrat font-bold text-2xl text-[#424242]">
            Contact for {service}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-gray-600 mb-6">
            Choose your preferred method to get in touch with us for {service} service.
          </p>

          <button
            onClick={handleWhatsApp}
            className="w-full flex items-center justify-center space-x-3 bg-[#25D366] text-white p-4 rounded-lg hover:bg-[#1DA851] transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle size={24} />
            <span className="font-medium">WhatsApp Chat</span>
          </button>

          <button
            onClick={handleEmail}
            className="w-full flex items-center justify-center space-x-3 bg-[#1565C0] text-white p-4 rounded-lg hover:bg-[#0D47A1] transition-all duration-300 transform hover:scale-105"
          >
            <Mail size={24} />
            <span className="font-medium">Send Email</span>
          </button>

          <button
            onClick={handleCall}
            className="w-full flex items-center justify-center space-x-3 bg-[#FF6F00] text-white p-4 rounded-lg hover:bg-[#E65100] transition-all duration-300 transform hover:scale-105"
          >
            <Phone size={24} />
            <span className="font-medium">Call Now</span>
          </button>

          <div className="text-center mt-6 pt-4 border-t">
            <div className="text-sm text-gray-500">
              Available 24/7 for your convenience
            </div>
            <div className="font-medium text-[#424242] mt-1">
              +91 9962497979
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}