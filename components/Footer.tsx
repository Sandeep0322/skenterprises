'use client';

import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#424242] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="font-montserrat font-bold text-2xl mb-4">
              SK<span className="text-[#FF6F00]">Enterprises</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for courier, porter, and water supply services.
              Delivering excellence with speed and reliability.
            </p>
            <div className="flex space-x-4">
              <div className="bg-[#FF6F00] p-2 rounded-lg">
                <Clock className="text-white" size={20} />
              </div>
              <div>
                <div className="font-medium">24/7 Service</div>
                <div className="text-sm text-gray-300">Always available</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-[#FF6F00] transition-colors cursor-pointer">Domestic Courier</li>
              <li className="hover:text-[#FF6F00] transition-colors cursor-pointer">International Shipping</li>
              <li className="hover:text-[#FF6F00] transition-colors cursor-pointer">Porter & Moving</li>
              <li className="hover:text-[#FF6F00] transition-colors cursor-pointer">Water Supply</li>
              <li className="hover:text-[#FF6F00] transition-colors cursor-pointer">Bulk Orders</li>
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="text-[#FF6F00]" size={20} />
                <span className="text-gray-300">+91 9962497979</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-[#FF6F00]" size={20} />
                <span className="text-gray-300">rajkumar9561@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-[#FF6F00] mt-1" size={20} />
                <span className="text-gray-300">
                  Under Ground Floor, <br />Old No 73, Shop No 108, <br /> Sir Thyagaraya Rd, Chennai, Tamil Nadu 600017
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Service Areas</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#FF6F00] rounded-full"></div>
                <span>Chennai (All Areas)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#1565C0] rounded-full"></div>
                <span>Pan India Courier</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#FF6F00] rounded-full"></div>
                <span>International Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#1565C0] rounded-full"></div>
                <span>Express Delivery</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 SKEnterprises. All rights reserved. Built with excellence for your logistics needs.
          </p>
        </div>
      </div>
    </footer>
  );
}