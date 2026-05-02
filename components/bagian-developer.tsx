"use client";

import { motion } from "framer-motion";

const developers = [
  {
    nama: "Developer 1",
    peran: "Frontend Developer",
    foto: "/placeholder-user.jpg",
  },
  {
    nama: "Developer 2",
    peran: "Backend Developer",
    foto: "/PRATAMA DIKI.jpeg",
  },
  {
    nama: "Developer 3",
    peran: "UI/UX Designer",
    foto: "/WAFIQ.jpeg",
  },
];

export function Developer() {
  return (
    <section id="developer" className="py-20 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-serif font-bold mb-4"
          >
            Tim Pengembang Kami
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Mengenal lebih dekat sosok-sosok hebat di balik terciptanya website ini.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {developers.map((dev, index) => (
            <motion.div
              key={dev.nama}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-all group p-6 text-center"
            >
              <div className="mb-4 inline-block rounded-full overflow-hidden w-32 h-32 mx-auto ring-4 ring-primary/10">
                <img
                  src={dev.foto}
                  alt={dev.nama}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold font-serif mb-1">{dev.nama}</h3>
              <p className="text-primary font-medium text-sm">{dev.peran}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
