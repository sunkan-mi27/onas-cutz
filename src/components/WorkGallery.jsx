import { motion } from "framer-motion";

const looks = [
  {
    number: "01",
    title: "THE FADE",
    category: "PRECISION CUT",
    image: "/images/onas-look-01.jpg",
  },
  {
    number: "02",
    title: "CLEAN FINISH",
    category: "DETAIL",
    image: "/images/onas-look-02.jpg",
  },
  {
    number: "03",
    title: "SIGNATURE",
    category: "PRECISION CUT",
    image: "/images/onas-look-03.jpg",
  },
];

const WorkGallery = () => {
  return (
    <section className="work-gallery">
      <div className="work-gallery__container">
        {/* HEADER */}
        <div className="work-gallery__header">
          <div>
            <motion.p
              className="work-gallery__eyebrow"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              SELECTED WORK
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              The <span>looks.</span>
            </motion.h2>

            <motion.p
              className="work-gallery__intro"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              Clean cuts. Sharp details. Real people.
              <br />A few looks from Onas CutZ.
            </motion.p>
          </div>

          <motion.a
            href="#booking"
            className="work-gallery__view-all"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            VIEW ALL WORKS
            <span>→</span>
          </motion.a>
        </div>

        {/* GALLERY */}
        <div className="work-gallery__grid">
          {looks.map((look, index) => (
            <motion.article
              key={look.number}
              className={`work-card ${
                index === 0 ? "work-card--featured" : "work-card--secondary"
              }`}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
            >
              <div className="work-card__image">
                <img
                  src={look.image}
                  alt={`${look.title} - Onas CutZ`}
                  loading="lazy"
                />

                <div className="work-card__gradient" />

                <div className="work-card__number">{look.number}</div>

                <div className="work-card__content">
                  <div>
                    <p>{look.category}</p>
                    <h3>{look.title}</h3>
                  </div>

                  <button type="button" aria-label={`View ${look.title}`}>
                    →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* FOOTER BRAND */}
        <div className="work-gallery__footer">
          <span>ONAS CUTZ</span>

          <span className="work-gallery__footer-line" />

          <span className="work-gallery__footer-location">IKORODU · LAGOS</span>
        </div>
      </div>
    </section>
  );
};

export default WorkGallery;
