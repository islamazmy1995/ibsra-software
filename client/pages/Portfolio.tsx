import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import ImageSlider from "@/components/ui/ImageSlider";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ExternalLink,
  Calendar,
  Users,
  TrendingUp,
  Database,
  Smartphone,
  Cloud,
  Code,
  ShoppingCart,
  GraduationCap,
  Zap,
} from "lucide-react";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Check URL parameters on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get("category");
    if (
      categoryParam &&
      [
        "enterprise",
        "ecommerce",
        "edtech",
        "iot",
        "analytics",
        "mobile",
      ].includes(categoryParam)
    ) {
      setSelectedCategory(categoryParam);
    }
  }, []);

  const caseStudies = [
    {
      id: 1,
      title: "Global Manufacturing ERP System",
      category: "enterprise",
      client: "TechFlow Manufacturing",
      industry: "Manufacturing",
      duration: "18 months",
      teamSize: "12 developers",
      images: [
        "cards/MCCED.png",
        "cards/MCCED2.png",
        "cards/MCCED3.png"
      ],
      description:
        "Complete enterprise resource planning system for a global manufacturing company with 50+ locations.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Microservices"],
      results: [
        "40% increase in operational efficiency",
        "60% reduction in manual processes",
        "Real-time inventory tracking across all locations",
        "25% cost reduction in supply chain management",
      ],
      icon: <Database className="h-6 w-6" />,
    },
    {
      id: 2,
      title: "E-Commerce Marketplace Platform",
      category: "ecommerce",
      client: "RetailHub",
      industry: "E-Commerce",
      duration: "12 months",
      teamSize: "8 developers",
      images: [
        "cards/QuickCart.png",
        "cards/QuickCart1.png",
        "cards/QuickCart2.png",
      ],
      description:
        "Multi-vendor e-commerce platform supporting 10,000+ vendors and millions of transactions.",
      technologies: ["React Native", "Node.js", "MongoDB", "Stripe", "Redis"],
      results: [
        "1M+ users within 6 months",
        "99.9% uptime during peak sales",
        "30% increase in vendor onboarding",
        "$50M+ in transaction volume",
      ],
      icon: <ShoppingCart className="h-6 w-6" />,
    },
    {
      id: 3,
      title: "AI-Powered Learning Management System",
      category: "edtech",
      client: "EduTech Solutions",
      industry: "Education",
      duration: "14 months",
      teamSize: "10 developers",
      images: [
        "cards/Smart Learning Academy.png",
        "cards/Smart Learning Academy1.png",
        "cards/Smart Learning Academy2.png"
      ],
      description:
        "Intelligent LMS with AI-driven personalized learning paths for 100,000+ students.",
      technologies: ["React", "Python", "TensorFlow", "AWS", "GraphQL"],
      results: [
        "85% improvement in student engagement",
        "70% increase in course completion rates",
        "AI recommendations increased learning efficiency by 45%",
        "Deployed across 500+ educational institutions",
      ],
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      id: 4,
      title: "Smart Factory IoT Solution",
      category: "iot",
      client: "IndustrialTech Corp",
      industry: "Manufacturing",
      duration: "16 months",
      teamSize: "15 developers",
      images: [
        "cards/Easy Mall.png",
        "cards/Easy Mall1.png",
        "cards/Easy Mall2.png"
      ],
      description:
        "Complete IoT ecosystem for smart factory automation with real-time monitoring and predictive maintenance.",
      technologies: ["IoT Sensors", "Python", "InfluxDB", "Grafana", "Docker"],
      results: [
        "35% reduction in equipment downtime",
        "50% improvement in predictive maintenance accuracy",
        "20% increase in overall equipment efficiency",
        "Real-time monitoring of 1000+ factory sensors",
      ],
      icon: <Zap className="h-6 w-6" />,
    },
    {
      id: 5,
      title: "Healthcare Data Analytics Platform",
      category: "analytics",
      client: "MedData Systems",
      industry: "Healthcare",
      duration: "10 months",
      teamSize: "6 developers",
      images: [
        "cards/revea.png",
        "cards/revea1.png",
        "cards/revea2.png"
      ],
      description:
        "Advanced analytics platform processing medical data from 200+ hospitals for predictive insights.",
      technologies: [
        "Python",
        "Apache Spark",
        "Tableau",
        "AWS",
        "Machine Learning",
      ],
      results: [
        "Processing 10TB+ of medical data daily",
        "90% accuracy in predictive health models",
        "30% improvement in patient outcome predictions",
        "HIPAA compliant data processing",
      ],
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      id: 6,
      title: "Mobile Banking Application",
      category: "mobile",
      client: "FinTech Bank",
      industry: "Financial Services",
      duration: "8 months",
      teamSize: "7 developers",
      images: [
        "cards/Ocean Gates.png",
        "cards/Ocean Gates1.png",
        "cards/Ocean Gates2.png"
      ],
      description:
        "Secure mobile banking app with biometric authentication and real-time transaction processing.",
      technologies: [
        "React Native",
        "Node.js",
        "MongoDB",
        "Blockchain",
        "Biometrics",
      ],
      results: [
        "2M+ app downloads in first year",
        "99.99% transaction success rate",
        "Bank-grade security compliance",
        "4.8/5 app store rating",
      ],
      icon: <Smartphone className="h-6 w-6" />,
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", count: caseStudies.length },
    {
      id: "enterprise",
      label: "Enterprise Software",
      count: caseStudies.filter((c) => c.category === "enterprise").length,
    },
    {
      id: "ecommerce",
      label: "E-Commerce",
      count: caseStudies.filter((c) => c.category === "ecommerce").length,
    },
    {
      id: "edtech",
      label: "EdTech",
      count: caseStudies.filter((c) => c.category === "edtech").length,
    },
    {
      id: "iot",
      label: "IoT & Embedded",
      count: caseStudies.filter((c) => c.category === "iot").length,
    },
    {
      id: "analytics",
      label: "AI & Analytics",
      count: caseStudies.filter((c) => c.category === "analytics").length,
    },
    {
      id: "mobile",
      label: "Mobile Apps",
      count: caseStudies.filter((c) => c.category === "mobile").length,
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? caseStudies
      : caseStudies.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            <Code className="h-4 w-4 mr-2" />
            Our Success Stories
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Portfolio &<span className="block">Case Studies</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Explore our successful projects and discover how we've helped
            businesses across industries achieve their digital transformation
            goals with innovative software solutions.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                {category.label}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden">
                <ImageSlider images={project.images} title={project.title} />



                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">
                      {project.industry}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 text-blue-600">
                    {project.icon}
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl leading-tight">
                      {project.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </CardDescription>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{project.teamSize}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-sm">Key Results:</h4>
                    <ul className="text-sm space-y-1">
                      {project.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <TrendingUp className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {result}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full" variant="outline">
                    View Case Study
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
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
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar success with your
            software development needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Start Your Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
