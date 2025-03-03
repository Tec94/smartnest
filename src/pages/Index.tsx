import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Baby, Brain, Heart, LineChart, MonitorSmartphone, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import QuoteCalculator from "@/components/QuoteCalculator";

const Index = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0 }}
      ></motion.div>
      <Navigation />
      <div className="min-h-screen w-full pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] hero-gradient flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-cover bg-center" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <span className="inline-block animate-fade-down">
              <div className="px-4 py-1 rounded-full bg-secondary/80 backdrop-blur-sm text-secondary-foreground text-sm font-medium mb-6">
                Revolutionizing Neonatal Care with AI
              </div>
            </span>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up delay-100">
              <span className="text-balance">Smart Care for Tiny Lives</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8 animate-fade-up delay-200">
              Advanced AI-powered incubator system providing real-time monitoring and predictive care for newborns.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 animate-fade-up delay-300">
              <Button size="lg" className="group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Get in Touch
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Choose SmartNest.ai?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our comprehensive solution combines cutting-edge AI technology with hospital-grade monitoring to ensure the best care for newborns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={feature.title} className="feature-card">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/10">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-16">
              Trusted by Leading Healthcare Providers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`./logos/prov${i}.jpg`} 
                  alt={`Logo ${i}`} 
                  className="h-16 w-full max-w-[200px] object-contain"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Quote generator */}
        <div className="container mx-auto py-16">
          <h1 className="text-4xl font-bold text-center mb-8">Business Equipment Quote Calculator</h1>
          <QuoteCalculator />
        </div>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Neonatal Care?
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join the revolution in neonatal care. Contact us to learn how SmartNest.ai can benefit your healthcare facility.
            </p>
            <Button size="lg" variant="secondary" className="text-primary">
              Get Started Today
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

const features = [
  {
    icon: Brain,
    title: "AI-Driven Diagnostics",
    description: "Advanced algorithms predict and alert for critical conditions in real-time, ensuring rapid response to potential health issues.",
  },
  {
    icon: Heart,
    title: "Personalized Monitoring",
    description: "Intelligent monitoring system that adapts in real time to each baby's unique health patterns and needs.",
  },
  {
    icon: Shield,
    title: "Hospital-Grade Precision",
    description: "Clinically validated monitoring with accuracy that meets or exceeds traditional hospital systems.",
  },
  {
    icon: MonitorSmartphone,
    title: "Remote Monitoring",
    description: "Secure access for healthcare providers and parents to monitor vital signs and receive alerts from anywhere.",
  },
  {
    icon: LineChart,
    title: "Data Analytics",
    description: "Comprehensive health trending and analysis tools to support informed medical decisions.",
  },
  {
    icon: Baby,
    title: "Comfort Optimization",
    description: "Smart environmental controls maintain optimal temperature and humidity for baby's comfort.",
  },
];

export default Index;
