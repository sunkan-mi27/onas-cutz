import { motion } from "framer-motion";

const Location = () => {
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Onas+Cutz+Hair+Salon%2C+Kole+bus+stop%2C+3+Agbede+Rd%2C+Ikorodu%2C+Lagos";

  return (
    <section className="location-section">
      <div className="location-section__header">
        <motion.p
          className="location-section__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          FIND US
        </motion.p>

        <span className="location-section__number">09</span>
      </div>

      <div className="location-section__main">
        <motion.div
          className="location-section__visual"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="location-section__map">
            <span className="location-section__map-line line-one" />
            <span className="location-section__map-line line-two" />
            <span className="location-section__map-line line-three" />

            <div className="location-section__pin">
              <span />
            </div>

            <div className="location-section__map-label">ONAS CUTZ</div>
          </div>

          <span className="location-section__coordinates">
            6.6640° N / 3.4828° E
          </span>
        </motion.div>

        <div className="location-section__content">
          <motion.p
            className="location-section__small"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            IKORODU / LAGOS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Come
            <span>through.</span>
          </motion.h2>

          <motion.p
            className="location-section__address"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
          >
            Kole bus stop,
            <br />
            3 Agbede Rd,
            <br />
            Ikorodu, Lagos.
          </motion.p>

          <motion.a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="location-section__directions"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            GET DIRECTIONS
            <span>↗</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Location;
