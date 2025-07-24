'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="font-montserrat font-bold text-2xl text-[#FF6F00]">
              SK<span className="text-[#1565C0]">Enterprises</span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-[#424242] hover:text-[#FF6F00] transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-[#424242] hover:text-[#FF6F00] transition-colors duration-300 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-[#424242] hover:text-[#FF6F00] transition-colors duration-300 font-medium"
            >
              Contact
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#424242]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('home')}
              className="block px-3 py-2 text-[#424242] hover:text-[#FF6F00] w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block px-3 py-2 text-[#424242] hover:text-[#FF6F00] w-full text-left"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block px-3 py-2 text-[#424242] hover:text-[#FF6F00] w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}