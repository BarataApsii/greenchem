import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {

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
          <h2 className="text-4xl lg:text-5xl mb-6 text-primary">About GreenChem</h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl mb-6 text-primary">Our Story</h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                We are a competitive entity of the pest and termite control services based in Port Moresby, 
                Papua New Guinea. GreenChem Ltd is a locally established family owned and operated business since 2011 based 
                on the principles of providing outstanding service and quality guaranteed at the fairest price.
              </p>
              <p>
              Since then we have continued to grow and develop our approach focusing on quality oriented employees who have 
              delivered with necessary pride and care to produce excellent results. GreenChem only uses 
              CEPA (Conservation & Environmental Protection Agency) approved products. All our services are performed by highly
               trained and certified technicians.
              </p>
              <p>
              Equipped with local knowledge and integrated modernized approach, our service boosts a customized professional 
              approach for your unique needs.

              Today we are regarded as a key plant supplier, pool monitoring inspector and pest control fumigator to the city of 
              Port Moresby and Papua New Guinea supporting the domestic, civil and commercial business functions.
              </p>
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
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full"></div>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Vision Card */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border bg-primary text-white">
            <div className=" mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <div className="text-muted-foreground leading-relaxed space-y-4 text-white">
              <p>
                As Papua New Guinea is rapidly advancing in terms of developments and projects- business wise, it is only just that by 
                each advancement the engagement of an expert in pest management is convincingly compulsory, this is the vision which
                 GreenChem Ltd shares with the government.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border bg-primary">
            <div className="text-white mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Our Mission</h3>
            <div className="text-muted-foreground leading-relaxed space-y-4 text-white">
              <p>
              GreenChem Ltd is determined to be the leader in pest management , working side-by-side with the 
              Conser-vation & Environment Protection Authority [CEPA], Department of Agriculture & Livestock [DAL] , 
              Civil Aviation Safety Authority PNG [CASA] and National Agriculture Quarantine & Inspection Authority [NAQIA] 
              incorporating regulations and ensuring projects and developments adhere to these regulations with regards to chemical 
              applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}