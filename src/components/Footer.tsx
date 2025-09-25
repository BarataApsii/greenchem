import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary to-primary/80 py-20 relative overflow-hidden text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(5, 150, 105, 0.3) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl text-white font-bold mb-2">GreenChem</h3>
              <p className="text-lg text-white/80">Environmental Solutions</p>
            </div>
            <p className="text-white/90 mb-8 max-w-md leading-relaxed text-lg">
              Papua New Guinea's leading provider of sustainable water treatment, eco-friendly chemical solutions, 
              and environmentally responsible construction services.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-white">info@greenchem.com.pg</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-white">+675 325 1234</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-white">Port Moresby, Papua New Guinea</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl mb-6 text-white font-semibold">Water & Chemical</h4>
            <ul className="space-y-3 text-white/80">
              <li className="hover:text-white transition-colors cursor-pointer">Water Treatment Systems</li>
              <li className="hover:text-white transition-colors cursor-pointer">Chemical Supply & Distribution</li>
              <li className="hover:text-white transition-colors cursor-pointer">Environmental Testing</li>
              <li className="hover:text-white transition-colors cursor-pointer">Waste Management</li>
              <li className="hover:text-white transition-colors cursor-pointer">Consultation Services</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl mb-6 text-white font-semibold">Construction</h4>
            <ul className="space-y-3 text-white/80">
              <li className="hover:text-white transition-colors cursor-pointer">Sustainable Construction</li>
              <li className="hover:text-white transition-colors cursor-pointer">Infrastructure Development</li>
              <li className="hover:text-white transition-colors cursor-pointer">Project Management</li>
              <li className="hover:text-white transition-colors cursor-pointer">Environmental Compliance</li>
              <li className="hover:text-white transition-colors cursor-pointer">Maintenance Services</li>
            </ul>
          </div>
        </div>
        
        <Separator className="mb-8 bg-white/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/90">&copy; 2025 GreenChem Papua New Guinea. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#privacy" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="text-white/80 hover:text-white transition-colors">Terms of Service</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}