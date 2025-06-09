import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Cloud, Shield, MonitorSmartphone } from "lucide-react";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0 }}
      ></motion.div>
      <Navigation />
      <div className="min-h-screen w-full">
        {/* Hero Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 hero-gradient">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6 animate-fade-up">
              Our Solutions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up delay-100">
              Comprehensive AI-powered solutions for advanced neonatal care, combining cutting-edge hardware with intelligent software.
            </p>
          </div>
        </section>

        {/* Hardware Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-up">
                <h2 className="font-display text-3xl font-bold text-foreground">
                  AI-Integrated Smart Incubator
                </h2>
                <p className="text-muted-foreground">
                  State-of-the-art incubator system with integrated AI monitoring capabilities, providing the highest standard of care for newborns.
                </p>
                <ul className="space-y-4">
                  {hardwareFeatures.map((feature) => (
                    <li key={feature.title} className="flex gap-4">
                      <div className="h-6 w-6 text-primary shrink-0">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link to="/about" className="block mt-8">
                  <Button size="lg" className="group">
                    Request a Demo
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="relative animate-fade-up delay-200">
                <div className="aspect-square rounded-2xl bg-secondary/50 p-8">
                  <div className="w-full h-full rounded-xl bg-gray-200 animate-pulse" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Ready to Experience SmartNest.ai?
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contact our team to learn more about our products and how they can benefit your healthcare facility.
            </p>
            <Link to="/about">
              <Button size="lg" variant="secondary" className="text-primary">
                Get Started Today
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

const hardwareFeatures = [
  {
    icon: Brain,
    title: "AI-Powered Monitoring",
    description: "Advanced algorithms for real-time vital signs monitoring and anomaly detection.",
  },
  {
    icon: Shield,
    title: "Hospital-Grade Safety",
    description: "Meets or exceeds all safety standards for medical equipment.",
  },
  {
    icon: MonitorSmartphone,
    title: "Remote Access",
    description: "Secure remote monitoring capabilities for healthcare providers.",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamless integration with SmartNest.ai cloud platform.",
  },
];

export default Products;