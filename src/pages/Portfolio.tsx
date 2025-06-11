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
} from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
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
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "saas", label: "SaaS" },
  ];

  const projects = [
    {
      id: 1,
      title: "TechFlow SaaS Platform",
      description:
        "A comprehensive project management platform for tech teams with real-time collaboration features.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      category: "saas",
      tags: ["React", "Node.js", "PostgreSQL", "WebSocket"],
      stats: { users: "10K+", performance: "99.9%", rating: "4.9/5" },
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "EcoMart E-commerce",
      description:
        "Sustainable marketplace connecting eco-friendly brands with conscious consumers worldwide.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      category: "ecommerce",
      tags: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
      stats: { users: "50K+", sales: "$2M+", conversion: "4.2%" },
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "FitTracker Mobile App",
      description:
        "AI-powered fitness tracking app with personalized workout plans and nutrition guidance.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      category: "mobile",
      tags: ["React Native", "TensorFlow", "Firebase", "HealthKit"],
      stats: { downloads: "100K+", rating: "4.8/5", retention: "85%" },
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "DataViz Dashboard",
      description:
        "Interactive business intelligence dashboard for real-time data visualization and analytics.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      category: "web",
      tags: ["React", "D3.js", "Python", "FastAPI"],
      stats: { clients: "500+", data: "1TB+", insights: "Real-time" },
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "MedConnect Platform",
      description:
        "Telemedicine platform connecting patients with healthcare providers for remote consultations.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      category: "web",
      tags: ["Vue.js", "WebRTC", "HIPAA", "AWS"],
      stats: { consultations: "25K+", doctors: "1K+", satisfaction: "96%" },
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "CryptoTrader Pro",
      description:
        "Advanced cryptocurrency trading platform with real-time market data and automated strategies.",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      category: "saas",
      tags: ["React", "WebSocket", "Redis", "Docker"],
      stats: { volume: "$50M+", traders: "15K+", uptime: "99.99%" },
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const achievements = [
    { number: "150+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "$10M+", label: "Revenue Generated" },
    { number: "50+", label: "Technologies Used" },
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
                Our Portfolio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Discover the innovative solutions we've crafted for clients across
              industries, showcasing our expertise in modern technology and
              design.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Monitor className="w-5 h-5" />
                <span>Web Applications</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                <span>Mobile Apps</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <span>SaaS Platforms</span>
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
                    : "bg-slate-800/50 text-gray-300 hover:bg-slate-800/70 hover:text-eek-blue-400"
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
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
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
          </motion.div>
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
              Technologies We Master
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build scalable,
              performant solutions that stand the test of time.
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
              "React",
              "Next.js",
              "Vue.js",
              "React Native",
              "Node.js",
              "Python",
              "TypeScript",
              "GraphQL",
              "AWS",
              "Docker",
              "MongoDB",
              "PostgreSQL",
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
                <div className="text-white font-medium">{tech}</div>
              </motion.div>
            ))}
          </motion.div>
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
            <Zap className="w-16 h-16 text-eek-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life with innovative technology and
              exceptional design. Join our portfolio of successful projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-eek-blue-500 to-eek-blue-600 hover:from-eek-blue-600 hover:to-eek-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-xl"
              >
                Start Your Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-eek-blue-400/30 bg-eek-blue-400/10 backdrop-blur-sm hover:bg-eek-blue-400/20 text-eek-blue-400 font-semibold px-8 py-4 rounded-full"
              >
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
