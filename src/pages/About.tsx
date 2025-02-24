
import { Card } from "@/components/ui/card";
import { Brain, Heart, Star, Award, ChartBar, Microscope } from "lucide-react";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";

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
              Our Mission to Transform Neonatal Care
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leveraging AI technology to provide the best possible care for every newborn
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, itaque. At tempora illum aperiam. Eveniet?
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, optio quam sit deleniti laudantium suscipit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus exercitationem id provident optio maiores, maxime consequatur odit repellendus dolores vero molestias odio officia velit placeat dolore aliquam? Dolore, natus necessitatibus.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {foundingPrinciples.map((principle) => (
                  <Card key={principle.title} className="p-6">
                    <principle.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-semibold mb-2">{principle.title}</h3>
                    <p className="text-sm text-muted-foreground">{principle.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Solution Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-16">
              The Problem & Our Solution
            </h2>
            <div className="grid md:grid-cols-2 gap-16">
              <Card className="p-8">
                <h3 className="font-display text-xl font-semibold mb-4">The Challenge</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex gap-3">
                    <div className="h-6 w-6 shrink-0 rounded-full bg-destructive/10 flex items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
                    </div>
                    <span>Traditional monitoring systems lack predictive capabilities</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 shrink-0 rounded-full bg-destructive/10 flex items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
                    </div>
                    <span>Healthcare providers face alert fatigue from false positives</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 shrink-0 rounded-full bg-destructive/10 flex items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
                    </div>
                    <span>Limited personalization in neonatal care monitoring</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-8">
                <h3 className="font-display text-xl font-semibold mb-4">Our Solution</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex gap-3">
                    <div className="h-6 w-6 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    </div>
                    <span>AI-powered predictive monitoring with real-time analytics</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    </div>
                    <span>Smart filtering system to reduce false alarms</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    </div>
                    <span>Adaptive learning for personalized care plans</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Our Technology
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Advanced AI and hardware integration working seamlessly together
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {techFeatures.map((feature) => (
                <Card key={feature.title} className="p-6">
                  <feature.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const foundingPrinciples = [
  {
    icon: Heart,
    title: "Care First",
    description: "Every decision we make is guided by what's best for newborn care.",
  },
  {
    icon: Brain,
    title: "Innovation",
    description: "Constantly pushing boundaries in AI and healthcare technology.",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "Committed to the highest standards in everything we do.",
  },
  {
    icon: Award,
    title: "Impact",
    description: "Focused on making a real difference in neonatal outcomes.",
  },
];

const techFeatures = [
  {
    icon: Brain,
    title: "Advanced AI",
    description: "State-of-the-art machine learning algorithms for predictive monitoring.",
  },
  {
    icon: ChartBar,
    title: "Real-time Analytics",
    description: "Continuous data processing and analysis for immediate insights.",
  },
  {
    icon: Microscope,
    title: "Clinical Validation",
    description: "Rigorous testing and validation in clinical settings.",
  },
];

export default About;
