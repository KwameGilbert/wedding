import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { holidayInnBath } from "@/assets";

const hotel = {
  name: "Holiday Inn Express Bath by IHG",
  description: "Our recommended accommodation for wedding guests. Comfortable rooms with modern amenities, conveniently located in Bath. We encourage you to book early to secure your stay for our special weekend.",
  mapLink: "https://maps.app.goo.gl/f3nykhVeLm6uGASq8",
  image: holidayInnBath,
  // added price for visibility
  price: "£120",
};

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
            Recommended Accommodation
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-card/50 backdrop-blur-sm border-primary/10">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              {/* Price badge - high contrast */}
              <div
                aria-hidden
                className="absolute top-4 right-4 rounded-md shadow-lg"
                style={{
                  backgroundColor: "#D4AF37",
                  color: "#F8F8F8",
                  padding: "8px 12px",
                  fontWeight: 700,
                }}
              >
                <span className="text-sm">From</span>
                <div className="text-lg leading-none">{hotel.price}<span className="text-xs">/night</span></div>
              </div>
            </div>
            
            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-3">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {hotel.name}
                </h3>
                <div className="flex items-center justify-center gap-4">
                  <p className="text-wedding-cream-500 text-2xl font-extrabold">{hotel.price}</p>
                  <p className="text-muted-foreground text-base leading-relaxed max-w-xl">{hotel.description}</p>
                </div>
              </div>
              
              <Button
                asChild
                className="w-full group text-base h-12"
                variant="default"
                size="lg"
              >
                <a
                  href={hotel.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MapPin className="w-5 h-5" />
                  View Location & Book
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mt-12 text-sm max-w-2xl mx-auto"
        >
          This is our recommended hotel for all wedding guests. Please book early to secure your room for our special celebration.
        </motion.p>
      </div>
    </section>
  );
};

export default HotelsSection;
