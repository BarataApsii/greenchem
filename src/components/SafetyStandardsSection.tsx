import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const standards = [
  {
    title: "Legislative Compliance",
    items: [
      "Work Health and Safety Act 2011",
      "Environment Protection and Biodiversity Conservation Act 1999",
      "Water Management Act 2000",
      "Chemical Usage and Storage Compliance"
    ],
    icon: "📜",
    bgColor: "bg-blue-50"
  },
  {
    title: "Industry Standards",
    items: [
      "AS/NZS 3500: Water Services",
      "AS 4020: Testing of Waters",
      "AS/NZS 3000: Electrical Installations",
      "AS 3600: Concrete Structures"
    ],
    icon: "🏛️",
    bgColor: "bg-green-50"
  },
  {
    title: "Professional Training & Certifications",
    items: [
      "Water Treatment Plant Operator Certification",
      "Construction Safety Training",
      "Project Management Professional (PMP)",
      "First Aid & CPR Certified"
    ],
    icon: "🎓",
    bgColor: "bg-purple-50"
  },
  {
    title: "Environmental Stewardship",
    items: [
      "Sustainable Water Management",
      "Eco-friendly Construction Practices",
      "Waste Reduction Initiatives",
      "Energy Efficient Solutions"
    ],
    icon: "🌱",
    bgColor: "bg-yellow-50"
  },
  {
    title: "Quality Assurance",
    items: [
      "ISO 9001:2015 Certified",
      "Regular Quality Audits",
      "Staff Training & Development",
      "Customer Feedback System"
    ],
    icon: "✅",
    bgColor: "bg-red-50"
  }
];

export function SafetyStandardsSection() {
  return (
    <section id="safety-standards" className="py-12 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Safety Standards & Compliance
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4"></div>
        </div>

        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ maxWidth: 'fit-content' }}>
            {standards.map((standard, index) => (
              <Card 
                key={index} 
                className={`flex flex-col h-full border border-gray-200 hover:shadow-md transition-all duration-200 ${standard.bgColor} justify-between`}
              >
              <CardHeader className="pb-2 px-5 pt-5">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-3xl mb-2 mx-auto">
                  {standard.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-gray-800 text-center">
                  {standard.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-5 pb-5 pt-1">
                <ul className="space-y-2">
                  {standard.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex} 
                      className="text-gray-700 flex items-start hover:bg-white/80 transition-colors text-sm p-2 rounded"
                    >
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
