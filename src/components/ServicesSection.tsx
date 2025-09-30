import { Card, CardContent, CardTitle } from "./ui/card";

// Service data - centralized for easy management
interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
  bgColor: string;
  borderColor: string;
  textColor: string;
}

const services: Service[] = [
  {
    id: "water-chemical",
    title: "Water & Chemical Solutions",
    icon: "💧",
    description: "Complete water treatment and chemical management services.",
    features: [
      "Water Treatment & Purification",
      "Swimming Pool Maintenance",
      "Chemical Supply & Management",
      "Wastewater Treatment",
      "Water Quality Testing"
    ],
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    textColor: "text-teal-700"
  },
  {
    id: "construction-renovation",
    title: "Construction & Landscaping",
    icon: "🏗️",
    description: "Comprehensive construction, renovation, and landscaping services.",
    features: [
      "Residential & Commercial Construction",
      "Renovation & Remodeling",
      "Landscape Design & Installation",
      "Garden Maintenance & Restoration",
      "Project Management & Quality Assurance",
      "Landscape Consultation"
    ],
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-700"
  }
];

// Reusable Typography Components
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
    {children}
  </h2>
);

const SectionSubtitle = ({ children }: { children: React.ReactNode }) => (
  <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
    {children}
  </p>
);

const ServiceCard = ({ service }: { service: Service }) => (
  <div 
    id={service.id}
    className="group transform transition-all duration-300 hover:-translate-y-2 scroll-mt-20"
  >
    <Card className={`h-full border-2 ${service.borderColor} ${service.bgColor} hover:shadow-xl transition-all duration-300 overflow-hidden`}>
      <div className={`p-6 ${service.bgColor} border-b-2 ${service.borderColor}`}>
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center text-2xl mr-4">
            {service.icon}
          </div>
          <CardTitle className={`text-xl font-bold ${service.textColor}`}>
            {service.title}
          </CardTitle>
        </div>
        <p className="text-gray-700 mb-4">{service.description}</p>
      </div>
      <CardContent className="p-6">
        <h4 className="text-gray-800 font-medium mb-3">Key Features:</h4>
        <ul className="space-y-2">
          {service.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start">
              <span className={`inline-block w-1.5 h-1.5 rounded-full mt-2 mr-2 ${service.textColor}`}></span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 text-center">
          <button 
            className={`px-6 py-2 bg-white ${service.textColor} border-2 ${service.borderColor} rounded-full font-medium hover:bg-white hover:shadow-md transition-all duration-300`}
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get a Quote
          </button>
        </div>
      </CardContent>
    </Card>
  </div>
);

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle>Our Services & Solutions</SectionTitle>
          <SectionSubtitle>Comprehensive services tailored to meet all your property needs</SectionSubtitle>
          <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
