"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

// Data tautan footer
const tautanCepat = [
  { nama: "Beranda", tautan: "#beranda" },
  { nama: "Tentang Kami", tautan: "#tentang" },
  { nama: "Produk", tautan: "#produk" },
  { nama: "Keunggulan", tautan: "#keunggulan" },
  { nama: "Testimoni", tautan: "#testimoni" },
  { nama: "Kontak", tautan: "#kontak" },
];

const tautanLegal = [
  { nama: "Kebijakan Privasi", tautan: "#" },
  { nama: "Syarat & Ketentuan", tautan: "#" },
  { nama: "FAQ", tautan: "#" },
];

const mediaSosial = [
  { nama: "Instagram", tautan: "#", inisial: "IG" },
  { nama: "Facebook", tautan: "#", inisial: "FB" },
  { nama: "TikTok", tautan: "#", inisial: "TT" },
  { nama: "WhatsApp", tautan: "#", inisial: "WA" },
];

export function BagianFooter() {
  const scrollKeSection = (tautan: string) => {
    const element = document.querySelector(tautan);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const tahunSekarang = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Konten Utama Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Tentang Makjulo */}
            <div className="lg:col-span-1">
              <motion.a
                href="#beranda"
                onClick={(e) => {
                  e.preventDefault();
                  scrollKeSection("#beranda");
                }}
                className="flex items-center gap-2 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-serif font-bold text-xl">
                    M
                  </span>
                </div>
                <span className="font-serif text-xl font-bold">Makjulo</span>
              </motion.a>
              <p className="text-background/70 text-sm mb-6">
                Mengubah kulit jeruk pamelo menjadi camilan lezat dan sehat. 
                Inovasi kuliner Indonesia yang ramah lingkungan.
              </p>
              {/* Media Sosial */}
              <div className="flex gap-3">
                {mediaSosial.map((sosmed) => (
                  <motion.a
                    key={sosmed.nama}
                    href={sosmed.tautan}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={sosmed.nama}
                  >
                    <span className="text-xs font-bold">{sosmed.inisial}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Tautan Cepat */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Tautan Cepat</h4>
              <ul className="space-y-3">
                {tautanCepat.map((item) => (
                  <li key={item.nama}>
                    <a
                      href={item.tautan}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollKeSection(item.tautan);
                      }}
                      className="text-background/70 hover:text-primary transition-colors text-sm"
                    >
                      {item.nama}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Informasi</h4>
              <ul className="space-y-3">
                {tautanLegal.map((item) => (
                  <li key={item.nama}>
                    <a
                      href={item.tautan}
                      className="text-background/70 hover:text-primary transition-colors text-sm"
                    >
                      {item.nama}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kontak Singkat */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Hubungi Kami</h4>
              <ul className="space-y-3 text-sm text-background/70">
                <li>
                  <span className="block text-background/50">Alamat:</span>
                  Jl. Barat No.358-360, Kleco, Maospati, Kec. Maospati, Kabupaten Magetan, Jawa Timur 63392       
                </li>
                <li>
                  <span className="block text-background/50">Telepon:</span>
                  +62 819 4505 5565
                </li>
                <li>
                  <span className="block text-background/50">Email:</span>
                  makjuloofficial@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Garis Pemisah */}
        <div className="border-t border-background/10" />

        {/* Copyright */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60 text-center sm:text-left">
            &copy; {tahunSekarang} Makjulo. Hak Cipta Dilindungi.
          </p>
          <p className="text-sm text-background/60 flex items-center gap-1">
            Dibuat dengan <Heart className="w-4 h-4 text-primary fill-primary" /> di Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
