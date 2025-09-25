import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const serviceOptions = [
    "Water Treatment Systems",
    "Chemical Supply & Distribution", 
    "Environmental Testing",
    "Waste Management Solutions",
    "Industrial Construction",
    "Infrastructure Development",
    "Commercial Construction",
    "Project Management",
    "Environmental Construction",
    "Maintenance & Operations"
  ];

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">Request a Quote</DialogTitle>
          <DialogDescription className="text-lg">
            Get a detailed quote for your environmental or construction project. 
            Our team will review your requirements and provide a comprehensive proposal.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-6 mt-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl text-foreground">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="quote-firstName">First Name *</Label>
                <Input 
                  id="quote-firstName" 
                  placeholder="Enter your first name"
                  className="bg-input-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quote-lastName">Last Name *</Label>
                <Input 
                  id="quote-lastName" 
                  placeholder="Enter your last name"
                  className="bg-input-background"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="quote-email">Email Address *</Label>
                <Input 
                  id="quote-email" 
                  type="email" 
                  placeholder="your.email@company.com"
                  className="bg-input-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quote-phone">Phone Number *</Label>
                <Input 
                  id="quote-phone" 
                  type="tel" 
                  placeholder="+675 XXX XXXX"
                  className="bg-input-background"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="quote-company">Company/Organization *</Label>
                <Input 
                  id="quote-company" 
                  placeholder="Your company name"
                  className="bg-input-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quote-position">Position/Title</Label>
                <Input 
                  id="quote-position" 
                  placeholder="Your job title"
                  className="bg-input-background"
                />
              </div>
            </div>
          </div>

          {/* Project Information */}
          <div className="space-y-4">
            <h3 className="text-xl text-foreground">Project Information</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="project-type">Project Type *</Label>
                <Select>
                  <SelectTrigger className="bg-input-background">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="water-chemical">Water & Chemical Solutions</SelectItem>
                    <SelectItem value="construction">Construction Services</SelectItem>
                    <SelectItem value="both">Both Water/Chemical & Construction</SelectItem>
                    <SelectItem value="consultation">Consultation Only</SelectItem>
                    <SelectItem value="maintenance">Maintenance Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="project-urgency">Project Urgency</Label>
                <Select>
                  <SelectTrigger className="bg-input-background">
                    <SelectValue placeholder="Select urgency level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="emergency">Emergency (Within 24 hours)</SelectItem>
                    <SelectItem value="urgent">Urgent (Within 1 week)</SelectItem>
                    <SelectItem value="normal">Normal (Within 1 month)</SelectItem>
                    <SelectItem value="planning">Planning Phase (3+ months)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="project-budget">Estimated Budget (PGK)</Label>
                <Select>
                  <SelectTrigger className="bg-input-background">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-50k">Under K50,000</SelectItem>
                    <SelectItem value="50k-100k">K50,000 - K100,000</SelectItem>
                    <SelectItem value="100k-500k">K100,000 - K500,000</SelectItem>
                    <SelectItem value="500k-1m">K500,000 - K1,000,000</SelectItem>
                    <SelectItem value="over-1m">Over K1,000,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="project-location">Project Location</Label>
                <Input 
                  id="project-location" 
                  placeholder="City/Province in PNG"
                  className="bg-input-background"
                />
              </div>
            </div>
          </div>

          {/* Services Required */}
          <div className="space-y-4">
            <h3 className="text-xl text-foreground">Services Required</h3>
            <p className="text-sm text-muted-foreground">Select all services that apply to your project:</p>
            
            <div className="grid md:grid-cols-2 gap-3">
              {serviceOptions.map((service) => (
                <div key={service} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`service-${service}`}
                    checked={selectedServices.includes(service)}
                    onCheckedChange={() => handleServiceToggle(service)}
                  />
                  <Label htmlFor={`service-${service}`} className="text-sm cursor-pointer">
                    {service}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            <h3 className="text-xl text-foreground">Project Details</h3>
            
            <div className="space-y-2">
              <Label htmlFor="project-description">Project Description *</Label>
              <Textarea 
                id="project-description" 
                placeholder="Please provide a detailed description of your project requirements, objectives, and any specific challenges or considerations..."
                className="min-h-32 bg-input-background resize-none"
                rows={6}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="project-timeline">Preferred Timeline</Label>
              <Textarea 
                id="project-timeline" 
                placeholder="When would you like the project to start and finish? Any key milestones or deadlines?"
                className="min-h-20 bg-input-background resize-none"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="additional-info">Additional Information</Label>
              <Textarea 
                id="additional-info" 
                placeholder="Any additional information, special requirements, or questions you'd like to include..."
                className="min-h-20 bg-input-background resize-none"
                rows={3}
              />
            </div>
          </div>

          {/* Consent and Submit */}
          <div className="space-y-4 pt-4 border-t">
            <div className="flex items-start space-x-2">
              <Checkbox id="consent" />
              <Label htmlFor="consent" className="text-sm leading-relaxed">
                I consent to GreenChem collecting and processing my personal information for the purpose 
                of providing a project quote. I understand that my information will be handled in accordance 
                with GreenChem's privacy policy.
              </Label>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="marketing" />
              <Label htmlFor="marketing" className="text-sm leading-relaxed">
                I would like to receive updates about GreenChem's services and environmental solutions 
                (optional - you can unsubscribe at any time).
              </Label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button type="submit" className="flex-1 py-3 shadow-lg hover:shadow-xl transition-shadow">
              Submit Quote Request
            </Button>
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 py-3">
              Cancel
            </Button>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            * Required fields. We'll review your request and contact you within 24-48 hours with a detailed quote.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}