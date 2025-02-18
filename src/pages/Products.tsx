
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Baby, Brain, Cloud, Shield, MonitorSmartphone } from "lucide-react";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";

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
                <Button size="lg" className="group">
                  Request a Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
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

        {/* Software Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                SmartNest.ai Cloud Platform
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Powerful cloud-based monitoring and analytics platform for comprehensive neonatal care management.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {subscriptionPlans.map((plan) => (
                <Card key={plan.name} className="relative overflow-hidden">
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
                      Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4 mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                      Start Free Trial
                    </Button>
                  </CardFooter>
                </Card>
              ))}
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
            <Button size="lg" variant="secondary" className="text-primary">
              Get Started Today
            </Button>
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

const subscriptionPlans = [
  {
    name: "Starter",
    description: "Perfect for small clinics and individual practices",
    features: [
      "Basic AI monitoring",
      "Real-time alerts",
      "Mobile app access",
      "24/7 support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    description: "Ideal for medium-sized hospitals and healthcare networks",
    features: [
      "Advanced AI diagnostics",
      "Predictive analytics",
      "Multi-device support",
      "Priority support",
      "Custom alerting",
      "API access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Tailored solutions for large healthcare institutions",
    features: [
      "Full AI capabilities",
      "Custom integrations",
      "Dedicated support team",
      "Training & onboarding",
      "Advanced analytics",
      "White-label options",
    ],
    popular: false,
  },
];

export default Products;
