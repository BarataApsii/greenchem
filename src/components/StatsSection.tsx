export function StatsSection() {
  const stats = [
    {
      number: "15+",
      label: "Years of Experience",
      description: "Serving Papua New Guinea's industries"
    },
    {
      number: "500+", 
      label: "Projects Completed",
      description: "Across water treatment and construction"
    },
    {
      number: "50+",
      label: "Industrial Clients",
      description: "Mining, manufacturing, and government"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Emergency response and maintenance"
    }
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.3) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Trusted by PNG's Leading Industries</h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Our commitment to excellence and environmental responsibility has made us the preferred partner 
            for businesses across Papua New Guinea.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-colors">
                <div className="text-4xl lg:text-5xl mb-2">{stat.number}</div>
                <div className="text-xl mb-2">{stat.label}</div>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}