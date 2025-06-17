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
        {/* Who We Are Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 hero-gradient">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Who We Are
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're a team of engineers, healthcare innovators, and researchers
              committed to transforming neonatal care through intelligent,
              connected technology.
            </p>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground">
                To equip clinicians with advanced, AI-powered tools that elevate
                the quality, precision, and speed of neonatal care — especially
                when every second counts.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Our Story
            </h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="prose lg:prose-xl mx-auto text-muted-foreground text-center"
            >
              <motion.p variants={itemVariants}>
                SmartNest.ai was founded with a bold question: What if neonatal
                care could be smarter, more predictive, and more connected?
              </motion.p>
              <motion.p variants={itemVariants}>
                Frustrated by the limitations of traditional monitoring systems
                in hospitals, we saw an opportunity to bridge the gap between
                data and action by using modern AI to enhance how care is
                delivered to the most vulnerable patients.
              </motion.p>
              <motion.p variants={itemVariants}>
                We set out to design a system that not only monitors, but
                understands. A system that can detect early warning signs,
                surface high-risk cases, and empower care teams with real-time
                insights — all in a streamlined, secure platform.
              </motion.p>
              <motion.p variants={itemVariants}>
                Our incubator hardware and cloud software are being developed
                hand-in-hand with clinicians to ensure real-world impact. Though
                we're still early in our journey, our commitment is clear: to
                make neonatal care smarter, safer, and more proactive.
              </motion.p>
            </motion.div>
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
      staggerChildren: 0.3,
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
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default About;