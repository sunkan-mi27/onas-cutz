import { useState } from "react";
import { motion } from "framer-motion";

const Booking = () => {
  const [form, setForm] = useState({
    name: "",
    service: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = (e) => {
    e.preventDefault();

    const message = `Hello Onas CutZ 👋🏽

I'd like to book an appointment.

Name: ${form.name}
Service: ${form.service}
Preferred date: ${form.date}
Preferred time: ${form.time}`;

    const whatsappUrl = `https://wa.me/2349050281270?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="booking-section" id="booking">
      <div className="booking-section__header">
        <motion.p
          className="booking-section__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          MAKE IT YOURS
        </motion.p>

        <span className="booking-section__number">08</span>
      </div>

      <div className="booking-section__intro">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Your next
          <span>look starts here.</span>
        </motion.h2>

        <p>
          Choose your service, tell us when works for you, and we'll take it
          from there.
        </p>
      </div>

      <form className="booking-form" onSubmit={handleBooking}>
        <div className="booking-field">
          <label htmlFor="name">01 / NAME</label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="booking-field">
          <label htmlFor="service">02 / SERVICE</label>

          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            <option value="Haircut & Fade">Haircut & Fade</option>
            <option value="Beard Grooming">Beard Grooming</option>
            <option value="Braids & Styling">Braids & Styling</option>
            <option value="Hair Colour">Hair Colour</option>
            <option value="Hair Treatment">Hair Treatment</option>
          </select>
        </div>

        <div className="booking-field">
          <label htmlFor="date">03 / DATE</label>

          <input
            id="date"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="booking-field">
          <label htmlFor="time">04 / TIME</label>

          <input
            id="time"
            name="time"
            type="time"
            value={form.time}
            onChange={handleChange}
            required
          />
        </div>

        <motion.button
          type="submit"
          className="booking-submit"
          whileTap={{ scale: 0.98 }}
        >
          <span>BOOK ON WHATSAPP</span>
          <strong>↗</strong>
        </motion.button>
      </form>

      <div className="booking-section__contact">
        <a href="tel:+2349050281270">
          CALL <span>0905 028 1270</span>
        </a>

        <span className="booking-section__contact-line" />

        <a
          href="https://www.google.com/maps/search/?api=1&query=Onas+Cutz+Hair+Salon+Kole+bus+stop+3+Agbede+Rd+Ikorodu+Lagos"
          target="_blank"
          rel="noreferrer"
        >
          GET DIRECTIONS <span>↗</span>
        </a>
      </div>
    </section>
  );
};

export default Booking;
