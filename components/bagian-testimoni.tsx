"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

// Data testimoni pelanggan
const daftarTestimoni = [
  {
    id: 1,
    nama: "Sarah Wijaya",
    lokasi: "Sempol",
    foto: "S",
    rating: 5,
    ulasan:
      "Pertama kali coba Makjulo langsung jatuh cinta! Rasanya unik banget, manis tapi nggak bikin eneg. Anak-anak saya juga suka. Pasti pesan lagi!",
  },
  {
    id: 2,
    nama: "Budi Santoso",
    lokasi: "Gulun",
    foto: "B",
    rating: 5,
    ulasan:
      "Sebagai pecinta camilan sehat, Makjulo adalah jawaban. Nggak nyangka kulit jeruk bisa seenak ini. Packaging-nya juga bagus, cocok untuk oleh-oleh.",
  },
  {
    id: 3,
    nama: "Dewi Anggraini",
    lokasi: "Maospati",
    foto: "D",
    rating: 5,
    ulasan:
      "Sudah langganan 2 tahun! Favorit saya yang rasa pedas. Cocok untuk teman nonton atau ngemil sore. Kualitasnya selalu konsisten.",
  },
  {
    id: 4,
    nama: "Ahmad Fauzi",
    lokasi: "Madiun",
    foto: "A",
    rating: 4,
    ulasan:
      "Produk lokal yang patut diapresiasi! Inovatif dan lezat. Saya suka konsep zero waste-nya. Semoga makin sukses dan merambah ke luar negeri.",
  },
  {
    id: 5,
    nama: "Rina Puspita",
    lokasi: "Ngawi",
    foto: "R",
    rating: 5,
    ulasan:
      "Gift untuk keluarga dan mereka semua suka! Awalnya ragu karena belum pernah dengar makanan dari kulit jeruk, tapi setelah coba langsung ketagihan.",
  },
];

export function BagianTestimoni() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [indeksAktif, setIndeksAktif] = useState(0);

  const sebelumnya = () => {
    setIndeksAktif((prev) =>
      prev === 0 ? daftarTestimoni.length - 1 : prev - 1
    );
  };

  const selanjutnya = () => {
    setIndeksAktif((prev) =>
      prev === daftarTestimoni.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="testimoni" className="py-20 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Testimoni
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Apa Kata <span className="text-primary">Pelanggan Kami</span>
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            Ribuan pelanggan telah merasakan kelezatan Maklojo. Inilah cerita mereka.
          </p>
        </motion.div>

        {/* Kartu Testimoni Utama */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-lg relative overflow-hidden">
            {/* Ikon Quote */}
            <Quote className="absolute top-6 right-6 w-16 h-16 text-primary/10" />

            <div className="relative">
              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < daftarTestimoni[indeksAktif].rating
                        ? "fill-primary text-primary"
                        : "text-muted"
                    }`}
                  />
                ))}
              </div>

              {/* Ulasan */}
              <motion.p
                key={indeksAktif}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-xl lg:text-2xl text-foreground mb-8 leading-relaxed text-pretty"
              >
                &ldquo;{daftarTestimoni[indeksAktif].ulasan}&rdquo;
              </motion.p>

              {/* Info Pelanggan */}
              <motion.div
                key={`info-${indeksAktif}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                  {daftarTestimoni[indeksAktif].foto}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {daftarTestimoni[indeksAktif].nama}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {daftarTestimoni[indeksAktif].lokasi}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigasi */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={sebelumnya}
              className="rounded-full border-primary text-primary hover:bg-primary/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex items-center gap-2">
              {daftarTestimoni.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setIndeksAktif(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === indeksAktif
                      ? "bg-primary w-8"
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={selanjutnya}
              className="rounded-full border-primary text-primary hover:bg-primary/10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
