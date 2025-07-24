'use client';

import { useState } from 'react';
import { Package, Globe, MapPin, Calculator, MessageCircle } from 'lucide-react';

interface CourierServiceProps {
  onContactClick: () => void;
}

export default function CourierService({ onContactClick }: CourierServiceProps) {
  const [estimate, setEstimate] = useState({
    length: '',
    width: '',
    height: '',
    weight: '',
    fromPin: '',
    toPin: '',
    type: 'domestic'
  });
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const calculateEstimate = () => {
    const { length, width, height, weight, type } = estimate;
    if (!length || !width || !height || !weight) return;

    const volume = (parseFloat(length) * parseFloat(width) * parseFloat(height)) / 1000; // cubic cm to liters
    const weightNum = parseFloat(weight);
    const baseRate = type === 'international' ? 25 : 8;
    const volumeRate = volume * 2;
    const weightRate = weightNum * baseRate;
    
    const total = Math.max(volumeRate, weightRate) + (type === 'international' ? 200 : 50);
    setCalculatedPrice(Math.round(total));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate-fade-in">
        <div className="badge-orange mb-4">Express Delivery</div>
        <h2 className="font-montserrat font-bold text-4xl text-[#424242] mb-6">
          Courier Services
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Fast, reliable courier services for both domestic and international deliveries. 
          Get instant estimates based on package dimensions and destinations.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="animate-slide-up">
          <img 
            src="https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Indian Courier Flight Service"
            className="rounded-xl shadow-lg w-full h-80 object-cover mb-8"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="bg-[#FF6F00] p-3 rounded-lg">
                <Globe className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-lg mb-2">International Shipping</h3>
                <p className="text-gray-600">Worldwide delivery with customs handling and tracking</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-[#1565C0] p-3 rounded-lg">
                <Package className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-lg mb-2">Domestic Express</h3>
                <p className="text-gray-600">Same-day and next-day delivery across India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="service-card animate-bounce-in">
          <h3 className="font-montserrat font-bold text-2xl mb-6 flex items-center">
            <Calculator className="mr-3 text-[#FF6F00]" size={28} />
            Get Instant Estimate
          </h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Service Type</label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F00] focus:border-transparent"
                  value={estimate.type}
                  onChange={(e) => setEstimate({...estimate, type: e.target.value})}
                >
                  <option value="domestic">Domestic</option>
                  <option value="international">International</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Weight (kg)</label>
                <input 
                  type="number"
                  placeholder="2.5"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F00] focus:border-transparent"
                  value={estimate.weight}
                  onChange={(e) => setEstimate({...estimate, weight: e.target.value})}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Length (cm)</label>
                <input 
                  type="number"
                  placeholder="30"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F00] focus:border-transparent"
                  value={estimate.length}
                  onChange={(e) => setEstimate({...estimate, length: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Width (cm)</label>
                <input 
                  type="number"
                  placeholder="20"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F00] focus:border-transparent"
                  value={estimate.width}
                  onChange={(e) => setEstimate({...estimate, width: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Height (cm)</label>
                <input 
                  type="number"
                  placeholder="15"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F00] focus:border-transparent"
                  value={estimate.height}
                  onChange={(e) => setEstimate({...estimate, height: e.target.value})}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">From Pincode</label>
                <input 
                  type="text"
                  placeholder="600001"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F00] focus:border-transparent"
                  value={estimate.fromPin}
                  onChange={(e) => setEstimate({...estimate, fromPin: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">To Pincode</label>
                <input 
                  type="text"
                  placeholder="110001"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F00] focus:border-transparent"
                  value={estimate.toPin}
                  onChange={(e) => setEstimate({...estimate, toPin: e.target.value})}
                />
              </div>
            </div>
            
            <button 
              onClick={calculateEstimate}
              className="w-full btn-primary"
            >
              Calculate Estimate
            </button>
            
            {calculatedPrice && (
              <div className="bg-[#FF6F00]/10 p-4 rounded-lg text-center">
                <div className="font-montserrat font-bold text-2xl text-[#FF6F00]">
                  ₹{calculatedPrice}
                </div>
                <div className="text-sm text-gray-600">Estimated delivery cost</div>
              </div>
            )}
            
            <button 
              onClick={onContactClick}
              className="w-full btn-secondary flex items-center justify-center"
            >
              <MessageCircle className="mr-2" size={20} />
              Contact for Booking
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}