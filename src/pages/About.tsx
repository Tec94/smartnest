import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const About = () => {
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
        <section className="py-24 px-4 sm:px-6 lg:px-8 hero-gradient">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About SmartNest
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're parents, engineers, and innovators dedicated to child safety.
            </p>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground">
                To empower parents with the most advanced, intuitive, and reliable technology, ensuring their baby's safety and well-being around the clock.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Our Story
            </h2>
            <div className="prose lg:prose-xl mx-auto text-muted-foreground text-justify">
              <p>
                The idea for SmartNest was born from a simple, universal desire: to know our children are safe, especially when we can't be in the same room. As new parents ourselves—and as engineers and designers by trade—we were frustrated with the baby monitors on the market. They were unreliable, had poor video quality, and offered little more than a grainy video feed. We knew we could do better.
              </p>
              <p>
                We wanted more than just a camera; we wanted a guardian. A smart system that could not only show us our baby, but also provide meaningful insights into their well-being. A monitor that could track breathing, understand sleep patterns, and ensure the nursery environment was always optimal. We wanted hospital-grade technology made simple, accessible, and beautiful for the modern home.
              </p>
              <p>
                So, we built it. After years of research, development, and rigorous testing, SmartNest was launched. Today, we're proud to help thousands of families sleep a little easier, knowing that a smarter kind of guardian is watching over their little ones.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-12">
              Contact Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <Card className="p-6 flex items-start gap-4">
                <Mail className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <a href="mailto:sales@smartnest.ai" className="text-muted-foreground hover:text-primary">
                    sales@smartnest.ai
                  </a>
                </div>
              </Card>
              <Card className="p-6 flex items-start gap-4">
                <Phone className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-muted-foreground">(123) 456-7890</p>
                </div>
              </Card>
              <Card className="p-6 flex items-start gap-4">
                <MapPin className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Address</h3>
                  <p className="text-muted-foreground">
                    123 Innovation Drive, Tech City, 12345
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;