import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0 }}
      >
      <Navigation />
      <div className="min-h-screen w-full pt-16">
        {/* Hero Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 hero-gradient">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Flexible Pricing for Every Need
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose between hardware leasing and software subscription options tailored to your healthcare facility.
            </p>
          </div>
        </section>

        {/* Hardware Pricing */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Hardware Solutions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose between purchasing or leasing our state-of-the-art incubators
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {hardwareOptions.map((option) => (
                <Card key={option.name} className="relative">
                  <CardHeader>
                    <CardTitle>{option.name}</CardTitle>
                    <CardDescription>{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4 mb-6">
                      {option.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Request Quote</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Software Pricing */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Software Subscriptions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Flexible plans for hospitals, clinics, and healthcare providers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {softwarePlans.map((plan) => (
                <Card key={plan.name} className="relative">
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded-tr-lg">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4 mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature.name} className="flex items-center gap-2">
                          {feature.included ? (
                            <Check className="h-4 w-4 text-primary" />
                          ) : (
                            <X className="h-4 w-4 text-muted-foreground" />
                          )}
                          <span className="text-sm text-muted-foreground">{feature.name}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                      {plan.price === "Custom" ? "Contact Sales" : "Subscribe Now"}
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
              Need a Custom Solution?
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contact our team to discuss custom pricing options for your healthcare facility.
            </p>
            <Button size="lg" variant="secondary" className="text-primary">
              Get Custom Quote
            </Button>
          </div>
        </section>
        </div>
        </motion.div>
    </>
  );
};

const hardwareOptions = [
  {
    name: "Purchase",
    description: "One-time purchase with full ownership and extended warranty",
    features: [
      "Full ownership of the device",
      "5-year comprehensive warranty",
      "Free installation and setup",
      "24/7 technical support",
      "Annual maintenance included",
      "Hardware upgrades eligible",
    ],
  },
  {
    name: "Lease",
    description: "Flexible leasing options with minimal upfront costs",
    features: [
      "Low upfront investment",
      "Monthly or annual payment options",
      "Includes maintenance and repairs",
      "Easy upgrade path",
      "Full warranty coverage",
      "Cancel anytime after minimum term",
    ],
  },
];

const softwarePlans = [
  {
    name: "Basic",
    description: "Essential monitoring for small clinics",
    price: "299",
    popular: false,
    features: [
      { name: "Basic AI monitoring", included: true },
      { name: "Mobile app access", included: true },
      { name: "Email support", included: true },
      { name: "Data analytics", included: false },
      { name: "Custom alerts", included: false },
      { name: "API access", included: false },
    ],
  },
  {
    name: "Professional",
    description: "Advanced features for growing facilities",
    price: "599",
    popular: true,
    features: [
      { name: "Advanced AI monitoring", included: true },
      { name: "Mobile app access", included: true },
      { name: "24/7 priority support", included: true },
      { name: "Data analytics", included: true },
      { name: "Custom alerts", included: true },
      { name: "API access", included: false },
    ],
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large hospitals",
    price: "Custom",
    popular: false,
    features: [
      { name: "Advanced AI monitoring", included: true },
      { name: "Mobile app access", included: true },
      { name: "24/7 dedicated support", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Custom alerts", included: true },
      { name: "API access", included: true },
    ],
  },
];

export default Pricing;
