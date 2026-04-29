"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Leaf, 
  Heart, 
  Shield, 
  Zap, 
  Award, 
  Recycle 
} from "lucide-react";

// Data keunggulan produk
const daftarKeunggulan = [
  {
    ikon: Leaf,
    judul: "100% Alami",
    deskripsi: "Tanpa pengawet, pewarna, atau perasa buatan. Hanya kebaikan alam.",
  },
  {
    ikon: Heart,
    judul: "Kaya Antioksidan",
    deskripsi: "Kulit jeruk pamelo mengandung antioksidan tinggi untuk kesehatan tubuh.",
  },
  {
    ikon: Shield,
    judul: "Aman BPOM",
    deskripsi: "Produk telah tersertifikasi dan terdaftar resmi di BPOM RI.",
  },
  {
    ikon: Zap,
    judul: "Energi Sehat",
    deskripsi: "Camilan berenergi tanpa rasa bersalah untuk aktivitas sehari-hari.",
  },
  {
    ikon: Award,
    judul: "Kualitas Premium",
    deskripsi: "Dipilih dari jeruk pamelo terbaik dengan proses produksi higienis.",
  },
  {
    ikon: Recycle,
    judul: "Ramah Lingkungan",
    deskripsi: "Mendukung zero waste dengan memanfaatkan kulit jeruk yang terbuang.",
  },
];

// Data pencapaian
const pencapaian = [
  { angka: "50K+", label: "Produk Terjual" },
  { angka: "100+", label: "Reseller Aktif" },
  { angka: "25+", label: "Kota Jangkauan" },
  { angka: "4.9", label: "Rating Pelanggan" },
];

export function BagianKeunggulan() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="keunggulan" className="py-20 lg:py-32 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Mengapa Makjulo
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Keunggulan <span className="text-primary">Produk Kami</span>
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            Makjulo bukan sekadar manisan biasa. Kami menghadirkan produk yang 
            sehat, lezat, dan bertanggung jawab terhadap lingkungan.
          </p>
        </motion.div>

        {/* Grid Keunggulan */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {daftarKeunggulan.map((item, index) => (
            <motion.div
              key={item.judul}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-card rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.ikon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                {item.judul}
              </h3>
              <p className="text-muted-foreground">
                {item.deskripsi}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pencapaian */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {pencapaian.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="font-serif text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
                  {item.angka}
                </div>
                <div className="text-primary-foreground/80 text-sm lg:text-base">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
