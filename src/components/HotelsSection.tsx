import { motion } from "framer-motion";
import { Hotel, MapPin, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const hotels = [
  {
    id: 1,
    name: "Hotel Accommodation 1",
    description: "Comfortable stay with modern amenities. Book early to secure your room for the special weekend.",
    mapLink: "https://maps.app.goo.gl/cMsC5Rxaa5KjdivS6",
  },
  {
    id: 2,
    name: "Hotel Accommodation 2",
    description: "Elegant rooms and excellent service. Perfect for wedding guests seeking a relaxing stay.",
    mapLink: "https://maps.app.goo.gl/fJ81eXWGonxK6Mji9",
  },
  {
    id: 3,
    name: "Hotel Accommodation 3",
    description: "Convenient location with great facilities. Ideal for families and groups attending the celebration.",
    mapLink: "https://maps.app.goo.gl/DcYd5R63V85D73Xn8",
  },
];

const HotelsSection = () => {
  return (
    <section id="hotels" className="relative py-20 px-4 bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-wider text-primary mb-2">
            Where to Stay
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-rochester">
            Accommodations
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel, index) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border-primary/10">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Hotel className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground">
                    {hotel.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm flex-grow">
                    {hotel.description}
                  </p>
                  
                  <Button
                    asChild
                    className="w-full group"
                    variant="default"
                  >
                    <a
                      href={hotel.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MapPin className="w-4 h-4" />
                      View on Map
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mt-12 text-sm"
        >
          We recommend booking your accommodation early to ensure availability during our wedding weekend.
        </motion.p>
      </div>
    </section>
  );
};

export default HotelsSection;
