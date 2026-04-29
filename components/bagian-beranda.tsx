"use client";

import { motion } from "framer-motion";
import { ArrowDown, Leaf, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

// Data statistik perusahaan
const statistik = [
  {
    ikon: Users,
    angka: "10K+",
    label: "Pelanggan Puas",
  },
  {
    ikon: Award,
    angka: "15+",
    label: "Penghargaan",
  },
  {
    ikon: Leaf,
    angka: "100%",
    label: "Bahan Alami",
  },
];

export function BagianBeranda() {
  const scrollKeSection = (tautan: string) => {
    const element = document.querySelector(tautan);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Latar Belakang Dekoratif */}
      <div className="absolute inset-0 -z-10">
        {/* Blob oranye kanan atas */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />
        {/* Blob biru kiri bawah */}
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
        {/* Blob oranye tengah samar */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Konten Teks */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-accent/15 text-accent rounded-full text-sm font-semibold mb-6 border border-accent/30"
            >
              🍊 Inovasi Kuliner Indonesia
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance"
            >
              Nikmatnya{" "}
              <span className="text-primary">Kulit Jeruk Pamelo</span> dalam
              Setiap Gigitan
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 text-pretty"
            >
              Makjulo mengubah kulit jeruk pamelo yang biasa terbuang menjadi
              camilan lezat, sehat, dan ramah lingkungan. Rasakan cita rasa
              autentik dengan sentuhan modern.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={() => scrollKeSection("#produk")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              >
                Lihat Produk
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollKeSection("#tentang")}
                className="border-primary text-primary hover:bg-primary/10"
              >
                Pelajari Lebih Lanjut
              </Button>
            </motion.div>

            {/* Statistik */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary/20"
            >
              {statistik.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <item.ikon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-serif text-2xl font-bold text-foreground">
                    {item.angka}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Ilustrasi Jeruk Pamelo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Lingkaran latar */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full"
              />

              {/* Lingkaran utama */}
              <div className="absolute inset-8 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 rounded-full flex items-center justify-center">
                <div className="text-center p-8">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl"
                  >
                    <span className="text-6xl">🍊</span>
                  </motion.div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    Jeruk Pamelo Asli
                  </h3>
                  <p className="text-sm font-medium text-accent">
                    100% Bahan Alami
                  </p>
                </div>
              </div>

              {/* Elemen mengambang */}
              {[
                { posisi: "top-0 left-1/4", delay: 0 },
                { posisi: "top-1/4 right-0", delay: 0.5 },
                { posisi: "bottom-1/4 left-0", delay: 1 },
                { posisi: "bottom-0 right-1/4", delay: 1.5 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: item.delay,
                  }}
                  className={`absolute ${item.posisi} w-12 h-12 bg-card rounded-full shadow-md flex items-center justify-center border border-accent/20`}
                >
                  <Leaf className="w-6 h-6 text-accent" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Indikator Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollKeSection("#tentang")}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm mb-2">Gulir ke bawah</span>
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
