'use client';

import { ArrowRight, Package, Truck, Droplets } from 'lucide-react';

export default function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-[#FAFAFA] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="badge-orange mb-6">
              Complete Logistics Solutions
            </div>
            <h1 className="font-montserrat font-bold text-5xl lg:text-6xl text-[#424242] mb-6 leading-tight">
              Your Trusted
              <span className="text-[#FF6F00]"> Partner</span> for
              <span className="text-[#1565C0]"> All Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 font-roboto">
              From express courier delivery to professional porter services and reliable water supply in Chennai - 
              we've got all your logistics needs covered with speed, reliability, and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToServices}
                className="btn-primary flex items-center justify-center group"
              >
                Explore Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="btn-secondary"                 
                onClick={scrollToServices}
>
                Get Quote Now
              </button>
            </div>
            
            <div className="flex items-center gap-8 mt-12">
              <div className="text-center">
                <div className="font-montserrat font-bold text-3xl text-[#FF6F00]">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="font-montserrat font-bold text-3xl text-[#1565C0]">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
              <div className="text-center">
                <div className="font-montserrat font-bold text-3xl text-[#FF6F00]">99%</div>
                <div className="text-sm text-gray-600">On-Time Delivery</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6F00]/20 to-[#1565C0]/20 rounded-3xl transform rotate-6"></div>
            <img 
              src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Logistics Services"
              className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
            />
            
            {/* Floating service icons */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-full shadow-lg floating">
              <Package className="text-[#FF6F00]" size={24} />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-lg floating" style={{animationDelay: '2s'}}>
              <Truck className="text-[#1565C0]" size={24} />
            </div>
            <div className="absolute top-1/2 -right-6 bg-white p-4 rounded-full shadow-lg floating" style={{animationDelay: '4s'}}>
              <Droplets className="text-[#FF6F00]" size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}