import React from 'react';
import { CardTitle } from "../ui/card";

const WaterChemicalSection: React.FC = () => {
  const service = {
    id: "water-chemical",
    title: "Water & Chemical Solutions",
    icon: "💧",
    description: "Complete water treatment and chemical management services for residential, commercial, and industrial clients.",
    features: [
      "Water Treatment & Purification Systems",
      "Swimming Pool Maintenance & Chemical Balancing",
      "Wastewater Treatment Solutions",
      "Water Quality Testing & Analysis",
      "Custom Chemical Formulations"
    ],
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    textColor: "text-teal-700"
  };

  return (
    <div className="h-full border-2 border-teal-200 bg-teal-50 rounded-xl overflow-hidden flex flex-col">
      <div className={`p-6 ${service.bgColor} border-b-2 ${service.borderColor}`}>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center text-2xl mr-3">
            {service.icon}
          </div>
          <CardTitle className="text-xl font-bold text-teal-700">
            {service.title}
          </CardTitle>
        </div>
        <p className="text-gray-700 mt-3">{service.description}</p>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Our Comprehensive Solutions:</h3>
        <ul className="space-y-3 mb-6">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full mt-2 mr-2 bg-teal-700 flex-shrink-0"></span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-auto pt-4 border-t border-gray-100">
          <button 
            className="w-full py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors duration-200"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get a Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaterChemicalSection;
