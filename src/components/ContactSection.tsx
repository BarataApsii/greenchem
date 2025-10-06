import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export function ContactSection() {

  return (
    <section id="contact" className="pt-16 pb-24 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(5, 150, 105, 0.2) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6 text-primary font-bold">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-primary">
            Get in touch with our team for consultation, project quotes, or emergency support. 
            We're here to help with all your environmental and construction needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information Card */}
          <Card className="hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm h-full">
            <CardHeader className="pb-2 px-6 pt-6">
              <h3 className="text-xl font-semibold text-primary">Contact Information</h3>
              <p className="text-base text-muted-foreground">Feel free to reach out to us for any inquiries or questions.</p>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="space-y-6">
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base text-gray-700">+675 72593204</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base text-gray-700">jwilliams@greenchem.com.pg</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base text-gray-700">Green Chem, P. O. Box 28, Gordons, NCDC Papua New Guinea</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <div>
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <h3 className="text-xl font-semibold text-primary">
                Fill out the form below and we'll get back to you within 24 hours.
                </h3>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input 
                      id="fullName" 
                      placeholder="Enter your full name"
                      className="bg-input-background border-border"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@company.com"
                        className="bg-input-background border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+675 XXX XXXX"
                        className="bg-input-background border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input 
                      id="company" 
                      placeholder="Your company name"
                      className="bg-input-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input 
                      id="subject" 
                      placeholder="What is this regarding?"
                      className="bg-input-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide details about your project or inquiry..."
                      className="min-h-32 bg-input-background border-border resize-none"
                      rows={6}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full py-3 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    Send Message
                  </Button>

                  <p className="text-sm text-muted-foreground">
                    * Required fields. We respect your privacy and will never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

    </section>
  );
}