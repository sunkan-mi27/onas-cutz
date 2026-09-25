import { motion } from "framer-motion";

const BrandIntro = () => {
  return (
    <section className="brand-intro">
      <div className="brand-intro_inner">
        <motion.p
          className="brand-intro_eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          WELCOME TO ONAS CUTZ
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          More than a cut.
          <span>It's your look.</span>
        </motion.h2>

        <motion.p
          className="brand-intro_text"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Professional hair styling, grooming and attention to detail designed
          around the way you want to look and feel
        </motion.p>

        <motion.div
          className="brand-intro_meta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <span>01</span>
          <span>IKORODU,LAGOS</span>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandIntro;
