"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const developers = [
  {
    nama: "Qolbun Halim Hidayatulloh",
    peran: "Full Stack Developer",
    foto: "/Foto Saya Qolbun 2.jpeg",
    description: "Mengembangkan website dan sistem backend",
  },
  {
    nama: "Pratama Dikcy",
    peran: "UI/UX Designer",
    foto: "/PRATAMA DIKI.jpeg",
    description: "Desain interface dan user experience",
  },
  {
    nama: "Wafiq Ulil Abshor",
    peran: "Business Developer",
    foto: "/WAFIQ.jpeg",
    description: "Strategi bisnis dan pengembangan pasar",
  },
];

export function BagianDeveloper() {
  return (
    <section id="tim" className="py-20 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
          >
            👥 Tim Pengembang
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-serif font-bold mb-4"
          >
            Dikembangkan oleh Mahasiswa <span className="text-primary">UNESA</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Produk MAKJULO dikembangkan oleh mahasiswa S1 Teknik Informatika 
            Universitas Negeri Surabaya (UNESA) dengan dedikasi penuh untuk 
            menciptakan solusi inovatif yang berkelanjutan.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {developers.map((dev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-lg transition-all group p-6 text-center"
            >
              <div className="mb-4 inline-block rounded-full overflow-hidden w-32 h-32 mx-auto ring-4 ring-primary/10">
                <Image
                  src={dev.foto}
                  alt={dev.nama}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold font-serif mb-1">{dev.nama}</h3>
              <p className="text-primary font-medium text-sm mb-3">{dev.peran}</p>
              <p className="text-xs text-muted-foreground">{dev.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Info UNESA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12 border border-primary/20"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Universitas Negeri Surabaya (UNESA)
            </h3>
            <p className="text-muted-foreground mb-6 text-pretty">
              Program Studi S1 Teknik Informatika UNESA adalah program pendidikan 
              yang fokus pada pengembangan teknologi inovatif dengan aplikasi real-world. 
              MAKJULO adalah salah satu bukti komitmen mahasiswa UNESA dalam menciptakan 
              solusi yang tidak hanya teknologi canggih, tetapi juga berkelanjutan dan 
              berdampak positif bagi masyarakat.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <div className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                🎓 Inovasi Akademik
              </div>
              <div className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                🌱 Berkelanjutan
              </div>
              <div className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                💡 Solusi Nyata
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
