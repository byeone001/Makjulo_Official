"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Daftar menu navigasi
const daftarMenu = [
  { nama: "Beranda", tautan: "#beranda" },
  { nama: "Tentang", tautan: "#tentang" },
  { nama: "Produk", tautan: "#produk" },
  { nama: "Keunggulan", tautan: "#keunggulan" },
  { nama: "Testimoni", tautan: "#testimoni" },
  { nama: "Kontak", tautan: "#kontak" },
];

export function Navigasi() {
  const [menuTerbuka, setMenuTerbuka] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Deteksi scroll untuk mengubah tampilan navigasi
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi untuk scroll ke section
  const scrollKeSection = (tautan: string) => {
    const element = document.querySelector(tautan);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuTerbuka(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.a
            href="#beranda"
            onClick={(e) => {
              e.preventDefault();
              scrollKeSection("#beranda");
            }}
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-xl">
                M
              </span>
            </div>
            <span className="font-serif text-xl font-bold text-foreground">
              Maklojo
            </span>
          </motion.a>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {daftarMenu.map((item) => (
              <motion.a
                key={item.nama}
                href={item.tautan}
                onClick={(e) => {
                  e.preventDefault();
                  scrollKeSection(item.tautan);
                }}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.nama}
              </motion.a>
            ))}
          </div>

          {/* Tombol CTA Desktop */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollKeSection("#kontak")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Pesan Sekarang
            </Button>
          </div>

          {/* Tombol Menu Mobile */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMenuTerbuka(!menuTerbuka)}
            aria-label="Toggle menu"
          >
            {menuTerbuka ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {menuTerbuka && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="px-4 py-4 space-y-2">
              {daftarMenu.map((item) => (
                <motion.a
                  key={item.nama}
                  href={item.tautan}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollKeSection(item.tautan);
                  }}
                  className="block py-3 px-4 text-foreground hover:bg-muted rounded-lg transition-colors"
                  whileTap={{ scale: 0.98 }}
                >
                  {item.nama}
                </motion.a>
              ))}
              <div className="pt-4">
                <Button
                  onClick={() => scrollKeSection("#kontak")}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Pesan Sekarang
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
