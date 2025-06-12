import { motion } from "framer-motion";
import WeddingHero from "../components/WeddingHero";
import WeddingNavigation from "../components/WeddingNavigation";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Calendar, MapPin, Clock, Heart, Gift, Camera } from "lucide-react";

const Wedding = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const features = [
    {
      icon: Calendar,
      title: "Save the Date",
      description: "June 15, 2024",
      details: "Mark your calendars for our special day!",
    },
    {
      icon: MapPin,
      title: "Venue",
      description: "Garden Villa Resort",
      details: "123 Romantic Lane, Love City",
    },
    {
      icon: Clock,
      title: "Ceremony Time",
      description: "4:00 PM",
      details: "Reception to follow at 6:00 PM",
    },
    {
      icon: Gift,
      title: "Registry",
      description: "Gift Registry",
      details: "Find our wishlist online",
    },
    {
      icon: Camera,
      title: "Gallery",
      description: "Photo Sharing",
      details: "Share your photos with us",
    },
    {
      icon: Heart,
      title: "RSVP",
      description: "Please Respond",
      details: "By May 1, 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Wedding Hero Section */}
      <WeddingHero />

      {/* Navigation Back to Main Site */}
      <div className="absolute top-4 left-4 z-50">
        <Button
          variant="outline"
          className="bg-white/80 backdrop-blur-sm border-pink-200 text-pink-700 hover:bg-pink-50"
          onClick={() => window.history.back()}
        >
          ← Back to Main Site
        </Button>
      </div>

      {/* Wedding Details Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-rochester text-pink-700 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Wedding Details
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join us as we celebrate the beginning of our forever together
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-pink-200 hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-pink-600" />
                    </div>
                    <CardTitle className="text-pink-700 font-rochester text-2xl">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold text-gray-700">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">{feature.details}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* RSVP Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 bg-gradient-to-r from-pink-100 via-purple-50 to-pink-100"
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-rochester text-pink-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Will You Join Us?
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your presence would make our special day even more meaningful.
            Please let us know if you can celebrate with us!
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Heart className="w-5 h-5 mr-2" />
              RSVP Yes
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-pink-300 bg-white hover:bg-pink-50 text-pink-700 font-semibold px-8 py-4 text-lg rounded-full"
            >
              View Registry
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-r from-pink-200 to-purple-200">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <Heart className="w-8 h-8 text-pink-600 mx-auto" />
            <h3 className="text-2xl font-rochester text-pink-700">
              Leonardo &amp; Marianna
            </h3>
            <p className="text-gray-600">
              Thank you for being part of our love story
            </p>
            <p className="text-sm text-gray-500">
              June 15, 2024 • Garden Villa Resort
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Wedding;
