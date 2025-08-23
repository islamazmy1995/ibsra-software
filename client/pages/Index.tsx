import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Globe,
  Shield,
  Code,
  Smartphone,
  Cloud,
  Database,
  Zap,
  TrendingUp,
} from "lucide-react";

export default function Index() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <Database className="h-8 w-8" />,
      title: "Enterprise Software Solutions",
      description:
        "Complete ERP, CRM, HRM, and SCM systems that streamline your business operations.",
      features: [
        "Enterprise Resource Planning (ERP)",
        "Customer Relationship Management (CRM)",
        "Human Resource Management (HRM)",
        "Supply Chain Management (SCM)",
      ],
      category: "enterprise",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "E-Commerce & RetailTech",
      description:
        "Modern retail solutions including marketplaces, POS systems, and online stores.",
      features: [
        "Online marketplaces",
        "Point of Sale (POS) systems",
        "E-commerce platforms",
        "Inventory management",
      ],
      category: "ecommerce",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "EdTech & Learning Platforms",
      description:
        "Educational technology solutions that enhance learning experiences and outcomes.",
      features: [
        "Learning Management Systems (LMS)",
        "E-learning platforms",
        "Student mobile apps",
        "Virtual classroom solutions",
      ],
      category: "edtech",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "IoT & Embedded Systems",
      description:
        "Smart devices, robotics, and automation solutions for the connected world.",
      features: [
        "Smart device development",
        "Robotics systems",
        "Industrial automation",
        "Sensor networks",
      ],
      category: "iot",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "AI, Data & Analytics",
      description:
        "Advanced machine learning, data engineering, and predictive analytics solutions.",
      features: [
        "Machine learning models",
        "Data engineering pipelines",
        "Predictive analytics",
        "Business intelligence dashboards",
      ],
      category: "analytics",
    },
  ];

  const stats = [
    {
      number: "500+",
      label: "Projects Delivered",
      icon: <CheckCircle className="h-6 w-6" />,
    },
    {
      number: "150+",
      label: "Happy Clients",
      icon: <Users className="h-6 w-6" />,
    },
    {
      number: "10+",
      label: "Years Experience",
      icon: <Award className="h-6 w-6" />,
    },
    {
      number: "25+",
      label: "Countries Served",
      icon: <Globe className="h-6 w-6" />,
    },
  ];

  const certifications = [
    "ISO 27001 Certified",
    "AWS Partner",
    "Microsoft Gold Partner",
    "Google Cloud Partner",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              <Zap className="h-4 w-4 mr-2" />
              Innovation-Driven Software Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-indigo-700">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 10 }}
                transition={{ duration: 1 }}
              >
                Transform Your Business with
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 0.3 }}
              >
                Cutting-Edge Software
              </motion.span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              IBSRA delivers innovative software solutions that drive growth,
              enhance efficiency, and create lasting competitive advantages for
              businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                variant="customOutline"
                className="text-lg px-8"
                asChild
              >
                <a href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8"
                asChild
              >
                <a href="/portfolio">View Our Work</a>
              </Button>
            </div>


            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-blue-600">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-foreground">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Innovation at Every Level
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept to deployment, we deliver comprehensive software
              solutions that drive digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${activeService === index
                  ? "ring-2 ring-blue-600 bg-blue-50 dark:bg-blue-950/20"
                  : ""
                  }`}
                onClick={() => setActiveService(index)}
              >
                <CardHeader>
                  <div className="text-blue-600 mb-2">{service.icon}</div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Active Service Details */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-blue-200">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="text-blue-600">
                  {services[activeService].icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">
                    {services[activeService].title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {services[activeService].description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services[activeService].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="mt-6" asChild>
                    <a
                      href={`/portfolio?category=${services[activeService].category}`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section id="portfolio" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Our Work
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects & Case Studies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore some of our most successful projects and see how we've
              helped businesses achieve digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden">
                <img
                  src="cards/MCCED.png"
                  alt="ERP System"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                  Enterprise
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">
                  Global Manufacturing ERP
                </CardTitle>
                <CardDescription>
                  Complete enterprise resource planning system for 50+ locations
                  worldwide.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-muted-foreground">
                    40% efficiency increase
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge variant="outline" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    AWS
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden">
                <img
                  src="cards/QuickCart.png"
                  alt="E-Commerce Platform"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-purple-600 text-white">
                  E-Commerce
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">
                  Multi-Vendor Marketplace
                </CardTitle>
                <CardDescription>
                  E-commerce platform supporting 10,000+ vendors and millions of
                  transactions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-muted-foreground">
                    $50M+ transaction volume
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge variant="outline" className="text-xs">
                    React Native
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    MongoDB
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Stripe
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden">
                <img
                  src="cards/Smart Learning Academy.png"
                  alt="AI Learning Platform"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-green-600 text-white">
                  EdTech
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">
                  AI-Powered Learning Platform
                </CardTitle>
                <CardDescription>
                  Intelligent LMS with personalized learning paths for 100,000+
                  students.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-muted-foreground">
                    85% engagement increase
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Python
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    TensorFlow
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    GraphQL
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <a href="/portfolio">
                View All Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust & Certifications Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Built on Trust & Excellence
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our certifications and partnerships ensure the highest standards
              of security, quality, and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-background rounded-lg border"
              >
                <Shield className="h-6 w-6 text-green-600" />
                <span className="font-medium">{cert}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 dark:bg-green-900/20 rounded-full">
              <Shield className="h-5 w-5 text-green-600" />
              <span className="text-green-800 dark:text-green-400 font-medium">
                100% Security Compliant & GDPR Ready
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss how IBSRA can help you innovate, scale, and succeed in
            the digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
