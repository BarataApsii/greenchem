import { CardTitle } from "../ui/card";

const ConstructionSection = () => {
  const service = {
    id: "construction",
    title: "Construction & Landscaping",
    icon: "🏗️",
    description: "Comprehensive construction, renovation, and landscaping services for residential and commercial properties.",
    features: [
      "Residential & Commercial Construction",
      "Complete Renovation & Remodeling",
      "Landscape Design & Installation",
      "Garden Maintenance & Restoration",
      "Project Management & Quality Assurance",
      "Custom Hardscaping & Softscaping"
    ],
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    textColor: "text-emerald-700"
  };

  return (
    <div className="h-full border-2 border-emerald-200 bg-emerald-50 rounded-xl overflow-hidden flex flex-col">
      <div className={`p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-b-2 border-emerald-200`}>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center text-2xl mr-3 text-emerald-600">
            {service.icon}
          </div>
          <CardTitle className="text-xl font-bold text-emerald-800">
            {service.title}
          </CardTitle>
        </div>
        <p className="text-gray-700 mt-3">{service.description}</p>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Our Construction Services:</h3>
        <ul className="space-y-3 mb-6">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full mt-2 mr-2 bg-emerald-500 flex-shrink-0"></span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-auto pt-4 border-t border-gray-100">
          <button 
            className="w-full py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors duration-200"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Request a Free Estimate
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConstructionSection;
