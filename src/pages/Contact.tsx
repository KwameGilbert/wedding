import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Zap,
  Sun,
  Calculator,
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
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    energyBill: "",
    roofSize: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "solar@eek.com",
      subtitle: "Get a response within 4 hours",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subtitle: "Mon-Fri, 8AM-7PM EST",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Our Showroom",
      details: "123 Solar Avenue",
      subtitle: "San Francisco, CA 94105",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: "Monday - Saturday",
      subtitle: "8:00 AM - 7:00 PM EST",
    },
  ];

  const propertyTypes = [
    "Single Family Home",
    "Townhouse",
    "Condominium",
    "Apartment Building",
    "Commercial Building",
    "Industrial Facility",
    "Other",
  ];

  const energyBillRanges = [
    "$50 - $100/month",
    "$100 - $200/month",
    "$200 - $300/month",
    "$300 - $500/month",
    "$500+/month",
  ];

  const roofSizes = [
    "Small (under 1,000 sq ft)",
    "Medium (1,000 - 2,000 sq ft)",
    "Large (2,000 - 3,000 sq ft)",
    "Very Large (3,000+ sq ft)",
    "Not sure",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Solar quote request:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

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
                Get Your Solar Quote
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Ready to switch to clean, renewable energy? Get a personalized
              solar quote and take the first step towards energy independence.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-eek-blue-400" />
                <span>Free Quote</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-eek-blue-400" />
                <span>Expert Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Sun className="w-5 h-5 text-eek-blue-400" />
                <span>Custom Design</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Solar Quote Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-eek-blue-400/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                    <Sun className="w-8 h-8 text-eek-blue-400" />
                    Request Solar Quote
                  </CardTitle>
                  <p className="text-gray-300">
                    Get a personalized solar quote in under 24 hours. Our
                    experts will design a system tailored to your energy needs.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          className="bg-slate-700/50 border-eek-blue-400/30 text-white placeholder-gray-400 focus:border-eek-blue-400"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className="bg-slate-700/50 border-eek-blue-400/30 text-white placeholder-gray-400 focus:border-eek-blue-400"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className="bg-slate-700/50 border-eek-blue-400/30 text-white placeholder-gray-400 focus:border-eek-blue-400"
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-white">Property Type *</Label>
                        <Select
                          value={formData.propertyType}
                          onValueChange={(value) =>
                            handleInputChange("propertyType", value)
                          }
                        >
                          <SelectTrigger className="bg-slate-700/50 border-eek-blue-400/30 text-white">
                            <SelectValue placeholder="Select property type" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-eek-blue-400/30">
                            {propertyTypes.map((type) => (
                              <SelectItem
                                key={type}
                                value={type}
                                className="text-white hover:bg-eek-blue-500/20"
                              >
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-white">
                          Monthly Energy Bill
                        </Label>
                        <Select
                          value={formData.energyBill}
                          onValueChange={(value) =>
                            handleInputChange("energyBill", value)
                          }
                        >
                          <SelectTrigger className="bg-slate-700/50 border-eek-blue-400/30 text-white">
                            <SelectValue placeholder="Select bill range" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-eek-blue-400/30">
                            {energyBillRanges.map((range) => (
                              <SelectItem
                                key={range}
                                value={range}
                                className="text-white hover:bg-eek-blue-500/20"
                              >
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white">Roof Size (approx.)</Label>
                      <Select
                        value={formData.roofSize}
                        onValueChange={(value) =>
                          handleInputChange("roofSize", value)
                        }
                      >
                        <SelectTrigger className="bg-slate-700/50 border-eek-blue-400/30 text-white">
                          <SelectValue placeholder="Select roof size" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-eek-blue-400/30">
                          {roofSizes.map((size) => (
                            <SelectItem
                              key={size}
                              value={size}
                              className="text-white hover:bg-eek-blue-500/20"
                            >
                              {size}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">
                        Additional Details
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        className="bg-slate-700/50 border-eek-blue-400/30 text-white placeholder-gray-400 focus:border-eek-blue-400 min-h-[120px]"
                        placeholder="Tell us about your energy goals, any specific requirements, timeline, or questions about solar installation..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-eek-blue-500 to-eek-blue-600 hover:from-eek-blue-600 hover:to-eek-blue-700 text-white font-semibold py-3 rounded-full shadow-xl"
                    >
                      <Calculator className="w-5 h-5 mr-2" />
                      Get My Solar Quote
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Our solar experts are ready to help you harness the power of
                  the sun. Contact us today for a free consultation and custom
                  solar solution.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-slate-800/30 border-eek-blue-400/20 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-eek-blue-400 to-eek-blue-600 rounded-xl flex items-center justify-center text-white">
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white mb-1">
                              {info.title}
                            </h3>
                            <p className="text-eek-blue-400 font-medium mb-1">
                              {info.details}
                            </p>
                            <p className="text-gray-400 text-sm">
                              {info.subtitle}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Solar Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-eek-blue-500/20 to-eek-blue-600/20 backdrop-blur-sm border border-eek-blue-400/20 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Sun className="w-6 h-6 text-eek-blue-400" />
                  Why Choose Solar?
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-eek-blue-400 rounded-full"></div>
                    <span>Save 50-90% on energy bills</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-eek-blue-400 rounded-full"></div>
                    <span>25-year warranty</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-eek-blue-400 rounded-full"></div>
                    <span>Increase home value</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-eek-blue-400 rounded-full"></div>
                    <span>Federal tax credits</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Solar FAQ
            </h2>
            <p className="text-xl text-gray-300">
              Common questions about solar installation and our services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How much can I save with solar panels?",
                answer:
                  "Most homeowners save 50-90% on their electricity bills. The exact savings depend on your location, roof size, energy usage, and local utility rates. Our solar calculator provides personalized estimates.",
              },
              {
                question: "How long does solar installation take?",
                answer:
                  "Typical residential installations take 1-3 days. The entire process from consultation to activation usually takes 4-8 weeks, including permits and utility interconnection.",
              },
              {
                question: "What maintenance do solar panels require?",
                answer:
                  "Solar panels require minimal maintenance. We recommend annual inspections and occasional cleaning. Our monitoring system alerts you to any performance issues, and we provide comprehensive maintenance packages.",
              },
              {
                question: "Do solar panels work during cloudy days?",
                answer:
                  "Yes! Solar panels still generate electricity on cloudy days, though at reduced efficiency. Modern panels can produce 10-25% of their peak output even in overcast conditions.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/50 border-eek-blue-400/20 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <HelpWidget />
    </div>
  );
};

export default Contact;
