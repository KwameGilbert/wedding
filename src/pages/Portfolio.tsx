import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Monitor,
  Smartphone,
  Globe,
  Zap,
  Users,
  TrendingUp,
  Filter,
  Search,
  Sun,
  Battery,
  BarChart3,
} from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HelpWidget from "../components/HelpWidget";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { useState } from "react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential Solar" },
    { id: "commercial", label: "Commercial" },
    { id: "software", label: "Energy Software" },
    { id: "electrical", label: "Electrical Systems" },
  ];

  const projects = [
    {
      id: 1,
      title: "Green Valley Residential Complex",
      description:
        "Complete solar installation for 150-home residential community with smart energy management system.",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
      category: "residential",
      tags: ["Solar Panels", "Energy Storage", "Smart Grid", "Monitoring"],
      stats: { capacity: "2.5MW", homes: "150", savings: "40%" },
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "SunTech Manufacturing Facility",
      description:
        "Large-scale commercial solar installation with advanced electrical infrastructure and real-time monitoring.",
      image:
        "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&h=600&fit=crop",
      category: "commercial",
      tags: ["Commercial Solar", "Electrical Systems", "IoT", "Analytics"],
      stats: { capacity: "5MW", reduction: "60%", uptime: "99.9%" },
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "EcoHomes Smart Energy Platform",
      description:
        "Comprehensive energy management software for residential solar systems with mobile app and web dashboard.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      category: "software",
      tags: ["React", "IoT Integration", "Mobile App", "Analytics"],
      stats: { users: "5K+", systems: "2K+", efficiency: "+25%" },
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Marina Bay Solar Installation",
      description:
        "Waterfront residential solar project with specialized electrical systems for marine environment.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      category: "residential",
      tags: ["Marine Solar", "Waterproof Systems", "Battery Storage", "Monitoring"],
      stats: { homes: "85", capacity: "1.8MW", protection: "IP67" },
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Industrial Power Management System",
      description:
        "Advanced electrical infrastructure for large manufacturing facility with automated energy optimization.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
      category: "electrical",
      tags: ["Power Systems", "Automation", "Safety Systems", "Monitoring"],
      stats: { capacity: "10MW", efficiency: "95%", safety: "Zero incidents" },
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "SmartGrid Energy Analytics",
      description:
        "AI-powered energy analytics platform for optimizing solar performance and predicting maintenance needs.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      category: "software",
      tags: ["AI/ML", "Predictive Analytics", "Cloud Platform", "API"],
      stats: { predictions: "98%", savings: "$2M+", installations: "1K+" },
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const achievements = [
    { number: "2,500+", label: "Solar Installations" },
    { number: "50MW+", label: "Total Capacity" },
    { number: "150+", label: "Software Projects" },
    { number: "99.8%", label: "System Reliability" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-eek-blue-400 to-eek-blue-600 bg-clip-text text-transparent">
                Solar Portfolio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Explore our successful solar installations, electrical systems, and
              energy management software projects that are powering the
              sustainable future.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Sun className="w-5 h-5 text-eek-blue-400" />
                <span>Solar Installations</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-eek-blue-400" />
                <span>Electrical Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <Monitor className="w-5 h-5 text-eek-blue-400" />
                <span>Energy Software</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-eek-blue-400 to-eek-blue-600 bg-clip-text text-transparent mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-400 font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-eek-blue-500 to-eek-blue-600 text-white shadow-lg"
                    : "bg-slate-800/50 text-gray-300 hover:bg-slate-800/70 hover:text-eek-blue-400 border border-eek-blue-400/20"
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-slate-800/50 border-eek-blue-400/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="bg-eek-blue-500 hover:bg-eek-blue-600 text-white p-2 h-auto"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-2 h-auto"
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </CardTitle>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-eek-blue-500/20 text-eek-blue-400 border-eek-blue-400/30"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-center text-xs">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key}>
                          <div className="font-bold text-eek-blue-400">
                            {value}
                          </div>
                          <div className="text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Technologies & Equipment
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use industry-leading solar panels, electrical components, and
              software technologies to deliver optimal performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            {[
              "Tesla Solar",
              "SunPower",
              "Enphase",
              "SolarEdge",
              "LG Chem",
              "Fronius",
              "React/TypeScript",
              "IoT Sensors",
              "AWS Cloud",
              "Machine Learning",
              "Mobile Apps",
              "Real-time Analytics",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="bg-slate-800/50 border border-eek-blue-400/20 rounded-xl p-4 text-center hover:bg-slate-800/70 transition-all duration-300"
              >
                <div className="text-white font-medium text-sm">{tech}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-eek-blue-500/20 to-eek-blue-600/20 backdrop-blur-sm border border-eek-blue-400/20 rounded-3xl p-12"
          >
            <Sun className="w-16 h-16 text-eek-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Ready for Your Solar Project?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our portfolio of successful solar installations. Let's design
              a custom renewable energy solution for your home or business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-eek-blue-500 to-eek-blue-600 hover:from-eek-blue-600 hover:to-eek-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-xl"
              >
                Get Free Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full"
              >
                Schedule Site Visit
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <HelpWidget />
    </div>
  );
};

export default Portfolio;