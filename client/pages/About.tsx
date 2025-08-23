
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Award,
  Users,
  Globe,
  Target,
  Calendar,
  TrendingUp,
} from "lucide-react";

export default function About() {
  const milestones = [
    {
      year: "2014",
      title: "Foundation",
      description:
        "IBSRA Software was founded with a vision to transform businesses through innovative technology solutions.",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      year: "2017",
      title: "Enterprise Expansion",
      description:
        "Launched our enterprise software division, serving Fortune 500 companies with ERP and CRM solutions.",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      year: "2019",
      title: "Global Reach",
      description:
        "Expanded operations internationally, serving clients across 25+ countries with diverse software needs.",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      year: "2021",
      title: "AI & Analytics Focus",
      description:
        "Specialized in artificial intelligence and data analytics, helping businesses leverage big data for insights.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description:
        "Achieved ISO 27001 certification and became AWS Advanced Partner, demonstrating our commitment to excellence.",
      icon: <Award className="h-6 w-6" />,
    },
    {
      year: "2024",
      title: "Innovation Leadership",
      description:
        "Leading the market with cutting-edge IoT solutions and next-generation e-commerce platforms.",
      icon: <Users className="h-6 w-6" />,
    },
  ];

  const values = [
    {
      title: "Innovation First",
      description:
        "We continuously push the boundaries of technology to deliver groundbreaking solutions.",
      icon: <TrendingUp className="h-8 w-8" />,
    },
    {
      title: "Client Success",
      description:
        "Our clients' success is our primary measure of achievement, driving everything we do.",
      icon: <Users className="h-8 w-8" />,
    },
    {
      title: "Quality Excellence",
      description:
        "We maintain the highest standards in software development and delivery processes.",
      icon: <Award className="h-8 w-8" />,
    },
    {
      title: "Global Impact",
      description:
        "We create solutions that make a positive difference for businesses worldwide.",
      icon: <Globe className="h-8 w-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-0 pb-16 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6 animate-bounce">
            <Calendar className="h-4 w-4 mr-2" />
            10+ Years of Innovation
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent transform transition-all duration-1000 hover:scale-105">
            Our Story of
            <span className="block animate-pulse">Digital Transformation</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto transform transition-all duration-500 hover:text-foreground">
            Since 2014, IBSRA Software has been at the forefront of
            technological innovation, helping businesses worldwide embrace
            digital transformation and achieve unprecedented growth.
          </p>
        </div>
      </section>

      {/* Company History Timeline */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:text-blue-600 transition-colors duration-300">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A decade of growth, innovation, and success stories that have
              shaped us into the leading software provider we are today.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full animate-pulse"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} transform transition-all duration-700 hover:scale-105`}
                >
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}
                  >
                    <Card className="bg-background shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 hover:border-blue-200">
                      <CardHeader>
                        <div
                          className={`flex items-center gap-3 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
                        >
                          <div className="text-blue-600 transform transition-all duration-300 hover:scale-125 hover:rotate-12">
                            {milestone.icon}
                          </div>
                          <div>
                            <CardTitle className="text-2xl font-bold text-blue-600 hover:text-purple-600 transition-colors duration-300">
                              {milestone.year}
                            </CardTitle>
                            <CardDescription className="text-lg font-semibold">
                              {milestone.title}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="relative z-10 w-6 h-6 bg-blue-600 rounded-full border-4 border-background shadow-lg animate-pulse hover:animate-bounce transition-all duration-300 hover:bg-purple-600 hover:scale-150"></div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 animate-bounce">
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:text-blue-600 transition-colors duration-300">
              What Drives Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our core values guide every decision and define how we approach
              software development and client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 cursor-pointer"
              >
                <CardHeader>
                  <div className="text-blue-600 mb-4 flex justify-center transform transition-all duration-500 hover:scale-125 hover:rotate-12 hover:text-purple-600">
                    {value.icon}
                  </div>
                  <CardTitle className="hover:text-blue-600 transition-colors duration-300">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground hover:text-foreground transition-colors duration-300">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 transform transition-all duration-700 hover:scale-105">Our Mission</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed transform transition-all duration-500 hover:text-white">
            To empower businesses worldwide with innovative software solutions
            that drive growth, enhance efficiency, and create sustainable
            competitive advantages in an ever-evolving digital landscape.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "150+", label: "Happy Clients" },
              { number: "25+", label: "Countries Served" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center transform transition-all duration-500 hover:scale-110 cursor-pointer"
              >
                <div className="text-3xl font-bold mb-2 hover:animate-pulse">{stat.number}</div>
                <div className="text-blue-100 hover:text-white transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}