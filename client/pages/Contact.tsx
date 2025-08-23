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
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Visit Our Office",
      details: [
        "123 Tech Hub Street",
        "Innovation District",
        "San Francisco, CA 94105",
      ],
      action: "Get Directions",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568", "Available 24/7"],
      action: "Call Now",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Us",
      details: [
        "hello@ibsrasoftware.com",
        "projects@ibsrasoftware.com",
        "support@ibsrasoftware.com",
      ],
      action: "Send Email",
    },
    {
      icon: <Clock className="h-5 w-5" />,
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
      timezone: "PST (UTC-8)",
      isHeadquarters: true,
    },
    {
      city: "London",
      country: "UK",
      address: "45 Innovation Square, Tech City",
      phone: "+44 20 7946 0958",
      timezone: "GMT (UTC+0)",
      isHeadquarters: false,
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "88 Marina Bay Drive, Financial District",
      phone: "+65 6789 1234",
      timezone: "SGT (UTC+8)",
      isHeadquarters: false,
    },
    {
      city: "Toronto",
      country: "Canada",
      address: "200 King Street West, Financial District",
      phone: "+1 (416) 555-0123",
      timezone: "EST (UTC-5)",
      isHeadquarters: false,
    },
  ];

  const benefits = [
    "Free initial consultation",
    "24/7 dedicated support",
    "Transparent pricing",
    "Agile development process",
    "Post-launch maintenance",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section
        className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-blue-200/30 to-purple-200/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-indigo-200/30 to-blue-200/30 rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4 sm:mb-6 text-xs sm:text-sm px-3 py-1">
              <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
              Get In Touch
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Let's Start Your
            <span className="block mt-2">Next Project</span>
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Ready to transform your business with innovative software solutions?
            Contact our team of experts and let's discuss how we can help you
            achieve your goals.
          </motion.p>

          {/* Benefits List */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm border">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form & Info */}
      <motion.section
        className="py-8 sm:py-16 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl sm:text-2xl">Send us a message</CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-green-800">Message Sent Successfully!</h3>
                      <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you soon.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="John Smith"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                            className="h-11"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                            className="h-11"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-sm font-medium">Company Name</Label>
                        <Input
                          id="company"
                          placeholder="Your Company Ltd."
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          className="h-11"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="service" className="text-sm font-medium">Service Interest</Label>
                          <Select onValueChange={(value) => handleInputChange("service", value)}>
                            <SelectTrigger className="h-11">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="enterprise">Enterprise Software Solutions</SelectItem>
                              <SelectItem value="ecommerce">E-Commerce & RetailTech</SelectItem>
                              <SelectItem value="edtech">EdTech & Learning Platforms</SelectItem>
                              <SelectItem value="iot">IoT & Embedded Systems</SelectItem>
                              <SelectItem value="analytics">AI, Data & Analytics</SelectItem>
                              <SelectItem value="mobile">Mobile App Development</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="budget" className="text-sm font-medium">Project Budget</Label>
                          <Select onValueChange={(value) => handleInputChange("budget", value)}>
                            <SelectTrigger className="h-11">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-50k">Under $50,000</SelectItem>
                              <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                              <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                              <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                              <SelectItem value="over-500k">$500,000+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-medium">Project Description *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your project requirements, goals, and timeline..."
                          rows={4}
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          required
                          className="resize-none"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full h-12 text-base font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Get in touch</h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                  We're here to help you transform your business. Reach out to us through any of the channels below, 
                  and our team will respond promptly to discuss your project needs.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-600 bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="text-blue-600 mt-1 p-2 bg-blue-50 rounded-lg">
                            {info.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold mb-2 text-sm sm:text-base">{info.title}</h3>
                            <div className="space-y-1 mb-3">
                              {info.details.map((detail, detailIndex) => (
                                <p
                                  key={detailIndex}
                                  className="text-xs sm:text-sm text-muted-foreground break-words"
                                >
                                  {detail}
                                </p>
                              ))}
                            </div>
                            {info.action && (
                              <Button variant="ghost" size="sm" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                                {info.action}
                                <ArrowRight className="ml-1 h-3 w-3" />
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Global Offices */}
      <motion.section
        className="py-12 sm:py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Global Presence
            </motion.h2>
            <motion.p 
              className="text-sm sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              With offices around the world, we're always close to our clients and ready to provide local support.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card
                  className={`relative h-full hover:shadow-lg transition-all duration-300 bg-white/90 backdrop-blur-sm ${
                    office.isHeadquarters ? "ring-2 ring-blue-600 shadow-lg" : ""
                  }`}
                >
                  {office.isHeadquarters && (
                    <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-xs">
                      HQ
                    </Badge>
                  )}
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base sm:text-lg">{office.city}</CardTitle>
                    <CardDescription className="text-sm">{office.country}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {office.address}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {office.phone}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {office.timezone}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-12 sm:py-16 px-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-blue-100 max-w-2xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Don't wait to transform your business. Schedule a free consultation with our experts today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto font-medium bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}