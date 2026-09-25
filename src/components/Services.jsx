import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    name: "Haircut & Fade",
    description: "Clean cuts, fades and precision finishing.",
  },
  {
    number: "02",
    name: "Beard Grooming",
    description: "Sharp beard trims and detailed shaping.",
  },
  {
    number: "03",
    name: "Braids & Styling",
    description: "Braids, styling and custom looks.",
  },
  {
    number: "04",
    name: "Hair Colour",
    description: "Colour treatments designed around your look.",
  },
  {
    number: "05",
    name: "Hair Treatment",
    description: "Hydration, regrowth and hair care services.",
  },
];

const Services = () => {
  return (
    <section className="services">
      <div className="services__container">
        <div className="services__header">
          <motion.p
            className="services__eyebrow"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            WHAT WE DO
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Built around
            <span>your look.</span>
          </motion.h2>
        </div>

        <div className="services__list">
          {services.map((service, index) => (
            <motion.div
              className="service-row"
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <span className="service-row__number">{service.number}</span>

              <div className="service-row__name">
                <h3>{service.name}</h3>
              </div>

              <p className="service-row__description">{service.description}</p>

              <span className="service-row__arrow">↗</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="services__bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span>ONAS CUTZ</span>
          <span>IKORODU · LAGOS</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
