'use client';

import { useState } from 'react';
import { Truck, Users, Clock, MessageCircle, Calculator } from 'lucide-react';

interface PorterServiceProps {
  onContactClick: () => void;
}

export default function PorterService({ onContactClick }: PorterServiceProps) {
  const [estimate, setEstimate] = useState({
    vehicleType: 'mini-truck',
    distance: '',
    hours: '',
    helpers: '1',
    fromPin: '',
    toPin: ''
  });
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const vehicleRates = {
    'mini-truck': { base: 300, perKm: 12, perHour: 50 },
    'pickup-truck': { base: 400, perKm: 15, perHour: 60 },
    'large-truck': { base: 600, perKm: 20, perHour: 80 },
    'tempo': { base: 350, perKm: 14, perHour: 55 }
  };

  const calculateEstimate = () => {
    const { vehicleType, distance, hours, helpers } = estimate;
    if (!distance || !hours) return;

    const rates = vehicleRates[vehicleType as keyof typeof vehicleRates];
    const distanceNum = parseFloat(distance);
    const hoursNum = parseFloat(hours);
    const helpersNum = parseInt(helpers);

    const vehicleCost = rates.base + (distanceNum * rates.perKm) + (hoursNum * rates.perHour);
    const helperCost = (helpersNum - 1) * 200; // First helper included
    const total = vehicleCost + helperCost;
    
    setCalculatedPrice(Math.round(total));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white py-16 rounded-3xl shadow-lg">
      <div className="text-center mb-16 animate-fade-in">
        <div className="badge-blue mb-4">Moving Made Easy</div>
        <h2 className="font-montserrat font-bold text-4xl text-[#424242] mb-6">
          Porter Services
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional moving and transportation services with trained helpers. 
          Choose from various vehicle types and get instant pricing based on your requirements.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="service-card animate-bounce-in">
          <h3 className="font-montserrat font-bold text-2xl mb-6 flex items-center">
            <Calculator className="mr-3 text-[#1565C0]" size={28} />
            Calculate Moving Cost
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Vehicle Type</label>
              <select 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1565C0] focus:border-transparent"
                value={estimate.vehicleType}
                onChange={(e) => setEstimate({...estimate, vehicleType: e.target.value})}
              >
                <option value="mini-truck">Mini Truck (7ft)</option>
                <option value="pickup-truck">Pickup Truck (8ft)</option>
                <option value="large-truck">Large Truck (14ft)</option>
                <option value="tempo">Tempo (10ft)</option>
              </select>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Distance (km)</label>
                <input 
                  type="number"
                  placeholder="15"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1565C0] focus:border-transparent"
                  value={estimate.distance}
                  onChange={(e) => setEstimate({...estimate, distance: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Duration (hours)</label>
                <input 
                  type="number"
                  placeholder="3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1565C0] focus:border-transparent"
                  value={estimate.hours}
                  onChange={(e) => setEstimate({...estimate, hours: e.target.value})}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Number of Helpers</label>
              <select 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1565C0] focus:border-transparent"
                value={estimate.helpers}
                onChange={(e) => setEstimate({...estimate, helpers: e.target.value})}
              >
                <option value="1">1 Helper (Included)</option>
                <option value="2">2 Helpers (+₹200)</option>
                <option value="3">3 Helpers (+₹400)</option>
                <option value="4">4 Helpers (+₹600)</option>
              </select>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">From Pincode</label>
                <input 
                  type="text"
                  placeholder="600001"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1565C0] focus:border-transparent"
                  value={estimate.fromPin}
                  onChange={(e) => setEstimate({...estimate, fromPin: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">To Pincode</label>
                <input 
                  type="text"
                  placeholder="600020"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1565C0] focus:border-transparent"
                  value={estimate.toPin}
                  onChange={(e) => setEstimate({...estimate, toPin: e.target.value})}
                />
              </div>
            </div>
            
            <button 
              onClick={calculateEstimate}
              className="w-full btn-secondary"
            >
              Calculate Estimate
            </button>
            
            {calculatedPrice && (
              <div className="bg-[#1565C0]/10 p-4 rounded-lg text-center">
                <div className="font-montserrat font-bold text-2xl text-[#1565C0]">
                  ₹{calculatedPrice}
                </div>
                <div className="text-sm text-gray-600">Estimated moving cost</div>
              </div>
            )}
            
            <button 
              onClick={onContactClick}
              className="w-full btn-primary flex items-center justify-center"
            >
              <MessageCircle className="mr-2" size={20} />
              Book Porter Service
            </button>
          </div>
        </div>

        <div className="animate-slide-up">
          <img 
            src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Professional House Shifting and Moving Service"
            className="rounded-xl shadow-lg w-full h-80 object-cover mb-8"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="bg-[#1565C0] p-3 rounded-lg">
                <Truck className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-lg mb-2">Multiple Vehicles</h3>
                <p className="text-gray-600">From mini trucks to large vehicles for all moving needs</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-[#FF6F00] p-3 rounded-lg">
                <Users className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-lg mb-2">Trained Helpers</h3>
                <p className="text-gray-600">Professional staff for safe loading and unloading</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-[#1565C0] p-3 rounded-lg">
                <Clock className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-lg mb-2">Flexible Timing</h3>
                <p className="text-gray-600">Book services as per your convenient time slots</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-[#FF6F00] p-3 rounded-lg">
                <MessageCircle className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-lg mb-2">Live Tracking</h3>
                <p className="text-gray-600">Real-time updates and GPS tracking of your items</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}