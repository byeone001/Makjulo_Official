"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone } from "lucide-react";

export function BagianBanner() {
  return (
    <section className="w-full overflow-hidden">
      {/* Garis pembatas atas dengan warna brand */}
      <div className="h-1.5 w-full bg-gradient-to-r from-primary via-accent to-primary" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full"
      >
        {/* Banner gambar utama */}
        <div className="relative w-full aspect-[5/2] max-h-[420px] shadow-2xl">
          <Image
            src="/banner-makjulo.png"
            alt="Banner Makjulo – Manisan Kulit Jeruk Pamelo"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />

          {/* Overlay subtle gradient bawah untuk transisi halus */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/60 to-transparent" />
        </div>

        {/* Label kontak mengambang di bawah banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg text-sm font-semibold"
        >
          <Phone className="w-4 h-4 flex-shrink-0" />
          <span>Menerima Pesanan: +62 000000000</span>
        </motion.div>
      </motion.div>

      {/* Garis pembatas bawah */}
      <div className="h-1.5 w-full bg-gradient-to-r from-accent via-primary to-accent" />
    </section>
  );
}
