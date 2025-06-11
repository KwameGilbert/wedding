import { motion } from "framer-motion";
import {
  Zap,
  Sun,
  Cpu,
  Award,
  ChevronRight,
  Battery,
  Shield,
  Lightbulb,
} from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const About = () => {
  const values = [
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Renewable Energy",
      description:
        "Committed to sustainable solar solutions that reduce carbon footprint and energy costs for our clients.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Electrical Excellence",
      description:
        "Advanced electrical systems designed for safety, efficiency, and reliability in every installation.",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Smart Technology",
      description:
        "Cutting-edge software platforms for monitoring, optimization, and management of energy systems.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Assurance",
      description:
        "Industry-leading standards and certifications ensuring the highest quality in all our installations.",
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=400&h=400&fit=crop&crop=face",
      bio: "20+ years in renewable energy systems and smart grid technology.",
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Electrical Engineer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Expert in power systems design and energy storage solutions.",
    },
    {
      name: "Emily Davis",
      role: "Software Development Lead",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Specializing in IoT platforms and energy management software.",
    },
    {
      name: "Alex Thompson",
      role: "Solar Installation Manager",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "15+ years installing residential and commercial solar systems.",
    },
  ];

  const stats = [
    { number: "2,500+", label: "Solar Installations" },
    { number: "50MW+", label: "Energy Generated" },
    { number: "12+", label: "Years Experience" },
    { number: "99.8%", label: "System Uptime" },
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
                About EEK Energy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Leading the sustainable energy revolution with innovative solar
              panel solutions, smart electrical systems, and advanced software
              platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-eek-blue-500 to-eek-blue-600 hover:from-eek-blue-600 hover:to-eek-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-xl"
              >
                Get Solar Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full"
              >
                Our Technology
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-eek-blue-400 to-eek-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                At EEK Energy, we're committed to accelerating the world's
                transition to sustainable energy through innovative solar
                technology, intelligent electrical systems, and powerful
                software solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Our integrated approach combines cutting-edge solar panel
                technology with smart electrical infrastructure and real-time
                monitoring software to maximize energy efficiency and minimize
                environmental impact.
              </p>
              <Button className="bg-gradient-to-r from-eek-blue-500 to-eek-blue-600 hover:from-eek-blue-600 hover:to-eek-blue-700 text-white font-semibold px-6 py-3 rounded-full">
                Learn More
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-eek-blue-500/20 to-eek-blue-600/20 backdrop-blur-sm border border-eek-blue-400/20 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-eek-blue-400 to-eek-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Sun className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Clean Energy Future
                  </h3>
                  <p className="text-gray-300">
                    Powering tomorrow with sustainable solar solutions today
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles guide our approach to renewable energy solutions
              and drive every aspect of our business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/50 border-eek-blue-400/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-eek-blue-400 to-eek-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto text-white">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Expert Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the engineers, technicians, and innovators driving the future
              of renewable energy technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-slate-800/50 border-eek-blue-400/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-eek-blue-400 font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </CardContent>
                </Card>
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
            <Battery className="w-16 h-16 text-eek-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Ready to Go Solar?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have made the switch to
              clean, renewable energy with our comprehensive solar solutions.
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
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
