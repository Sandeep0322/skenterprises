'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CourierService from '@/components/CourierService';
import PorterService from '@/components/PorterService';
import WaterSupplyService from '@/components/WaterSupplyService';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import { useState } from 'react';

export default function Home() {
  const [contactModal, setContactModal] = useState({ isOpen: false, service: '' });

  const openContactModal = (service: string) => {
    setContactModal({ isOpen: true, service });
  };

  const closeContactModal = () => {
    setContactModal({ isOpen: false, service: '' });
  };

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <div id="services" className="space-y-24 py-16">
        <CourierService onContactClick={() => openContactModal('Courier')} />
        <WaterSupplyService onContactClick={() => openContactModal('Water Supply')} />
        <PorterService onContactClick={() => openContactModal('Porter')} />
      </div>
      <Footer />
      <ContactModal
        isOpen={contactModal.isOpen}
        onClose={closeContactModal}
        service={contactModal.service}
      />
    </main>
  );
}