import { useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted", { selectedServices });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-primary">Request a Quote</h3>
            <p className="text-muted-foreground">
              Get a detailed quote for your environmental or construction project.
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="quote-firstName">First Name *</Label>
              <Input 
                id="quote-firstName" 
                placeholder="Enter your first name"
                className="bg-input-background"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quote-lastName">Last Name *</Label>
              <Input 
                id="quote-lastName" 
                placeholder="Enter your last name"
                className="bg-input-background"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="quote-email">Email *</Label>
              <Input 
                id="quote-email" 
                type="email" 
                placeholder="your.email@example.com"
                className="bg-input-background"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quote-phone">Phone Number</Label>
              <Input 
                id="quote-phone" 
                type="tel" 
                placeholder="+675 XXX XXXX"
                className="bg-input-background"
              />
            </div>
          </div>

          {/* Project Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Project Information</h4>
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
                    <SelectItem value="both">Both Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="project-urgency">Urgency</Label>
                <Select>
                  <SelectTrigger className="bg-input-background">
                    <SelectValue placeholder="Select urgency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urgent">Urgent (within 1 week)</SelectItem>
                    <SelectItem value="standard">Standard (2-4 weeks)</SelectItem>
                    <SelectItem value="flexible">Flexible (1+ months)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Services Needed</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {serviceOptions.map((service) => (
                  <div key={service} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`service-${service}`}
                      checked={selectedServices.includes(service)}
                      onCheckedChange={() => handleServiceToggle(service)}
                    />
                    <Label htmlFor={`service-${service}`} className="text-sm font-normal">
                      {service}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="project-details">Project Details *</Label>
              <Textarea
                id="project-details"
                placeholder="Please describe your project requirements..."
                className="min-h-32 bg-input-background"
                required
              />
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox id="privacy-policy" required />
            <Label htmlFor="privacy-policy" className="text-sm">
              I agree to the privacy policy and terms of service
            </Label>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button type="submit" className="flex-1">
              Request Quote
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              className="flex-1" 
              onClick={onClose}
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}