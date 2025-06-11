import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Cloud,
  Palette,
  BarChart3,
  Shield,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
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

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks and best practices for performance and scalability.",
      features: [
        "React & Next.js",
        "TypeScript",
        "API Integration",
        "SEO Optimization",
      ],
      gradient: "from-eek-blue-400 to-eek-blue-600",
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: [
        "React Native",
        "iOS & Android",
        "App Store Publishing",
        "Push Notifications",
      ],
      gradient: "from-eek-blue-500 to-eek-blue-700",
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and deployment strategies that grow with your business needs.",
      features: ["AWS & Azure", "DevOps", "Auto-scaling", "Security"],
      gradient: "from-eek-blue-300 to-eek-blue-500",
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive designs that create memorable user experiences and drive engagement.",
      features: [
        "User Research",
        "Prototyping",
        "Design Systems",
        "Usability Testing",
      ],
      gradient: "from-eek-blue-600 to-eek-blue-800",
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Analytics & SEO",
      description:
        "Data-driven optimization strategies to improve visibility, performance, and user acquisition.",
      features: [
        "Google Analytics",
        "Search Optimization",
        "Performance Monitoring",
        "A/B Testing",
      ],
      gradient: "from-eek-blue-400 to-eek-blue-700",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Security & Maintenance",
      description:
        "Comprehensive security solutions and ongoing maintenance to keep your applications safe and updated.",
      features: [
        "Security Audits",
        "Regular Updates",
        "Backup Solutions",
        "24/7 Monitoring",
      ],
      gradient: "from-eek-blue-500 to-eek-blue-900",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description:
        "We dive deep into your vision, goals, and requirements to create a comprehensive project roadmap.",
    },
    {
      step: "02",
      title: "Design",
      description:
        "Our design team crafts beautiful, user-centered interfaces that align with your brand and objectives.",
    },
    {
      step: "03",
      title: "Development",
      description:
        "Expert developers build your solution using cutting-edge technologies and industry best practices.",
    },
    {
      step: "04",
      title: "Launch",
      description:
        "We deploy your project with thorough testing, optimization, and ongoing support for success.",
    },
  ];

  const benefits = [
    "Expert team with 8+ years experience",
    "Agile development methodology",
    "24/7 support and maintenance",
    "Transparent communication",
    "On-time delivery guarantee",
    "Scalable and future-proof solutions",
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
                Our Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              From concept to deployment, we provide comprehensive digital
              solutions that transform your ideas into powerful, scalable
              applications.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-eek-blue-500 to-eek-blue-600 hover:from-eek-blue-600 hover:to-eek-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-xl"
            >
              Get Started Today
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
              A proven methodology that ensures successful project delivery from
              initial concept to final deployment.
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
                Why Choose EEK?
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                We combine technical expertise with creative vision to deliver
                solutions that not only meet your requirements but exceed your
                expectations.
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
                    <Zap className="w-8 h-8 text-eek-blue-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white">Fast</div>
                    <div className="text-sm text-gray-300">Delivery</div>
                  </div>
                  <div className="bg-gradient-to-br from-eek-blue-500/20 to-eek-blue-600/20 backdrop-blur-sm border border-eek-blue-400/20 rounded-2xl p-6 text-center">
                    <Users className="w-8 h-8 text-eek-blue-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white">Expert</div>
                    <div className="text-sm text-gray-300">Team</div>
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="bg-gradient-to-br from-eek-blue-500/20 to-eek-blue-600/20 backdrop-blur-sm border border-eek-blue-400/20 rounded-2xl p-6 text-center">
                    <Shield className="w-8 h-8 text-eek-blue-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white">Secure</div>
                    <div className="text-sm text-gray-300">Solutions</div>
                  </div>
                  <div className="bg-gradient-to-br from-eek-blue-500/20 to-eek-blue-600/20 backdrop-blur-sm border border-eek-blue-400/20 rounded-2xl p-6 text-center">
                    <BarChart3 className="w-8 h-8 text-eek-blue-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white">
                      Scalable
                    </div>
                    <div className="text-sm text-gray-300">Growth</div>
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
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Ready to Transform Your Ideas?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and explore how our services can help
              you achieve your digital goals with innovative solutions.
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
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
