import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  const values = [
    {
      title: "Environmental Stewardship",
      description: "Committed to protecting Papua New Guinea's natural environment through sustainable practices and innovative solutions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Local Expertise",
      description: "Deep understanding of PNG's unique challenges and opportunities, backed by international best practices.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "Innovation & Quality",
      description: "Delivering cutting-edge solutions with the highest standards of quality and reliability.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Community Partnership",
      description: "Building long-term partnerships with communities and businesses across Papua New Guinea.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  const achievements = [
    "Established 2009 in Port Moresby",
    "500+ successful projects completed",
    "50+ industrial and government clients",
    "ISO certified quality management",
    "Award-winning environmental projects",
    "Local workforce development programs"
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(5, 150, 105, 0.2) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl mb-6">About GreenChem</h2>
          <p className="text-xl text-primary mb-4 max-w-3xl mx-auto">
            Leading Papua New Guinea towards a sustainable future
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Since 2009, GreenChem has been at the forefront of environmental solutions in Papua New Guinea, 
            combining international expertise with deep local knowledge to deliver sustainable outcomes for 
            our communities and industries.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl mb-6">Our Story</h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in Port Moresby with a vision to transform Papua New Guinea's approach to 
                environmental management, GreenChem has grown from a small consultancy to the country's 
                leading provider of sustainable environmental solutions.
              </p>
              <p>
                Our journey began with a simple belief: that economic development and environmental 
                protection can go hand in hand. Today, we serve industries across PNG, from mining 
                and manufacturing to government and community projects.
              </p>
              <p>
                With over 15 years of experience, we've built a reputation for innovation, reliability, 
                and genuine commitment to Papua New Guinea's environmental future.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-xl mb-4">Key Achievements</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NTg3MTA0NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional team meeting"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl mb-4">Our Values</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to Papua New Guinea
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg text-white">
                  {value.icon}
                </div>
                <h4 className="text-xl mb-3">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl mb-6">Our Mission</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            To be Papua New Guinea's premier provider of sustainable environmental solutions, 
            fostering economic growth while protecting our natural heritage for future generations. 
            We are committed to excellence, innovation, and building lasting partnerships with 
            our communities and clients.
          </p>
        </div>
      </div>
    </section>
  );
}