import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Service {
  title: string;
  description: string;
  features: string[];
}

interface ServiceSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  services: Service[];
  bgColor?: string;
  headerImage?: string;
  headerImageAlt?: string;
}

export function ServiceSection({ 
  id, 
  title, 
  subtitle, 
  description, 
  services, 
  bgColor = "bg-white",
  headerImage,
  headerImageAlt = ""
}: ServiceSectionProps) {
  return (
    <section id={id} className={`py-24 ${bgColor} relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(5, 150, 105, 0.2) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header Section with Image */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl mb-6 leading-tight">{title}</h2>
              <p className="text-xl text-primary mb-6">{subtitle}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
            </div>
            
            {headerImage && (
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src={headerImage}
                    alt={headerImageAlt}
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full"></div>
              </div>
            )}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="h-full border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <span className="text-sm text-foreground leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}