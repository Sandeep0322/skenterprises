"use client";

import { useState } from "react";
import {
  Droplets,
  MapPin,
  Clock,
  MessageCircle,
  Calculator,
} from "lucide-react";

interface WaterSupplyServiceProps {
  onContactClick: () => void;
}

export default function WaterSupplyService({
  onContactClick,
}: WaterSupplyServiceProps) {
  const [estimate, setEstimate] = useState({
    bottleSize: "20L",
    quantity: "",
    frequency: "one-time",
    area: "",
    pincode: "",
  });
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const bottleRates = {
    "20L": 45,
    "25L": 55,
    "1L": 15,
    "5L": 25,
  };

  const calculateEstimate = () => {
    const { bottleSize, quantity, frequency } = estimate;
    if (!quantity) return;

    const rate = bottleRates[bottleSize as keyof typeof bottleRates];
    const quantityNum = parseInt(quantity);
    let total = rate * quantityNum;

    // Apply bulk discount
    if (quantityNum >= 50) {
      total *= 0.85; // 15% discount
    } else if (quantityNum >= 20) {
      total *= 0.9; // 10% discount
    }

    // Apply frequency discount for regular orders
    if (frequency === "weekly") {
      total *= 0.95; // 5% discount
    } else if (frequency === "monthly") {
      total *= 0.9; // 10% discount
    }

    setCalculatedPrice(Math.round(total));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate-fade-in">
        <div className="badge-orange mb-4">Chennai Only</div>
        <h2 className="font-montserrat font-bold text-4xl text-[#424242] mb-6">
          Water Supply Service
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Pure and clean water supply for offices, events, and large-scale
          requirements in Chennai. Bulk orders with competitive pricing and
          reliable delivery schedules.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="animate-slide-up">
          <img
            src="/waterbottle.jpg"
            alt="Bulk Water Bottles Supply Service"
            className="rounded-xl shadow-lg w-full h-80 object-cover mb-8"
          />

          <div className="bg-gradient-to-r from-[#FF6F00]/10 to-[#1565C0]/10 p-6 rounded-xl">
            <h3 className="font-montserrat font-bold text-xl mb-4 text-[#424242]">
              Service Areas in Chennai
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-center">
                  <MapPin size={16} className="text-[#FF6F00] mr-2" />
                  T. Nagar
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="text-[#FF6F00] mr-2" />
                  Anna Nagar
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="text-[#FF6F00] mr-2" />
                  Velachery
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="text-[#FF6F00] mr-2" />
                  Adyar
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <MapPin size={16} className="text-[#1565C0] mr-2" />
                  OMR
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="text-[#1565C0] mr-2" />
                  Porur
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="text-[#1565C0] mr-2" />
                  Tambaram
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="text-[#1565C0] mr-2" />
                  Chrompet
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service-card animate-bounce-in">
          <h3 className="font-montserrat font-bold text-2xl mb-6 flex items-center">
            <Calculator className="mr-3 text-[#FF6F00]" size={28} />
            Calculate Water Cost
          </h3>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Bottle Size
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F00] focus:border-transparent"
                  value={estimate.bottleSize}
                  onChange={(e) =>
                    setEstimate({ ...estimate, bottleSize: e.target.value })
                  }
                >
                  <option value="20L">20 Liters - ₹45</option>
                  <option value="25L">25 Liters - ₹55</option>
                  <option value="5L">5 Liters - ₹25</option>
                  <option value="1L">1 Liter - ₹15</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Quantity
                </label>
                <input
                  type="number"
                  placeholder="50"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F00] focus:border-transparent"
                  value={estimate.quantity}
                  onChange={(e) =>
                    setEstimate({ ...estimate, quantity: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Order Frequency
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F00] focus:border-transparent"
                value={estimate.frequency}
                onChange={(e) =>
                  setEstimate({ ...estimate, frequency: e.target.value })
                }
              >
                <option value="one-time">One-time Order</option>
                <option value="weekly">Weekly (5% discount)</option>
                <option value="monthly">Monthly (10% discount)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Delivery Area
              </label>
              <input
                type="text"
                placeholder="T. Nagar, Anna Nagar, etc."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F00] focus:border-transparent"
                value={estimate.area}
                onChange={(e) =>
                  setEstimate({ ...estimate, area: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Pincode</label>
              <input
                type="text"
                placeholder="600017"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F00] focus:border-transparent"
                value={estimate.pincode}
                onChange={(e) =>
                  setEstimate({ ...estimate, pincode: e.target.value })
                }
              />
            </div>

            <button onClick={calculateEstimate} className="w-full btn-primary">
              Calculate Total Cost
            </button>

            {calculatedPrice && (
              <div className="bg-[#FF6F00]/10 p-4 rounded-lg">
                <div className="text-center mb-3">
                  <div className="font-montserrat font-bold text-2xl text-[#FF6F00]">
                    ₹{calculatedPrice}
                  </div>
                  <div className="text-sm text-gray-600">
                    Total cost for {estimate.quantity} bottles
                  </div>
                </div>
                <div className="text-xs text-gray-500 space-y-1">
                  <div>• Bulk discount applied for 20+ bottles</div>
                  <div>• Free delivery within Chennai</div>
                  <div>• Quality assured pure water</div>
                </div>
              </div>
            )}

            <div className="flex gap-3 mt-6">
              <button
                onClick={onContactClick}
                className="flex-1 btn-primary flex items-center justify-center"
              >
                <MessageCircle className="mr-2" size={18} />
                Place Order
              </button>
              <button className="flex-1 btn-secondary flex items-center justify-center">
                <Clock className="mr-2" size={18} />
                Schedule Delivery
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
