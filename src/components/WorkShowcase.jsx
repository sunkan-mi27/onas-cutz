import { motion } from "framer-motion";

const WorkShowcase = () => {
  return (
    <section className="work-showcase">
      <div className="work-showcase_header">
        <motion.p
          className="work-showcase_eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          THE CRAFT
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9 }}
        >
          watch us
          <span>work.</span>
        </motion.h2>
      </div>

      <motion.div
        className="work-showcase_video-wrap"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.1 }}
      >
        <video
          className="work-showcase_video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/videos/barber-intro.mp4" type="video/mp4" />
        </video>

        <div className="work-showcase_overly" />
        <div className="work-showcase_label">
          <span>CRAFT</span>
          <span>DETAIL</span>
        </div>

        <div className="work-showcase_play">
          <span>ONAS</span>
          <span>CUTZ</span>
        </div>
      </motion.div>

      <motion.p
        className="work-showcase_caption"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Every detail matters. From the first clipper pass to the final look in
        the mirror.
      </motion.p>
    </section>
  );
};

export default WorkShowcase;
