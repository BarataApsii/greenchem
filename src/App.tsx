import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServiceSection } from "./components/ServiceSection";
import { StatsSection } from "./components/StatsSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

const waterChemicalServices = [
  {
    title: "Water Treatment Systems",
    description: "Complete water purification and treatment solutions for Papua New Guinea's diverse industries.",
    features: [
      "Reverse osmosis systems",
      "UV disinfection technology", 
      "Chemical dosing systems",
      "Industrial filtration",
      "Water quality monitoring",
      "Desalination solutions"
    ]
  },
  {
    title: "Chemical Supply & Distribution",
    description: "Reliable supply of high-quality chemicals for industrial, mining, and commercial applications.",
    features: [
      "Industrial chemicals",
      "Water treatment chemicals",
      "Mining reagents",
      "Laboratory chemicals",
      "Bulk chemical storage",
      "Custom chemical blending"
    ]
  },
  {
    title: "Environmental Testing",
    description: "Comprehensive environmental and water quality testing services across PNG.",
    features: [
      "Water quality analysis",
      "Soil contamination testing",
      "Air quality monitoring",
      "Environmental impact assessments",
      "Compliance reporting",
      "Chain of custody protocols"
    ]
  },
  {
    title: "Waste Management Solutions",
    description: "Sustainable waste treatment and management systems for environmental protection.",
    features: [
      "Wastewater treatment",
      "Chemical waste disposal",
      "Recycling programs",
      "Hazardous waste management",
      "Environmental remediation",
      "Sustainability consulting"
    ]
  },
  {
    title: "System Design & Installation",
    description: "Custom design and installation of water and chemical processing systems.",
    features: [
      "System engineering",
      "Equipment installation",
      "Process optimization",
      "Automation systems",
      "Training programs",
      "Technical documentation"
    ]
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing maintenance and technical support for all water and chemical systems.",
    features: [
      "Preventive maintenance",
      "Emergency repairs",
      "Spare parts supply",
      "System upgrades",
      "24/7 technical support",
      "Remote monitoring"
    ]
  }
];

const constructionServices = [
  {
    title: "Industrial Construction",
    description: "Sustainable industrial construction solutions for PNG's growing economy.",
    features: [
      "Mining facility construction",
      "Processing plant installation",
      "Warehouse & storage facilities",
      "Environmental compliance",
      "Sustainable building practices",
      "Local workforce development"
    ]
  },
  {
    title: "Infrastructure Development",
    description: "Critical infrastructure development supporting Papua New Guinea's growth.",
    features: [
      "Water treatment facilities",
      "Sewage treatment plants", 
      "Road construction",
      "Bridge & culvert installation",
      "Utility infrastructure",
      "Environmental restoration"
    ]
  },
  {
    title: "Commercial Construction",
    description: "Modern commercial building solutions with environmental considerations.",
    features: [
      "Office buildings",
      "Retail complexes",
      "Educational facilities",
      "Healthcare buildings",
      "Green building certification",
      "Energy-efficient design"
    ]
  },
  {
    title: "Project Management",
    description: "Comprehensive construction project management with local expertise.",
    features: [
      "Project planning & coordination",
      "Budget & cost management",
      "Quality assurance",
      "Safety compliance",
      "Stakeholder management",
      "Risk assessment"
    ]
  },
  {
    title: "Environmental Construction",
    description: "Specialized construction for environmental protection and remediation projects.",
    features: [
      "Containment systems",
      "Environmental remediation",
      "Landfill construction",
      "Pollution control facilities",
      "Ecological restoration",
      "Wetland construction"
    ]
  },
  {
    title: "Maintenance & Operations",
    description: "Ongoing facility maintenance and operational support services.",
    features: [
      "Preventive maintenance programs",
      "Emergency repair services",
      "Facility management",
      "Equipment servicing",
      "Performance monitoring",
      "Upgrade consultations"
    ]
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        
        <ServiceSection
          id="water-chemical"
          title="Water & Chemical Solutions"
          subtitle="Comprehensive Environmental Services for Papua New Guinea"
          description="GreenChem provides complete water treatment, chemical supply, and environmental management services across Papua New Guinea. We combine international expertise with local knowledge to deliver sustainable solutions for industries, communities, and government projects throughout the region."
          services={waterChemicalServices}
          bgColor="bg-background"
          headerImage="https://images.unsplash.com/photo-1646295669679-40930dff242e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHRyZWF0bWVudCUyMGluZHVzdHJpYWwlMjBmYWNpbGl0eXxlbnwxfHx8fDE3NTg3Nzk2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          headerImageAlt="Water treatment industrial facility"
        />

        <StatsSection />
        
        <ServiceSection
          id="construction"
          title="Sustainable Construction Services"
          subtitle="Building PNG's Future with Environmental Responsibility"
          description="Our construction division specializes in sustainable building practices and infrastructure development. From industrial facilities to community projects, we deliver construction solutions that meet PNG's development needs while protecting the environment for future generations."
          services={constructionServices}
          bgColor="bg-muted/30"
          headerImage="https://images.unsplash.com/photo-1688981783835-67308623dccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGNvbnN0cnVjdGlvbiUyMGdyZWVuJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU4Nzc5NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
          headerImageAlt="Sustainable construction green building"
        />

        <AboutSection />
        
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}