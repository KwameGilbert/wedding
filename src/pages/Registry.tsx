import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Heart,
  Gift,
  Home,
  Utensils,
  Baby,
  ShoppingBag,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

interface RegistryItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  store: string;
  storeUrl: string;
  category: string;
  isPurchased: boolean;
  priority: "high" | "medium" | "low";
}

const Registry = () => {
  const registryItems: RegistryItem[] = [
    // Kitchen & Dining
    {
      id: 1,
      name: "KitchenAid Stand Mixer",
      description: "Professional 5-quart stand mixer in rose gold",
      price: 449.99,
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop",
      store: "Williams Sonoma",
      storeUrl: "#",
      category: "kitchen",
      isPurchased: false,
      priority: "high",
    },
    {
      id: 2,
      name: "Dinnerware Set",
      description: "Fine bone china 12-piece dinner set in white with gold rim",
      price: 299.99,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop",
      store: "Crate & Barrel",
      storeUrl: "#",
      category: "kitchen",
      isPurchased: true,
      priority: "high",
    },
    {
      id: 3,
      name: "Non-Stick Cookware Set",
      description: "10-piece ceramic non-stick cookware set",
      price: 189.99,
      image:
        "https://images.unsplash.com/photo-1556909114-4a6fb762f14c?q=80&w=2070&auto=format&fit=crop",
      store: "Target",
      storeUrl: "#",
      category: "kitchen",
      isPurchased: false,
      priority: "medium",
    },
    {
      id: 4,
      name: "Coffee Maker",
      description: "Programmable drip coffee maker with thermal carafe",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
      store: "Amazon",
      storeUrl: "#",
      category: "kitchen",
      isPurchased: false,
      priority: "high",
    },

    // Home & Living
    {
      id: 5,
      name: "Luxury Bedding Set",
      description: "Egyptian cotton sheet set in queen size with duvet cover",
      price: 259.99,
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
      store: "Pottery Barn",
      storeUrl: "#",
      category: "home",
      isPurchased: false,
      priority: "medium",
    },
    {
      id: 6,
      name: "Table Lamps (Set of 2)",
      description: "Modern ceramic table lamps with linen shades",
      price: 149.99,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
      store: "West Elm",
      storeUrl: "#",
      category: "home",
      isPurchased: false,
      priority: "low",
    },
    {
      id: 7,
      name: "Throw Pillows",
      description: "Decorative throw pillows in blush and gold (set of 4)",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2070&auto=format&fit=crop",
      store: "HomeGoods",
      storeUrl: "#",
      category: "home",
      isPurchased: false,
      priority: "low",
    },
    {
      id: 8,
      name: "Picture Frames",
      description: "Wedding photo frames in various sizes (set of 6)",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop",
      store: "Target",
      storeUrl: "#",
      category: "home",
      isPurchased: false,
      priority: "medium",
    },

    // Experience & Travel
    {
      id: 9,
      name: "Honeymoon Fund",
      description: "Contribute to our romantic honeymoon in Italy",
      price: 100.0,
      image:
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2072&auto=format&fit=crop",
      store: "Honeyfund",
      storeUrl: "#",
      category: "experience",
      isPurchased: false,
      priority: "high",
    },
    {
      id: 10,
      name: "Date Night Fund",
      description: "Help us create beautiful memories with monthly date nights",
      price: 50.0,
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
      store: "Custom Fund",
      storeUrl: "#",
      category: "experience",
      isPurchased: false,
      priority: "medium",
    },

    // Future Family
    {
      id: 11,
      name: "Baby Fund",
      description: "A gift toward our future little ones",
      price: 75.0,
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop",
      store: "Custom Fund",
      storeUrl: "#",
      category: "future",
      isPurchased: false,
      priority: "low",
    },
    {
      id: 12,
      name: "Home Down Payment Fund",
      description: "Help us save for our first home together",
      price: 200.0,
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop",
      store: "Custom Fund",
      storeUrl: "#",
      category: "future",
      isPurchased: false,
      priority: "high",
    },
  ];

  const categories = [
    {
      id: "kitchen",
      name: "Kitchen & Dining",
      icon: Utensils,
      color: "from-pink-400 to-rose-500",
    },
    {
      id: "home",
      name: "Home & Living",
      icon: Home,
      color: "from-purple-400 to-indigo-500",
    },
    {
      id: "experience",
      name: "Experiences",
      icon: Heart,
      color: "from-rose-400 to-pink-500",
    },
    {
      id: "future",
      name: "Future Plans",
      icon: Baby,
      color: "from-indigo-400 to-purple-500",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredItems = selectedCategory
    ? registryItems.filter((item) => item.category === selectedCategory)
    : registryItems;

  const totalItems = registryItems.length;
  const purchasedItems = registryItems.filter(
    (item) => item.isPurchased,
  ).length;
  const completionPercentage = Math.round((purchasedItems / totalItems) * 100);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-wedding-cream-200 via-wedding-cream-100 to-wedding-cream-50">
      {/* Header */}
      <header className="bg-wedding-cream-100/80 backdrop-blur-sm border-b border-wedding-terracotta-200/30 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button
                variant="ghost"
                className="text-wedding-terracotta-600 hover:text-wedding-terracotta-700 hover:bg-wedding-cream-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Wedding
              </Button>
            </Link>

            <div className="text-center">
              <h1
                className="text-2xl lg:text-3xl font-rochester"
                style={{ color: "rgb(210, 145, 188)" }}
              >
                Wedding Registry
              </h1>
              <p className="text-sm text-gray-600">Leonardo & Marianna</p>
            </div>

            <div className="text-right">
              <p className="text-sm text-gray-600">Wedding Date</p>
              <p className="font-semibold text-pink-600">June 15, 2024</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-16 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "backOut" }}
            className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Gift className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-3xl lg:text-4xl font-rochester mb-4"
            style={{ color: "rgb(210, 145, 188)" }}
          >
            Help Us Start Our New Journey
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Your presence at our wedding is the greatest gift of all. For those
            who have asked, we've created this registry to help us build our
            life together.
          </motion.p>

          {/* Progress */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Registry Progress
              </span>
              <span className="text-sm font-medium text-pink-600">
                {completionPercentage}%
              </span>
            </div>
            <div className="w-full bg-pink-100 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${completionPercentage}%` }}
                transition={{ duration: 1, delay: 1.2 }}
                className="bg-gradient-to-r from-pink-400 to-purple-500 h-3 rounded-full"
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {purchasedItems} of {totalItems} items purchased
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Category Filter */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="px-4 mb-12"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => setSelectedCategory(null)}
              variant={selectedCategory === null ? "default" : "outline"}
              className={`${
                selectedCategory === null
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                  : "border-pink-300 text-pink-700 hover:bg-pink-50"
              }`}
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              All Items
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                className={`${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white`
                    : "border-pink-300 text-pink-700 hover:bg-pink-50"
                }`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Registry Items */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="px-4 pb-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div key={item.id} variants={itemVariants} custom={index}>
                <Card
                  className={`h-full transition-all duration-300 hover:shadow-lg ${
                    item.isPurchased
                      ? "opacity-75 bg-gray-50"
                      : "hover:scale-105"
                  }`}
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {item.isPurchased && (
                      <div className="absolute inset-0 bg-green-500/90 rounded-t-lg flex items-center justify-center">
                        <div className="text-white text-center">
                          <Heart className="w-8 h-8 mx-auto mb-2 fill-white" />
                          <p className="font-semibold">Thank you!</p>
                          <p className="text-sm">Already purchased</p>
                        </div>
                      </div>
                    )}
                    {item.priority === "high" && !item.isPurchased && (
                      <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                        Most Wanted
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-800">
                      {item.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-pink-600">
                        ${item.price}
                      </span>
                      <span className="text-sm text-gray-500">
                        {item.store}
                      </span>
                    </div>
                    {!item.isPurchased && (
                      <Button
                        className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                        onClick={() => window.open(item.storeUrl, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Purchase at {item.store}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-200 to-purple-200 py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <Heart className="w-8 h-8 text-pink-600 mx-auto fill-pink-600" />
            <h3 className="text-2xl font-rochester text-pink-700">
              Thank You for Your Love & Support
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are so grateful for your thoughtfulness and generosity. Every
              gift, big or small, helps us start our married life together with
              joy and gratitude in our hearts.
            </p>
            <p className="text-sm text-gray-500">
              With love, Leonardo & Marianna
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Registry;
