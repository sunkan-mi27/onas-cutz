import { motion } from "framer-motion";

const DetailSection = () => {
  return (
    <section className="detail-section">
      {/* Visual Side */}
      <div className="detail-section__visual">
        <div className="detail-section__visual-inner">
          <div className="detail-section__vertical-text">ONAS CUTZ</div>

          <div className="detail-section__center">
            <span className="detail-section__center-number">06</span>

            <span className="detail-section__center-word">DETAIL</span>
          </div>

          <div className="detail-section__corner">
            PRECISION / CRAFT / FINISH
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div className="detail-section__content">
        <motion.p
          className="detail-section__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          THE DETAIL
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Sharp lines.
          <span>Clean finish.</span>
        </motion.h2>

        <motion.p
          className="detail-section__text"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          A great haircut isn't just about the final look. It's about precision
          in every detail.
        </motion.p>

        <motion.div
          className="detail-section__points"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <div>
            <span>01</span>
            <p>Precision</p>
          </div>

          <div>
            <span>02</span>
            <p>Detail</p>
          </div>

          <div>
            <span>03</span>
            <p>Finish</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DetailSection;
