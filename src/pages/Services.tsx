import { motion } from "framer-motion";
import {
  Sun,
  Zap,
  Monitor,
  Battery,
  Shield,
  Wrench,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Home,
  Building,
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

const Services = () => {
  const services = [
    {
      icon: <Sun className="w-12 h-12" />,
      title: "Solar Panel Installation",
      description:
        "Premium solar panel systems designed for maximum energy efficiency and long-term reliability.",
      features: [
        "High-efficiency photovoltaic panels",
        "Professional installation",
        "25-year warranty",
        "ROI optimization",
      ],
      gradient: "from-eek-blue-400 to-eek-blue-600",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Electrical Systems",
      description:
        "Complete electrical infrastructure solutions for residential and commercial solar installations.",
      features: [
        "Smart inverters",
        "Grid-tie systems",
        "Electrical upgrades",
        "Safety inspections",
      ],
      gradient: "from-eek-blue-500 to-eek-blue-700",
    },
    {
      icon: <Battery className="w-12 h-12" />,
      title: "Energy Storage",
      description:
        "Advanced battery storage systems to maximize energy independence and backup power capabilities.",
      features: [
        "Lithium-ion batteries",
        "Backup power systems",
        "Load management",
        "Remote monitoring",
      ],
      gradient: "from-eek-blue-300 to-eek-blue-500",
    },
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Energy Management Software",
      description:
        "Intelligent software platforms for real-time monitoring, analytics, and optimization of energy systems.",
      features: [
        "Real-time monitoring",
        "Performance analytics",
        "Mobile app access",
        "Automated alerts",
      ],
      gradient: "from-eek-blue-600 to-eek-blue-800",
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Maintenance & Support",
      description:
        "Comprehensive maintenance programs to ensure optimal performance and longevity of your solar investment.",
      features: [
        "Preventive maintenance",
        "Performance optimization",
        "24/7 support",
        "Warranty coverage",
      ],
      gradient: "from-eek-blue-400 to-eek-blue-700",
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Energy Consulting",
      description:
        "Expert consultation services to design and implement the most effective renewable energy solutions.",
      features: [
        "Energy audits",
        "Custom system design",
        "ROI analysis",
        "Financing options",
      ],
      gradient: "from-eek-blue-500 to-eek-blue-900",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Site Assessment",
      description:
        "Comprehensive evaluation of your property's solar potential, electrical capacity, and energy needs.",
    },
    {
      step: "02",
      title: "Custom Design",
      description:
        "Our engineers design a tailored solar and electrical system optimized for your specific requirements.",
    },
    {
      step: "03",
      title: "Professional Installation",
      description:
        "Certified technicians install your system with precision, ensuring safety and optimal performance.",
    },
    {
      step: "04",
      title: "Monitoring & Support",
      description:
        "Ongoing monitoring, maintenance, and support to maximize your system's efficiency and lifespan.",
    },
  ];

  const benefits = [
    "Certified solar installers with 12+ years experience",
    "Premium equipment from leading manufacturers",
    "Comprehensive 25-year system warranties",
    "Real-time monitoring and analytics platform",
    "Financing options available",
    "Professional electrical and software integration",
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
                Solar Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Complete renewable energy solutions from solar panel installation
              to smart electrical systems and advanced monitoring software.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-eek-blue-500 to-eek-blue-600 hover:from-eek-blue-600 hover:to-eek-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-xl"
            >
              Get Free Quote
              <Sparkles className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="bg-slate-800/50 border-eek-blue-400/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full overflow-hidden">
                  <CardHeader>
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold text-white mb-2">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm text-gray-400"
                        >
                          <CheckCircle className="w-4 h-4 text-eek-blue-400 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      className="mt-6 text-eek-blue-400 hover:text-eek-blue-300 hover:bg-eek-blue-400/10 p-0 h-auto font-medium group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology ensuring successful solar installations from
              initial assessment to long-term support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connecting Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-eek-blue-400/50 to-transparent z-0" />
                )}

                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-eek-blue-400 to-eek-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto text-white font-black text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
                Why Choose EEK Energy?
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                We combine solar expertise with electrical engineering and
                software innovation to deliver comprehensive renewable energy
                solutions that maximize your investment.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-eek-blue-400 flex-shrink-0" />
                    <span className="text-gray-300 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-eek-blue-500/20 to-eek-blue-600/20 backdrop-blur-sm border border-eek-blue-400/20 rounded-2xl p-6 text-center">
                    <Home className="w-8 h-8 text-eek-blue-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white">
                      Residential
                    </div>
                    <div className="text-sm text-gray-300">Solar Solutions</div>
                  </div>
                  <div className="bg-gradient-to-br from-eek-blue-500/20 to-eek-blue-600/20 backdrop-blur-sm border border-eek-blue-400/20 rounded-2xl p-6 text-center">
                    <Shield className="w-8 h-8 text-eek-blue-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white">
                      Certified
                    </div>
                    <div className="text-sm text-gray-300">Installers</div>
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="bg-gradient-to-br from-eek-blue-500/20 to-eek-blue-600/20 backdrop-blur-sm border border-eek-blue-400/20 rounded-2xl p-6 text-center">
                    <Building className="w-8 h-8 text-eek-blue-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white">
                      Commercial
                    </div>
                    <div className="text-sm text-gray-300">
                      Large Scale Projects
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-eek-blue-500/20 to-eek-blue-600/20 backdrop-blur-sm border border-eek-blue-400/20 rounded-2xl p-6 text-center">
                    <Monitor className="w-8 h-8 text-eek-blue-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white">Smart</div>
                    <div className="text-sm text-gray-300">Monitoring</div>
                  </div>
                </div>
              </div>
            </motion.div>
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
              Ready to Harness Solar Power?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Take the first step towards energy independence with our
              comprehensive solar solutions. Get a free consultation and custom
              quote today.
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

export default Services;
