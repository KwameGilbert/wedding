import { motion } from "framer-motion";
import WeddingHero from "../components/WeddingHero";
import WeddingNavigation from "../components/WeddingNavigation";
import CountdownTimer from "../components/CountdownTimer";
import TimelineItem from "../components/TimelineItem";
import BrideGroomProfile from "../components/BrideGroomProfile";
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
      {/* Wedding Navigation */}
      <WeddingNavigation />

      {/* Wedding Hero Section */}
      <section id="home-section" className="relative">
        <WeddingHero />

        {/* Countdown Timer - Positioned to span hero and next section */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-4xl px-4 z-20">
          <CountdownTimer />
        </div>
      </section>

      {/* Groom & Bride Section */}
      <section id="groom-bride-section" className="pt-32 pb-20 px-4 bg-white">
        <div className="max-w-[1100px] mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block text-sm font-black uppercase tracking-wider mb-2 px-4 pb-1 border-b border-dashed"
              style={{
                color: "rgb(210, 145, 188)",
                borderColor: "rgb(210, 145, 188)",
              }}
            >
              About Bride & Groom
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-rochester text-4xl lg:text-6xl xl:text-[80px] leading-tight mb-4"
              style={{ color: "rgb(210, 145, 188)" }}
            >
              Bride & Groom
            </motion.h2>
          </motion.div>

          {/* Profiles */}
          <div className="space-y-16 lg:space-y-24">
            {/* Leonardo - Groom */}
            <BrideGroomProfile
              name="Leonardo Agustus"
              description="A passionate photographer who captures life's most beautiful moments. Behind the lens, Leonardo finds poetry in everyday scenes and has a gift for making people feel comfortable and radiant. When he's not creating visual stories, you'll find him exploring new coffee shops, planning outdoor adventures, or sketching architectural details in his notebook. His warm smile and adventurous spirit light up every room he enters."
              image="https://preview.colorlib.com/theme/twohearts/images/groom.jpg"
              isGroom={true}
              index={0}
            />

            {/* Marianna - Bride */}
            <BrideGroomProfile
              name="Marianna Reyes"
              description="A talented artist and designer whose creativity flows through everything she touches. Marianna has an eye for beauty in the smallest details and a heart that radiates warmth to everyone around her. She spends her days painting watercolor landscapes, designing beautiful spaces, and teaching art to children in her community. Her infectious laughter and gentle spirit make her the kind of person who turns strangers into friends within minutes."
              image="https://preview.colorlib.com/theme/twohearts/images/bride.jpg"
              isGroom={false}
              index={1}
            />
          </div>
        </div>
      </section>
      {/* Our Story Section - Timeline */}
      <section
        id="lovestory-section"
        className="relative py-20 lg:py-32 bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://preview.colorlib.com/theme/twohearts/images/bg_2.jpg")`,
          backgroundPosition: "50% 50%",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 max-w-[1100px] mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center mb-12 lg:mb-16"
          >
            <div className="w-full text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block text-sm font-black uppercase tracking-wider text-white border-b border-dashed border-pink-300 pb-1 mb-2"
                style={{ borderColor: "rgb(210, 145, 188)" }}
              >
                Love Story
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-white font-rochester text-4xl lg:text-6xl xl:text-[80px] leading-tight mb-4"
              >
                Timeline of Love
              </motion.h2>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Central Line - Hidden on mobile, visible on large screens */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-white/30" />

            <ul className="relative space-y-8 lg:space-y-20">
              <TimelineItem
                date="June 10, 2017"
                title="First We Meet"
                description="It was a rainy afternoon in a cozy downtown coffee shop. Leonardo was capturing the perfect shot of raindrops on windows while Marianna sketched the bustling street scene. When their eyes met across the crowded café, time stood still."
                image="https://preview.colorlib.com/theme/twohearts/images/couple-1.jpg"
                isRight={false}
                index={0}
              />

              <TimelineItem
                date="June 15, 2017"
                title="First Date"
                description="Our first official date was a sunset walk along the beach. We talked for hours about our dreams, passions, and discovered how perfectly our souls aligned. That evening, we both knew something magical was beginning."
                image="https://preview.colorlib.com/theme/twohearts/images/couple-2.jpg"
                isRight={true}
                index={1}
              />

              <TimelineItem
                date="August 20, 2017"
                title="In A Relationship"
                description="Under the stars on a warm summer night, we officially became a couple. It was during a romantic picnic where Leonardo had prepared all of Marianna's favorite foods, and she surprised him with a sketch of their first meeting."
                image="https://preview.colorlib.com/theme/twohearts/images/couple-3.jpg"
                isRight={false}
                index={2}
              />

              <TimelineItem
                date="May 10, 2023"
                title="We're Engaged"
                description="On the same beach where we had our first date, during a breathtaking sunset, Leonardo got down on one knee. With tears of joy and overwhelming love, Marianna said yes to forever. Our love story was ready for its next beautiful chapter."
                image="https://preview.colorlib.com/theme/twohearts/images/couple-4.jpg"
                isRight={true}
                index={3}
              />

              <TimelineItem
                date="June 15, 2024"
                title="Our Wedding Day"
                description="Today we celebrate our love surrounded by family and friends. This is not the end of our story, but the beginning of our greatest adventure together as husband and wife. Here's to forever and always."
                image="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop"
                isRight={false}
                index={4}
              />
            </ul>
          </div>
        </div>
      </section>
      {/* Gallery Section */}
      <motion.section
        id="gallery-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-rochester text-pink-700 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Memories
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Moments captured, memories treasured
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <motion.div
                key={index}
                className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Camera className="w-8 h-8 text-pink-400" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Wedding Details Section */}
      <motion.section
        id="when-where-section"
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

      {/* Greetings Section */}
      <motion.section
        id="greeting-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-rochester text-pink-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            A Message From Our Hearts
          </motion.h2>

          <motion.div
            className="space-y-6 text-lg text-gray-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-xl italic">
              "We are so grateful for the love and support of our family and
              friends. Your presence in our lives has shaped who we are today,
              and we cannot imagine celebrating this special day without you."
            </p>
            <p>
              From the bottom of our hearts, thank you for being part of our
              journey. We look forward to celebrating with you and creating
              beautiful memories that will last a lifetime.
            </p>
            <p className="text-pink-600 font-semibold">
              With all our love,
              <br />
              Leonardo & Marianna
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Bridesmaid & Groomsmen Section */}
      <motion.section
        id="people-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-rochester text-pink-700 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Wedding Party
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The special people standing by our side
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Bridesmaids */}
            <div>
              <h3 className="text-2xl font-rochester text-pink-600 mb-8 text-center">
                Bridesmaids
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {["Sarah", "Emma", "Lisa", "Anna"].map((name, index) => (
                  <motion.div
                    key={name}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="w-24 h-24 mx-auto mb-3 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center">
                      <Heart className="w-8 h-8 text-pink-600" />
                    </div>
                    <h4 className="font-semibold text-gray-700">{name}</h4>
                    <p className="text-sm text-gray-500">Bridesmaid</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Groomsmen */}
            <div>
              <h3 className="text-2xl font-rochester text-pink-600 mb-8 text-center">
                Groomsmen
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {["Michael", "David", "James", "Robert"].map((name, index) => (
                  <motion.div
                    key={name}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="w-24 h-24 mx-auto mb-3 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full flex items-center justify-center">
                      <Heart className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-700">{name}</h4>
                    <p className="text-sm text-gray-500">Groomsman</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* RSVP Section */}
      <motion.section
        id="rsvp-section"
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
