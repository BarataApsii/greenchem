import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'water-chemical' | 'construction';
}

interface ServicesSectionProps {
  filter?: 'water-chemical' | 'construction';
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const services: Service[] = [
  {
    id: 'water-treatment',
    title: 'Water Treatment Solutions',
    description: 'Comprehensive water treatment services including filtration, purification, and conditioning for various applications.',
    icon: '💧',
    category: 'water-chemical'
  },
  {
    id: 'chemical-supply',
    title: 'Chemical Supply & Management',
    description: 'High-quality chemicals for water treatment, industrial processes, and specialized applications.',
    icon: '🧪',
    category: 'water-chemical'
  },
  {
    id: 'wastewater-treatment',
    title: 'Wastewater Treatment',
    description: 'Efficient and environmentally friendly wastewater treatment solutions for industrial and commercial use.',
    icon: '♻️',
    category: 'water-chemical'
  },
  {
    id: 'residential',
    title: 'Residential Construction',
    description: 'Custom home building and renovation services with a focus on quality and sustainability.',
    icon: '🏠',
    category: 'construction'
  },
  {
    id: 'commercial',
    title: 'Commercial Construction',
    description: 'Full-service commercial construction for businesses of all sizes, from planning to completion.',
    icon: '🏢',
    category: 'construction'
  },
  {
    id: 'renovation',
    title: 'Renovation & Remodeling',
    description: 'Transform your space with our expert renovation and remodeling services.',
    icon: '🔨',
    category: 'construction'
  }
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  filter,
  title = filter === 'water-chemical' ? 'Our Water & Chemical Services' : 'Our Construction Services',
  subtitle = filter === 'water-chemical' 
    ? 'Comprehensive water treatment and chemical management solutions tailored to your needs.'
    : 'Professional construction and renovation services for residential and commercial projects.',
  ctaText = 'Get a Free Quote',
  ctaLink = '/contact',
}) => {
  const filteredServices = filter ? services.filter(service => service.category === filter) : services;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setIsOpen(false);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        {/* Mobile Dropdown */}
        <div className="md:hidden mb-8 relative">
          <button
            onClick={toggleDropdown}
            className="w-full flex justify-between items-center px-6 py-4 bg-white border border-gray-300 rounded-lg shadow-sm text-left focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          >
            <span className="text-gray-700">
              {selectedService ? selectedService.title : 'Select a service'}
            </span>
            {isOpen ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
          </button>
          
          {isOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  onClick={() => handleServiceSelect(service)}
                  className="px-6 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-center">
                    <span className="text-xl mr-3">{service.icon}</span>
                    <span className="text-gray-800">{service.title}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Selected Service Details */}
          {selectedService && (
            <div className={`mt-4 p-6 rounded-xl shadow-md ${
              selectedService.category === 'water-chemical' 
                ? 'bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-400' 
                : 'bg-gradient-to-br from-emerald-50 to-teal-50 border-l-4 border-emerald-400'
            }`}>
              <div className={`text-5xl mb-4 ${selectedService.category === 'water-chemical' ? 'text-green-500' : 'text-emerald-500'}`}>
                {selectedService.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{selectedService.title}</h3>
              <p className="text-gray-600 leading-relaxed">{selectedService.description}</p>
            </div>
          )}
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredServices.map((service) => (
            <div 
              key={service.id} 
              className={`p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1
                ${service.category === 'water-chemical' 
                  ? 'bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-400' 
                  : 'bg-gradient-to-br from-emerald-50 to-teal-50 border-l-4 border-emerald-400'}`}
            >
              <div className={`text-5xl mb-4 ${service.category === 'water-chemical' ? 'text-green-500' : 'text-emerald-500'}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a
            href={ctaLink}
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 hover:shadow-lg"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
