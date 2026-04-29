"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Recycle, Sparkles } from "lucide-react";

// Nilai-nilai perusahaan
const nilaiPerusahaan = [
  {
    ikon: Heart,
    judul: "Cinta Lokal",
    deskripsi:
      "Mendukung petani lokal dan menggunakan jeruk pamelo terbaik dari Indonesia.",
  },
  {
    ikon: Recycle,
    judul: "Ramah Lingkungan",
    deskripsi:
      "Mengubah limbah kulit jeruk menjadi produk bernilai tinggi untuk keberlanjutan.",
  },
  {
    ikon: Sparkles,
    judul: "Inovasi Rasa",
    deskripsi:
      "Menciptakan varian rasa unik yang memadukan tradisi dengan selera modern.",
  },
];

export function BagianTentang() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tentang" className="py-20 lg:py-32 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Gambar/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">🍊</div>
                  <p className="font-serif text-xl text-foreground font-medium">
                    Dari Kulit Jadi Kuliner
                  </p>
                </div>
              </div>

              {/* Dekorasi */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl" />
            </div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-card p-4 rounded-xl shadow-lg"
            >
              <div className="text-center">
                <div className="font-serif text-3xl font-bold text-primary">
                  5+
                </div>
                <div className="text-sm text-muted-foreground">
                  Tahun Pengalaman
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Konten */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Tentang Kami
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Mengubah Limbah Menjadi <span className="text-primary">Cita Rasa</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6 text-pretty">
              Makjulo lahir dari mimpi sederhana: mengurangi limbah kulit jeruk pamelo 
              yang melimpah di Indonesia. Kami percaya bahwa setiap bagian dari alam 
              memiliki potensi untuk menjadi sesuatu yang bernilai.
            </p>

            <p className="text-muted-foreground mb-8 text-pretty">
              Dengan resep turun-temurun yang kami padukan dengan teknologi modern, 
              kulit jeruk pamelo yang biasa dibuang kini berubah menjadi camilan 
              premium yang tidak hanya lezat, tapi juga kaya akan manfaat kesehatan.
            </p>

            {/* Nilai-nilai */}
            <div className="space-y-4">
              {nilaiPerusahaan.map((nilai, index) => (
                <motion.div
                  key={nilai.judul}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex gap-4 p-4 bg-card rounded-xl"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <nilai.ikon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {nilai.judul}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {nilai.deskripsi}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
