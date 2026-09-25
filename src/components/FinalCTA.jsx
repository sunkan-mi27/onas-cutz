import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <footer className="final-section">
      <div className="final-section__glow" />

      <div className="final-section__content">
        <motion.p
          className="final-section__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ONAS CUTZ / IKORODU
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          Leave
          <span>looking different.</span>
        </motion.h2>

        <motion.a
          href="#booking"
          className="final-section__button"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileTap={{ scale: 0.97 }}
        >
          BOOK YOUR CUT
          <span>↗</span>
        </motion.a>
      </div>

      <div className="final-section__footer">
        <div>
          <strong>ONAS CUTZ</strong>
          <span>HAIR • STYLE • CRAFT</span>
        </div>

        <div className="final-section__footer-links">
          <a href="tel:+2349050281270">CALL</a>

          <a
            href="https://wa.me/2349050281270"
            target="_blank"
            rel="noreferrer"
          >
            WHATSAPP
          </a>

          <a href="#booking">BOOK</a>
        </div>

        <p>© {new Date().getFullYear()} ONAS CUTZ</p>
      </div>
    </footer>
  );
};

export default FinalCTA;
