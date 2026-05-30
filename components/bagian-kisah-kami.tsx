"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Zap, Users, TrendingUp } from "lucide-react";

// Data timeline kisah
const timelineKisah = [
  {
    tahun: "2018",
    judul: "Awal Mimpi",
    deskripsi: "Lahir dari ide sederhana untuk mengurangi limbah jeruk pamelo di Kabupaten Magetan",
    ikon: Leaf,
  },
  {
    tahun: "2020",
    judul: "Riset Mendalam",
    deskripsi: "Melakukan riset ekstensif tentang potensi nutrisi kulit jeruk pamelo",
    ikon: TrendingUp,
  },
  {
    tahun: "2022",
    judul: "Produksi Pertama",
    deskripsi: "Meluncurkan produk pertama MAKJULO dengan sertifikasi BPOM",
    ikon: Zap,
  },
  {
    tahun: "2024",
    judul: "Ekspansi Nasional",
    deskripsi: "Menjangkau 25+ kota di Indonesia dengan jaringan reseller",
    ikon: Users,
  },
];

// Data statistik dampak
const statistikDampak = [
  {
    angka: "500+",
    label: "Ton Limbah Terkelola",
    deskripsi: "Kulit jeruk yang diselamatkan dari tempat pembuangan",
  },
  {
    angka: "1000+",
    label: "Petani Diberdayakan",
    deskripsi: "Penghasilan tambahan untuk petani lokal Magetan",
  },
  {
    angka: "100K+",
    label: "Konsumen Sehat",
    deskripsi: "Menikmati camilan bergizi tanpa pengawet buatan",
  },
];

export function BagianKisahKami() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="kisah-kami" className="py-20 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Latar Belakang Dekoratif */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            📖 Perjalanan Kami
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Kisah <span className="text-primary">Zero Waste</span> dari Magetan
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            Dari limbah kulit jeruk yang terbuang, kami menciptakan solusi inovatif 
            yang memberdayakan petani lokal dan melindungi lingkungan.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {timelineKisah.map((item, index) => {
            const Icon = item.ikon;
            return (
              <motion.div
                key={item.tahun}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Garis penghubung */}
                {index < timelineKisah.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-3 w-6 h-1 bg-gradient-to-r from-primary to-accent opacity-20" />
                )}

                {/* Kartu Timeline */}
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-gradient-to-br from-card to-card/50 rounded-2xl p-6 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 h-full"
                >
                  {/* Tahun */}
                  <div className="text-sm font-semibold text-primary mb-3">
                    {item.tahun}
                  </div>

                  {/* Ikon */}
                  <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Judul & Deskripsi */}
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    {item.judul}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.deskripsi}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Dampak Sosial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {statistikDampak.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 rounded-2xl p-8 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <div className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-2">
                {item.angka}
              </div>
              <div className="font-semibold text-foreground mb-2">
                {item.label}
              </div>
              <p className="text-sm text-muted-foreground">
                {item.deskripsi}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Cerita Detail */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-card via-card to-card/50 rounded-3xl p-8 lg:p-12 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300"
        >
          <div className="max-w-3xl">
            <h3 className="font-serif text-3xl font-bold text-foreground mb-6">
              Misi Kami Untuk Lingkungan
            </h3>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Di Kabupaten Magetan, jutaan ton kulit jeruk pamelo terbuang setiap tahunnya. 
                Hanya 30-40% dari setiap buah yang dimanfaatkan, sementara sisanya menjadi limbah 
                organik yang merusak lingkungan. MAKJULO hadir untuk mengubah paradigma ini.
              </p>
              
              <p>
                Dengan teknologi dan inovasi, kami mengolah kulit jeruk pamelo menjadi produk 
                bernilai ekonomi tinggi. Hasilnya bukan hanya camilan lezat dan bergizi, tetapi 
                juga dampak positif untuk lingkungan dan ekonomi lokal.
              </p>

              <div className="pt-4">
                <p className="font-semibold text-foreground mb-3">Komitmen Kami:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Mengurangi limbah organik melalui pemanfaatan maksimal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Memberdayakan petani lokal dengan nilai jual tambah</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Menyediakan camilan sehat tanpa bahan kimia berbahaya</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Berkontribusi pada keberlanjutan lingkungan Indonesia</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
