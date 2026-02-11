"use client";

import { motion } from "framer-motion";

const MapSection = () => {
  return (
    <section className="w-full">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full h-[450px] md:h-[550px]"
      >
        <iframe
          src="https://www.google.com/maps?q=Av.+Ver.+Chequer+El%C3%ADas,+2813+-+Vila+Helena,+Barra+do+Pira%C3%AD+-+RJ&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>
    </section>
  );
};

export default MapSection;