import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Brain,
  Cloud,
  Shield,
  MonitorSmartphone,
  AlertTriangle,
  Clock,
  Bell,
  UserCheck,
} from "lucide-react";
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
      <div className="min-h-screen w-full pt-16">
        {/* Hero Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 hero-gradient">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6 animate-fade-up">
              Our Solution
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up delay-100">
              Integrated AI-powered solutions combining advanced hardware and
              intelligent software to elevate neonatal care.
            </p>
          </div>
        </section>

        {/* Incubator Section */}
        <section
          id="incubator"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-card"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-up">
                <h2 className="font-display text-3xl font-bold text-foreground">
                  SmartNest Incubator System
                </h2>
                <p className="text-muted-foreground">
                  Innovative incubator system combining real-time AI monitoring
                  with a vision for smarter, safer newborn care.
                </p>
                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="space-y-4"
                >
                  {incubatorFeatures.map((feature) => (
                    <motion.li
                      variants={itemVariants}
                      key={feature.title}
                      className="flex gap-4"
                    >
                      <div className="h-6 w-6 text-primary shrink-0">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              <div className="relative animate-fade-up delay-200">
                <div className="aspect-square rounded-2xl bg-secondary/50 p-8">
                  <motion.div
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full rounded-xl bg-gray-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Platform Section */}
        <section
          id="cloud-platform"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/10"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative animate-fade-up delay-200 md:order-2">
                <div className="aspect-square rounded-2xl bg-primary/10 p-8">
                  <motion.div
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full rounded-xl bg-gray-200"
                  />
                </div>
              </div>
              <div className="space-y-6 animate-fade-up md:order-1">
                <h2 className="font-display text-3xl font-bold text-foreground">
                  SmartNest Cloud Platform
                </h2>
                <p className="text-muted-foreground">
                  Intelligent cloud platform delivering real-time neonatal
                  insights, predictive risk alerts, and streamlined care
                  coordination for clinical teams
                </p>
                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="space-y-4"
                >
                  {cloudPlatformFeatures.map((feature) => (
                    <motion.li
                      variants={itemVariants}
                      key={feature.title}
                      className="flex gap-4"
                    >
                      <div className="h-6 w-6 text-primary shrink-0">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Ready to Elevate Neonatal Care?
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join the next generation of infant care. Discover how
              SmartNest.ai can enhance neonatal outcomes in your facility.
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
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const incubatorFeatures = [
  {
    icon: Brain,
    title: "AI-Powered Monitoring",
    description:
      "Built to use real-time vital signs and advanced algorithms to detect early signs of complications and support clinical decision-making.",
  },
  {
    icon: Shield,
    title: "Safety-First Design",
    description:
      "Engineered with the intent to meet rigorous medical safety standards and ensure the highest level of newborn protection.",
  },
  {
    icon: MonitorSmartphone,
    title: "Remote Access",
    description:
      "Designed to allow secure, real-time monitoring for clinicians — enabling flexible, responsive neonatal care inside and outside the NICU.",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description:
      "Seamlessly connects to the SmartNest Cloud Platform for centralized data access, predictive insights, and team collaboration.",
  },
];

const cloudPlatformFeatures = [
  {
    icon: AlertTriangle,
    title: "AI Risk Reports",
    description:
      "Automatically identifies conditions like sepsis, asphyxia, and NRDS, assigning urgency levels to each — so clinicians know exactly what needs attention and when.",
  },
  {
    icon: Clock,
    title: "Deep Patient Timelines",
    description:
      "Every patient profile includes time-stamped events, clinical notes, and vital trends — making it easy to pinpoint what happened and why, down to the minute.",
  },
  {
    icon: Bell,
    title: "Multi-Channel Critical Alerts",
    description:
      "Get notified instantly through in-app alerts, push notifications, and email the moment a baby's vitals cross a danger threshold.",
  },
  {
    icon: UserCheck,
    title: "Clinician-First Interface",
    description:
      "Designed for doctors and nurses with intuitive navigation between multiple newborns, fast access to key data, and secure role-based access.",
  },
];

export default Products;