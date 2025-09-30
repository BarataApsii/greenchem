import { Card, CardContent } from "./ui/card";

const waterChemicalSpecialist = [
  "AS 4020:2018 - Swimming pool water quality and treatment",
  "AS/NZS 3497:2020 - Drinking water treatment units",
  "Water treatment chemical handling and safety",
  "Water quality testing and analysis",
  "Industrial water treatment solutions",
  "Water Services Association of Australia (WSAA) standards"
];

const constructionSpecialist = [
  "AS/NZS 3500:2020 - Plumbing and drainage standards",
  "AS 1668.2:2012 - Ventilation and airconditioning in buildings",
  "AS/NZS 3666.1:2011 - Fire and smoke control systems",
  "AS/NZS 3000:2018 - Electrical installations (Wiring Rules)",
  "ISO 9001:2015 Quality Management Systems",
  "Building codes and construction regulations"
];

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-12 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            We are committed to excellence in water treatment and construction standards
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mb-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Water & Chemical Specialist */}
          <Card className="bg-white shadow-lg h-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                Water & Chemical Specialist
              </h3>
              <ul className="space-y-3">
                {waterChemicalSpecialist.map((item, index) => (
                  <li 
                    key={`water-${index}`}
                    className="flex items-start text-gray-700 hover:bg-gray-50 p-2 rounded transition-colors"
                  >
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Construction Specialist */}
          <Card className="bg-white shadow-lg h-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                Construction Specialist
              </h3>
              <ul className="space-y-3">
                {constructionSpecialist.map((item, index) => (
                  <li 
                    key={`construction-${index}`}
                    className="flex items-start text-gray-700 hover:bg-gray-50 p-2 rounded transition-colors"
                  >
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
