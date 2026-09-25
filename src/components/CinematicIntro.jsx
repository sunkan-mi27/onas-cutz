import { motion } from "framer-motion";

const CinematicIntro = () => {
  return (
    <section className="cinematic-intro">
      <video
        className="cinematic-intro_video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/onas-poster.jpg"
      >
        <source src="/videos/barber-intro.mp4" type="video/mp4" />
      </video>

      <div className="cinematic-intro_overlay" />
      <div className="cinematic-intro_content">
        <motion.p
          className="cinematic-intro_eyebrow"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          HAIR • STYLE • CRAFT
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          ONAS
          <span>CUTZ</span>
        </motion.h1>

        <motion.p
          className="cinematic-intro_location"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          IKORODU, LAGOS
        </motion.p>

        <motion.a
          href="#booking"
          className="cinematic-intro_cta"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          BOOK YOUR CUT
          <span>↗</span>
        </motion.a>
      </div>

      <motion.div
        className="cinematic-intro_scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <span>SCROLL TO EXPLORE</span>
        <i />
      </motion.div>
    </section>
  );
};

export default CinematicIntro;
