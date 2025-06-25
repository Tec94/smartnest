import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, CheckCircle, Wind } from "lucide-react";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { SwipeNavigator } from "@/components/SwipeNavigator";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const IndexContent = () => (
  <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
    />
    <Navigation />
    <div className="min-h-screen w-full pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] hero-gradient flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated pulsing blurry circle */}
        <motion.div
          className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/3 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-blue-400 via-indigo-300 to-purple-300 opacity-60 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.18, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ zIndex: 0 }}
        />
        {/* Gradient fade at the bottom for smooth blending */}
        <div className="absolute left-0 right-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
        <div className="relative z-20 max-w-7xl mx-auto text-center">
          <span className="inline-block animate-fade-down">
            <div className="px-4 py-1 rounded-full bg-secondary/80 backdrop-blur-sm text-secondary-foreground text-sm font-medium mb-6">
              Revolutionizing Neonatal Care with AI
            </div>
          </span>

          <motion.h1
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            { "Smart Care for Tiny Lives".split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={heroItemVariants}
                className="inline-block mr-4"
              >
                {word}
              </motion.span>
            )) }
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8"
          >
            Advanced AI system for continuous monitoring and predictive neonatal care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/about">
              <Button size="lg" className="hero-button-primary">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 arrow-icon" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="hero-button-secondary">
                <span className="btn-text">Get in Touch</span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose SmartNest.ai?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Designed for hospitals. Built for newborns. Our AI system delivers precision monitoring and proactive care.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature) => (
              <motion.div variants={itemVariants} key={feature.title} className="h-full">
                <Card className="feature-card h-full">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            Ready to Elevate Neonatal Care?
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join the next generation of infant care. Discover how SmartNest.ai can enhance neonatal outcomes in your facility.
          </p>
          <Link to="/contact">
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{
                duration: 2.2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="inline-block"
            >
              <Button
                size="lg"
                variant="secondary"
                className="text-primary shadow-lg shadow-secondary/20 hover:shadow-2xl hover:shadow-secondary/40"
              >
                Get in Touch
              </Button>
            </motion.div>
          </Link>
        </div>
      </section>
    </div>
  </>
);

const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
};

const features = [
  {
    icon: Zap,
    title: "Adaptive Health Monitoring",
    description:
      "Built to learn from each newborn's unique health patterns, enabling real-time insights to support clinical decision-making.",
  },
  {
    icon: CheckCircle,
    title: "Clinical-Grade Accuracy",
    description:
      "Engineered with the goal of matching the precision of hospital systems — delivering dependable monitoring where it matters most.",
  },
  {
    icon: Wind,
    title: "Intelligent Environment Tracking",
    description:
      "Designed to track temperature, humidity, and ambient conditions — helping maintain an optimal setting for neonatal care and comfort.",
  },
];

const Index = () => {
  const navigate = useNavigate();
  return (
    <SwipeNavigator
      current={<IndexContent />}
      nextPageName="Products"
      prevPageName="About"
      onNavigate={(dir) => {
        if (dir === "left") navigate("/products");
        else if (dir === "right") navigate("/about");
      }}
    />
  );
};

export default Index;