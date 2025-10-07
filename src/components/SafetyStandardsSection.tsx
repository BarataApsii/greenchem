import { Card, CardHeader, CardTitle } from "./ui/card";

const leftColumnItems = [
  "✓ Work Health and Safety Act 2011",
  "✓ Environment Protection Act 1999",
  "✓ Water Management Act 2000",
  "✓ Chemical Usage Compliance",
  "✓ Regular Equipment Inspections"
];

const rightColumnItems = [
  "✓ Trained & Certified Staff",
  "✓ Emergency Response Plans",
  "✓ PPE Requirements",
  "✓ Risk Assessments",
  "✓ Environmental Protection"
];

export function SafetyStandardsSection() {
  return (
    <section id="safety-standards" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            Safety & Compliance
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our commitment to safety and regulatory compliance ensures the highest standards in every project
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-2 border-gray-200 overflow-hidden">
            <div className="md:flex">
              {/* Left Column */}
              <div className="md:w-1/2 p-8 border-r border-gray-200">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    Safety & Compliance
                  </CardTitle>
                  <p className="text-gray-600 mt-2">
                    Our commitment to safety ensures the highest standards in every project
                  </p>
                </CardHeader>
                
                <div className="space-y-4">
                  {leftColumnItems.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-teal-600 mr-3 text-xl">•</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right Column */}
              <div className="md:w-1/2 p-8 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Our Standards Include:
                </h3>
                <div className="space-y-4">
                  {rightColumnItems.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-teal-600 mr-3 text-xl">•</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    All operations comply with local, state, and federal regulations to ensure safety for everyone involved.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
