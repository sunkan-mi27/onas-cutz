import { motion } from "framer-motion";

const Reviews = () => {
  return (
    <section className="reviews-section">
      <div className="reviews-section__top">
        <motion.p
          className="reviews-section__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          THE WORD
        </motion.p>

        <motion.p
          className="reviews-section__number"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          07
        </motion.p>
      </div>

      <div className="reviews-section__main">
        <motion.div
          className="reviews-section__rating"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="reviews-section__score">5.0</span>

          <div className="reviews-section__stars">★ ★ ★ ★ ★</div>

          <p>GOOGLE RATING</p>
        </motion.div>

        <motion.div
          className="reviews-section__copy"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <span>01 REVIEW</span>

          <h2>
            The cut
            <em>speaks.</em>
          </h2>

          <p>
            Real work. Real clients. Real results. See what customers are saying
            about Onas CutZ on Google.
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Onas+Cutz+Hair+Salon+Ikorodu+Lagos"
            target="_blank"
            rel="noreferrer"
            className="reviews-section__link"
          >
            VIEW ON GOOGLE
            <span>↗</span>
          </a>
        </motion.div>
      </div>

      <div className="reviews-section__line" />
    </section>
  );
};

export default Reviews;
