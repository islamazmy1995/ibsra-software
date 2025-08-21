import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You would typically send this to your backend API
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Our Office",
      details: [
        "123 Tech Hub Street",
        "Innovation District",
        "San Francisco, CA 94105",
      ],
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568", "Available 24/7"],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: [
        "hello@ibsrasoftware.com",
        "projects@ibsrasoftware.com",
        "support@ibsrasoftware.com",
      ],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Closed",
      ],
    },
  ];

  const offices = [
    {
      city: "San Francisco",
      country: "USA",
      address: "123 Tech Hub Street, Innovation District",
      phone: "+1 (555) 123-4567",
      isHeadquarters: true,
    },
    {
      city: "London",
      country: "UK",
      address: "45 Innovation Square, Tech City",
      phone: "+44 20 7946 0958",
      isHeadquarters: false,
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "88 Marina Bay Drive, Financial District",
      phone: "+65 6789 1234",
      isHeadquarters: false,
    },
    {
      city: "Toronto",
      country: "Canada",
      address: "200 King Street West, Financial District",
      phone: "+1 (416) 555-0123",
      isHeadquarters: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">I</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              IBSRA Software
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Home
            </a>
            <a
              href="/#services"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="/about"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="/portfolio"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Portfolio
            </a>
            <a href="/contact" className="text-foreground font-medium">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            <MessageSquare className="h-4 w-4 mr-2" />
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Let's Start Your
            <span className="block">Next Project</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Ready to transform your business with innovative software solutions?
            Contact our team of experts and let's discuss how we can help you
            achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      placeholder="Your Company Ltd."
                      value={formData.company}
                      onChange={(e) =>
                        handleInputChange("company", e.target.value)
                      }
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("service", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="enterprise">
                            Enterprise Software Solutions
                          </SelectItem>
                          <SelectItem value="ecommerce">
                            E-Commerce & RetailTech
                          </SelectItem>
                          <SelectItem value="edtech">
                            EdTech & Learning Platforms
                          </SelectItem>
                          <SelectItem value="iot">
                            IoT & Embedded Systems
                          </SelectItem>
                          <SelectItem value="analytics">
                            AI, Data & Analytics
                          </SelectItem>
                          <SelectItem value="mobile">
                            Mobile App Development
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Project Budget</Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("budget", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-50k">
                            Under $50,000
                          </SelectItem>
                          <SelectItem value="50k-100k">
                            $50,000 - $100,000
                          </SelectItem>
                          <SelectItem value="100k-250k">
                            $100,000 - $250,000
                          </SelectItem>
                          <SelectItem value="250k-500k">
                            $250,000 - $500,000
                          </SelectItem>
                          <SelectItem value="over-500k">$500,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Description *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project requirements, goals, and timeline..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
                <p className="text-muted-foreground mb-8">
                  We're here to help you transform your business. Reach out to
                  us through any of the channels below, and our team will
                  respond promptly to discuss your project needs.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="text-blue-600 mt-1">{info.icon}</div>
                        <div>
                          <h3 className="font-semibold mb-2">{info.title}</h3>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <p
                                key={detailIndex}
                                className="text-sm text-muted-foreground"
                              >
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Global Presence
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              With offices around the world, we're always close to our clients
              and ready to provide local support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <Card
                key={index}
                className={`relative ${office.isHeadquarters ? "ring-2 ring-blue-600" : ""}`}
              >
                {office.isHeadquarters && (
                  <Badge className="absolute -top-2 -right-2 bg-blue-600">
                    HQ
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-lg">{office.city}</CardTitle>
                  <CardDescription>{office.country}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        {office.address}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        {office.phone}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Don't wait to transform your business. Schedule a free consultation
            with our experts today.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Schedule Free Consultation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-background border-t">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">I</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                IBSRA Software
              </span>
            </div>
            <p className="text-muted-foreground">
              &copy; 2024 IBSRA Software. All rights reserved. Built with
              innovation and passion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
